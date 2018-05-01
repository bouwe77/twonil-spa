import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header-logo">
        <Link className='logo' to='/'>
          TWO NIL football manager game
        </Link>
      </div>
      <div className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-listitem">
            <NavLink className='header-nav-link' activeClassName='header-nav-link-active' to='/games' exact>
              Games
            </NavLink>
          </li>
          <li className="header-nav-listitem">
            <NavLink className='header-nav-link' activeClassName='header-nav-link-active' to='#'>
              Profile
            </NavLink>
          </li>
          <li className="header-nav-listitem">
            <NavLink className='header-nav-link' activeClassName='header-nav-link-active' to='#'>
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
