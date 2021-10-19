import * as aws from "@pulumi/aws";

export const elkUser = new aws.iam.User("elk-user", {name:"ElkUser"});