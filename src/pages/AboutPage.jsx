import { Link } from 'react-router-dom';
import { projects } from '../data';
import Project from '../components/Project';

const AboutPage = () => {
  return (
    <main>
      <header>
        <Link to="/">← Back</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <p>
        As a student deeply fascinated by web development, I am dedicated to
        building modern, dynamic websites that prioritize both form and
        function. I&apos;m constantly honing my skills in front-end
        technologies, excited to bring fresh ideas to life through my projects.
        My goal is to continuously grow as a developer and contribute to the
        ever-evolving world of the web.
      </p>
      <h2>Experience</h2>
      <h3>Celerates | Independent Study Programs | Feb 2024 - Jun 2024</h3>
      <p>
        I am participating in the MSIB Kampus Merdeka Batch 6 program held at PT
        Mitra Talenta Grup
      </p>
      <ul>
        <li>
          In my Independent Study on Data Engineering Basics, I explored
          foundational concepts and practical skills essential for a career in
          data engineering.
        </li>
        <li>
          The curriculum covered key programming languages, including Python and
          SQL, as well as core concepts such as data engineering, data
          warehousing, and big data.
        </li>
        <li>
          I learned how to execute ETL processes using Pentaho, delved into the
          functionalities of Hadoop and Hive, and gained hands-on experience
          with tools like Apache Spark and Apache Airflow.{' '}
        </li>
        <li>
          The program culminated in a final project, where I successfully built
          a data pipeline, applying the knowledge and tools acquired throughout
          the study.
        </li>
      </ul>
      <p></p>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            desc={project.desc}
            url={project.url}
          />
        ))}
      </ul>
      <h2>Education</h2>
      <p>
        STMIK AMIKBANDUNG | Bachelor of Informatic Engineering | 2021 - Present
      </p>
      <footer>
        <hr />
        <p>&copy; 2024 Wildan Fajriyan</p>
        <p onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>
          Top ↑
        </p>
      </footer>
    </main>
  );
};

export default AboutPage;
