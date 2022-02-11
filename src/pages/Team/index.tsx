import React, {useCallback, useEffect, useState} from 'react';
import {
  Container,
  Content,
  Divider,
  InfoRow,
  InfoSection,
  InfoText,
  InfoTitle,
  Logo,
  NameTeam,
  PlayersContainer,
  SectionTitle,
} from './styles';
import Header from '../../components/Header';
import {api} from '../../services/api';
import PlayerCard from '../../components/PlayerCard';
import ButtonBack from '../../components/ButtonBack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ListRenderItem} from 'react-native';
import {RootStackParamList} from '../../interfaces/routes.interface';
import Loading from '../../components/Loading';

interface ITeam {
  id: number;
  name: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

interface IVenue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

interface IPlayers {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

type TeamScreenRouteProp = RouteProp<RootStackParamList, 'Team'>;

const Team: React.FC = () => {
  const [team, setTeam] = useState<ITeam>({} as ITeam);
  const [venue, setVenue] = useState<IVenue>({} as IVenue);
  const [players, setPlayers] = useState<IPlayers[]>();
  const [loading, setLoading] = useState(false);

  const route = useRoute<TeamScreenRouteProp>();

  const getTeam = useCallback(async () => {
    try {
      const {
        data: {response},
      } = await api.get(`teams?id=${route.params.id}`);
      setTeam(response[0].team);
      setVenue(response[0].venue);
    } catch (e) {
      console.log(e);
    }
  }, [route.params.id]);

  const getPlayers = useCallback(async () => {
    try {
      const {
        data: {response},
      } = await api.get(`players/squads?team=${route.params.id}`);
      setPlayers(response[0].players);
    } catch (e) {
      console.log(e);
    }
  }, [route.params.id]);

  useEffect(() => {
    const exec = async () => {
      try {
        setLoading(true);
        await getTeam();
        await getPlayers();
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    exec();
    // eslint-disable-next-line
  }, [route.params.id]);

  const renderItems: ListRenderItem<IPlayers> = ({item}) => (
    <PlayersContainer>
      <PlayerCard
        number={item.number}
        name={item.name}
        age={item.age}
        id={item.id}
        photo={item.photo}
        position={item.position}
      />
    </PlayersContainer>
  );

  return (
    <Container>
      <Header />
      <Content
        ListHeaderComponent={
          <>
            <ButtonBack />
            <Logo resizeMode={'contain'} source={{uri: team.logo}} />
            <NameTeam>{team.name}</NameTeam>

            <InfoSection>
              <InfoRow>
                <InfoTitle>Fundação</InfoTitle>
                <InfoText>{team.founded}</InfoText>
              </InfoRow>
              <InfoRow>
                <InfoTitle>País</InfoTitle>
                <InfoText>{team.country}</InfoText>
              </InfoRow>
              <Divider />
            </InfoSection>

            <InfoSection>
              <SectionTitle>Estádio</SectionTitle>

              <InfoRow>
                <InfoTitle>Nome</InfoTitle>
                <InfoText>{venue.name}</InfoText>
              </InfoRow>

              <InfoRow>
                <InfoTitle>Endereço</InfoTitle>
                <InfoText>{venue.address}</InfoText>
              </InfoRow>

              <InfoRow>
                <InfoTitle>Cidade</InfoTitle>
                <InfoText>{venue.city}</InfoText>
              </InfoRow>

              <InfoRow>
                <InfoTitle>Capacidade</InfoTitle>
                <InfoText>{venue.capacity}</InfoText>
              </InfoRow>
            </InfoSection>

            <SectionTitle>Lista de jogadores</SectionTitle>
          </>
        }
        data={players}
        keyExtractor={(_, key) => key.toString()}
        renderItem={renderItems}
      />
      <Loading show={loading} />
    </Container>
  );
};

export default Team;
