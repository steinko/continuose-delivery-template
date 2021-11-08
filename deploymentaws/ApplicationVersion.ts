import * as aws from "@pulumi/aws";
import {application} from "./Application"
import {dockerrunFileBucketObject} from "./dockerrunFileBucketObject"

export const applicationVersion = new aws.elasticbeanstalk.ApplicationVersion("application-version", {
    application: application,
    description: "application version",
    bucket: dockerrunFileBucketObject.bucket,
    key: dockerrunFileBucketObject.key,
    name: "v1"
});