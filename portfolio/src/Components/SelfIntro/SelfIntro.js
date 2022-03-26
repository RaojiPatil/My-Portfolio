import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="wight"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi,👋 I'm <span style={{color: "#0A81Ac" , fontStyle:"italic"}}>Raoji Patil</span> an aspiring and determined <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Full Stack Web Developer</span>,  with strong communication skills, good attention to detail and with the ability to write efficient code using <span style={{color: "#0A81Ac" , fontStyle:"italic"}}>MERN Stack.</span>  
              I have been studying web development at Masai school and gone through 30 weeks of coding bootcamp. Well versed in coding using Javascript and its frameworks, both in front-end and back-end.
           I like discovering and learning new things to enhance my skills and make use out of it.
            
             <br/>
              <br/>
              A few years back, I developed a passion for coding when I printed my first <span style={{color: "#0A81AB" , fontStyle:"italic"}}> "Hello world"</span> 😃, that hello world just hits different 😌 . Since then aesthetically functional websites have just been my thing.
            </p>
          </Col>
          
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
       

            <ul className="home-about-social-links">
       
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
