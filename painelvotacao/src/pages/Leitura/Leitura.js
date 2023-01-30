import "../../index.css";
import "./Leitura.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBBadge,
} from "mdb-react-ui-kit";

const Leitura = () => {
  return (
    <div id="leitura">
      <h2>Leitura</h2>
      <div className="requerimento">
        <div className="d-flex">
          <div className="p-2 flex-grow-1 info-class">
            <div className="d-flex flex-column mb-3">
              <div className="p-2">
                <h2>
                  Requerimento Nº - <span>Autor</span>
                </h2>
              </div>
              <div className="p-2">
                <p>
                  Requerimento trata sobre tal talttal Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ducimus eaque qui
                  accusantium earum, fugit tempore minus placeat sit laboriosam.
                  Fuga quaerat quo dolorum deserunt officia quidem non
                  dignissimos nihil magnam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MDBRow className="mt-2">
        <h5>Vereador(es) proponente(s) da matéria:</h5>
        <MDBCol xl={4} className="mb-4">
          <MDBCard className="bg-secondary">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://camaracrateus.ce.gov.br/imagens/11.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">DEUSIMAR</p>
                    <MDBBadge pill color="primary" light>
                      PRESIDENTE
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Leitura;
