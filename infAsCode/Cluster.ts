import * as k8s from "@pulumi/kubernetes"
import * as pulumi from "@pulumi/pulumi"
import * as gcp from "@pulumi/gcp"
import * as config from "./config"

const name = "gradle-ci-cd-cluster";
// Create a GKE cluster
const engineVersion = gcp.container.getEngineVersions({location:config.cloudRegion, project: config.cloudProject}).then(v => v.latestMasterVersion);
const cluster = new gcp.container.Cluster(name, {
	project: config.cloudProject,
	clusterAutoscaling: {enabled: true, resourceLimits:[ {resourceType: 'cpu', minimum:1 ,maximum:20 },
	                                                     {resourceType: 'memory', minimum:1 ,maximum:64 }  
                                                       ]
                        },
    initialNodeCount: 1,
    minMasterVersion: engineVersion,
    nodeVersion: engineVersion,
    nodeConfig: {
        machineType: "e2-standard-2",
        oauthScopes: [
            "https://www.googleapis.com/auth/compute",
            "https://www.googleapis.com/auth/devstorage.read_only",
            "https://www.googleapis.com/auth/logging.write",
            "https://www.googleapis.com/auth/monitoring"
        ],
    },
   location: config.cloudLocation,
 
});


// Manufacture a GKE-style kubeconfig. Note that this is slightly "different"
// because of the way GKE requires gcloud to be in the picture for cluster
// authentication (rather than using the client cert/key directly).
export const kubeconfig = pulumi.
    all([ cluster.name, cluster.endpoint, cluster.masterAuth ]).
    apply(([ name, endpoint, masterAuth ]) => {
        const context = `${config.cloudProject}_${config.cloudLocation}_${name}`;
        return `apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ${masterAuth.clusterCaCertificate}
    server: https://${endpoint}
  name: ${context}
contexts:
- context:
    cluster: ${context}
    user: ${context}
  name: ${context}
current-context: ${context}
kind: Config
preferences: {}
users:
- name: ${context}
  user:
    auth-provider:
      config:
        cmd-args: config config-helper --format=json
        cmd-path: gcloud
        expiry-key: '{.credential.token_expiry}'
        token-key: '{.credential.access_token}'
      name: gcp
`;
    });

// Create a Kubernetes provider instance that uses our cluster from above.
export const clusterProvider = new k8s.Provider(name, {
    kubeconfig: kubeconfig,
});
