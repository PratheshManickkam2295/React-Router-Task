import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function CyberSecurity() {
  return (
    <Container>
      <div className="row px-3">
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              width="1400"
              height="200"
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif"
            />
            <Card.Body>
              <Card.Title>
                What is Cybersecurity? Importance and its uses & the growing
                challenges in 2023!
              </Card.Title>
              <Card.Text>
                Look around today, you will witness that we are more reliant on
                technology and devices
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/what-is-cybersecurity/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif"
            />
            <Card.Body>
              <Card.Title>
                8 Different Types of Cybersecurity and Threats Involved
              </Card.Title>
              <Card.Text>
                Cybersecurity refers to the protection of devices, processes,
                infrastructure, and assets of the
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/types-of-cybersecurity/">
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
              src="https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp"
            />

            <Card.Body>
              <Card.Title>
                Cybersecurity vs Artificial Intelligence | Better Career
              </Card.Title>
              <Card.Text>
                Cybersecurity is an exponentially growing industry that is
                evolving to protect individuals & organizations
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/cybersecurity-vs-artificial-intelligence-which-career-is-better/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
