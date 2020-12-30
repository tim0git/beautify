import {gql} from '@apollo/client';

export const GET_LAUNCH_BY_ID = gql`
  query GetLaunchById($launchId: ID!) {
    launch(id: $launchId) {
      id
      site
    }
  }
`;
