import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "us-east-1_M0ArRs1gD",  // Replace with your actual User Pool ID
  ClientId: "474ie750nojvggi7un68to0af5",  // Replace with your actual App Client ID
};

export default new CognitoUserPool(poolData);