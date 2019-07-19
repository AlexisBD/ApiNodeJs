"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = (Cliente) => {
    Cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.mesanjes = (Cliente, io) => {
    Cliente.on('mesanjes', (payload) => {
        console.log('Mensaje Recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
