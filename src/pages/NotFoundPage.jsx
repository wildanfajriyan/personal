import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <header>
        <h1>404</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <p>Sorry, the page you were looking for could not be found.</p>
    </main>
  );
};

export default NotFoundPage;
