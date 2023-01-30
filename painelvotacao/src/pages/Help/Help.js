import "../../index.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const Help = () => {
  return (
    <div id="help">
      <h2>Precisando de ajuda?</h2>
      <p>Entre em contato:</p>
      <MDBBtn
        style={{ backgroundColor: "#25d366" }}
        href="https://web.whatsapp.com/
      "
        target="_blank"
      >
        <MDBIcon className="me-2" fab icon="whatsapp" /> SUPORTE
      </MDBBtn>
    </div>
  );
};

export default Help;
