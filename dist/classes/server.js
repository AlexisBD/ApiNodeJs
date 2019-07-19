"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enviroment_1 = require("../global/enviroment");
const socket_io_1 = __importDefault(require("socket.io"));
const socket = __importStar(require("../sockets/socket"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = enviroment_1.SERVER_PORT;
        this.httServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httServer);
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharScokets() {
        console.log('Escuchando Conexión');
        this.io.on('connection', cliente => {
            console.log('Cliente Conectado');
            socket.mesanjes(cliente, this.io);
            socket.desconectar(cliente);
        });
    }
    start(callback) {
        this.httServer.listen(this.port, callback());
    }
}
exports.default = Server;
