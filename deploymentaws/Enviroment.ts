import * as aws from "@pulumi/aws";
import {application} from "./Application"
import {applicationVersion} from "./ApplicationVersion"

export const enviroment = new aws.elasticbeanstalk.Environment("enviroment", {
    application: application,
    solutionStackName: "64bit Amazon Linux 2 v3.2.4 running Corretto 11",
    name: "dev-app",
    cnamePrefix: "dev-app",
    version: applicationVersion,
    settings: [
        {
            namespace: "aws:autoscaling:launchconfiguration",
            name: "IamInstanceProfile",
            value: "aws-elasticbeanstalk-ec2-role",
        }
     ]
})