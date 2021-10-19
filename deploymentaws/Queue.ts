import * as aws from "@pulumi/aws";

export const logQueue = new aws.sqs.Queue("logQueue", { name: "logQueue"});