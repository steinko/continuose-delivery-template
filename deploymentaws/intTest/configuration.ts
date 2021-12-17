     import * as pulumi from "@pulumi/pulumi";
     let config = new pulumi.Config();
    export let applicationName = config.require("application-name");