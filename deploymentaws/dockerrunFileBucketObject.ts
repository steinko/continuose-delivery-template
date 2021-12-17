import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import {dockerrunFileBucket} from "./dockerrunFileBucket"

let config = new pulumi.Config();
let dockerRunFileName = config.require("docker-run-file-name");


export const dockerrunFileBucketObject = new aws.s3.BucketObject(dockerRunFileName, {	
  bucket: dockerrunFileBucket,
  key: "bucketkey",
  source: new pulumi.asset.FileAsset(dockerRunFileName),
})
