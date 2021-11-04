import { GetUserPolicyCommand } from "@aws-sdk/client-iam"
import { iamClient } from "./iamClient";

it('should exist a user policy', async () => {
   const input = { "UserName": "AwsUser",
                   "PolicyName": "userPolicy" };
   const command = new GetUserPolicyCommand(input);
   const response = await iamClient.send(command);
   expect(response.PolicyName ).toBe("userPolicy")
})