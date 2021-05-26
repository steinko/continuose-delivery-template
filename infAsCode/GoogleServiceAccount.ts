import * as gcp from "@pulumi/gcp";
import * as config from "./config"
import {k8sServicAccount} from "./k8sServiceAccount"

const admin = gcp.organizations.getIAMPolicy({
    bindings: [{
        role: "roles/iam.workloadIdentyUser",
        members: ["servicAccount:" + config.cloudProject + '.svc.id.goog[' + k8sServicAccount.metaData.name ]'],
    }],
});

const sa = new gcp.serviceAccount.Account("gcpServiAccount", {
    accountId: "google-service-account",
    displayName: "A service account",
    metadata:{ name: 'google-service-account'}

});
const admin_account_iam = new gcp.serviceAccount.IAMPolicy("admin-account-iam", {
	metaData: {name: 'iampolicy-workload-identity-sample'},
	spec: { resourceRef:
	           {apiVersion: 'iam.cnrm.cloud.google.com/v1beta1',
	            kind:'IAMServiceAccount',
                name:  } }
    serviceAccountId: sa.name,
    policyData: admin.then(admin => admin.policyData),
});

