import { IAMClient } from "@aws-sdk/client-iam";
// Set the AWS Region.
const REGION = "eu-north-1"
// Create an IAM service client object.
const iamClient = new IAMClient({ region: REGION });
export { iamClient };
// snippet-end:[iam.JavaScript.createclientv3]