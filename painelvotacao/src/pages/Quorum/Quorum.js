import "../../index.css";
import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

import QuorumComponent from "../../components/QuorumComponent";

const Quorum = () => {
  const finishQuorum = (e) => {
    e.preventDefault();
    console.log("finalizou quorum");
  };

  return (
    <div id="quorum">
      <h2>Presença dos Parlamentares</h2>
      <MDBRow>
        {/* no que o vereador apertar que está presente no seu tablet, alternar bg-color para verde, de presente */}
        {/* se o vereador não responder no tablet, se considerará ao fechar o quórum que o mesmo não estava presente */}
        <MDBCol xl={4} className="p-1">
          <QuorumComponent
            vereador={"DEUSIMAR"}
            cargo={"PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/11.jpg"}
          />
        </MDBCol>
        <MDBCol xl={4} className="p-1">
          <QuorumComponent
            vereador={"BIBI APOLÔNIO"}
            cargo={"VICE-PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/67.jpg"}
          />
        </MDBCol>
        <MDBCol xl={4} className="p-1">
          <QuorumComponent
            vereador={"JOÃOZINHO"}
            cargo={"2° VICE PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/71.jpg"}
          />
        </MDBCol>
        <MDBCol xl={4} className="p-1">
          <QuorumComponent
            vereador={"ZAGALO MELO"}
            cargo={"1º SECRETÁRIO"}
            foto={"https://camaracrateus.ce.gov.br/imagens/6.jpg"}
          />
        </MDBCol>
        <MDBCol xl={4} className="p-1">
          <QuorumComponent
            vereador={"ELIANE TELES"}
            cargo={"2º SECRETÁRIO"}
            foto={"https://mdbootstrap.com/img/new/avatars/3.jpg"}
          />
        </MDBCol>
        <MDBCol xl={6} className="p-1">
          <MDBBtn size="lg" color="danger" onClick={finishQuorum}>
            Finalizar Quórum
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Quorum;
