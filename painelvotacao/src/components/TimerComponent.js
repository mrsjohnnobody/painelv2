import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const TimerComponent = ({ vereador, cargo, foto }) => {
  return (
    <div>
      <MDBCard
        style={{ width: "540px" }}
        className="align-items-center justify-content-center mt-3 mb-3"
      >
        <MDBRow className="g-0 border rounded-5">
          <MDBCol md="4">
            <MDBCardImage src={foto} alt="..." fluid className="rounded-3" />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle className="text-start">{vereador}</MDBCardTitle>
              <MDBCardText>
                <div className="text-start">{cargo}</div>
                <div className="align-items-center">
                  AQUI VAI COLOCAR O TIMER
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};

export default TimerComponent;
