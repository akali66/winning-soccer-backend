import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './entities/league.entity';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
  providers: [LeaguesService],
  controllers: [LeaguesController],
  exports: [LeaguesService],
})
export class LeaguesModule {}