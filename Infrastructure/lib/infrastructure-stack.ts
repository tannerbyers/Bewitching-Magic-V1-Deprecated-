import * as cdk from 'aws-cdk-lib';
import { CfnOutput } from 'aws-cdk-lib';
import { HttpMethod } from 'aws-cdk-lib/aws-events';
import * as apigateway from "aws-cdk-lib/aws-apigateway";

import { Runtime, FunctionUrlAuthType, Code, FunctionUrl } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import path = require('path');

// TODO add validation here. We should check if these values exists. Theres a cool project theo talked about that can help wtih this. checkout later

const xrapidKey = process.env.XRapidAPIKey || ""
const xrapidHost = process.env.XRapidAPIHost || ""

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const getMoonPhaseFunction = new NodejsFunction(this, 'getMoonPhaseFunction', {
      runtime: Runtime.NODEJS_18_X,
      memorySize: 256,
      timeout: cdk.Duration.seconds(30),
      entry: path.join(__dirname, '../lambdas/getMoonPhase.js'),
      environment: {
        "XRapidAPIKey": xrapidKey,
        "XRapidAPIHost": xrapidHost
      },
      handler: 'handler',
      description: 'Retrieve the moon phase',
    });

    const moonPhaseApiGateway = new apigateway.LambdaRestApi(this, 'moonphaseapi', {
      handler: getMoonPhaseFunction,
    });

    new CfnOutput(this, "moonPhaseApiGateway", {
      value: moonPhaseApiGateway.url,
    });

  }
}


