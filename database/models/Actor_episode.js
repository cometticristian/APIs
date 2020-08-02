module.exports = (sequelize, dataTypes) => {

    let alias = "Actor_episode";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        episode_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    };
    let config = {
        tableName: 'actor_episode',
        timestamps: false
    }

    const Actor_episode = sequelize.define(alias, cols, config);

    return Actor_episode;
}