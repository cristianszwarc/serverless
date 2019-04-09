
# Serverless simple example #

Small NodeJS project to play with AWS Lambda.

This repository shows a basic Lambda function with test coverage. 

For the sake of simplicity the data is kept as part of the source code, but some minimal steps were taken to allow future upgrades to enable this to load data from an external source.

The package Serverless was used to help on the configuration and deployment process and it's offline plugin is used for local develpment. 

## Endpoints: ##
```
http://localhost:3000/dev/
http://localhost:3000/dev/colors
```
(public Staging and Productions endpoints hosts are generated under your AWS account when deploying)
 
## Color Search ##

Example:
```
http://localhost:3000/colors?search=blue
```

## Local development ##

Install dependencies
```
npm install
```

Run locally
```
serverless offline
```

https://github.com/dherault/serverless-offline

## Tests ##

```
npm test
```

## Coverage ##
Command line report:
```
./node_modules/.bin/nyc ./node_modules/.bin/mocha
```
Html report:
```
./node_modules/.bin/nyc --reporter=html ./node_modules/.bin/mocha
```
a coverage folder will be created containing the report in html.

## Deployment ##

Install Serverless https://github.com/serverless/serverless
```
npm install -g serverless
```

Configure AWS credentials 
```
serverless config credentials --provider aws --key ... --secret ...
```

Install all requirements on their production flavours.

```
npm install --production
```


Deploy (dev or production)

```
serverless deploy --stage dev
```

