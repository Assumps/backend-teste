import Sequelize from 'sequelize';

import User from '../app/models/User';
import Enterprise from '../app/models/Enterprise';

import databaseConfig from '../config/database';

const models = [User, Enterprise];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
