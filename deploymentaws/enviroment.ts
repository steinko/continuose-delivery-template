import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import {application} from "./application"
import {applicationVersion} from "./applicationVersion"

let config = new pulumi.Config();
let envName = config.require("enviroment-name");

export const enviroment = new aws.elasticbeanstalk.Environment("enviroment", {
    application: application,
    solutionStackName: "64bit Amazon Linux 2 v3.4.8 running Docker",
    name: envName,
    cnamePrefix: envName,
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