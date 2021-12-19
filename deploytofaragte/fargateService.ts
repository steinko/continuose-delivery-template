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
                                            portMappings: [ frontendLb ]
                                         
                                       },
                           
                        },
})