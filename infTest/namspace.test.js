const k8s = require('@kubernetes/client-node');


test('name spaces exists', async () => {
   const kc = new k8s.KubeConfig();
   kc.loadFromCluster()
   //kc.loadFromFile('/Users/steinko/development/gitlabtraining/gradle-ci-cd/infAsCode/kubeconfig.json')
   const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
   expect(k8sApi).toBeDefined()
   const namespace = k8sApi.listNamespace()
   expect(namespace.body).toBeDefined()
   
}, 100000);