import {logQueue} from "./Queue"
import {logBucket} from "./Bucket"
import * as aws from "@pulumi/aws";


export const bucketNotification = new aws.s3.BucketNotification("bucket-notification", {
    bucket: logBucket.id,
    queues: [{
        queueArn: logQueue.arn,
        events: ["s3:ObjectCreated:*"],
        
    }],
});