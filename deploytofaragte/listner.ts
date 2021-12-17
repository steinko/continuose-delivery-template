
import * as awsx from "@pulumi/awsx";




export const listner = new awsx.lb.ApplicationListener("listner", { port:80});


