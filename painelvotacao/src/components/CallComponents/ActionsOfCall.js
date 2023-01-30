import React from "react";
import { MDBIcon, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

const ActionsOfCall = () => {
  return (
    <div>
      <MDBBtnGroup aria-label="Second group">
        <MDBBtn color="primary" className="me-1">
          <MDBIcon fas icon="pause" />
        </MDBBtn>
        <MDBBtn color="danger" className="me-1">
          <MDBIcon fas icon="stop" />
        </MDBBtn>
        <MDBBtn color="warning" className="me-1">
          <MDBIcon fas icon="chart-pie" />
        </MDBBtn>
        <MDBBtn color="success">
          <MDBIcon fas icon="check" />
        </MDBBtn>
      </MDBBtnGroup>
    </div>
  );
};

export default ActionsOfCall;
