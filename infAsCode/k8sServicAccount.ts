import * as k8s from "@pulumi/kubernetes"
import {serverAcountNameSpace } from "./nameSpace"
export const k8sServiceAccount = new k8s.core.v1.ServiceAccount('k8sservivceAccount',
                          { metadata:{ namespace: serverAcountNameSpace.metadata.name,
                                       name: 'k8sServiceAccount'}}
                         )