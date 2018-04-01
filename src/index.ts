import * as bodyParser from 'body-parser';
import * as chokidar from 'chokidar';
import * as express from 'express';
import * as morgan from 'morgan';

const watcher = chokidar.watch('./');

watcher.on('ready', () => {
  watcher.on('all', () => {
    console.log('Reloading server...');
    Object.keys(require.cache).forEach(id => {
      if (/[\/\\]src[\/\\]/.test(id)) {
        delete require.cache[id];
      }
    });
  });
});

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const { routes } = await import('./routes');
  routes(req, res, next);
});

/* tslint:disable:no-console */
app.listen(3000, () => console.log('App running on port 3000'));
