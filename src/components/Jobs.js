import Job from "./Job";

const Jobs = (props) => {
  return (
    <main>
      <div className="container">
        <div className="jobs-list">
          <Job
            className="blue"
            title="Full Time Sales Associate"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />

          <Job
            className="red"
            title="Développeur FullStack JS"
            contractType="CDI"
            country="France"
            city="Nantes"
          />

          <Job
            className="blue"
            title="Chef de projets"
            contractType="CDI"
            country="Espagne"
            city="Madrid"
          />

          <Job
            className="red"
            title="Intégrateur"
            contractType="CDI"
            country="France"
            city="Lyon"
          />
          <Job
            className="green"
            title="Développeur Backend"
            contractType="CDI"
            country="Angleterre"
            city="Londres"
          />
          <Job
            className="gold"
            title="Développeur React"
            contractType="CDI"
            country="Suisse"
            city="Genève"
          />
          <Job
            className="gold"
            title="Développeur React"
            contractType="CDI"
            country="Suisse"
            city="Genève"
          />
          <Job
            className="blue"
            title="Développeur PHP"
            contractType="CDI"
            country="Belgique"
            city="Bruxelles"
          />
          <Job
            className="green"
            title="Développeur Python"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </div>
      </div>
    </main>
  );
};

export default Jobs;
