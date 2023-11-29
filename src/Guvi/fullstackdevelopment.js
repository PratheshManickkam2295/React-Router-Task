import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function FullStackDevelopment() {
  return (
    <Container>
      <div className="row px-3">
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp"
            />
            <Card.Body>
              <Card.Title>
                Best Ways to Learn Full Stack Development in 2023
              </Card.Title>
              <Card.Text>
                Full stack development is and will be a promising and in-demand
                career in the upcoming
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png"
            />
            <Card.Body>
              <Card.Title>
                The Top 10 Tools Every Full Stack Developer Should Master in
                2023
              </Card.Title>
              <Card.Text>
                As a full stack developer, having the right set of tools is
                crucial for your success.
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/top-full-stack-developer-tools/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png"
            />
            <Card.Body>
              <Card.Title>
                The Ultimate Guide to Real-World Full Stack Development
                Applications
              </Card.Title>
              <Card.Text>
                Full stack development has become increasingly popular in recent
                years, with companies
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/top-must-know-full-stack-development-applications/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
