import * as aws from "@pulumi/aws";
import {backendDnsNamespace} from "./backendDnsNamespace"

export const backendDnsService = new aws.servicediscovery.Service("exampleService", {
    dnsConfig: {
        namespaceId: backendDnsNamespace.id,
        dnsRecords: [{
            ttl: 10,
            type: "A",
        }],
        routingPolicy: "MULTIVALUE",
    },
    healthCheckCustomConfig: {
        failureThreshold: 1,
    },
});