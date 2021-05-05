import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import {clusterProvider} from "./Cluster"


export const nameSpace =  new k8s.core.v1.Namespace("staging",undefined,{provider: clusterProvider})
export const nameSpaceName =  nameSpace.metadata.name;


let config = new pulumi.Config();
let dockerName = config.require("dokcerName")
let dockerPassword = config.require("dokcerPassword")
let registry = config.require("registry")


    // Put the username password into dockerconfigjson format.
    let base64JsonEncodedCredentials : pulumi.Output<string> = 
        pulumi.all([dockerName, dockerPassword, registry])
        .apply(([username, password, registry]) => {
            const base64Credentials = Buffer.from(username + ':' + password).toString('base64')
            const json =  `{"auths":{"${registry}":{"auth":"${base64Credentials}"}}}`
            console.log(json)
            return Buffer.from(json).toString('base64')
        })

const dockeSeceret = new k8s.core.v1.Secret('dokcerl-secret', {
        metadata: {
            name: 'docker--secret',
            namespace: nameSpaceName
        },
        type: 'kubernetes.io/dockerconfigjson',
        data: {
            ".dockerconfigjson": base64JsonEncodedCredentials,
        },
    }, { provider: clusterProvider })
		


export const deployment = new k8s.apps.v1.Deployment("hello-world-deployment", {
    spec: {
        replicas: 1,
         selector: { matchLabels: {app: "hello-world"} },
        template: {
            metadata: { labels: {app: "hello-world"},
                         namespace: nameSpaceName },
            spec: { 
	                     
	           containers: [{ name: "hello-world-image",
                              image: "docker.io/steinko/gradle-ci-cd",
                              livenessProbe:{ httpGet:{path:'/actuator/health/liveness',
                                                       port: 8080},
                                              initialDelaySeconds:5,
                                              timeoutSeconds: 1,
                                              periodSeconds: 10,
                                              failureThreshold: 3 
                                            } 
                            }],
            }
        }
    }
},{provider: clusterProvider});


export const service = new k8s.core.v1.Service('service', 
{metadata: { name: 'hello-world-service',
             namespace: nameSpaceName },
spec:{ selector: {app: 'hello-world' } ,
        ports: [{port: 8080, targetPort: 8080 } ],
        type: 'LoadBalancer'} }, {provider: clusterProvider} ) 

const serviceAccount = new k8s.core.v1.ServiceAccount('service-account',
                            {automountServiceAccountToken:false},
                            {provider: clusterProvider});
const hostname = "*" + '.steinko.com'
const ingress = new k8s.networking.v1beta1.Ingress('ingress', 
          { 
	        metadata: {
		                name: 'ingress',
                        namespace: nameSpaceName
	                  }, 
	        spec: {            
                    rules:[{host: hostname}],
                    backend:{ serviceName: service.metadata.name, servicePort:8080}
                            }
                  } ,{provider: clusterProvider} )

 







