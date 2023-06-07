This git is a complementary to my post at https://medium.com/@daveteu/nextjs-with-google-cloud-functions-in-10-minutes-47f88e6ac27a

**Dependencies**
Node 16

**Download the git and install**

    npm install

The files that you need to configure is next.config.js. Edit the assetPrefix so Google Cloud Functions can load your .next static files.

    const  isProd = process.env.NODE_ENV === 'production'
    module.exports = {
    target:  'serverless',
    assetPrefix:  isProd ? 'https://change.this.to.your.cloudfunction.net/function' : '',
    }
**Installing gcloud - https://cloud.google.com/sdk/install**
After installation

    gcloud auth
    gcloud init
The above 2 commands will authenticate you and help you create new project.

**Google Cloud Console Setup**
Create a new project in Google Cloud (or select an existing one), and go to the API Library. Make sure the following APIs/services are enabled for your project:

* Cloud Functions API
* Cloud Deployment Manager V2 API
* Cloud Build API
* Cloud Storage
* Cloud Logging API

**Deployment**

Specify the project ID that will be used when you deploy. Retrieve the Google Cloud project ID from the console and :

* **Either** set it on the command line by running `gcloud config set project PROJECT_ID`
* **... or** update the `deploy` script in package.json to include a `--project PROJECT_ID` argument

After editing next.config.js build and deploy your project (to get your url)

    npm run build
    npm run deploy

After getting the url for your functions, edit next.config.js with the url to your function and run the 2 commands again to get your paths all updated and deploy.
