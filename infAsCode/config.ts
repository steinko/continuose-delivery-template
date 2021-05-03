import { Config } from "@pulumi/pulumi";

const config = new Config();

/// Docker config
export const dockerUserName = config.require("dockerUserName");
export const dockerPassword = config.require("dockerPassword");

/// PostgreSQL config
export const dbUserName = config.require("dbUserName");
export const dbPassword = config.require("dbPassword");

// GCP Config
export const cloudLocation = config.require("cloudLocation");
export const cloudRegion = config.require("cloudRegion");
export const cloudProject = config.require('cloudProject')