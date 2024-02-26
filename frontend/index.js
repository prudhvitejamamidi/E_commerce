import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Your Logo</Link>
      <nav>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;