"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const swagger_1 = require("@nestjs/swagger");
const Club_entity_1 = require("../football clubs/Club.entity");
const typeorm_1 = require("typeorm");
let Player = class Player {
};
exports.Player = Player;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    (0, swagger_1.ApiProperty)({ example: 'Зубенко Михаил Петрович', description: "Полное имя" }),
    __metadata("design:type", String)
], Player.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Нападающий', description: "Позиция" }),
    __metadata("design:type", String)
], Player.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.ManyToMany)((type) => Club_entity_1.Club, (club) => club.players),
    (0, typeorm_1.JoinTable)({
        name: 'clubs',
        joinColumn: { name: 'players' },
        inverseJoinColumn: { name: 'club' },
    }),
    (0, swagger_1.ApiProperty)({ example: '2', description: "Идентификатор клуба" }),
    __metadata("design:type", Number)
], Player.prototype, "club", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)('players')
], Player);
//# sourceMappingURL=Player.entity.js.map