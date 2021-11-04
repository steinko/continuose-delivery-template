import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
// const { ElasticBeanstalkClient, DescribeApplicationsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import


it('should exist a bucket in the cloud', async () => {
     const client = new ElasticBeanstalkClient( {region: "eu-north-1" })
     const input = {}
     const command = new DescribeApplicationsCommand(input);
     const applications = await client.send(command);
     let found = false
     applications.Applications.forEach(function (application) {
	   console.log(application.ApplicationName)
       if (application.ApplicationName == "application") { found = true}
     })
    expect(found ).toBeTruthy();
})
