import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from "./Cluster"

const name = "hello-world"
export const nameSpace =  new k8s.core.v1.Namespace('staging',{},{provider: clusterProvider})
export const nameSpaceName =  nameSpace.metadata.name;



const appLabels = { appClass: name }
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
},{provider: clusterProvider});

export const deploymentName = deployment.metadata.name;

export const service = new k8s.core.v1.Service(name, 
   {
	  metadata: { 
		 labels: appLabels,
         namespace: nameSpaceName 
      },
      spec: { 
	           type: 'LoadBalancer',
               ports: [{port: 8080, targetPort: "http" } ],
	           selector: appLabels 
             } ,
         }, 
        {provider: clusterProvider} 
  ) 
export const serviceName = service.metadata.name;
export const servicePublicIP = service.status.loadBalancer.ingress[0].ip


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

 







