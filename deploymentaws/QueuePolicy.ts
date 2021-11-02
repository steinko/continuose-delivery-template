import {logQueue} from "./Queue"
import * as aws from "@pulumi/aws";


export const policy = new aws.sqs.QueuePolicy("policy", {
    queueUrl: logQueue.id,
    policy: JSON.stringify ({
  "Version": "2012-10-17",
  "Id": "sqspolicy",
  "Statement": [
    {
      "Sid": "example-statement-ID",
      "Effect": "Allow",
      "Principal":"*",
      "Action": "sqs:SendMessage",
      "Resource": "${logQueu.arn}",
       "Condition": {
        "StringEquals": {
          "aws:SourceAccount": "${elkUser.id}"
        },
        "ArnLike": {
          "aws:SourceArn": "${logBucket.arn}"
        }
      }
    }
  ]
})
});