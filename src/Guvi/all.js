import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function All() {
  return (
    <Container>
      <div className="row px-3">
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              height="200"
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
            />
            <Card.Body>
              <Card.Title>
                Top 10 High Paying Non-Coding Jobs in Data Science in 2023
              </Card.Title>
              <Card.Text>
                Are you someone who’s not interested in coding, but wants to get
                placed in tech
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              height="200"
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Interviewing-Techniques-for-Technical-Skill-Assessment-feature-image.webp"
            />
            <Card.Body>
              <Card.Title>
                6 Interviewing Techniques for Technical Skill Assessment
              </Card.Title>
              <Card.Text>
                As organizations increasingly rely on technology to stay
                competitive, the demand for hiring candidates
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/interviewing-techniques-for-technical-skill-assessment/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              height="200"
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Cloud-Computing-Jobs-without-Coding-1.png"
            />
            <Card.Body>
              <Card.Title>
                Top 10 High Paying Cloud-Computing Jobs without Coding in 2023
              </Card.Title>
              <Card.Text>
                Cloud computing has become an integral part of our technological
                landscape. Its versatility and scalability
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/top-non-coding-jobs-in-cloud-computing/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
