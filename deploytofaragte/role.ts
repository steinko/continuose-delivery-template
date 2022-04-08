import * as aws from "@pulumi/aws"


export const role = new aws.iam.Role("role", {assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Sid: "",
            Principal: {
               "Service": [
                  "lambda.amazonaws.com",
                  "ecs-tasks.amazonaws.com"
                ]
            },
        }],
    }),


                                              inlinePolicies: [{
            name: "my_inline_policy",
            policy: JSON.stringify({ 
	                                  "Version": "2012-10-17",
	                                  "Statement": [{
		                                               "Effect": "Allow",
		                                               "Action":  [ "firehose:PutRecordBatch",
                                                                     "logs:PutLogEvents",
				                                                     "logs:CreateLogGroup",
				                                                     "logs:CreateLogStream",
				                                                     "logs:DescribeLogStreams",
				                                                     "logs:DescribeLogGroups",
				                                                     "xray:PutTraceSegments",
				                                                     "xray:PutTelemetryRecords",
				                                                     "xray:GetSamplingRules",
				                                                     "xray:GetSamplingTargets",
				                                                     "xray:GetSamplingStatisticSummaries",
				                                                     "ssm:GetParameters"],
		                                               "Resource": "*",
	                                               }],

                                   })
                       }]
  })