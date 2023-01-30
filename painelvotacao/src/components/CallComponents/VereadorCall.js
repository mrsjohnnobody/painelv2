import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBadge,
} from "mdb-react-ui-kit";
import TimerSelect from "./TimerSelect";
import ActionsOfCall from "./ActionsOfCall";

const VereadorCall = ({ vereador, cargo, foto }) => {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={foto}
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{vereador}</p>
              </div>
            </div>
            <MDBBadge pill color="success" light>
              {cargo}
            </MDBBadge>
          </div>
        </MDBCardBody>
        <MDBCardFooter
          background="light"
          border="0"
          className="ms-3 p-1 d-flex"
        >
          <TimerSelect />
        </MDBCardFooter>
        <MDBCardFooter
          background="light"
          border="0"
          className="ms-3 p-1 d-flex"
        >
          <ActionsOfCall />
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default VereadorCall;
