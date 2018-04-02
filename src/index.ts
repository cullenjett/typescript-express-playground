import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import { purgeCacheOnChange } from './utils/purgeCacheOnChange';

purgeCacheOnChange(path.resolve(__dirname, './'));

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const { routes } = await import('./routes');
  routes(req, res, next);
});

/* tslint:disable:no-console */
app.listen(3000, () => console.log('App running on port 3000'));
