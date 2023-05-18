"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInterceptador = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let LogInterceptador = class LogInterceptador {
    intercept(contexto, proximo) {
        console.log("Antes...");
        const data = Date.now();
        const requisicao = contexto.switchToHttp().getRequest();
        return proximo.handle().pipe((0, rxjs_1.tap)(() => {
            console.log(`Url: ${requisicao.url}`);
            console.log(`Metodo: ${requisicao.method}`);
            console.log(`A execução durou ${Date.now() - data} milisegundos`);
        }));
    }
};
LogInterceptador = __decorate([
    (0, common_1.Injectable)()
], LogInterceptador);
exports.LogInterceptador = LogInterceptador;
//# sourceMappingURL=log.interceptador.js.map