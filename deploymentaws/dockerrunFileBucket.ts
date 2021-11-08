import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const dockerrunFileBucket = new aws.s3.Bucket("dokcerrun-file-bucket", {bucket:"dokcerrun-file-bucket"});