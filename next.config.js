const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    target: 'serverless',
    assetPrefix: isProd ? 'https://us-central1-react-test-389022.cloudfunctions.net/nextjs' : '',
}
