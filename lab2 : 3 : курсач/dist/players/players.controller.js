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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersController = void 0;
const swagger_1 = require("@nestjs/swagger");
const player_entity_1 = require("./player.entity");
const players_service_1 = require("./players.service");
const common_1 = require("@nestjs/common");
let PlayersController = class PlayersController {
    constructor(PlayersService) {
        this.PlayersService = PlayersService;
    }
    findAll() {
        return this.PlayersService.findAll();
    }
    findOne(id) {
        return this.PlayersService.findOne(+id);
    }
    update(id, updatePlayer) {
        return this.PlayersService.update(+id, updatePlayer);
    }
    create(createPlayer) {
        return this.PlayersService.create(createPlayer);
    }
    remove(id) {
        return this.PlayersService.remove(+id);
    }
    findIncomplete() {
        return this.PlayersService.findIncomplete();
    }
};
exports.PlayersController = PlayersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всех игроков' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск конкретного игрока' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить данные игрока' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, player_entity_1.Player]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создать нового игрока' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [player_entity_1.Player]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить игрока' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всех игроков в ограниченном доступе' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findIncomplete", null);
exports.PlayersController = PlayersController = __decorate([
    (0, common_1.Controller)('Players'),
    (0, swagger_1.ApiTags)('Игроки'),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersController);
//# sourceMappingURL=players.controller.js.map