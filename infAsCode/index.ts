import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from "./Cluster"
import {nameSpace} from "./NameSpace"
import * as pulumi from "@pulumi/pulumi";


const name = "hello-world"

export const nameSpaceName =  nameSpace.metadata.name;
export const appLabels = { appClass: name }


export const deployment = new k8s.apps.v1.Deployment(name, {
	metadata: { labels: appLabels,
                namespace: nameSpaceName 
              },
    spec: {
        replicas: 1,
         selector: { matchLabels: appLabels  },
        template: {
	       metadata: {
                    labels: appLabels,
                },
            
            spec: { 
	                     
	           containers: [{ name: name,
                              image: "docker.io/steinko/gradle-ci-cd",
                               ports: [{ name: "http", containerPort: 8080 }],
                              livenessProbe:{ httpGet:{path:'/actuator/health/liveness',
                                                       port: 8080},
                                              initialDelaySeconds:5,
                                              timeoutSeconds: 1,
                                              periodSeconds: 10,
                                              failureThreshold: 3 
                                            } ,
                                readinessProbe:{ httpGet:{path:'/actuator/health/readiness',
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
},{provider: clusterProvider});appLabels



export const deploymentName = deployment.metadata.name;
const aServiceName = name + "-service"
export const service = new k8s.core.v1.Service(aServiceName, 
   {
	  metadata: { 
		 labels: appLabels,
          namespace: nameSpaceName ,
          name:name,
      },
      spec: { 
	           type: 'LoadBalancer',
               ports: [{port: 80, targetPort: 8080, protocol:'TCP' } ],
	           selector: appLabels, 
             } ,
         }, 
        {provider: clusterProvider} 
  ) 

export const serviceName = service.metadata.name;
export const externalIpAdress = service.status.loadBalancer.ingress[0].ip


  externalIpAdress.apply(ipAdress => {
	    var fs = require('fs');
        fs.appendFile('../acceptanceTest/app/src/test/java/org/steinko/helloworld/externalIpAdress.txt', ipAdress,  (err:any) => {
           if (err) throw err;
           console.log('Saved!');
        })
   })




