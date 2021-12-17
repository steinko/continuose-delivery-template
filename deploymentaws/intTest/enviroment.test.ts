import { ElasticBeanstalkClient, DescribeEnvironmentsCommand } from "@aws-sdk/client-elastic-beanstalk"; 
import * as pulumi from "@pulumi/pulumi";
import {applicationName} from "./configuration"

it('should exist a enviroment in the cloud', async () => {
	
    console.log(applicationName)
	
   const client = new ElasticBeanstalkClient({region: "eu-north-1" });
   const input = {   
	                 ApplicationName: applicationName
                  }
   const command = new DescribeEnvironmentsCommand(input);
   const response = await client.send(command);
   let found = false
       response.Environments.forEach(function (enviroment) {
	   console.log (enviroment.EnvironmentName)
       if (enviroment.EnvironmentName == "dev-app") { found = true}
     })
    expect(found ).toBeTruthy();
})
