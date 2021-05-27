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
	  let resource: typeof import("../NameSpace");

   beforeAll(async () => {
        resource = await import("../NameSpace"); 
   })

  it('empty test', async () => {
	    
       pulumi.all([resource.nameSpace.id]).apply(([name]) => {
     
	        expect(name).toBe('staging')

       })
  })
})