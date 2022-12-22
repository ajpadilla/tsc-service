import express, { Application } from 'express';
import userRoutes from "../routes/usuarios";
import tablaHashRoutes from "../routes/tablahash";
import cors from 'cors';
import db from "../db/connection";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usurios: '/api/usuarios',
        tablahash: '/api/tablahash'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';

        this.dbConnection();
        this.middleware();

        // Definir mis rutas
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error('');
        }
    }

    middleware() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usurios, userRoutes);
        this.app.use(this.apiPaths.tablahash, tablaHashRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo con exito en el perto', + this.port);
        });
    }
}

export default Server;