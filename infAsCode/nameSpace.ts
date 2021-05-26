import * as k8s from "@pulumi/kubernetes"
export const serverAcountNameSpace = new k8s.core.v1.Namespace('serverAccountNameSpace',
        { metadata:{ namespace: "serverAccount" }})