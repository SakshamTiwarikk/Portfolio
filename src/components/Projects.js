import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = {
    eCommerce: [
      {
        title: "E-commerce Website",
        description: "Design & Development",
        imgUrl: projImg1,
      },
    ],
    netflixClone: [
      {
        title: "Netflix Clone",
        description: "Design & Development",
        imgUrl: projImg2,
      },
    ],
    quickBites: [
      {
        title: "QuickBites - Food App",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ],
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have worked on various web development projects, including
                    an e-commerce website, a Netflix clone, and a food delivery
                    app, each designed to provide dynamic, user-friendly
                    experiences with responsive UI, real-time data handling, and
                    robust backends.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          QuickBites - Food App
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">ChatNCode</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          E-commerce Website
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projects.eCommerce.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>

                        <p>
                          Developed a responsive food delivery app that allows
                          users to browse menus and order food, optimized for
                          mobile and tablet devices using React.js and
                          TailwindCSS. <br />
                          Check it out here:{" "}
                          <a
                            href="https://quickbitess.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            quickbitess.netlify.app
                          </a>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {projects.netflixClone.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        <p>
                          Real-Time Messaging: Users can chat and share ideas
                          instantly through real-time communication using
                          WebSocket.<br />
                          AI-Powered Assistance: Integrated AI assistant helps
                          answer coding-related questions and provides solutions
                          for coding problems.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          {projects.quickBites.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        <p>
                          Built a complete e-commerce website with features like
                          product listings, user login and registration, and a
                          shopping cart. <br />
                          Check it out here:{" "}
                          <a
                            href="https://e-commerce-fullstack-nine.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            e-commerce-fullstack-nine.vercel.app
                          </a>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
