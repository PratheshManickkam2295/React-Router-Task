import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Career() {
  return (
    <Container>
      <div className="row px-3">
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp"
            />
            <Card.Body>
              <Card.Title>
                Everything You Should Know About ChatGPT & Why It Matters?
              </Card.Title>
              <Card.Text>
                In the constantly growing landscape of artificial intelligence
                (AI) and natural language processing
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/everything-you-should-know-about-chatgpt/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Webinars-and-Workshops-That-You-Should-Know.webp"
            />
            <Card.Body>
              <Card.Title>
                6 Mechanical Engineering Webinars and Workshops That You Should
                Know
              </Card.Title>
              <Card.Text>
                Mechanical engineering is an exciting field that brings creative
                ideas to life, be it small
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/mechanical-engineering-webinars-and-workshops/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Fascinating-Career-Opportunities-in-Civil-Engineering.webp"
            />
            <Card.Body>
              <Card.Title>
                Fascinating Career Opportunities in Civil Engineering in 2023
              </Card.Title>
              <Card.Text>
                In recent decades, technological growth has been tremendous such
                that every kid wants to become
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/career-opportunities-in-civil-engineering/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
