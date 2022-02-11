import {ILeagueFormat} from '../interfaces/league.interface';
import {ISeasonOptions} from '../interfaces/season.interface';

export function getLeagueSeasons(league: ILeagueFormat) {
  return league.seasons.reduce((acc: ISeasonOptions[], curr) => {
    return acc.concat({
      year: curr.year,
    });
  }, []);
}

export function getCurrentSeason(league: ILeagueFormat) {
  const current = league.seasons.find(item => item.current);

  return current?.year;
}
