import * as gitlab from "@pulumi/gitlab";
import token from "./ServiceAccount"

export const cluster = new gitlab.ProjectCluster("greadle-ci-cd-cluster", {
    domain: "github.com",
    kubernetesApiUrl: "https://124.124.124",
    kubernetesToken: token.id,
    project: "25815104"
});