import * as gcp from "@pulumi/gcp";
import {serviceAccount} from "./GcpServiceAccount"

export const serviceAccountKey = new gcp.serviceaccount.Key("service-account-key", {
    serviceAccountId: serviceAccount.name,
    publicKeyType: "TYPE_X509_PEM_FILE",
}, {parent: serviceAccount, additionalSecretOutputs: ["privateKey"]});