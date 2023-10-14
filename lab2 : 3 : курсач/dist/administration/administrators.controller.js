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
exports.AdministratorsController = void 0;
const swagger_1 = require("@nestjs/swagger");
const administrator_entity_1 = require("./administrator.entity");
const administrators_service_1 = require("./administrators.service");
const common_1 = require("@nestjs/common");
let AdministratorsController = class AdministratorsController {
    constructor(AdministratorsService) {
        this.AdministratorsService = AdministratorsService;
    }
    findAll() {
        return this.AdministratorsService.findAll();
    }
    findOne(id) {
        return this.AdministratorsService.findOne(+id);
    }
    update(id, updateAdministrator) {
        return this.AdministratorsService.update(+id, updateAdministrator);
    }
    create(createAdministrator) {
        return this.AdministratorsService.create(createAdministrator);
    }
    remove(id) {
        return this.AdministratorsService.remove(+id);
    }
    findIncomplete() {
        this.AdministratorsService.findIncomplete();
    }
};
exports.AdministratorsController = AdministratorsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всей администрации' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск конкретного администратора' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменить администратора' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, administrator_entity_1.Administrator]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить нового администратора' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [administrator_entity_1.Administrator]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление администратора' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поиск всей администрации в ограниченном доступе' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministratorsController.prototype, "findIncomplete", null);
exports.AdministratorsController = AdministratorsController = __decorate([
    (0, common_1.Controller)('Administrators'),
    (0, swagger_1.ApiTags)('Администрация'),
    __metadata("design:paramtypes", [administrators_service_1.AdministratorsService])
], AdministratorsController);
//# sourceMappingURL=administrators.controller.js.map