import React from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

const TimerSelect = () => {
  return (
    <div>
      <MDBBtnGroup className="me-1" aria-label="First group">
        {/* adicionar ativo pra quando clicar em algum mudar pra cor preta, selecionado. */}
        <MDBBtn className="me-1" color="secondary" value={1}>
          1
        </MDBBtn>
        <MDBBtn className="me-1" color="secondary" value={3}>
          3
        </MDBBtn>
        <MDBBtn className="me-1" color="secondary" value={5}>
          5
        </MDBBtn>
        <MDBBtn className="me-1" color="secondary" value={10}>
          10
        </MDBBtn>
        <MDBBtn className="me-1" color="secondary" value={15}>
          15
        </MDBBtn>
        <MDBBtn color="secondary" value={20}>
          20
        </MDBBtn>
      </MDBBtnGroup>
    </div>
  );
};

export default TimerSelect;
