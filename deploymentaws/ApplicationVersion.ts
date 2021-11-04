import * as aws from "@pulumi/aws";
import {application} from "./Application"
import {buildArtefactBucketObject} from "./BuildArtefactBucketObject"

export const applicationVersion = new aws.elasticbeanstalk.ApplicationVersion("application-version", {
    application: application,
    description: "application version",
    bucket: buildArtefactBucketObject.bucket,
    key: buildArtefactBucketObject.key,
    name: "v1"
});