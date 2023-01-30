import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";

const Ordens = () => {
  return (
    <div id="ordens">
      <h1>Ordens</h1>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Sessão</th>
            <th scope="col">Data</th>
            <th scope="col">Status</th>
            <th scope="col">Número</th>
            <th scope="col">Presença</th>
            <th scope="col">Relatório</th>
            <th scope="col">Ação</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className="d-flex">
                <div className="ms-3">
                  <p className="fw-bold mb-1">SESSÃO (TIPO) </p>
                  <p className="text-muted mb-0">SESSÃO (TIPO) Nº 01/2023</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">02/01/2023</p>
            </td>
            <td>
              <MDBBadge color="success" pill>
                Aberta/Fechada
              </MDBBadge>
            </td>
            <td>01/2023</td>
            <td>
              <Link to="/quorum">
                <MDBIcon className="ms-1 me-4" fas icon="users" size="2x" />
              </Link>
            </td>
            <td>
              <Link to="/relatorio">
                <MDBIcon className="ms-1" fas icon="chart-bar" size="lg" />
              </Link>
            </td>
            <td>
              <Link to="/editordem">
                <MDBBtn color="link" rounded size="sm">
                  ABRIR
                </MDBBtn>
              </Link>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Ordens;
