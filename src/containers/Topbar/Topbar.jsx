import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

import { Logo } from '../../components';

import { authLogout } from '../../actions/auth';

import './Topbar.scss';

const Topbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const Logout = () => {
    dispatch(authLogout());
    history.push('/');
  };

  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="user">
          <span className="user__name">{user.name}</span>

          <figure className="user__thumb">
            <img src={user.thumb} alt={`foto de perfil de ${user.name}`} />
          </figure>

          <button className="user__logout" type="submit" onClick={Logout}>
            <FiLogOut />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
