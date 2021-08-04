import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const applicationFile = new aws.s3.BucketObject("appfile", {
bucket: 'elasticbeanstalk-eu-north-1-943302850444',
key: "app.jar",
source: new pulumi.asset.FileAsset("../app/build/libs/app.jar"),})
