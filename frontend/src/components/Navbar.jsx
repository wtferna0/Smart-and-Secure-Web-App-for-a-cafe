import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/menu" style={{ margin: '10px' }}>Menu</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
      <Link to="/play" style={{ margin: '10px' }}>Play Now</Link>
      <Link to="/cart" style={{ margin: '10px' }}>Cart</Link>
      <Link to="/login" style={{ margin: '10px' }}>Login</Link>
    </nav>
  );
}
