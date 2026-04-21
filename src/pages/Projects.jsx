import { useEffect } from "react";

const BASE_URL = "https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook";

const cookbookProjects = [
  {
    title: "arXiv",
    links: [{ label: "R", path: "python/arxiv.html" }],
  },
  {
    title: "Bureau of Economic Analysis",
    links: [{ label: "Python", path: "python/bea.html" }],
  },
  {
    title: "CAS Common Chemistry",
    links: [
      { label: "Python", path: "python/casc.html" },
      { label: "R", path: "r/casc.html" },
    ],
  },
  {
    title: "College Scorecard",
    links: [
      { label: "Python", path: "python/college-scorecard.html" },
      { label: "R", path: "r/college-scorecard.html" },
    ],
  },
  {
    title: "Crossref",
    links: [
      { label: "Python", path: "python/crossref.html" },
      { label: "R", path: "r/crossref.html" },
    ],
  },
  {
    title: "GeoNames",
    links: [{ label: "Python", path: "python/geonames.html" }],
  },
  {
    title: "Library of Congress",
    links: [
      { label: "Python", path: "python/chronam.html" },
      { label: "R", path: "r/chronam.html" },
    ],
  },
  {
    title: "National Park Service",
    links: [{ label: "Python", path: "python/nps.html" }],
  },
  {
    title: "National Weather Service",
    links: [{ label: "Python", path: "python/nws.html" }],
  },
  {
    title: "OpenAlex",
    links: [{ label: "Python", path: "python/openalex.html" }],
  },
  {
    title: "OpenStreetMap",
    links: [{ label: "Python", path: "python/osm.html" }],
  },
  {
    title: "Open Science Framework",
    links: [{ label: "Python", path: "python/osf.html" }],
  },
  {
    title: "PubChem",
    links: [
      { label: "Python", path: "python/pubchem.html" },
      { label: "R", path: "r/pubchem.html" },
    ],
  },
  {
    title: "PubMed",
    links: [
      { label: "Python", path: "python/pubmed.html" },
      { label: "R", path: "r/pubmed.html" },
    ],
  },
  {
    title: "Research Organization Registry",
    links: [{ label: "Python", path: "python/ror.html" }],
  },
  {
    title: "Sage Journals",
    links: [
      { label: "Python", path: "python/sage.html" },
      { label: "R", path: "r/sage.html" },
    ],
  },
  {
    title: "SEC EDGAR",
    links: [
      { label: "Python", path: "python/sec-edgar.html" },
      { label: "R", path: "r/sec-edgar.html" },
    ],
  },
  {
    title: "ScienceDirect",
    links: [{ label: "R", path: "r/sdirect.html" }],
  },
  {
    title: "Speedrun.com",
    links: [{ label: "Python", path: "python/speedrun.html" }],
  },
  {
    title: "U.S. Bureau of Labor Statistics",
    links: [{ label: "Python", path: "python/bls.html" }],
  },
  {
    title: "U.S. Census",
    links: [
      { label: "Python", path: "python/us-census.html" },
      { label: "R", path: "r/us-census.html" },
    ],
  },
  {
    title: "U.S. Census Geocoding",
    links: [{ label: "Python", path: "python/us-census-geocoding.html" }],
  },
  {
    title: "U.S. Treasury",
    links: [{ label: "Python", path: "python/us-treasury.html" }],
  },
  {
    title: "USAspending",
    links: [
      { label: "Python", path: "python/usa-spending.html" },
      { label: "R", path: "r/usa-spending.html" },
    ],
  },
  {
    title: "Web of Science",
    links: [{ label: "Python", path: "python/wos.html" }],
  },
  {
    title: "Wiley TDM",
    links: [
      { label: "Python", path: "python/wiley-tdm.html" },
      { label: "R", path: "r/wiley-tdm.html" },
    ],
  },
  {
    title: "World Bank",
    links: [
      { label: "Python", path: "python/world-bank.html" },
      { label: "R", path: "r/world-bank.html" },
    ],
  },
];

const otherProjects = [
  {
    title: "CEO Pay Ratio Website",
    content: (
      <p>
        The{" "}
        <a href="https://rds.lib.ua.edu/ceo_pay/" target="_blank" rel="noreferrer">
          CEO Pay Ratio Website
        </a>{" "}
        is an online database covering CEO pay data. I developed this website
        alongside others at the University of Alabama Libraries.
      </p>
    ),
  },
  {
    title: "Employee Review Prediction",
    content: (
      <p>
        The {" "}
        <a href="https://mtmoen.com/employee-review-prediction/" target="_blank" rel="noreferrer">
          Employee Review Prediction
        </a>{" "}
        service is a basic web application serving a logistic regression model to predict whether
        Glassdoor reviewers will recommend their company. The back end of this service is built in
        Python with FastAPI and deployed via Vercel, while the front end is built in HTML, CSS, and
        JavaScript and deployed via GitHub Pages.
      </p>
    ),
  },
];

const hackathons = [
  {
    title: "UA Innovate 2024: Fintech",
    description:
      "Our team created Penny, an application to help users track their spending and make informed financial decisions. We used the OpenAI API to provide users with recommendations on how they can cut spending, save up for a big purchase, or make other important financial decisions. We additionally provided users with visualizations of their spending, so they could further see possible areas where they could cut expenses.",
  },
];

function ProjectLinks({ links }) {
  return (
    <>
      {links.map((link, index) => (
        <span key={link.path}>
          {index > 0 && " and "}
          <a
            href={`${BASE_URL}/${link.path}`}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        </span>
      ))}
    </>
  );
}

function Projects() {
  useEffect(() => {
    document.title = "Projects | Michael Moen";
  }, []);

  return (
    <>
      <h2>Scholarly API Cookbook</h2>
      <p>
        As a part of the Research Data Services team at the University of
        Alabama, I have created tutorials for retrieving data from a variety of
        APIs. The tutorials that I have created are all freely available at the
        links listed below and are part of a <a href="https://doi.org/10.29173/istl2766" target="_blank">published journal article</a>.
      </p>

      <ul className="tutorial-list">
        {cookbookProjects.map((project) => (
          <li key={project.title} className="tutorial-item">
            <span className="tutorial-title">{project.title}</span>
            <div className="tutorial-links">
              {project.links.map((link, index) => (
                <span key={link.path}>
                  <a
                    href={`${BASE_URL}/${link.path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="tutorial-link"
                  >
                    {link.label}
                  </a>
                  {index < project.links.length - 1 && ", "}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {otherProjects.map((project) => (
        <section key={project.title}>
          <h2>{project.title}</h2>
          {project.content}
        </section>
      ))}

      <h2>Hackathons</h2>
      {hackathons.map((hackathon) => (
        <section key={hackathon.title}>
          <h3>{hackathon.title}</h3>
          <p>{hackathon.description}</p>
        </section>
      ))}
    </>
  );
}

export default Projects;
