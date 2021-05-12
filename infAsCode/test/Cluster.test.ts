import * as pulumi from "@pulumi/pulumi"


pulumi.runtime.setMocks({
	         newResource: function(args: pulumi.runtime.MockResourceArgs):{id: string, state: any} {
	
                return {
                    id: args.inputs.name + "_id",
                    state: args.inputs,
         
                };
},
 call: function(args: MockCallArgs) {
        return args.input;
    },
})


describe('', () => {
	  let cluster: typeof import("../Cluster");

   beforeAll(async () => {
	    pulumi.runtime.setConfig('project:cloudLocation','europe-nort1-a')
	    pulumi.runtime.setConfig('project:cloudRegion','europe-nort1')
	    pulumi.runtime.setConfig('project:cloudProject','springboot22')
        cluster = await import("../Cluster");
       
   })

  it('empty test', async () => {
	    
       pulumi.all([cluster.cluster.name]).apply(([name]) => {
     
	        expect(name).toBe('gradle-ci-cd-cluster')
       })
  })

})