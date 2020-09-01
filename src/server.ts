import express, { Router } from 'express';

import UsersController from './controllers/UsersController';
import GroupsController from './controllers/GroupsController';

import './database';

const app = express();

const routes = Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.store);

routes.get('/groups', GroupsController.index);
routes.post('/groups', GroupsController.store);

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333');
});
