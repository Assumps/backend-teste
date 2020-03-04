import Sequelize, { Model } from 'sequelize';

class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        fantasyname: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        fone: Sequelize.STRING,
        category: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        agency: Sequelize.STRING,
        account: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Enterprise;
