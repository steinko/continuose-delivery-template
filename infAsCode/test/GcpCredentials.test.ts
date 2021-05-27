mport * as pulumi from "@pulumi/pulumi"


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
	  let resource: typeof import("../GcpCredentials");

   beforeAll(async () => {
        resource = await import("../GcpCredentials"); 
   })

  it('empty test', async () => {
	    
       pulumi.all([resource.serviceAccount.name]).apply(([name]) => {
     
	        expect(name).toBe('gcp-credentials')

       })
  })
})