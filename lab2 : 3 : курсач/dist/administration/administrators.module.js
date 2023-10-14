"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorsModule = void 0;
const common_1 = require("@nestjs/common");
const administrators_service_1 = require("./administrators.service");
const administrators_controller_1 = require("./administrators.controller");
const datasource_module_1 = require("../datasource/datasource.module");
const administrator_entity_1 = require("./administrator.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Player_entity_1 = require("../players/Player.entity");
const Club_entity_1 = require("../football clubs/Club.entity");
let AdministratorsModule = class AdministratorsModule {
};
exports.AdministratorsModule = AdministratorsModule;
exports.AdministratorsModule = AdministratorsModule = __decorate([
    (0, common_1.Module)({
        controllers: [administrators_controller_1.AdministratorsController],
        providers: [administrators_service_1.AdministratorsService],
        imports: [
            datasource_module_1.DatasourceModule,
            typeorm_1.TypeOrmModule.forFeature([administrator_entity_1.Administrator, Player_entity_1.Player, Club_entity_1.Club]),
        ],
    })
], AdministratorsModule);
//# sourceMappingURL=administrators.module.js.map