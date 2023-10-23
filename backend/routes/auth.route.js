const { Router } = require('express')
const User = require('../models/User')
const router = Router()

router.post('/register', async (req, res) => {
	try {
		const { login, password } = req.body

		const isUsed = await User.findOne({ login })

		if (isUsed) {
			return res.status(300).json({
				message: `Пользователь с логином: ${login} уже есть в базе, если это Вы, то пробуйте авторизоваться, иначе используйте другой логин для регистрации`,
			})
		}

		const user = new User({
			login,
			password,
		})

		await user.save()

		res.status(201).json({ message: `Пользователь с логином: ${login} создан` })
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
