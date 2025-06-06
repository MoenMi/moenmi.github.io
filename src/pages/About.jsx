import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | Michael Moen";
  }, []);
  return (
    <>
      <h2>General Bio</h2>

      <p>
        I'm Michael Moen, a software engineer and data scientist from St. Louis,
        Missouri. I'm currently pursuing a master's degree in Applied Statistics
        and a bachelor's degree in Computer Science and Mathematics at the
        University of Alabama. Along the way, I've had the opportunity to
        explore my passions for coding, data, and technology through internships
        with Northrop Grumman and the National Geospatial-Intelligence Agency
        and by supporting research at the University of Alabama Libraries.
      </p>

      <p>
        Whether I'm writing Python scripts to analyze data, building full-stack
        web applications, or automating workflows to save time and resources,
        I'm all about creating impactful, efficient solutions. At Northrop
        Grumman, I developed tools that saved hours of manual work each month,
        and at NGA, I improved workflows and cleaned up backlogs to make life
        easier for my team. In my work at the University Libraries, I've
        combined my technical skills with a love for teaching, creating
        tutorials and workshops to help others unlock the potential of
        technology.
      </p>

      <p>
        Outside of work and school, I enjoy exploring new technologies, tackling
        side projects, and competing in hackathons—like the time my team won
        first place for building an AI chatbot to help users save money! I also
        like to spend time outdoors, watch college football (Roll tide!), and
        keep up with the latest trends in tech and data science.
      </p>

      <h2>Education</h2>

      <h3>B.S. Computer Science</h3>
      <ul>
        {/* <li>AP Computer Science A</li> */}
        <li>CS 101: CS II for Majors</li>
        <li>CS 200: Software Design and Engineering</li>
        <li>CS 201: Data Structures and Algorithms</li>
        <li>
          CS 300: Operating Systems &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/cs300/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          CS 301: Database Management Systems &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/cs301/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>ECE 380: Digital Logic</li>
        <li>ECE 383: Microcomputers</li>
        <li>
          CS 403: Programming Languages &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/cs403/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          CS 438: Computer Communication & Networks &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/cs438/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>CS 460: Autonomous Robotics</li>
        <li>
          CS 470: Computer Algorithms &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/cs470/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          <i>CS 483: Computational Foundations of Machine Learning</i>
        </li>
        <li>CS 491: Autonomous Vehicles</li>
        <li>CS 495: Capstone Computing</li>
      </ul>
      <h3>B.S. Mathematics</h3>
      <ul>
        {/* <li>AP Calculus BC</li> */}
        {/* <li>AP Statistics</li> */}
        <li>MATH 227: Calculus III</li>
        <li>MATH 237: Introduction to Linear Algebra</li>
        <li>MATH 238: Applied Differential Equations I</li>
        <li>MATH 301: Discrete Mathematics</li>
        <li>
          MATH 311: Introduction to Scientific Computing and Problem Solving
        </li>
        <li>MATH 355: Theory of Probability</li>
        <li>
          <i>MATH 420: Linear Optimization Theory</i>
        </li>
        <li>MATH 485: Introduction to Complex Variables</li>
      </ul>
      <h3>M.S. Applied Statistics</h3>
      <ul>
        <li>
          <i>ST 521: Statistical Data Management</i>
        </li>
        <li>
          ST 531: Data Mining I &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/st531/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          <i>ST 540: Statistical Programming & Computation with R</i>
        </li>
        <li>
          ST 552: Applied Regression Analysis &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/st552/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          ST 553: Multivariate Regression Analysis &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/st553/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          ST 554: Mathematical Statistics I &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/st554/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          ST 555: Mathematical Statistics II &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/st555/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          ST 560: Statistical Methods &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/st560/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
      </ul>

      <h3>Other Courses</h3>
      <ul>
        {/* <li>CS 121: The Discipline of Computing</li> */}
        <li>CS 202: Web Foundations</li>
        <li>CS 223: Introduction to Python Programming</li>
        <li>
          EC 110: Principles of Microeconomics &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/ec110/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        {/* <li>ENGR 123: Engineering Foundations Honors</li> */}
        <li>GN 201: Intermediate German I</li>
        <li>GN 202: Intermediate German II</li>
        <li>
          GY 101: Atmospheric Processes & Patterns &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/gy101/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>
          GY 102: Earth Surface Processes &mdash;{" "}
          <a
            href="https://notes.mtmoen.com/classes/gy102/overview.html"
            target="_blank"
          >
            Notes
          </a>
        </li>
        <li>HY 404: Modern China since 1600</li>
        <li>PH 105: General Physics with Calculus I</li>
        {/* <li>PHL 106: Honors Introduction to Deductive Logic</li> */}
        {/* <li>UH 100: Honors Year One - Honors Connections</li> */}
        {/* <li>UH 200: Life as a Scholar</li> */}
      </ul>

      <h2>Recommended Sites</h2>

      <p>
        Please check out these cool sites from some cool people I've worked
        with:
      </p>
      <ul>
        <li>
          <a href="https://www.optimumaf.com" target="_blank">
            optimumaf.com
          </a>
        </li>
        <li>
          <a href="https://www.jaycrawford.me" target="_blank">
            jaycrawford.me
          </a>
        </li>
        <li>
          <a href="https://www.seannotseen.com" target="_blank">
            seannotseen.com
          </a>
        </li>
      </ul>
    </>
  );
}
export default About;
