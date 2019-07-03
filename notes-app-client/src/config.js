export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-1",
    BUCKET: "alxd-lambda-scratch"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://6m6psuqepc.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_xUC4DsFWg",
    APP_CLIENT_ID: "35nlqe0qqtk9srsjg2ej4jpq82",
    IDENTITY_POOL_ID: "eu-west-1:fbdd591c-778d-445c-9db2-831dd2003336"
  }
};
