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
    const users = await dynamodb.scan({ TableName: "UserData" }).promise();
    return users;
};

const createUser = async () => {
    try {
        await dynamodb
            .put({
                TableName: "UserData",
                Item: {
                    UserName: Auth.user.username,
                    Vehicles: [],
                    TotalEmissions: 0,
                    EmissionsSaved: 0,
                    Journey: [],
                    Groups: [],
                },
            })
            .promise();
    } catch (err) {
        console.log(err);
    }
};

const addCar = async (car) => {
    try {
        const userData = await dynamodb
            .get({
                TableName: "UserData",
                Key: {
                    UserName: Auth.user.username,
                },
            })
            .promise();
        userData.Item.Vehicles.push({
            emissions: car.emissions,
            make: car.make,
            year: car.year,
            fuelType: car.fuelType,
        });
        await dynamodb
            .put({
                TableName: "UserData",
                Item: {
                    UserName: Auth.user.username,
                    Vehicles: userData.Item.Vehicles,
                    EmissionsSaved: userData.Item.EmissionsSaved,
                    TotalEmissions: userData.Item.TotalEmissions,
                    Journey: userData.Item.Journey,
                    Groups: userData.Item.Groups,
                },
            })
            .promise();
    } catch (err) {
        console.log(err);
    }
};
const getCar = async () => {
    const vehicles = await dynamodb
        .get({
            TableName: "UserData",
            AttributesToGet: ["Vehicles"],
            Key: {
                UserName: Auth.user.username,
            },
        })
        .promise();
    return vehicles.Item.Vehicles;
};
const getUser = async () => {
    console.log(dynamodb, "<--- in here");
    try {
        const userAndVehicles = await dynamodb
            .get({
                TableName: "UserData",
                Key: {
                    UserName: Auth.user.username,
                },
            })
            .promise();
        return userAndVehicles.Item;
    } catch (err) {
        console.log(err);
    }
};
const addGroup = async (groupData) => {
    const group = await dynamodb
        .get({
            TableName: "GroupData",
            AttributesToGet: ["GroupName"],
            Key: {
                GroupName: groupData.GroupName,
            },
        })
        .promise();
    if (Object.keys(group).length === 0) {
        try {
            await dynamodb
                .put({
                    TableName: "GroupData",
                    Item: {
                        GroupCode: groupData.GroupCode,
                        GroupName: groupData.GroupName,
                        GroupCreator: Auth.user.username,
                        GroupMembers: [Auth.user.username],
                    },
                })
                .promise();
            return true;
        } catch (err) {
            return false;
        }
    }
};
const addUserToGroup = async (groupData) => {
    const group = await dynamodb
        .get({
            TableName: "GroupData",
            Item: {
                GroupCode: group.Item.GroupCode,
                GroupCreator: group.Item.GroupCreator,
                GroupName: group.Item.GroupName,
                GroupMembers: group.Item.GroupMembers,
            },
        })
        .promise();
    if (Object.keys(group).length === 0) {
        return false;
    } else {
        if (
            group.Item.GroupCode === groupData.GroupCode &&
            !group.Item.GroupMembers.includes(Auth.user.username)
        ) {
            group.Item.GroupMembers.push(Auth.user.username);
            try {
                await dynamodb
                    .put({
                        TableName: "GroupData",
                        Item: {
                            GroupName: group.Item.GroupName,
                            GroupMembers: group.Item.GroupMembers,
                        },
                    })
                    .promise();
                return true;
            } catch (err) {
                return false;
            }
        }
    }
};
const getGroup = async (groupName) => {
    return await dynamodb
        .get({
            TableName: "GroupData",
            Key: {
                groupName: groupName,
            },
        })
        .promise();
};
const getGroupEmissions = async (username) => {
    const emissions = await dynamodb
        .get({
            TableName: "UserData",
            AttributesToGet: ["TotalEmissions", "EmissionsSaved"],
            Key: {
                UserName: username,
            },
        })
        .promise();
    return {
        TotalEmissions: emissions.Item.TotalEmissions,
        EmissionsSaved: emissions.Item.EmissionsSaved,
    };
};
const updateEmissions = async (newEmissions) => {
    const oldEmissions = await dynamodb
        .get({
            TableName: "UserData",
            Key: {
                UserName: Auth.user.username,
            },
        })
        .promise();
    const { TotalEmissions: oldTotal, EmissionsSaved: oldSaved } =
        oldEmissions.Item;
    await dynamodb
        .put({
            TableName: "UserData",
            Item: {
                UserName: Auth.user.username,
                Vehicles: oldEmissions.Item.Vehicles,
                TotalEmissions: oldTotal + newEmissions.emissions,
                EmissionsSaved: oldSaved + newEmissions.savedEmissions,
                Journey: oldEmissions.Item.Journey,
                Groups: oldEmissions.Item.Groups,
            },
        })
        .promise();
};
const addJourney = async (newJourney) => {
    try {
        const userData = await dynamodb
            .get({
                TableName: "UserData",
                Key: {
                    UserName: Auth.user.username,
                },
            })
            .promise();
        userData.Item.Journey.push(newJourney);
        await dynamodb.push({
            TableName: "UserData",
            Item: {
                UserName: Auth.user.username,
                Vehicles: userData.Item.Vehicles,
                EmissionsSaved: userData.Item.EmissionsSaved,
                TotalEmissions: userData.Item.TotalEmissions,
                Journey: userData.Item.Journey,
                Groups: userData.Item.Groups,
            },
        });
    } catch (err) {
        console.log(err);
    }
};
export {
    addJourney,
    createUser,
    getTable,
    addCar,
    addGroup,
    getCar,
    getUser,
    addUserToGroup,
    getGroup,
    getGroupEmissions,
    updateEmissions,
    dynamodb,
};
