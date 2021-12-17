import { S3Client } from "@aws-sdk/client-s3"
import { ListBucketsCommand} from "@aws-sdk/client-s3"

it('should exist a bucket in the cloud', async () => {
	
   var client = new S3Client({ region: "eu-north-1" })

   var params = {}
   const command = new ListBucketsCommand(params);
   const buckets = await client.send(command);
    let found = false
     buckets.Buckets.forEach(function (bucket) {
       if (bucket.Name == "dokcerrun-file-bucket") { found = true}
    });
    expect(found ).toBeTruthy();
})