import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Your Logo
          </Link>
        </Typography>
        <nav>
          <ul>
            <li>
              <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
