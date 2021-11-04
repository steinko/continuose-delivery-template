import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const buildArtefactBucket = new aws.s3.Bucket("build-artefact-bucket", {bucket:"build-artefact-bucket"});