import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <header>
        <h1>Wildan Fajriyan🌳</h1>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <p>Hello, I&apos;m Wildan</p>
      <p>
        I&apos;m a passionate student with a keen interest in web development.
        My focus is on creating clean, efficient code and visually appealing
        designs that engage users. My favorite technologies right now are:
        React.js, Typescript, Node.js, and PostgreSQL.
      </p>
    </main>
  );
};

export default Home;
