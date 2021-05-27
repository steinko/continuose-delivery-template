import * as gcp from "@pulumi/gcp";


export const serviceAccount = new gcp.serviceaccount.Account("gcp-service-account", {
    accountId: "gcp-service-account",
    displayName: "A gcp service account",

});


