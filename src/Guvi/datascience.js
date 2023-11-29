import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function DataSceience() {
  return (
    <Container>
      <div className="row px-3">
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              height="200"
              variant="top"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp"
            />
            <Card.Body>
              <Card.Title>
                Useful Python Libraries & Tools for Data Science Beginners
              </Card.Title>
              <Card.Text>
                In a world filled with information, knowing how to understand
                and use data is super
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/useful-python-libraries-tools-for-data-science/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img
              variant="top"
              height="200"
              src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp"
            />
            <Card.Body>
              <Card.Title>
                Extraordinary Data Science Projects for Beginners As Well as
                Veterans
              </Card.Title>
              <Card.Text>
                As the demand for data and the people that can conquer it, i.e.
                Data Scientists
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/data-science-projects/">
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
              src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp"
            />
            <Card.Body>
              <Card.Title>
                Future of Data Science and How You Can Thrive With It
              </Card.Title>
              <Card.Text>
                Data Science has emerged as a revolutionary field in the
                technology world, transforming the
              </Card.Text>
              <a
                class="elementor-post__read-more"
                href="https://www.guvi.in/blog/the-future-of-data-science/">
                Read More »
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
