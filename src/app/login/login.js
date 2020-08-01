import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Button from '../components/button/button';
import BackgroundVideo from '../components/backgroundVideo/backgroundVideo';

import backgroundMp4 from '../../assets/snowy_background.mp4';
import backgroundWebm from '../../assets/snowy_background.webm';
import backgroundPoster from '../../assets/snowy_background_poster.png';

import './login.css';

function Login(props) {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/family' } };
  const login = () => {
    props.authentication.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className="Login">
      <BackgroundVideo
        mp4={backgroundMp4}
        webm={backgroundWebm}
        poster={backgroundPoster}
      />

      <div className="Login__content">
        <section className="Login__content__form">
          <header className="Login__content__form__header">
            Santa's Little Helper
          </header>
          <Button form="LoginForm" type="button" onClick={login}>
            Sign in
          </Button>
        </section>
      </div>
    </div>
  );
}

export default Login;
