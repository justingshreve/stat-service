# Stat Service

This is a demo project that was used in the [June 2022 Serverless Microservice Meetup](https://www.meetup.com/serverless-at-scale-irl/events/285802061/). It is a sample microservice that uses Lambdas and Step Functions to create a team feed or final output. This project is dependent on the player-service, which needs to be deployed first. It uses cloudformation variables to discover the player-service endpoints.

<img width="779" alt="Screen Shot 2022-06-10 at 11 53 47 AM" src="https://user-images.githubusercontent.com/885096/173104460-01ef69cc-c7ef-40d6-966d-267341077dad.png">

Stat Service when combined with Player Service, or both microservices working together.


<img width="1484" alt="Screen Shot 2022-06-10 at 11 54 27 AM" src="https://user-images.githubusercontent.com/885096/173104588-4af6f0d6-8cea-4bb7-9733-08158de69c73.png">


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

