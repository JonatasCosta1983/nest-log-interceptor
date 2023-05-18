"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcialUsuarioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_usuario_dto_1 = require("./create-usuario.dto");
class ParcialUsuarioDto extends (0, mapped_types_1.PartialType)(create_usuario_dto_1.CreateUsuarioDto) {
}
exports.ParcialUsuarioDto = ParcialUsuarioDto;
//# sourceMappingURL=parcial-usuario.dto.js.map