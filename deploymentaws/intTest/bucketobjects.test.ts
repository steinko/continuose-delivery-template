import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import


it('should exist a bucket object in the cloud', async () => {
      const client = new S3Client({ region: "eu-north-1" })
      const input =  { 
	                    "Bucket": "dokcerrun-file-bucket" ,
                        "Key" : "bucketkey"
                     }
      const command = new GetObjectCommand(input)
      const response = await client.send(command)
      expect( response.ContentLength).toBeGreaterThan(0)
})