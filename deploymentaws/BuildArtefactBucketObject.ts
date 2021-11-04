import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import {buildArtefactBucket} from "./BuildArtefactBucket"

export const buildArtefactBucketObject = new aws.s3.BucketObject("build-artefact-bucket-object", {	
  bucket: buildArtefactBucket.id,
  key: "app.jar",
  source: new pulumi.asset.FileAsset("../app/build/libs/app.jar"),
})
