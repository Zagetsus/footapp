import { ILeague, ILeagueFormat, ILeagueGeneral } from "../interfaces/league.interface";
import {ICountry} from '../interfaces/country.interface';
import { ISeason, ISeasonGeneral } from "../interfaces/season.interface";

function _setLeague(league: ILeague) {
  return {
    id: league.id,
    name: league.name,
    type: league.type,
    logo: league.logo,
  };
}

function _setCountry(country: ICountry) {
  return {
    name: country.name,
    code: country.code,
    flag: country.flag,
  };
}

function _setSeason(season: ISeasonGeneral[]) {
  return season.reduce((acc: ISeason[], curr) => {
    return acc.concat({
      year: curr.year,
      start: curr.start,
      end: curr.start,
      current: curr.current,
    });
  }, []);
}

export function leagueFormatter(data: ILeagueGeneral[]) {
  return data.reduce((acc: ILeagueFormat[], curr) => {
    const newLeague = _setLeague(curr.league);
    const country = _setCountry(curr.country);
    const seasons = _setSeason(curr.seasons);

    return acc.concat({
      ...newLeague,
      country,
      seasons,
    });
  }, []);
}
