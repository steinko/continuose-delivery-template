import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import {dockerrunFileBucket} from "./dockerrunFileBucket"

export const dockerrunFileBucketObject = new aws.s3.BucketObject("dockerrun-file-bucket-object", {	
  bucket: dockerrunFileBucket.id,
  key: "Dockerrun.aws.json",
  source: new pulumi.asset.FileAsset("../Dockerrun.aws.json"),
})
