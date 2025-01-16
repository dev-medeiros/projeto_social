import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Projeto <span>Social</span>
      </h2>
      <p>
        Este projeto é uma rede social desenvolvida utilizando React para o
        front-end e Firebase para o back-end. <br></br>Ele combina uma interface
        interativa e moderna com serviços de autenticação, armazenamento de
        dados e funcionalidades em tempo real fornecidas pelo Firebase.
      </p>
      <Link to="/posts/create" className="btn">
        Faça Parte
      </Link>
    </div>
  );
};

export default About;
