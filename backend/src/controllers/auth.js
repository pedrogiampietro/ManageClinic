const express = require('express')
const bcrypt = require('bcrypt')
const { Account } = require('../models')
const { accountSignUp, accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/messages')
const { generateJwt, generateRefreshJwt } = require('../helpers/jwt')

const router = express.Router()

const saltRounds = 10

router.post('/sign-in', accountSignIn, async (req, zres) => {
	const { email, password } = req.body
	const account = await Account.findOne({ where: { email } })

	// validar o password; // primeiro parametro é o password digitado o segundo é o que vem do banco.
	const match = account ? bcrypt.compareSync(password, account.password) : null
	if (!match) res.jsonBadRequest(getMessage('account.sigin.invalid'))

	const token = generateJwt({ id: account.id })
	const refreshToken = generateRefreshJwt({ id: account.id })

	return res.jsonOK(account, getMessage('account.signin.success'), { token, refreshToken })
})

router.post('/sign-up', accountSignUp, async (req, res) => {
	const { email, password, name } = req.body

	const checkEmail = await Account.findOne({ where: { email } })

	if (checkEmail) {
		return res.jsonBadRequest(getMessage('account.signup.email_exists'))
	}

	const hash = bcrypt.hashSync(password, saltRounds)
	const newAccount = await Account.create({
		name,
		email,
		password: hash,
	})

	const token = generateJwt({ id: newAccount.id })
	const refreshToken = generateRefreshJwt({ id: newAccount.id })

	return res.jsonOK(newAccount, getMessage('account.signup.success'), {
		token,
		refreshToken,
	})
})

module.exports = router
