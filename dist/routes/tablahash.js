"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tablahash_1 = require("../controllers/tablahash");
const route = (0, express_1.Router)();
route.get('/', tablahash_1.getTablaHash);
route.get('/text', tablahash_1.gethastTexto);
route.get('/stack', tablahash_1.getStack);
route.get('/queue', tablahash_1.getQueue);
exports.default = route;
//# sourceMappingURL=tablahash.js.map