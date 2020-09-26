import React from 'react';

import { 
  IntroSection, 
  ValuesSection,
  ValuesContainer,
  PilarsSection,
  ContactSection
} from "./styles";

import AnchorButton from '../../components/AnchorButton';
import ContactForm from '../../components/ContactForm';

import Logo from "../../assets/Logo";
import CloudComputing from "../../assets/icons/CloudComputing";
import EngenhariaDados from "../../assets/icons/EngenhariaDados";
import IA from "../../assets/icons/IA";
import IOT from "../../assets/icons/IOT";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <IntroSection>
        <div />
        <div>
          <h1>
            Revolucionando as organizações com projetos de dados 
          </h1>
          <h2>
            Lunadata potencializando empresas com consultoria de
            Arquitetura de dados, Engenharia de dados, Governança e
            capacitação profissional.
          </h2>

          <AnchorButton 
            width='200px' 
            color='#EE4D29'
            outline={true}
            href='#contact-section'
            type='button'
            role='button'
            tabIndex='0'
          >
            Conheça agora
          </AnchorButton>
        </div>
      </IntroSection>

      <ValuesSection>
        <h2>Pilares</h2>
        <h3>Entregamos soluções perfeitas que se encaixam em seu case baseado em dois pilares.</h3>

        <div>
          <Logo />

          <div>
            <ValuesContainer>
              <h2>
                Agilidade
              </h2>
              <p>
                Utilizando o framework Scrum e pensando Lean temos uma metodologia totalmente
                aplicável à realidade da sua empresa, com entregas rápidas e iterativas. Entregando
                resultados em semanas e não meses. 
              </p>
            </ValuesContainer>

            <ValuesContainer>
              <h2>Autoridade</h2>
              <p>
                Temos a medida necessária entre academia e indústria, para a avaliação e implementação
                de qualquer projeto de governança, arquitetura e engenharia de dados.
              </p>
            </ValuesContainer>
          </div>
        </div>
      </ValuesSection>
      
      <PilarsSection>
        <h2>Aplicando valor aos dados</h2>
        <h3>Trabalhamos com áreas essenciais para o seu negócio</h3>
        <ul>
          <li>
            <Link to='/dataEngenieer'>
              <EngenhariaDados width={300} height={300} />
              <span>
                Engenharia de dados
              </span>
              <div>
                Entender seus dados e prepara-los para insights, que vão alavancar seus resultados.
              </div>
            </Link>
          </li>
          <li>
            <Link to='/cloud'>
              <CloudComputing width={300} height={300} />
              <span>
                Cloud computing
              </span>
              <div>
                Usar a escalabilidade da nuvem, e os recursos compartilhados pelas maiores empresas do mundo.
              </div>
            </Link>
          </li>
          <li>
            <Link to='/ia'>
              <IA width={300} height={300} />
              <span>
                Inteligência artificial
              </span>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              </div>
            </Link>
          </li>
          <li>
            <Link to='/iot'>
              <IOT width={300} height={300} />
              <span>
                IOT
              </span>
              <div>
                Dispositivos conectados em qualquer lugar do mundo  , permitindo o entendimento de acontecimentos antes ignorados.
              </div>
            </Link>
          </li>
        </ul>
      </PilarsSection>

      <ContactSection id='contact-section'>
        <div>
          <h2>Gostou? Fale conosco!</h2>
          <h3>
            Estamos prontos para lhe entregar a melhor solução para seu negócio
          </h3>
        </div>
        <ContactForm />
      </ContactSection>
    </>
  );
}

export default Home;