import {ICountry} from './country.interface';
import {ISeason, ISeasonGeneral} from './season.interface';

export interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
};

export interface ILeagueGeneral {
  league: ILeague;
  country: ICountry;
  seasons: ISeasonGeneral[];
}

export interface ILeagueFormat extends ILeague {
  country: ICountry;
  seasons: ISeason[];
}
