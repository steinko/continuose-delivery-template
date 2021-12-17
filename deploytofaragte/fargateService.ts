import * as awsx from "@pulumi/awsx";
const lb = new awsx.lb.ApplicationListener("nginx", { port: 80 });
 export const service = new awsx.ecs.FargateService("backend", {
	tags: {
        Name: "main",
    },
    taskDefinitionArgs: {   
                             container: {  
	                                       image: 'steinko/helloworld-backend',
                                            portMappings: [ lb ]
                                         
                                       },
                           
                        },
})