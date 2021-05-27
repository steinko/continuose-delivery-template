import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from "./Cluster"
import * as gcp from "@pulumi/gcp";
import {nameSpace} from "./NameSpace"


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
},{provider: clusterProvider});

export const deploymentName = deployment.metadata.name;

export const service = new k8s.core.v1.Service(name, 
   {
	  metadata: { 
		 labels: appLabels,
          namespace: nameSpaceName ,
          name:name,
          annotations: { 'external-dns.alpha.kubernetes.io/hostname':'staging.steinko.org'}
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
export const servicePublicIP = service.status.loadBalancer.ingress[0].ip


const zone = new gcp.dns.ManagedZone("steinko-org", {dnsName: "steinko.org.", project: 'springboot22', name:'staging-zone'});

const serviceRecordSet = new gcp.dns.RecordSet("serviceRecordSet", {
    name: "staging.steinko.org.",
    type: "A",
    ttl: 300,
    project: 'springboot22',
    managedZone: zone.name,
     rrdatas: [servicePublicIP],
});


