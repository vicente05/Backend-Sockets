import Server from './class/server';
import router from './routes/routes';
import bodyParse from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//=================================================
// BodyParse 
//=================================================

server.app.use( bodyParse.urlencoded({ extended: true }));
server.app.use( bodyParse.json() );

//=================================================
// CORS 
//=================================================

server.app.use( cors({ origin:true, credentials:true }));

//=================================================
// Rutas Servicios
//=================================================

server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
})



