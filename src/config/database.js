module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5437,
  username: 'postgres',
  password: 'fitcard',
  database: 'fitcard-empresas',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
