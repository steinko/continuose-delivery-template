import * as pulumi from "@pulumi/pulumi";

describe('', () => {
	let infra: typeof import("./application");

   beforeAll(async () => {
	 
	      infra = await import("./application");

       
   })

  it("should exist", async ()=> {
	   pulumi.all([infra.application.name]).apply(([name]) => {
	        expect(name).toBe('helloworld-backend')
       })
	})
})