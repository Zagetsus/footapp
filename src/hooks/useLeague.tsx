import React, {createContext, useCallback, useContext, useState} from 'react';
import {api} from '../services/api';
import {leagueFormatter} from '../helpers/league.helper';
import {ILeagueFormat} from '../interfaces/league.interface';
import {getLeagueSeasons} from '../helpers/season.helper';

interface ILeagueContext {
  league: ILeagueFormat[];
  activeLeague: ILeagueFormat;
  seasons: number[];
  setMainLeague: (data: ILeagueFormat) => void;
  getLeagues: (country: string) => Promise<void>;
}

const LeagueContext = createContext<ILeagueContext>({} as ILeagueContext);

const LeagueProvider: React.FC = ({children}) => {
  const [league, setLeague] = useState<ILeagueFormat[]>([] as ILeagueFormat[]);
  const [activeLeague, setActiveLeague] = useState<ILeagueFormat>(
    {} as ILeagueFormat,
  );
  const [seasons, setSeasons] = useState<number[]>([] as number[]);

  const getLeagues = useCallback(async (country: string) => {
    try {
      const {
        data: {response},
      } = await api.get(`leagues?country=${country}`);

      setLeague(leagueFormatter(response));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const setMainLeague = (data: ILeagueFormat) => {
    setActiveLeague(data);
    setSeasons(getLeagueSeasons(data));
  };

  return (
    <LeagueContext.Provider
      value={{league, activeLeague, seasons, setMainLeague, getLeagues}}>
      {children}
    </LeagueContext.Provider>
  );
};

const useLeague = () => {
  const context = useContext(LeagueContext);

  if (!context) {
    throw new Error('o useLeague deve ser usado com o LeagueProvider');
  }

  return context;
};

export {LeagueProvider, useLeague};
