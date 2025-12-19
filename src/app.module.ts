import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaguesModule } from './leagues/leagues.module';
import { TeamsModule } from './teams/teams.module';
import { MatchesModule } from './matches/matches.module';
import { ConfigModule } from '@nestjs/config';
import { League } from './leagues/entities/league.entity';
import { Team } from './teams/entities/team.entity';
import { Match } from './matches/entities/match.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: Number(process.env.DB_PORT ?? 3306),
      username: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASS ?? 'akali1024',
      database: process.env.DB_NAME ?? 'winning_soccer_db',
      entities: [League, Team, Match],
      synchronize: true, // 开发环境下设为true，会自动根据代码建表，生产环境请关闭
      logging: true,
    }),
    LeaguesModule,
    TeamsModule,
    MatchesModule,
  ]
})
export class AppModule {}
