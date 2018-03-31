import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';

import { routes } from './routes';

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(routes);

/* tslint:disable:no-console */
app.listen(3000, () => console.log('App running on port 3000'));
