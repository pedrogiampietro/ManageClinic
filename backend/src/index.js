const express = require('express')
const db = require('./models')
const authController = require('./controllers/auth')
const response = require('./middlewares/response')

const app = express()


app.use(response)
// middlewares do próprio express;
app.use(express.json())
// utilizando o URLencoded você consegue pegar o body da req;
app.use(express.urlencoded({ extended: false }))

// localhost/auth/sign-in
app.use('/auth', authController)

app.get('/', (req, res) => {
	res.send('OK')
})

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log('Server listening on 3001!')
	})
})
