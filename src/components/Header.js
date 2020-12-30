import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header as Hea } from 'semantic-ui-react';

const Header = () => (
  <header>
    <Hea size='huge' style={{marginTop: '60px', marginLeft: '20px'}}><h1>Expensify</h1></Hea>
    <Menu style={{marginTop: '40px'}}>
    <Menu.Item><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></Menu.Item>
    <Menu.Item><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></Menu.Item>
    <Menu.Item><NavLink to="/help" activeClassName="is-active">Help</NavLink></Menu.Item>
    </Menu>
  </header>
);

export default Header;
