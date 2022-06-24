import Job from "./Job";

const Jobs = (props) => {
  return (
    <>
      <div className="jobs-list">
        <Job
          className="job-blue"
          title="Full Time Sales Associate"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />

        <Job
          className="job-red"
          title="Développeur FullStack JS"
          contractType="CDI"
          country="France"
          city="Nantes"
        />

        <Job
          className="job-blue"
          title="Chef de projets"
          contractType="CDI"
          country="Espagne"
          city="Madrid"
        />

        <Job
          className="job-red"
          title="Intégrateur"
          contractType="CDI"
          country="France"
          city="Lyon"
        />
        <Job
          className="job-green"
          title="Développeur Backend"
          contractType="CDI"
          country="Angleterre"
          city="Londres"
        />
        <Job
          className="job-gold"
          title="Développeur React"
          contractType="CDI"
          country="Suisse"
          city="Genève"
        />
        <Job
          className="job-gold"
          title="Développeur React"
          contractType="CDI"
          country="Suisse"
          city="Genève"
        />
        <Job
          className="job-blue"
          title="Développeur PHP"
          contractType="CDI"
          country="Belgique"
          city="Bruxelles"
        />
        <Job
          className="job-green"
          title="Développeur Python"
          contractType="CDI"
          country="France"
          city="Paris"
        />
      </div>
    </>
  );
};

export default Jobs;
