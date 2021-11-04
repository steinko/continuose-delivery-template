import * as aws from "@pulumi/aws";

export const user = new aws.iam.User("aws-user", {name:"awsUser"});