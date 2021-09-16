import { Auth } from "aws-amplify";
const AWS = require("aws-sdk");
let dynamodb;
Auth.currentUserCredentials().then((cred) => {
  AWS.config.update({
    region: "eu-west-2",
    accessKeyId: cred.accessKeyId,
    secretAccessKey: cred.secretAccessKey,
    sessionToken: cred.sessionToken,
  });
  dynamodb = new AWS.DynamoDB.DocumentClient();
});
const getTable = async () => {
  dynamodb.get(
    { TableName: "Users", Key: { name: Auth.username } },
    (err, data) => {
      if (err) console.log(err);
      console.log(data);
    }
  );
};
const addCar = async (car) => {
  dynamodb.put(
    {
      TableName: "Users",
      Item: { make: car.make, model: car.model, username: Auth.username },
    },
    (err, data) => {
      if (err) console.log(err);
      console.log(data);
    }
  );
};

export { getTable };
