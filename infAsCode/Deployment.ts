import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from "./Cluster"


export const deployment = new k8s.apps.v1.Deployment("hello-world-deployment", {
    spec: {
        replicas: 1,
         selector: { matchLabels: {app: "hello-world"} },
        template: {
            metadata: { labels: {app: "hello-world"} },
            spec: {            
	           containers: [{ name: "hello-world-image", image: "docker.io/steinko/gradle-ci-cd" }],
            }
        }
    }
},{provider: clusterProvider});
