import * as aws from "@pulumi/aws";
import {application} from "./Application"
import {applicationFile} from "./ApplicationFile"

export const applicationVersion = new aws.elasticbeanstalk.ApplicationVersion("ApplicationVersion", {
    application: application,
    description: "application version",
    bucket: 'elasticbeanstalk-eu-north-1-943302850444',
    key: applicationFile.key,
    name: "v1"
});