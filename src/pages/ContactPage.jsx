import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <main>
      <header>
        <Link to="/">← Back</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <p>Want to get touch? I can be found</p>
      <ul>
        <li>via email at wildanfajriyann@gmail.com</li>
        <li>
          on GitHub at{' '}
          <a href="https://github.com/wildanfajriyan" target="_blank">
            wildanfajriyan
          </a>
        </li>
        <li>
          on LinkedIn at{' '}
          <a
            href="https://www.linkedin.com/in/wildan-fajriyan/"
            target="_blank"
          >
            wildan fajriyan
          </a>
        </li>
      </ul>
    </main>
  );
};

export default ContactPage;
