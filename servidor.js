const jsonServer = require('json-server');
const servidor = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

servidor.use(middlewares);
servidor.use(router);
const port = process.env.PORT || 3100;

servidor.listen(port, ()=> {
    console.log(`${port}`)
});