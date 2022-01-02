import * as awsx from "@pulumi/awsx";
export const backendLb = new awsx.lb.ApplicationListener("backend-loadbalance", { port: 80 });
export const frontendLb = new awsx.lb.ApplicationListener("frontend-loadbalance", { port: 80, protocol:"HTTP" });
 export const service = new awsx.ecs.FargateService("backend", {
    taskDefinitionArgs: {   
                             container: {  
	                                       image: 'steinko/helloworld-backend',
                                            portMappings: [ backendLb ]
                                         
                                       },
                           
                        },
})

 export const frontEndService = new awsx.ecs.FargateService("frontend", {
    taskDefinitionArgs: {   
                             container: {  
	                                       image: 'steinko/helloworld-frontend',
                                            portMappings: [ frontendLb ],
                                            environment : [
                                                              { "name":"REACT_APP_BACKEND_URL" , "value": backendLb.endpoint.hostname},
                                                              
                                                           ]
                  
                                            
                                       },
                           
                        },
})
   export const elasticAgent = new awsx.ecs.FargateService("elastic-aget", {
    taskDefinitionArgs: {   
                             container: {  
	                                       image: 'docker.elastic.co/beats/elastic-agent:7.16.2-amd64',
                                           environment : [
                                                              { "name":"FLEET_ENROLL" , "value": "1" },
                                                              { "name" : "FLEET_URL", "value" : "https://7025c554ae79477bbe284a5724162982.fleet.us-east4.gcp.elastic-cloud.com:8220" },
                                                              { "name":"FLEET_ENROLLMENT_TOKEN" , "value": "1NUJCMEczNEJmVGphTGk1LXI4QUE6MWUwZnFDMGtTenlILW04ejRJSGdvdw==" },
                                                           ]
                  
                                       },
                           
                        },
})