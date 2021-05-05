// Copyright 2016-2020, Pulumi Corporation.  All rights reserved.

import * as docker from "@pulumi/docker"
import * as gcp from "@pulumi/gcp"
import * as pulumi from "@pulumi/pulumi"

// Location to deploy Cloud Run services
const location = gcp.config.region

const imageName = "gradle-ci-cd";
const myImage = new docker.Image(imageName, {
    imageName: pulumi.interpolate`gcr.io/${gcp.config.project}/${imageName}:v1.0.0`,
    build: {
        context: "./..",
    },
});

// Deploy to Cloud Run. Some extra parameters like concurrency and memory are set for illustration purpose.
const rubyService = new gcp.cloudrun.Service("java", {
    location:"europe-north1",
    template: {
        spec: {
            containers: [{
                image: myImage.imageName,
            }],
        },
    },
});
