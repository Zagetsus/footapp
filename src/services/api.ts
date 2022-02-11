import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-key': '53dbfbd6bdace64e3f53ac8bd0609e34',
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
});
