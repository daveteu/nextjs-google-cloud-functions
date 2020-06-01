const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    target: 'serverless',
    assetPrefix: isProd ? 'https://asia-east2-nextjs-serverless.cloudfunctions.net/nextjs' : '',
}