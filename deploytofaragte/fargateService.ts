import * as awsx from "@pulumi/awsx";


import {role} from "./role"
const region = "eu-north-1"
export const backendLb = new awsx.lb.ApplicationListener("backend-loadbalance", { port: 80 });
export const frontendLb = new awsx.lb.ApplicationListener("frontend-loadbalance", { port: 80, protocol:"HTTP" });
 export const service = new awsx.ecs.FargateService("backend", {
    taskDefinitionArgs: { 
	                      taskRole: role,  
                          containers: {  
                                         otelCollector: {   
	                                                         image: "docker.io/amazon/aws-otel-collector",
                                                             essential: true,
                                                             logConfiguration: {
                                                                                   logDriver: "awslogs",
                                                                                   options: {
                                                                                               "awslogs-group": "/ecs/ecs-aws-otel-sidecar-collector",
                                                                                               "awslogs-region": region,
                                                                                               "awslogs-stream-prefix": "ecs",
                                                                                               "awslogs-create-group": "true"
                                                                                            }
                                                                               }
                                                          },
                                      
	
	                                     logRuter: {          
                                         
                                           image: "docker.io/amazon/aws-for-fluent-bit:latest",
                                           essential: true,
                                           firelensConfiguration: {
                                                                    "type": "fluentbit",
                                                                    "options":{
                                                                                 "enable-ecs-log-metadata":"true"
                                                                               }
                                                                   },
                                           logConfiguration: {
                                                                logDriver: "awslogs",
                                                                options: {
                                                                            "awslogs-create-group": "true",
                                                                            "awslogs-group": "bakend-log",
                                                                            "awslogs-region": region,
                                                                            "awslogs-stream-prefix": "fluentbit"
                                                                         }
                                                              },
                                            memoryReservation: 50
                                            },

                                           backend: { 
	                                                   image: 'steinko/helloworld-backend',
                                                       portMappings: [ backendLb ],
                                                       logConfiguration: {
	                                                                        logDriver: "awsfirelens",
                                                                            options: { 
	                                                                                     "Name":"es",
                                                                                         "match":"*",
                                                                                         "Port": "9200",
                                                                                         "Host":"efk-elastic",
                                                                                         "Logstash_format":"on",
                                                                                         "Replace_dots" :"on",
                                                                                         "Retry_limit":"false",
                                                                                         "Type":"doc",
                                                                                         "Suppress_Type_Name": "On",
                                                                                         "Cloud_ID": "My_deployment:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDBlN2Q3MTQzOWQwOTQ2MzM5YjMxNjkzZTk5ZTAxOTUzJDk5YTU0YzQ4MzdlMjQwNDZiMGZmNGQ4NzBiMWE2YmU1",
                                                                                         "Cloud_Auth":"elastic:Xg2zrLPqEID1ECpIsbvWlHJp",
                                                                                         "Index": "backend-index",
                                                                                         "tls": "On",
                                                                                         "tls.verify": "Off"
                                                                                         
                                                                                     }
                                                                        },
                                                       dependsOn: [
                                                                      {
                                                                           containerName: "otelCollector",
                                                                           condition: "START"
                                                                      }
                                                                 ]
                                                     }   
                                                
                                    },                
                                  
                        },
})

 export const frontEndService = new awsx.ecs.FargateService("frontend", {
    taskDefinitionArgs: {   taskRole: role,
                             containers: {               
	                                           logRuter: {          
                                                             image: "docker.io/amazon/aws-for-fluent-bit:latest",
                                                             essential: true,
                                                             firelensConfiguration: {
                                                                                        "type": "fluentbit",
                                                                                        "options": {
                                                                                                       "enable-ecs-log-metadata":"true"
                                                                                                   }
                                                                                     },
                                                               logConfiguration: {
                                                                                     logDriver: "awslogs",
                                                                                     options: {
                                                                                                  "awslogs-create-group": "true",
                                                                                                  "awslogs-group": "frontend-log",
                                                                                                  "awslogs-region": region,
                                                                                                  "awslogs-stream-prefix": "fluentbit"
                                                                       
                                                                                              }
                                                                                   },
                                                            memoryReservation: 50
                                                       },
                                 
	                                               frontend: {  
	                                                     image: 'steinko/helloworld-frontend',
                                                         portMappings: [ frontendLb ],
                                                         environment : [
                                                                            { "name":"REACT_APP_BACKEND_URL" , "value": backendLb.endpoint.hostname},
                                                              
                                                                         ],
                                                         logConfiguration:{
	                                                             logDriver: "awsfirelens",
                                                                    options: { 
	                                                                                     "Name":"es",
                                                                                         "match":"*",
                                                                                         "Port": "9200",
                                                                                         "Host":"efk-elastic",
                                                                                         "Logstash_format":"on",
                                                                                         "Replace_dots" :"on",
                                                                                         "Retry_limit":"false",
                                                                                         "Type":"doc",
                                                                                         "Suppress_Type_Name": "On",
                                                                                         "Cloud_ID": "My_deployment:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDBlN2Q3MTQzOWQwOTQ2MzM5YjMxNjkzZTk5ZTAxOTUzJDk5YTU0YzQ4MzdlMjQwNDZiMGZmNGQ4NzBiMWE2YmU1",
                                                                                         "Cloud_Auth":"elastic:Xg2zrLPqEID1ECpIsbvWlHJp",
                                                                                         "Index": "frontend-index",
                                                                                         "tls": "On",
                                                                                         "tls.verify": "Off"
                                                                                 
                                                                                       }
                                                                      },
                                                          memoryReservation: 100
                                                                }
                                                         },
                           
                        },
})
   