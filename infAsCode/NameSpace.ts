import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './index'

 const developmemt =  new k8s.core.v1.Namespace("developement",undefined,{provider: clusterProvider})
export const namesSpaceDevelopment =  developmemt.metadata.name;

export const staging =  new k8s.core.v1.Namespace("staging",undefined,{provider: clusterProvider})
export const namesSpaceStaging =  staging.metadata.name;