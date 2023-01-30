import "../../index.css";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

// components
import VereadorCall from "../../components/CallComponents/VereadorCall";

const Call = () => {
  return (
    <div id="call">
      <h1>Pedidos de voz</h1>
      <MDBRow>
        <MDBCol xl={6} className="mb-2">
          <VereadorCall
            vereador={"DEUSIMAR"}
            cargo={"PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/11.jpg"}
          />
        </MDBCol>
        <MDBCol xl={6} className="mb-2">
          <VereadorCall
            vereador={"DEUSIMAR"}
            cargo={"PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/11.jpg"}
          />
        </MDBCol>
        <MDBCol xl={6} className="mb-2">
          <VereadorCall
            vereador={"BIBI APOLÔNIO"}
            cargo={"VICE-PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/67.jpg"}
          />
        </MDBCol>
        <MDBCol xl={6} className="mb-2">
          <VereadorCall
            vereador={"JOÃOZINHO"}
            cargo={"2° VICE PRESIDENTE"}
            foto={"https://camaracrateus.ce.gov.br/imagens/71.jpg"}
          />
        </MDBCol>
        <MDBCol xl={6} className="mb-2">
          <VereadorCall
            vereador={"ZAGALO MELO"}
            cargo={"1º SECRETÁRIO"}
            foto={"https://camaracrateus.ce.gov.br/imagens/6.jpg"}
          />
        </MDBCol>
        <MDBCol xl={6} className="mb-2">
          <VereadorCall
            vereador={"ELIANE TELES"}
            cargo={"2º SECRETÁRIO"}
            foto={"https://camaracrateus.ce.gov.br/imagens/68.jpg"}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Call;
