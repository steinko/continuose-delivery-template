import * as aws from "@pulumi/aws";
import {user} from "./User"

export const userPolicy = new aws.iam.UserPolicy("user-policy", {
	name: "userPolicy",
    user: user.name,
    policy: JSON.stringify({
                "Version": "2012-10-17",
                "Statement": [
                   {
                      "Action": [
                                  "ec2:DescribeInstances",
                                  "ec2:DescribeRegions",
                                  "cloudwatch:GetMetricData",
                                  "cloudwatch:ListMetrics",
                                  "tag:getResources",
                                  "sns:ListTopics",
                                  "sqs:ListQueues",
                                  "sts:GetCallerIdentity",
                                  "iam:ListAccountAliase"
                                ],
                       "Effect": "Allow",
                       "Resource": "*"             
                     }
                ]
             })
         })