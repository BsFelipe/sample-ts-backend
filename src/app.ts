import express from 'express';
import routes from './routes/router';
import errorHandler from './middlewares/errorHandler';

class App {
  app
  constructor() {
    this.app = express();
    this.middewares();
    this.routes();
    this.handleErrors();

  }
  middewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api', routes);
  }

  handleErrors() {
    this.app.use(errorHandler);
  }
}

export default new App().app;
