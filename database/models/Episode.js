module.exports = (sequelize, dataTypes) => {

    let alias = "Episode";
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
        number: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        rating: {
            type: dataTypes.DECIMAL,
            allowNull: true
        }
    };
    let config = {
        tableName: 'episodes',
        timestamps: false
    }

    const Episode = sequelize.define(alias, cols, config);

    Episode.associate = function (models) {
        Episode.belongsToMany(models.Actor, {
            as: 'actors',
            through: 'actor_episode',
            foreignKey: 'episode_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }

    return Episode;
}