import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { League } from '../../leagues/entities/league.entity';
import { Team } from '../../teams/entities/team.entity';

@Entity({ name: 'matches' })
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  // 关联联赛
  @ManyToOne(() => League, (l) => l.matches, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'league_id' })
  league: League;

  @Column({ name: 'league_id', nullable: true })
  leagueId: number;

  // 主队与客队
  @ManyToOne(() => Team, (t) => t.homeMatches, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'home_team_id' })
  homeTeam: Team;

  @Column({ name: 'home_team_id', nullable: true })
  homeTeamId: number;

  @ManyToOne(() => Team, (t) => t.awayMatches, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'away_team_id' })
  awayTeam: Team;

  @Column({ name: 'away_team_id', nullable: true })
  awayTeamId: number;

  @Column({ name: 'home_team_rank', nullable: true })
  homeTeamRank: number;

  @Column({ name: 'away_team_rank', nullable: true })
  awayTeamRank: number;

  @Column({ name: 'score', nullable: true })
  score: string; // 比分结果，例如 "2:3"

  // 历史交锋 1-3
  @Column({ name: 'history_h2h1', type: 'tinyint', nullable: true })
  historyH2H1: number;

  @Column({ name: 'history_h2h2', type: 'tinyint', nullable: true })
  historyH2H2: number;

  @Column({ name: 'history_h2h3', type: 'tinyint', nullable: true })
  historyH2H3: number;

  // 主队往绩 1-6
  @Column({ name: 'home_form1', type: 'tinyint', nullable: true }) homeForm1: number;
  @Column({ name: 'home_form2', type: 'tinyint', nullable: true }) homeForm2: number;
  @Column({ name: 'home_form3', type: 'tinyint', nullable: true }) homeForm3: number;
  @Column({ name: 'home_form4', type: 'tinyint', nullable: true }) homeForm4: number;
  @Column({ name: 'home_form5', type: 'tinyint', nullable: true }) homeForm5: number;
  @Column({ name: 'home_form6', type: 'tinyint', nullable: true }) homeForm6: number;

  // 客队往绩 1-6
  @Column({ name: 'away_form1', type: 'tinyint', nullable: true }) awayForm1: number;
  @Column({ name: 'away_form2', type: 'tinyint', nullable: true }) awayForm2: number;
  @Column({ name: 'away_form3', type: 'tinyint', nullable: true }) awayForm3: number;
  @Column({ name: 'away_form4', type: 'tinyint', nullable: true }) awayForm4: number;
  @Column({ name: 'away_form5', type: 'tinyint', nullable: true }) awayForm5: number;
  @Column({ name: 'away_form6', type: 'tinyint', nullable: true }) awayForm6: number;

  // 欧洲赔率 初始 & 当前
  @Column({ name: 'euro_init_win', type: 'decimal', precision: 6, scale: 2, nullable: true })
  euroInitWin: string;

  @Column({ name: 'euro_init_draw', type: 'decimal', precision: 6, scale: 2, nullable: true })
  euroInitDraw: string;

  @Column({ name: 'euro_init_lose', type: 'decimal', precision: 6, scale: 2, nullable: true })
  euroInitLose: string;

  @Column({ name: 'euro_cur_win', type: 'decimal', precision: 6, scale: 2, nullable: true })
  euroCurWin: string;

  @Column({ name: 'euro_cur_draw', type: 'decimal', precision: 6, scale: 2, nullable: true })
  euroCurDraw: string;

  @Column({ name: 'euro_cur_lose', type: 'decimal', precision: 6, scale: 2, nullable: true })
  euroCurLose: string;

  // 亚洲盘口 初始 & 当前
  @Column({ name: 'asia_init_home_odds', type: 'decimal', precision: 6, scale: 2, nullable: true })
  asiaInitHomeOdds: string;

  @Column({ name: 'asia_init_handicap', type: 'decimal', precision: 6, scale: 2, nullable: true })
  asiaInitHandicap: string;

  @Column({ name: 'asia_init_away_odds', type: 'decimal', precision: 6, scale: 2, nullable: true })
  asiaInitAwayOdds: string;

  @Column({ name: 'asia_cur_home_odds', type: 'decimal', precision: 6, scale: 2, nullable: true })
  asiaCurHomeOdds: string;

  @Column({ name: 'asia_cur_handicap', type: 'decimal', precision: 6, scale: 2, nullable: true })
  asiaCurHandicap: string;

  @Column({ name: 'asia_cur_away_odds', type: 'decimal', precision: 6, scale: 2, nullable: true })
  asiaCurAwayOdds: string;

  // 理论赔率
  @Column({ name: 'theory_win', type: 'decimal', precision: 6, scale: 2, nullable: true })
  theoryWin: string;

  @Column({ name: 'theory_draw', type: 'decimal', precision: 6, scale: 2, nullable: true })
  theoryDraw: string;

  @Column({ name: 'theory_lose', type: 'decimal', precision: 6, scale: 2, nullable: true })
  theoryLose: string;

  @Column({ name: 'theory_water', type: 'varchar', length: 255, nullable: true })
  theoryWater: string;

  @Column({ name: 'remark', type: 'varchar', length: 1000, nullable: true })
  remark: string;
}