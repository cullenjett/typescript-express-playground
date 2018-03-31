import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world');
});

/* tslint:disable:no-console */
app.listen(3000, () => console.log('App running on port 3000'));
