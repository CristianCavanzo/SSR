import { config } from './config';
import express, { Express, Request, Response } from 'express';
import { render } from './render';

const app: Express = express();

app.use(express.static('dist'));

app.get('*', (req: Request, res: Response) => {
    res.send(render(req.url));
});

app.listen(config.PORT, () => {
    console.log(`listening in http://localhost:${config.PORT}`);
});
