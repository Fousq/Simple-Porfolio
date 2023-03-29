import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am 
            <a href="https://www.linkedin.com/in/zhanbolat-orakbayev-933072195/"  
            className="purple"> Zhanbolat Orakbayev </a>
            from <span className="purple"> Astana, Kazakhstan.</span>
            <br />I am a software engineer at EPAM and master degree student at Astana IT University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
