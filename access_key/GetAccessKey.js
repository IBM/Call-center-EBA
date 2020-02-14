const fs = require('fs')
const jwt = require('jsonwebtoken')


const settings = {
    url: 'https://eba.ibm.com/',
    key: 'PATH to the private key',
    iss: 'https://idaas.iam.ibm.com',
    sub: '<EMAIL>',
    name: '<NAME>'
}
let claims = {
    iss: settings.iss,
    sub: settings.sub,
    name: settings.name
}

let access_token = jwt.sign(claims, fs.readFileSync(settings.key), { algorithm: 'RS256' })
console.log(access_token)