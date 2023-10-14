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
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const datasource_service_1 = require("../datasource/datasource.service");
const Player_entity_1 = require("./Player.entity");
const typeorm_1 = require("@nestjs/typeorm");
const club_entity_1 = require("../football clubs/club.entity");
const typeorm_2 = require("typeorm");
const create_incomplete_PlayerDTO_1 = require("./dto/create-incomplete-PlayerDTO");
let PlayersService = class PlayersService {
    constructor(datasourceService, PlayerRepository, clubRepository) {
        this.datasourceService = datasourceService;
        this.PlayerRepository = PlayerRepository;
        this.clubRepository = clubRepository;
    }
    async create(PlayerDto) {
        const Player = this.PlayerRepository.create();
        Player.fullname = PlayerDto.fullname;
        Player.position = PlayerDto.position;
        Player.club = PlayerDto.club;
        await this.PlayerRepository.save(Player);
        return Player;
    }
    findOne(id) {
        return this.PlayerRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const Players = await this.PlayerRepository.find({});
        return Players;
    }
    async findIncomplete() {
        const Players = await this.PlayerRepository.find({});
        const incompletePlayers = Players.map((Player) => {
            const incompletePlayer = new create_incomplete_PlayerDTO_1.IncompletePlayerDto();
            incompletePlayer.id = Player.id;
            incompletePlayer.fullname = Player.fullname;
            return incompletePlayer;
        });
        return incompletePlayers;
    }
    async update(id, updatedPlayer) {
        const Player = await this.PlayerRepository.findOne({ where: { id } });
        Player.fullname = updatedPlayer.fullname;
        Player.position = updatedPlayer.position;
        Player.club = updatedPlayer.club;
        await this.PlayerRepository.save(Player);
        return Player;
    }
    remove(id) {
        this.PlayerRepository.delete({ id });
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(Player_entity_1.Player)),
    __param(2, (0, typeorm_1.InjectRepository)(club_entity_1.Club)),
    __metadata("design:paramtypes", [datasource_service_1.DatasourceService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PlayersService);
//# sourceMappingURL=players.service.js.map