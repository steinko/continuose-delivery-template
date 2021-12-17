import * as pulumi from "@pulumi/pulumi";

describe('', () => {
	let infra: typeof import("./dockerrunFileBucketObject");

   beforeAll(async () => {	 
	      infra = await import("./dockerrunFileBucketObject");
   })

  it("should exist", async ()=> {
	   pulumi.all([infra.dockerrunFileBucketObject.key]).apply(([key]) => {
	        expect(key).toBe("../app/Dockerrun.aws.json")
       })
	})
})