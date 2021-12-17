import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"
import * as pulumi from "@pulumi/pulumi";
import {applicationName} from "./configuration"


it('should exist a application with name', async () => {
	
     console.log(applicationName)
     const client = new ElasticBeanstalkClient( {region: "eu-north-1" })
     const input = {}
     const command = new DescribeApplicationsCommand(input);
     try {
             const applications = await client.send(command);
           } catch (error) {
	
	             const { requestId, cfId, extendedRequestId } = error.$metadata;
                 console.log({ requestId, cfId, extendedRequestId });

	       } 

     let found = false
     applications.Applications.forEach(application) {
               if (application.ApplicationName == applicationName ) { found = true}
     }
     expect(found ).toBeTruthy(); 
           
})
