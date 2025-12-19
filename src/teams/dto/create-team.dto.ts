import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsInt()
  leagueId?: number;
}