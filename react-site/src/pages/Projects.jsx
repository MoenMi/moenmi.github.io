import { useEffect } from "react";

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
        links listed below:
      </p>
      <ul>
        <li>
          OpenStreetMap Overpass API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/osm.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          U.S. Bureau of Labor Statistics (BLS) API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/bls.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          SEC EDGAR API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/sec-edgar.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          College Scorecard API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/college-scorecard.html"
            target="_blank"
          >
            Python
          </a>
          ,{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/r/college-scorecard.html"
            target="_blank"
          >
            R
          </a>
        </li>
        <li>
          OpenAlex API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/openalex.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          Web of Science (WOS) API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/wos.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          U.S. Treasury Fiscal Data API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/us-treasury.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          USA Spending API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/usa-spending.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          National Park Service API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/nps.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          Speedrun.com API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/speedrun.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          Open Science Framework API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/osf.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          Research Organization Registry (ROR) API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/ror.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          Wiley Text and Data Mining API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/wiley-tdm.html"
            target="_blank"
          >
            Python
          </a>
          ,{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/r/wiley-tdm.html"
            target="_blank"
          >
            R
          </a>
        </li>
        <li>
          U.S. Bureau of Economic Analysis (BEA) API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/bea.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          National Weather Service (NWS) API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/nws.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          U.S. Census Geocoding API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/us-census-geocoding.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          GeoNames API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/python/geonames.html"
            target="_blank"
          >
            Python
          </a>
        </li>
        <li>
          Elsevier ScienceDirect API &mdash;{" "}
          <a
            href="https://ua-libraries-research-data-services.github.io/UALIB_ScholarlyAPI_Cookbook/src/r/sdirect.html"
            target="_blank"
          >
            R
          </a>
        </li>
      </ul>

      <p>
        Scalfani, V. F., Walker, K. W., Simpson, L., Fernandez, A. M., Patel, V.
        D., Ramig, A., … Nguyen, A. M. (2023). Creating a Scholarly API
        Cookbook: Supporting Library Users with Programmatic Access to
        Information. Issues in Science and Technology Librarianship, (104).
        https://doi.org/10.29173/istl2766
      </p>

      <h2>CEO Pay Ratio Website</h2>
      <p>
        The{" "}
        <a href="https://rds.lib.ua.edu/ceo_pay/" target="_blank">
          CEO Pay Ratio Website
        </a>{" "}
        is an online database covering CEO pay data. I developed this website
        alongside others at the University of Alabama Libraries.
      </p>

      <h2>Hackathons</h2>
      <h3>UA Innovate 2024: Fintech</h3>
      <p>
        Our team created Penny, an application to help users track their
        spending and make informed financial decisions. We used the OpenAI API
        to provide users with recommendations on how they can cut spending, save
        up for a big purchase, or make other important financial decisions. We
        additionally provided users with visualizations of their spending, so
        they could further see possible areas where they could cut expenses.
      </p>
    </>
  );
}
export default Projects;
