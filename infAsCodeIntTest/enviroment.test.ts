import { ElasticBeanstalkClient, DescribeEnvironmentsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
// const { ElasticBeanstalkClient, DescribeEnvironmentsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import

it('should exist a bucket in the cloud', async () => {
	
   const client = new ElasticBeanstalkClient({region: "eu-north-1" });
   const input = {   
	                 ApplicationName: "application"
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
