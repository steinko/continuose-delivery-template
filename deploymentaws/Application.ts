import * as aws from "@pulumi/aws";

export const application = new aws.elasticbeanstalk.Application("application", { name: 'application',
    description: "application for gitlab template" } );