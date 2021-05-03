import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const service = new gcp.projects.Service("service", {
    project: "springboot22",
    service: "appengineflex.googleapis.com",
    disableDependentServices: false,
});
const gaeApi = new gcp.projects.IAMMember("gaeApi", {
    project: service.project,
    role: "roles/compute.networkUser",
    member: pulumi.interpolate`serviceAccount:springboot22@appspot.gserviceaccount.com`,
});


const myappV1 = new gcp.appengine.FlexibleAppVersion("hello-world-app",
  { versionId: "v1",
    project: gaeApi.project,
    livenessCheck: {path:"/helloWorld"}, 
    readinessCheck:{path:"/hellowolrd"},
    runtime:"docker",
	service: "defaul", 
	deployment:{container: {image: "docker.io/steinko/gradle-ci-cd:latest" } },
	automaticScaling: {
        coolDownPeriod: "120s",
        cpuUtilization: {
            targetUtilization: 0.5,
        },
    },
})
