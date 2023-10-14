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
exports.Club = void 0;
const swagger_1 = require("@nestjs/swagger");
const administrator_entity_1 = require("../administration/administrator.entity");
const Player_entity_1 = require("../players/Player.entity");
const typeorm_1 = require("typeorm");
let Club = class Club {
};
exports.Club = Club;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Club.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)({ example: 'ЦСКА', description: "Название клуба" }),
    __metadata("design:type", String)
], Club.prototype, "clubName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'улица Щукинская, 6', description: "Адрес клуба" }),
    __metadata("design:type", String)
], Club.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'Мы играем лучше всех!', description: "Слоган клуба" }),
    __metadata("design:type", String)
], Club.prototype, "slogan", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { array: true }),
    (0, typeorm_1.ManyToMany)((type) => administrator_entity_1.Administrator, (Administrator) => Administrator.club),
    (0, typeorm_1.JoinTable)({
        name: 'administrators',
        joinColumn: { name: 'club' },
        inverseJoinColumn: { name: 'administrators' },
    }),
    (0, swagger_1.ApiProperty)({ example: '[1, 2, 3]', description: "Массив идентификаторов администрации клуба" }),
    __metadata("design:type", Array)
], Club.prototype, "administrators", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { array: true }),
    (0, typeorm_1.ManyToMany)((type) => Player_entity_1.Player, (Player) => Player.club),
    (0, typeorm_1.JoinTable)({
        name: 'players',
        joinColumn: { name: 'club' },
        inverseJoinColumn: { name: 'players' },
    }),
    (0, swagger_1.ApiProperty)({ example: '[1, 2, 3]', description: "Массив идентификаторов игроков клуба" }),
    __metadata("design:type", Array)
], Club.prototype, "players", void 0);
exports.Club = Club = __decorate([
    (0, typeorm_1.Entity)('clubs')
], Club);
//# sourceMappingURL=Club.entity.js.map