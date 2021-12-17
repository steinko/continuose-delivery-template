import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

let config = new pulumi.Config();
let applicationName = config.require("application-name");

export const application = new aws.elasticbeanstalk.Application(applicationName, { name: applicationName,
    description: "application for gitlab template" } );