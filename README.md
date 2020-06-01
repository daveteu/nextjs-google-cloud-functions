This git is a complementary to my post at https://medium.com/@daveteu/nextjs-with-google-cloud-functions-in-10-minutes-47f88e6ac27a

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

**Deployment**
After editing next.config.js build and deploy your project (to get your url)

    npm run build
    npm run deploy

After getting the url for your functions, edit next.config.js with the url to your function and run the 2 commands again to get your paths all updated and deploy.