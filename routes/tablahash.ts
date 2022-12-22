import {Router} from 'express';
import {getTablaHash, gethastTexto, getStack, getQueue} from "../controllers/tablahash";

const route = Router();

route.get('/', getTablaHash);
route.get('/text', gethastTexto);
route.get('/stack', getStack);
route.get('/queue', getQueue);

export default route;