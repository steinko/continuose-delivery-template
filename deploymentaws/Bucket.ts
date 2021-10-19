import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const logBucket = new aws.s3.Bucket("log-bucket", {});