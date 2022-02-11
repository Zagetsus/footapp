import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Standings: {leagueId: number; season: number};
  Team: {id: string};
};

export type INavigation = StackNavigationProp<any>;
