import { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import FirstScreen from "./first";
import NewDoc from "./new";

const Initial = ({ createDoc }) => {
  const [docType, setDocType] = useState(null);

  let content = null;

  switch (docType) {
    case "new":
      content = <NewDoc createDoc={createDoc} setDocType={setDocType} />;
      break;
    default:
      content = <FirstScreen setDocType={setDocType} />;
  }

  return content;
};

export default Initial;
