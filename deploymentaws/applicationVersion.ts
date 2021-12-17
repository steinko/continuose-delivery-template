import * as aws from "@pulumi/aws";
import {application} from "./application"
import {dockerrunFileBucket} from "./dockerrunFileBucket"

export const applicationVersion = new aws.elasticbeanstalk.ApplicationVersion("application-version", {
    application: application,
    description: "application version",
    bucket: dockerrunFileBucket,
    key: "bucketkey",
    name: "v1"
});