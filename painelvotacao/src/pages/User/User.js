import "../../index.css";
import { MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";

const User = () => {
  return (
    <div id="user">
      <h2>Altere sua senha:</h2>
      <form>
        <MDBInputGroup className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Senha (mínimo 6 caracteres)"
          />
        </MDBInputGroup>

        <MDBInputGroup className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Confirmar senha"
          />
        </MDBInputGroup>
        <MDBBtn rounded color="success">
          Alterar
        </MDBBtn>
      </form>
    </div>
  );
};

export default User;
