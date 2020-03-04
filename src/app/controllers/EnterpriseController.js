import * as Yup from 'yup';
import Enterprise from '../models/Enterprise';

class EnterpriseController {
  async store(req, res) {
    /*
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }
    */
    const enterpriseEmailExist = await Enterprise.findOne({
      where: { email: req.body.email },
    });

    const enterpriseCNPJExist = await Enterprise.findOne({
      where: { cnpj: req.body.cnpj },
    });

    if (enterpriseCNPJExist) {
      return res.status(400).json({ error: 'CNPJ Already exist.' });
    }

    if (enterpriseEmailExist) {
      return res.status(400).json({ error: 'Email Already exist.' });
    }

    const {
      id,
      fantasyname,
      cnpj,
      email,
      address,
      city,
      state,
      fone,
      category,
      status,
      agency,
      account,
    } = await Enterprise.create(req.body);

    return res.json({
      id,
      fantasyname,
      cnpj,
      email,
      address,
      city,
      state,
      fone,
      category,
      status,
      agency,
      account,
    });
  }

  async index(req, res) {
    const enterprises = await Enterprise.findAll({
      where: { status: true },
    });

    return res.json(enterprises);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      fantasyname: Yup.string().required(),
      cnpj: Yup.string()
        .required()
        .min(14),
      email: Yup.string()
        .email()
        .required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      fone: Yup.number()
        .required()
        .min(9),
      category: Yup.string().required(),
      status: Yup.bool().required(),
      agency: Yup.string().required(),
      account: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }

    const { cnpj, email } = req.body;

    const user = await Enterprise.findByPk(req.userId);

    if (email !== Enterprise.email) {
      const EnterpiseExists = await Enterprise.findOne({ where: { email } });

      if (EnterpiseExists) {
        return res.status(400).json({ error: 'Enterprise Already exist.' });
      }
    }

    if (cnpj !== Enterprise.cnpj) {
      const EnterpiseExists = await Enterprise.findOne({ where: { cnpj } });

      if (EnterpiseExists) {
        return res.status(400).json({ error: 'Enterprise Already exist.' });
      }
    }

    const {
      id,
      fantasyname,
      address,
      city,
      state,
      fone,
      category,
      status,
      agency,
      account,
    } = await user.update(req.body);

    return res.json({
      id,
      fantasyname,
      address,
      city,
      state,
      fone,
      category,
      status,
      agency,
      account,
    });
  }
}

export default new EnterpriseController();
