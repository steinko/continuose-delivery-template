import {backendLb} from './fargateService'
import {frontendLb} from './fargateService'
import {service} from './fargateService'

service
export const backendUrl = backendLb.endpoint.hostname
export const frontendUrl = frontendLb.endpoint.hostname

