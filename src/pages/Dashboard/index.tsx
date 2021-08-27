import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            {/* <img src={user.avatar_url} alt={user.name} /> */}
            <img
              src="https://avatars.githubusercontent.com/u/54812539?v=4"
              alt="Igor Jales"
            />

            <div>
              <span>Bem-vindo,</span>
              {/* <strong> {user.name} </strong> */}
              <strong>Igor Jales</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
