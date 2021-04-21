import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from "./Clustered" 
const name =   "service_account"
//export const serviceAccount = new k8s.core.v1.ServiceAccount(name,
      {automountServiceAccountToken: false} ,
      {provider: clusterProvider} )
//export const token = new k8s.authentication.v1.TokenRequest(name)