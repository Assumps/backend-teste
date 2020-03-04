import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const enterprises = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email'],
    });

    return res.json(enterprises);
  }
}

export default new ProviderController();
