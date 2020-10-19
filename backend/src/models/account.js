module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define('Account', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})

	Account.prototype.toJSON = function () {
		const values = { ...this.get() }
		delete values.password
		return values
	}

	return Account
}
