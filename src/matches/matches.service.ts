import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private readonly repo: Repository<Match>,
  ) {}

  create(dto: CreateMatchDto) {
    const e = this.repo.create(dto as any);
    return this.repo.save(e);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const r = await this.repo.findOne({ where: { id } });
    if (!r) throw new NotFoundException('Match not found');
    return r;
  }

  async update(id: number, dto: UpdateMatchDto) {
    await this.repo.update(id, dto as any);
    return this.findOne(id);
  }

  async remove(id: number) {
    const r = await this.repo.delete(id);
    return { affected: r.affected };
  }
}