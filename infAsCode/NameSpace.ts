import * as k8s from "@pulumi/kubernetes"
import {clusterProvider} from "./Cluster"
export const nameSpace =  new k8s.core.v1.Namespace('staging',{metadata: {name:'staging'}},
{provider: clusterProvider})