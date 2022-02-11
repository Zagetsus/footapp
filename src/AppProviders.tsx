import React from 'react';
import {LeagueProvider} from './hooks/useLeague';

const AppProvider: React.FC = ({children}) => {
  return <LeagueProvider>{children}</LeagueProvider>;
};

export default AppProvider;
