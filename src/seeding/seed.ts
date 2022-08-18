const { Seeder } = require("mongo-seeding");
const CSVToJSON = require("csvtojson");
const { config } = require("dotenv");
const path = require("path");

config({ path: __dirname + "/db.env" });

const configData = {
    database: {
        port: 27017,
        host: "mongo_db",
        name: process.env.MONGODB_DATABASE,
        password: process.env.MONGODB_PASSWORD,
        username: process.env.MONGODB_USERNAME,
        options: {
            authSource: "admin",
        },
    },
    dropDatabase: true,
};

const seeding = async () => {
    try {
        const seeder = new Seeder(configData);

        const json = await CSVToJSON().fromFile(`${__dirname}/data.csv`);

        const collections = [{ name: "vaccines", documents: json }];
        await seeder.import(collections);
    } catch (err) {
        console.log({ err });
    }
};

seeding();
