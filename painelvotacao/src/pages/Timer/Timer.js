import TimerComponent from "../../components/TimerComponent";
import QuorumComponent from "../../components/QuorumComponent";
import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

const Timer = () => {
  return (
    <>
      <div className="timer">
        {/* vereador que vai estar falando */}
        <TimerComponent
          vereador="ARNALDO MINELVINO"
          cargo="VEREADOR"
          foto="https://camaracrateus.ce.gov.br/imagens/69.jpg"
        />
        <MDBRow>
          <MDBCol xl={4} className="p-1">
            <QuorumComponent
              vereador="ADÃO KENES"
              cargo="VEREADOR"
              foto="https://camaracrateus.ce.gov.br/imagens/70.jpg"
            />
          </MDBCol>
          <MDBCol xl={4} className="p-1">
            <QuorumComponent
              vereador="RONDINALDO GOMES"
              cargo="VEREADOR"
              foto="https://camaracrateus.ce.gov.br/imagens/7.jpg"
            />
          </MDBCol>
          <MDBCol xl={4} className="p-1">
            <QuorumComponent
              vereador="JOÃO DE DEUS"
              cargo="VEREADOR"
              foto="https://camaracrateus.ce.gov.br/imagens/13.jpg"
            />
          </MDBCol>
          <MDBCol xl={4} className="p-1">
            <QuorumComponent
              vereador="JOÃO PAULO DANTAS"
              cargo="VEREADOR"
              foto="https://camaracrateus.ce.gov.br/imagens/14.jpg"
            />
          </MDBCol>
          <MDBCol xl={4} className="p-1">
            <QuorumComponent
              vereador="JOAQUIM AZEVEDO"
              cargo="VEREADOR"
              foto="https://camaracrateus.ce.gov.br/imagens/5.jpg"
            />
          </MDBCol>
          <MDBCol xl={4} className="p-1">
            <QuorumComponent
              vereador="Alice azevedo"
              cargo="presidente"
              foto="https://camaracrateus.ce.gov.br/imagens/5.jpg"
            />
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default Timer;
