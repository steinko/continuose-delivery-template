import { Config } from "@pulumi/pulumi";

const config = new Config();


// GCP Config
export const cloudLocation = config.require("cloudLocation");
export const cloudRegion = config.require("cloudRegion");
export const cloudProject = config.require('cloudProject')