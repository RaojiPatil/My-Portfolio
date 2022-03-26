import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Project</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on Masai School.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/zoomcar.png"
              title="ZoomCar Clone"
              description="A ZoomCar Web application that provides self-drive car rental services, Car booking using preferred time and date. Location-based Car booking. Integrated Paytm Payment Gateway. This is a collaborative project built by a team of 6 executed in 7 days."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript | Tailwind | MongoDb | Express "
              link="https://zoomcar-backend.herokuapp.com/login"
              a="https://github.com/RaojiPatil/ZoomCar-Clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/pinterest.png"
              
              title="Pinterest clone"
              
              description="Pinterest is an image sharing and social media service designed to enable saving and discovery of information. This is a collaborative project built by a team of 6 executed in 7 days."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript | MERN Stack"
              link="https://pinterest-clone-raoji.netlify.app/"
              a="https://github.com/RaojiPatil/team-pinterest.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/healthmug.png"
              title="HealtMug clone"
              description="Healthmug is an E-commerce website providing medicines at the most reasonable prices, This is collaborative project built by a team of 5 executed in 7 days."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript"
              link="https://salavisushant.github.io/Healthmug-final.github.io/"
              a="https://github.com/RaojiPatil/Healthmug-clone-cw-project"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/bewakoof.png"
              title="Bewakoof clone"
              description="Bewakoof is a lifestyle fashion brand that makes creative and distinctive fashion apparel, This is a solo project build by me and executed in 5 days."
              tech="Tech-Stacks"
              techD="Html | CSS | Javascript"
              link="https://raojipatil.github.io/Bewakoof.github.io/"
              a="https://github.com/RaojiPatil/Bewakoof-Website-Clone"
            />
          </Col>

         


        </Row>
      </Container>
    </Container>
  );
}
export default Projects;



