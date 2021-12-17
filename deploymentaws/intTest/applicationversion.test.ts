import { ElasticBeanstalkClient, DescribeApplicationVersionsCommand  } from "@aws-sdk/client-elastic-beanstalk"
import {applicationName} from "./configuration"


it('should exist a application version in the cloud', async () => {
     const client = new ElasticBeanstalkClient( {region: "eu-north-1" })
     const input = {ApplicationName: applicationName}
     const command = new DescribeApplicationVersionsCommand(input);
     const applicationversions = await client.send(command);
     let found = false
     applicationversions.ApplicationVersions.forEach(function (applicationversion) {
       if (applicationversion.Description == "application version") { found = true}
     })
    expect(found ).toBeTruthy();
})

it('should exist a application on the application version in the cloud', async () => {
     const client = new ElasticBeanstalkClient( {region: "eu-north-1" })
     const input = {ApplicationName: applicationName}
     const command = new DescribeApplicationVersionsCommand(input);
     const applicationversions = await client.send(command);
     let found = false
     applicationversions.ApplicationVersions.forEach(function (applicationversion) {
       if (applicationversion.ApplicationName == applicationName) { found = true}
     })
    expect(found ).toBeTruthy();
})
