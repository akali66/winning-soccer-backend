import { IsInt, IsOptional, IsString, IsNumberString, IsNumber } from 'class-validator';

export class CreateMatchDto {
  @IsOptional() @IsInt() leagueId?: number;
  @IsOptional() @IsInt() homeTeamId?: number;
  @IsOptional() @IsInt() awayTeamId?: number;
  @IsOptional() @IsString() score?: string;

  // h2h & form fields: use IsOptional and IsInt (0/1/2)
  @IsOptional() @IsInt() historyH2H1?: number;
  @IsOptional() @IsInt() historyH2H2?: number;
  @IsOptional() @IsInt() historyH2H3?: number;

  @IsOptional() @IsInt() homeForm1?: number;
  @IsOptional() @IsInt() homeForm2?: number;
  @IsOptional() @IsInt() homeForm3?: number;
  @IsOptional() @IsInt() homeForm4?: number;
  @IsOptional() @IsInt() homeForm5?: number;
  @IsOptional() @IsInt() homeForm6?: number;

  @IsOptional() @IsInt() awayForm1?: number;
  @IsOptional() @IsInt() awayForm2?: number;
  @IsOptional() @IsInt() awayForm3?: number;
  @IsOptional() @IsInt() awayForm4?: number;
  @IsOptional() @IsInt() awayForm5?: number;
  @IsOptional() @IsInt() awayForm6?: number;

  // decimal values as strings or numbers are accepted; we use optional strings
  @IsOptional() asiaInitHomeOdds?: string;
  @IsOptional() asiaInitHandicap?: string;
  @IsOptional() asiaInitAwayOdds?: string;

  @IsOptional() asiaCurHomeOdds?: string;
  @IsOptional() asiaCurHandicap?: string;
  @IsOptional() asiaCurAwayOdds?: string;

  @IsOptional() euroInitWin?: string;
  @IsOptional() euroInitDraw?: string;
  @IsOptional() euroInitLose?: string;
  @IsOptional() euroCurWin?: string;
  @IsOptional() euroCurDraw?: string;
  @IsOptional() euroCurLose?: string;

  @IsOptional() theoryWin?: string;
  @IsOptional() theoryDraw?: string;
  @IsOptional() theoryLose?: string;

  @IsOptional() @IsString() theoryWater?: string;
  @IsOptional() @IsString() remark?: string;
}