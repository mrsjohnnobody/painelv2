import "../../index.css";
import {
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";

const EditOrdem = () => {
  return (
    <div id="editordem">
      <h2>Ordens:</h2>
      <MDBListGroup light style={{ minWidth: "22rem" }}>
        <MDBListGroupItem className="d-flex justify-content-between align-items-start square border rounded-5 shadow-3 p-2 mt-2">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p>Requerimento Nº 01/2023</p>
            </div>
            <p>Descrição do requerimento Nº 01/2023 trata sobre blá blá</p>
            <MDBTableBody>
              <tr>
                <td className="square border rounded-5 ">
                  <div
                    className="d-flex align-items-center p-2
                  "
                  >
                    <img
                      src="https://camaracrateus.ce.gov.br/imagens/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">ANT. LUIZ JÚNIOR</p>
                      <p className="text-muted mb-0">Vereador</p>
                    </div>
                  </div>
                </td>
              </tr>
            </MDBTableBody>
            <MDBBtn className="m-1">
              <MDBIcon fas icon="book-open" />
              <span className="mx-1">Iniciar leitura</span>
            </MDBBtn>
            <MDBBtn className="m-1" color="success">
              <MDBIcon fas icon="democrat" />
              {/* no que apertar aqui, abrir a pagina votacao lá no painel, TV que vai está transmitindo */}
              {/* e ao clicar no botão de votação, substituir por um botão vermelho para encerrar a votação, quando tiver sido encerrado pelos parlamentares */}
              <span className="mx-1">Iniciar votação</span>
            </MDBBtn>
            <MDBBtn className="m-1" color="dark">
              <MDBIcon fas icon="lock" />
              <span className="mx-1">Iniciar votação secreta</span>
            </MDBBtn>
          </div>

          <MDBBadge pill light>
            14
          </MDBBadge>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-between align-items-start square border rounded-5 shadow-3 p-2 mt-2">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p>Requerimento Nº 01/2023</p>
            </div>
            <p>Descrição do requerimento Nº 01/2023 trata sobre blá blá</p>
            <MDBTableBody>
              <tr>
                <td className="square border rounded-5 ">
                  <div
                    className="d-flex align-items-center p-2
                  "
                  >
                    <img
                      src="https://camaracrateus.ce.gov.br/imagens/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">ANT. LUIZ JÚNIOR</p>
                      <p className="text-muted mb-0">Vereador</p>
                    </div>
                  </div>
                </td>
              </tr>
            </MDBTableBody>
            <MDBBtn className="m-1">
              <MDBIcon fas icon="book-open" />
              <span className="mx-1">Iniciar leitura</span>
            </MDBBtn>
            <MDBBtn className="m-1" color="success">
              <MDBIcon fas icon="democrat" />
              <span className="mx-1">Iniciar votação</span>
            </MDBBtn>
            <MDBBtn className="m-1" color="dark">
              <MDBIcon fas icon="lock" />
              <span className="mx-1">Iniciar votação secreta</span>
            </MDBBtn>
          </div>

          <MDBBadge pill light>
            14
          </MDBBadge>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-between align-items-start square border rounded-5 shadow-3 p-2 mt-2">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p>Requerimento Nº 01/2023</p>
            </div>
            <p>Descrição do requerimento Nº 01/2023 trata sobre blá blá</p>
            <MDBTableBody>
              <tr>
                <td className="square border rounded-5 ">
                  <div
                    className="d-flex align-items-center p-2
                  "
                  >
                    <img
                      src="https://camaracrateus.ce.gov.br/imagens/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">ANT. LUIZ JÚNIOR</p>
                      <p className="text-muted mb-0">Vereador</p>
                    </div>
                  </div>
                </td>
              </tr>
            </MDBTableBody>
            <MDBBtn className="m-1">
              <MDBIcon fas icon="book-open" />
              <span className="mx-1">Iniciar leitura</span>
            </MDBBtn>
            <MDBBtn className="m-1" color="success">
              <MDBIcon fas icon="democrat" />
              <span className="mx-1">Iniciar votação</span>
            </MDBBtn>
            <MDBBtn className="m-1" color="dark">
              <MDBIcon fas icon="lock" />
              <span className="mx-1">Iniciar votação secreta</span>
            </MDBBtn>
          </div>

          <MDBBadge pill light>
            14
          </MDBBadge>
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
  );
};

export default EditOrdem;
