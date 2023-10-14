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
exports.ClubsService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
const Club_entity_1 = require("./Club.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const create_incomplete_ClubDTO_1 = require("./dto/create-incomplete-ClubDTO");
let ClubsService = class ClubsService {
    constructor(datasourceService, ClubRepository) {
        this.datasourceService = datasourceService;
        this.ClubRepository = ClubRepository;
    }
    async create(ClubDto) {
        const Club = this.ClubRepository.create();
        Club.clubName = ClubDto.clubName;
        Club.address = ClubDto.address;
        Club.slogan = ClubDto.slogan;
        Club.administrators = ClubDto.administrators;
        Club.players = ClubDto.players;
        await this.ClubRepository.save(Club);
        return Club;
    }
    findOne(id) {
        return this.ClubRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const Clubs = await this.ClubRepository.find({});
        return Clubs;
    }
    async findIncomplete() {
        const Clubs = await this.ClubRepository.find({});
        const incompleteClubs = Clubs.map((Club) => {
            const incompleteClub = new create_incomplete_ClubDTO_1.IncompleteClubDto();
            incompleteClub.id = Club.id;
            incompleteClub.clubName = Club.clubName;
            incompleteClub.slogan = Club.slogan;
            return incompleteClub;
        });
        return incompleteClubs;
    }
    async update(id, updatedClub) {
        const Club = await this.ClubRepository.findOne({ where: { id } });
        Club.clubName = updatedClub.clubName;
        Club.address = updatedClub.address;
        Club.slogan = updatedClub.slogan;
        Club.administrators = updatedClub.administrators;
        Club.players = updatedClub.players;
        await this.ClubRepository.save(Club);
        return Club;
    }
    remove(id) {
        this.ClubRepository.delete({ id });
    }
};
exports.ClubsService = ClubsService;
exports.ClubsService = ClubsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(Club_entity_1.Club)),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService,
        typeorm_2.Repository])
], ClubsService);
//# sourceMappingURL=clubs.service.js.map