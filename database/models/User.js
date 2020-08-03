module.exports = (sequelize, dataTypes) => {

    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: true
        },
        remember_token: {
            type: dataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}