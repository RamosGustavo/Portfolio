import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import todo from "../assets/img/todo.png";
import pidg from "../assets/img/pidg.png";
import pivgp from "../assets/img/pivgp.png";
import picp from "../assets/img/picp.png";
import portfolio from "../assets/img/portfolio.png";
import dashboard from "../assets/img/dashboard.png";
import mercado from "../assets/img/mercado-solidario.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "To.Do List",
      description: "Design & Development",
      imgUrl: todo,
      href: "https://github.com/RamosGustavo/To.do-list",
    },
    {
      title: "Dogs Page",
      description: "Design & Development",
      imgUrl: pidg,
      href: "https://github.com/RamosGustavo/individual-proyect-Soy-Henry",
    },
    {
      title: "Video Games Page",
      description: "Design & Development",
      imgUrl: pivgp,
      href: "https://github.com/RamosGustavo/PI_VideoGames",
    },
    {
      title: "Countries Page",
      description: "Design & Development",
      imgUrl: picp,
      href: "https://github.com/RamosGustavo/PI-countries",
    },
    {
      title: "Potfolio",
      description: "Design & Development",
      imgUrl: portfolio,
      href: "https://full-stack-ramos-gustavo.netlify.app/",
    },
    {
      title: "dashboard",
      description: "Design & Development",
      imgUrl: dashboard,
      href: "https://github.com/RamosGustavo/Dashboard",
    },
  ];

  const projectss = [
    {
      title: "mercado",
      description: "Design & Development",
      imgUrl: mercado,
      href: "https://mercadosolidario.vercel.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>These are some of my projects I hope you like them!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projectss.map((projectss, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projectss}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming soon!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div>
        <a className="proj-imgbz" href="https://github.com/RamosGustavo?tab=repositories">View all my projects!</a>
      </div>
    </section>
  )
}
