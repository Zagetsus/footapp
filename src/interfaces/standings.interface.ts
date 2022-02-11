interface IStandingTeam {
  id: number;
  name: string;
  logo: string;
}

interface IStandingAll {
  played: number;
  win: number;
  lose: number;
  goals: IGoals;
}

interface IGoals {
  for: number;
  against: number;
}

interface IGames {
  played: number | null;
  win: number | null;
  draw: number | null;
  lose: number | null;
  goals: IGoals;
}

type THome = IGames;
type TAway = IGames;

export interface IStandings {
  rank: number;
  team: IStandingTeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: IStandingAll;
  home: THome;
  away: TAway;
  update: string;
}
