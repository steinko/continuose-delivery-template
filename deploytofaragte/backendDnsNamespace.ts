
import * as aws from "@pulumi/aws";

export const backendDnsNamespace = new aws.servicediscovery.PublicDnsNamespace("helloorld-backend", {
    description: "helloworld-backend",
});