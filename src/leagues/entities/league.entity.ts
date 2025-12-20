import { Match } from "src/matches/entities/match.entity";
import { Team } from "src/teams/entities/team.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class League {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Team, team => team.league,{cascade: true})
    teams: Team[];

    @OneToMany(() => Match,(match) => match.league)
    matches: Match[];
}
