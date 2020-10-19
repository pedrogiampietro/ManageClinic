const jwt = require('jsonwebtoken')

const tokenPrivateKey = 'ManageSch'
const refreshTokenPrivateKey = 'ManageSchRfs'
const options = { expiresIn: '30 minutes' }
const refreshOptions = { expiresIn: '30 days' }

const generateJwt = (payload) => {
	return jwt.sign(payload, tokenPrivateKey, options)
}

const generateRefreshJwt = (payload) => {
	return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions)
}

const verifyJwt = (token) => {
	return jwt.verify(token, tokenPrivateKey)
}

const verifyRefreshJwt = (token) => {
	return jwt.verify(token, refreshTokenPrivateKey)
}

module.exports = {
	generateJwt,
	generateRefreshJwt,
	verifyJwt,
	verifyRefreshJwt,
}
