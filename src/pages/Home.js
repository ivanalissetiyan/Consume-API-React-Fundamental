import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container class="mt-3">
      <Row>
        <Col md="{12}">
          <Card classname="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>Express JS + React JS</h1>
              <p class="lead">
                Tutorial Express JS + React JS Bersama Ivan Alissetiyan
              </p>
              <Button
                href="http://ivan.com"
                target="_blank"
                variant="primary"
                size="lg"
              >
                Selengkapnya
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
