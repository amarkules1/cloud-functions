const GoogleCloudStorage = require('@google-cloud/storage');

const GOOGLE_CLOUD_PROJECT_ID = ''; // TODO - set up to retrieve from package.json

const GOOGLE_CLOUD_KEYFILE = ''; // TODO - set up to retrieve from package.json


const storage = GoogleCloudStorage({
    projectId: GOOGLE_CLOUD_PROJECT_ID,
    keyFilename: GOOGLE_CLOUD_KEYFILE,
});