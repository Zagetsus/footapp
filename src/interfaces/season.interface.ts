export interface ISeason {
  year: number;
  start: string;
  end: string;
  current: boolean;
};

export type ISeasonOptions = Omit<ISeason, 'start' | 'end' | 'current'>;

export interface ICoverage {
  fixtures: IFixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface IFixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface ISeasonGeneral extends ISeason {
  coverage: ICoverage;
}
