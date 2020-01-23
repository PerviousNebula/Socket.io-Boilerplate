import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const SERVER = new Server();

// BodyParser
SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(bodyParser.json());

// CORS
SERVER.app.use(cors({ origin: true, credentials: true }));

SERVER.app.use("/", router);

SERVER.start(() => {
   console.log(`Servidor corriendo en el puerto ${SERVER.port}`); 
});
