import React, {useCallback, useEffect, useState} from 'react';
import {ListRenderItem} from 'react-native';
import {
  Card,
  Container,
  Content,
  FlatHeader,
  LeagueCountryHeader,
  LeagueTitle,
} from './styles';
import Header from '../../components/Header';
import {api} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import LeagueCard from '../../components/LeagueCard';
import Select from '../../components/Select';
import Globe from '../../assets/svg/globe.svg';
import {useLeague} from '../../hooks/useLeague';
import {ILeagueFormat} from '../../interfaces/league.interface';
import {getCurrentSeason} from '../../helpers/season.helper';
import {INavigation} from '../../interfaces/routes.interface';
import Loading from '../../components/Loading';

interface ICountry {
  name: string;
  code: string;
  flag: string;
}

const Home: React.FC = () => {
  const [country, setCountry] = useState<ICountry>({
    code: 'BR',
    flag: 'https://media.api-sports.io/flags/br.svg',
    name: 'Brazil',
  } as ICountry);
  const [countries, setCountries] = useState<ICountry[]>([] as ICountry[]);
  const [loading, setLoading] = useState(false);

  const {league, setMainLeague, getLeagues} = useLeague();

  const navigation = useNavigation<INavigation>();

  const getCountries = useCallback(async () => {
    try {
      const {
        data: {response},
      } = await api.get('/countries');
      setCountries(response);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const setActiveLeague = (item: ILeagueFormat) => {
    setMainLeague(item);

    navigation.navigate('Standings', {
      leagueId: item.id,
      season: getCurrentSeason(item),
    });
  };

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const exec = async () => {
      try {
        await setLoading(true);
        await getLeagues(country.name);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    exec();
    // eslint-disable-next-line
  }, [country]);

  const renderItem: ListRenderItem<any> = ({item}) => (
    <Card>
      <LeagueCard
        action={() => setActiveLeague(item)}
        image={item.logo}
        name={item.name}
      />
    </Card>
  );

  return (
    <Container>
      <Header />
      <Content
        data={league}
        ListHeaderComponent={() => (
          <FlatHeader>
            <LeagueCountryHeader>
              <LeagueTitle>Ligas</LeagueTitle>
              <Select
                label={'País'}
                active={country}
                setActive={setCountry}
                options={countries}
                name={'name'}
                icon={<Globe />}
              />
            </LeagueCountryHeader>
          </FlatHeader>
        )}
        keyExtractor={(_, key) => key.toString()}
        renderItem={renderItem}
      />
      <Loading show={loading} />
    </Container>
  );
};

export default Home;
