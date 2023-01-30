import "../../index.css";
import "./Votacao.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";

const Votacao = () => {
  return (
    <div id="votacao">
      <h2>Votação</h2>
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
          <div className="p-3 input-div-1">0</div>
          <div className="p-3 input-div-2">0</div>
          <div className="p-3 input-div-3">0</div>
        </div>
      </div>
      <MDBRow className="mt-2">
        <MDBCol xl={4} className="mb-4">
          <MDBCard className="bg-success">
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
                    <MDBBadge pill color="success" light>
                      PRESIDENTE
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} className="mb-4">
          <MDBCard className="bg-info">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://camaracrateus.ce.gov.br/imagens/67.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">BIBI APOLÔNIO</p>
                    <MDBBadge pill color="success" light>
                      VICE-PRESIDENTE
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} className="mb-4">
          <MDBCard className="bg-danger">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://camaracrateus.ce.gov.br/imagens/71.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">JOÃOZINHO</p>
                    <MDBBadge pill color="success" light>
                      2° VICE PRESIDENTE
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} className="mb-4">
          <MDBCard className="bg-danger">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://camaracrateus.ce.gov.br/imagens/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">ZAGALO MELO</p>
                    <MDBBadge pill color="success" light>
                      1º SECRETÁRIO
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} className="mb-4">
          <MDBCard className="bg-success">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://camaracrateus.ce.gov.br/imagens/68.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">ELIANE TELES</p>
                    <MDBBadge pill color="success" light>
                      2º SECRETÁRIO
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl={4} className="mb-4 ">
          <MDBCard className="bg-success">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="https://camaracrateus.ce.gov.br/imagens/70.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">ADÃO KENES</p>
                    <MDBBadge pill color="success" light>
                      VEREADOR
                    </MDBBadge>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBBtn color="dark">
        VOTAÇÃO EM ANDAMENTO
        <MDBBadge className="ms-2" color="danger">
          {/* contador de votos */}
          <span>10</span>
        </MDBBadge>
      </MDBBtn>
    </div>
  );
};

export default Votacao;
