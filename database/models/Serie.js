module.exports = (sequelize, dataTypes) => {

    let alias = "Serie";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING,
            allowNull: true
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        end_date: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    };
    let config = {
        tableName: 'series',
        timestamps: false
    }

    const Serie = sequelize.define(alias, cols, config);

    Serie.associate = function (models) {
        Serie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        })
    }

    return Serie;
}