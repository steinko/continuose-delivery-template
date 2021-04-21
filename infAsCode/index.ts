import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from "./Clustered"

const appLabels = { app: "nginx" };
const deployment = new k8s.apps.v1.Deployment("nginx", {
    spec: {
	    
        selector: { matchLabels: appLabels },
        replicas: 1,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: "nginx", image: "nginx" }],}
        }
    }
},{provider: clusterProvider});
export const name = deployment.metadata.name;
