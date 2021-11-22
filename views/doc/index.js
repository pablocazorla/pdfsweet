import Pagination from "./pagination";
import Vista from "./vista";
import Layers from "./layers";

const Doc = ({ doc }) => {
  return (
    <div className="document">
      <Pagination />
      <Vista />
      <Layers />
    </div>
  );
};

export default Doc;
