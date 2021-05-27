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
	  let resource: typeof import("../GcpServiceAccount");

   beforeAll(async () => {
        resource = await import("../GcpServiceAccount"); 
   })

  it('empty test', async () => {
	    
       pulumi.all([resource.serviceAccount.name]).apply(([name]) => {
     
	        expect(name).toBe('gcp-service-account')

       })
  })
})