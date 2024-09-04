const Project = ({ title, desc, url }) => {
  return (
    <>
      <li>
        <a href={`${url}`} target="_blank">
          {title}
        </a>
        : {desc}
      </li>
    </>
  );
};

export default Project;
