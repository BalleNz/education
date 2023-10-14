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
exports.AdministratorsService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
const Administrator_entity_1 = require("./Administrator.entity");
const typeorm_1 = require("@nestjs/typeorm");
const club_entity_1 = require("../football clubs/club.entity");
const typeorm_2 = require("typeorm");
const incomplete_administrator_dto_1 = require("./dto/incomplete-administrator.dto");
let AdministratorsService = class AdministratorsService {
    constructor(datasourceService, administratorRepository, clubRepository) {
        this.datasourceService = datasourceService;
        this.administratorRepository = administratorRepository;
        this.clubRepository = clubRepository;
    }
    async create(AdministratorDto) {
        const administrator = this.administratorRepository.create();
        administrator.fullname = AdministratorDto.fullname;
        administrator.job = AdministratorDto.job;
        administrator.club = AdministratorDto.club;
        await this.administratorRepository.save(administrator);
        return administrator;
    }
    findOne(id) {
        return this.administratorRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const administrators = await this.administratorRepository.find({});
        return administrators;
    }
    async findIncomplete() {
        const Administrators = await this.administratorRepository.find({});
        const incompleteAdministrators = Administrators.map((Administrator) => {
            const incompleteAdministrator = new incomplete_administrator_dto_1.IncompleteAdministratorDto();
            incompleteAdministrator.id = Administrator.id;
            incompleteAdministrator.fullname = Administrator.fullname;
            return incompleteAdministrator;
        });
        return incompleteAdministrators;
    }
    async update(id, updatedAdministrator) {
        const Administrator = await this.administratorRepository.findOne({ where: { id } });
        Administrator.fullname = updatedAdministrator.fullname;
        Administrator.job = updatedAdministrator.job;
        Administrator.club = updatedAdministrator.club;
        await this.administratorRepository.save(Administrator);
        return Administrator;
    }
    remove(id) {
        this.administratorRepository.delete({ id });
    }
};
exports.AdministratorsService = AdministratorsService;
exports.AdministratorsService = AdministratorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(Administrator_entity_1.Administrator)),
    __param(2, (0, typeorm_1.InjectRepository)(club_entity_1.Club)),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdministratorsService);
//# sourceMappingURL=administrators.service.js.map