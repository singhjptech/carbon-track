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
const addCar = async (car) => {
    const userData = await dynamodb.get({TableName: 'UserData', Key:{UserName: Auth.user.username} }).promise();
    
    if (Object.keys(userData).length === 0) {
        await dynamodb.put({
        TableName: 'UserData',
        Item: {
            UserName: Auth.user.username,
            Vehicles: [{
                emissions: car.emissions,
                make: car.make,
                year: car.year,
                fuelType: car.fuelType
            }]
        }
    }).promise();
    } else {
        userData.Vehicles.push({
            emissions: car.emissions,
            make: car.make,
            year: car.year,
            fuelType: car.fuelType
        })
        await dynamodb.put({
            TableName: 'UserData',
            Item: userData
    }).promise();
    }
};

const getCar = async () => {
    const vehicles = await dynamodb.get({
        TableName: 'UserData',
        Key: {
            UserName: Auth.user.username
        }
    }).promise();
    return vehicles.Vehicles;
};

const getUser = async () => {
    const userAndVehicles = await dynamodb.get({
        TableName: 'UserData',
        Key: {
            UserName: Auth.user.username
        }
    }).promise();
    return userAndVehicles;
};

const addGroup = async (groupData) => {
    try {
        await dynamodb.put({ 
            TableName: 'GroupData',
            Item: {
                GroupCode: groupData.groupCode,
                GroupName: groupData.groupName, 
                GroupCreator: Auth.user.username, 
                GroupMembers: groupData.groupMembers }
            }).promise();
    } catch(err) {
        console.log(err)
    }
}

const joinGroup = async (groupData) => {
    const group = await dynamodb.get({TableName:'GroupData', Key: {groupName: groupData.groupName}}).promise();

    if(Object.keys(group).length === 0) {
        //do nothing
    } else {
        if(group.groupCode === groupData.groupCode) {
            group.groupMembers.push(Auth.user.username);
            await dynamodb.put({TableName:'GroupData', Item:{groupName:group.groupName, groupMembers: group.groupMembers}}).promise();
        }
    }
};

const getGroup = async (groupName) => {
    return await dynamodb.get({TableName:'GroupData', Key: {groupName: groupName}}).promise();

}

export { getTable, addCar, addGroup, joinGroup, getGroup, dynamodb }