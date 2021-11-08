import * as aws from "@pulumi/aws";
import {application} from "./Application"
import {applicationVersion} from "./ApplicationVersion"

export const enviroment = new aws.elasticbeanstalk.Environment("enviroment", {
    application: application,
    solutionStackName: "64bit Amazon Linux 2 v3.4.8 running Docker",
    name: "dev-app",
    cnamePrefix: "dev-app",
    version: applicationVersion,
    settings: [
        {
            namespace: "aws:autoscaling:launchconfiguration",
            name: "IamInstanceProfile",
            value: "aws-elasticbeanstalk-ec2-role",
        },
       {
            namespace: "aws:elasticbeanstalk:cloudwatch:logs",
            name: "StreamLogs",
            value: "True",
        },
        {
            namespace: "aws:elasticbeanstalk:cloudwatch:logs:health",
            name: "HealthStreamingEnabled",
            value: "True",
        }


     ]
})