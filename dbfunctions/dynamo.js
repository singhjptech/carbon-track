<<<<<<< HEAD
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
=======
import { Auth } from 'aws-amplify';
import { getData } from './api-functions';
const AWS = require('aws-sdk')
let dynamodb
Auth.currentUserCredentials().then(cred => {
    AWS.config.update({ region: 'eu-west-2', accessKeyId: cred.accessKeyId, secretAccessKey: cred.secretAccessKey, sessionToken: cred.sessionToken })
    dynamodb = new AWS.DynamoDB.DocumentClient
>>>>>>> 6a16e2b2d8fc68178a44ac0229f2c12acbb7bdbf
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
<<<<<<< HEAD
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
=======
    try {
        await dynamodb.put({ TableName: 'Users', Item: { make: car.make, user_id: 1 } });
    } catch (err) {
        console.log(err);
    };
};

export { getTable, addCar };
>>>>>>> 6a16e2b2d8fc68178a44ac0229f2c12acbb7bdbf
