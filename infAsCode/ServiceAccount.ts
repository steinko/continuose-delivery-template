import * as k8s from "@pulumi/kubernetes";
const name =   "service_account"
const serviceAccount = new k8s.core.v1.ServiceAccount(name)
export const token = new k8s.authentication.v1.TokenRequest(name)