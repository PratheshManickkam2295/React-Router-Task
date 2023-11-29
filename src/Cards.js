// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function BasicExample() {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cards({ data = {} }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md-5>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="data.src" />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.text}</Card.Text>
              <Link variant="primary">Read More{data.pagelink}</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
