import * as k8s from "@pulumi/kubernetes";
import {nameSpace} from "./NameSpace"
import {clusterProvider} from "./Cluster"
import {serviceAccountKey} from "./ServiceAccountKey"
import {appLabels} from "./index"

export const gcpCredentials = new k8s.core.v1.Secret("gcp-credentials", {
    metadata: {
        namespace: nameSpace.metadata.name,
        labels: appLabels,
    },
    type: "Opaque",
    stringData: {
        "gcp-credentials.json": serviceAccountKey.privateKey.apply((x: any) => Buffer.from(x, "base64").toString("utf8")),
    },
}, {provider: clusterProvider, parent: nameSpace})