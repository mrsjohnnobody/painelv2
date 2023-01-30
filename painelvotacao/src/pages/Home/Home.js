import "../../index.css";

const Home = () => {
  const userName = "João";

  return (
    <div id="home">
      <h1>Bem-vindo ao painel de votação!</h1>
      <p>Usuário logado: {userName}</p>
      <p>
        Segue, abaixo, tutoriais explicativos para cada sessão do sistema
        VotaWeb.
      </p>
      <ul>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            Como mexer com ordens
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            Bli bli bli
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            Blá blá blá
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
