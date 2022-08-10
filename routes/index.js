import { Router } from 'express';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get('/', (req,res)=> res.send({'Name':'oi'}));
routes.post('/', (req,res)=> res.send({'Name':'oi'}));
routes.put('/', (req,res)=> res.send({'Name':'oi'}));
routes.delete('/', (req,res)=> res.send({'Name':'oi'}));

module.exports = routes;
