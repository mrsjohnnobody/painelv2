import { MDBCard, MDBCardBody, MDBBadge } from "mdb-react-ui-kit";

const QuorumComponent = ({ vereador, cargo, foto }) => {
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
      </MDBCard>
    </div>
  );
};

export default QuorumComponent;
