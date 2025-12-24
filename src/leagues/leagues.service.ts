import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { League } from './entities/league.entity';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectRepository(League)
    private readonly repo: Repository<League>,
  ) {}

  create(dto: CreateLeagueDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll(name?: string) {
    if (name) {
      return this.repo.find({
        where: {
          name: Like(`%${name}%`),
        },
      });
    }
    return this.repo.find();
  }

  async findOne(id: number) {
    const league = await this.repo.findOne({ where: { id } });
    if (!league) throw new NotFoundException('League not found');
    return league;
  }

  async update(id: number, dto: UpdateLeagueDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const r = await this.repo.delete(id);
    return { affected: r.affected };
  }
}