import { useState, useCallback } from "react";
import { Button, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { defaultDoc } from "config";

const NewDoc = ({ createDoc, setDocType }) => {
  const [name, setName] = useState("");
  const [width, setWidth] = useState(defaultDoc.config.width);
  const [height, setHeight] = useState(defaultDoc.config.height);

  const createD = useCallback(() => {
    const newDoc = {
      ...defaultDoc,
      config: {
        width,
        height,
        name: defaultDoc.config.name,
      },
    };
    if (name !== "") {
      newDoc.config.name = name;
    }
    createDoc(newDoc);
  }, [createDoc, name, width, height]);

  return (
    <div className="initial-card" style={{ width: 300 }}>
      <h4 className="text-center">Nuevo documento</h4>
      <Row>
        <Col>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              name="name"
              type="text"
              value={name}
              placeholder={defaultDoc.config.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <FormGroup>
            <Label>Width (mm)</Label>
            <Input
              name="width"
              type="number"
              value={width}
              onChange={(e) => {
                setWidth(parseInt(e.target.value, 10));
              }}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Height (mm)</Label>
            <Input
              name="height"
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(parseInt(e.target.value, 10));
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <Button
            color="link"
            onClick={() => {
              setDocType(null);
            }}
          >
            Cancelar
          </Button>
        </Col>
        <Col className="text-start">
          <Button color="primary" onClick={createD}>
            Crear
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default NewDoc;
