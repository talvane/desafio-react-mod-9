import React, { useState } from 'react';
import Ink from 'react-ink';

import backgroundImageMobile from '../../assets/images/app-intro-1.jpg';
import backgroundImageDesktop from '../../assets/images/app-intro-2.jpg';

import './Login.scss';

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);

  const screenWidth = window.innerWidth;

  return (
    <main
      className="login"
      data-testid="login"
      style={{
        backgroundImage: `url(${
          isMobile || screenWidth <= 768
            ? backgroundImageMobile
            : backgroundImageDesktop
        })`,
      }}
    >
      <div className="container">
        {/*<Logo />*/}

        <h2 className="login__microcopy">
          Não toca a música inteira,
          <strong>
            {' '}
            mas toca o seu{' '}
            <span
              role="img"
              className="login__microcopy__heart"
              aria-label="Coração"
            >
              ❤️
            </span>
          </strong>
          <a href={() => {}} className="login__auth-button">
            Entrar com Spotify
            <Ink />
          </a>
        </h2>
      </div>
    </main>
  );
};

export default Login;
