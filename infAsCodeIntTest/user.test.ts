import { iamClient } from "./iamClient";
import { ListUsersCommand } from "@aws-sdk/client-iam";

it('should exist a user', async () => {
	const params = { MaxItems: 10 };
    const data = await iamClient.send(new ListUsersCommand(params));
    const users = data.Users 
    let found = false
     users.forEach(function (user) {
       if (user.UserName == "AwsUser") { found = true}
    });
    expect(found ).toBeTruthy();
})
