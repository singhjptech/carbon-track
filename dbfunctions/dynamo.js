import { Auth } from 'aws-amplify';
const AWS = require('aws-sdk')
let dynamodb
Auth.currentUserCredentials().then(cred => {
    AWS.config.update({ region: 'eu-west-2', accessKeyId: cred.accessKeyId, secretAccessKey: cred.secretAccessKey, sessionToken: cred.sessionToken })
    dynamodb = new AWS.DynamoDB.DocumentClient;
});
const getTable = async () => {
    dynamodb.get({ TableName: 'Users', Key: { name: Auth.username } }, (err, data) => {
        if (err) console.log(err);
        console.log(data);
    });
}
const addCar = async (car, group) => {
    await dynamodb.put({
        TableName: 'UserData',
        Item: {
            UserName: Auth.user.username,
            Vehicles: [{
                emissions: car.emissions,
                make: car.make,
                year: car.year,
                fuelType: car.fuelType
            }],
            GroupDetails: { GroupName: group.name }
        }
    }).promise();
};

const getCar = async () => {
    const userAndVehicles = await dynamodb.get({
        TableName: 'UserData',
        Key: {
            UserName: Auth.user.username
        }
    }).promise();
    return userAndVehicles;
};

export { getTable, addCar };