import { Router } from 'express';

import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';
import EnterpriseController from './app/controllers/EnterpriseController';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();

routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.get('/provider', ProviderController.index);
routes.put('/users', Usercontroller.update);
routes.get('/enterprise', EnterpriseController.index);
routes.post('/enterprise', EnterpriseController.store);
routes.put('/enterprise', EnterpriseController.update);

export default routes;
