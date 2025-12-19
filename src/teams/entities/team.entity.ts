import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { League } from '../../leagues/entities/league.entity';
import { Match } from '../../matches/entities/match.entity';

@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => League, (league) => league.teams, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'league_id' })
  league: League;

  @Column({ name: 'league_id', nullable: true })
  leagueId: number;

  @OneToMany(() => Match, (m) => m.homeTeam)
  homeMatches: Match[];

  @OneToMany(() => Match, (m) => m.awayTeam)
  awayMatches: Match[];
}