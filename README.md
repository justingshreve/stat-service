# Stat Service

This is a demo project that was used in the June 2022 Serverless Microservice Meetup. It is a sample microservice that uses Lambdas and Step Functions to create a team feed or final output. This project is dependent on the player-service, which needs to be deployed first. It uses cloudformation variables to discover the player-service endpoints.

Prerequisites:
  - AWS SDK installed locally.
  - You must be logged into the AWS account with valid credentials stored in `~/.aws/credentials`
  - An S3 deployment bucket entitled `meetup-demo-${aws:accountId}-${self:provider.region}` in the target region. This needs to be created manually.
  - Testing requires docker
  - Player Services needs to be deployed
  
**INSTALL**

`npm install`

**TESTING**

`npm test`

**DEPLOYING**

`npx sls deploy -s STAGE -r REGION --verbose --aws-profile PROFILE`

STAGE=stage name
REGION=AWS region
PROFILE=AWS profile

More info: https://www.serverless.com/framework/docs/providers/aws/cli-reference/deploy

`sls deploy` will ...

- create lambdas
- create cloudwatch log groups
- create a step function
- create alarms for lambdas (in prod only)
- create all relevant roles and permissions

