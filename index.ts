import Server from './classes/server';
import { SERVER_PORT } from './global/enviroment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const server = Server.instance;

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//Asginando Servicios de Rutas
server.app.use('/', router);

//Configurarción de cors
server.app.use(cors({ origin: true, credentials: true }));

server.start(() => {
    console.log(`Servidor Corriendo en el puerto ${SERVER_PORT}`);
});