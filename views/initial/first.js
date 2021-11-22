import { Button, Row, Col } from "reactstrap";

const FirstScreen = ({ setDocType }) => {
  return (
    <div className="initial-card text-center" style={{ width: 600 }}>
      <h4>Nuevo documento</h4>
      <Row>
        <Col>
          <Button
            color="primary"
            block
            onClick={() => {
              setDocType("new");
            }}
          >
            Nuevo
          </Button>
        </Col>
        <Col>
          <Button color="primary" block disabled>
            Desde PDF
          </Button>
        </Col>
        <Col>
          <Button color="primary" block disabled>
            Cargar Documento
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FirstScreen;
