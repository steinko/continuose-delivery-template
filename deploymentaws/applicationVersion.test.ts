import * as pulumi from "@pulumi/pulumi";

pulumi.runtime.setMocks({
	
	newResource: function(args: pulumi.runtime.MockResourceArgs): {id: string, state: any} {
		          return {
                            id: args.inputs.name,
                            state: args.inputs,
                       }
	},
    call: function(args: pulumi.runtime.MockCallArgs) {
		                  return args
	  }
	})

describe('', () => {
	let infra: typeof import("./applicationVersion");

   beforeAll(async () => {	 
	      infra = await import("./applicationVersion");  
   })

  it("should exist", function(done) {
	   infra.applicationVersion.name.apply(name => expect(name).toBe('v1'))
       infra.applicationVersion.key.apply(key => expect(key).toBe(''))
       infra.applicationVersion.bucket.apply(bucket => expect(bucket).toBe('v1')) 
       done() 
	})


 it("should exist", async ()=> {
	const name = pulumi.all([infra.applicationVersion.name])
	      expect(name).toBe('v1')  
})
})