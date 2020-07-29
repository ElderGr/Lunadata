import React, {useState} from 'react';

import { 
  IntroSection, 
  ValuesSection,
  ValuesContainer,
  PilarsSection,
  ContactSection,
  ContactForm
} from "./styles";

import AnchorButton from '../../components/AnchorButton';
import Button from '../../components/Button';
import Input from "../../components/Input";

import Logo from "../../assets/Logo";
import CloudComputing from "../../assets/icons/CloudComputing";
import EngenhariaDados from "../../assets/icons/EngenhariaDados";
import IA from "../../assets/icons/IA";
import IOT from "../../assets/icons/IOT";

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
    <IntroSection>
        <div />
        <div>
          <h1>
            Revolucionando as organizações com projetos de dados 
          </h1>
          <h2>
            Lunadata potencializa empresas com consultoria de Arquitetura, Engenharia de dados e com Governancia.
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
        <h3>Procuramos entregar soluções perfeitas que se encaixem em seu case baseado em dois pilares</h3>

        <div>
          <Logo width='400px' height='400px' />

          <div>
            <ValuesContainer>
              <h2>
                Agilidade
              </h2>
              <p>
                Utilizando o framework Scrum e pensando Lean temos uma metodologia totalmente aplicável a realidade
                da sua empresa, com entregas rápidas e iterativas. Entregando resultado em semanas e não meses. 
              </p>
            </ValuesContainer>

            <ValuesContainer>
              <h2>Autoridade</h2>
              <p>
                Temos a medida necessaria entre academia e industria para a avaliação e implementação de 
                qualquer projeto de governança, arquitetura e engenharia de dados. 
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
            <EngenhariaDados width={300} height={300} />
            <span>
              Engenharia de dados
            </span>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </div>
          </li>
          <li>
            <CloudComputing width={300} height={300} />
            <span>
              Cloud computing
            </span>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </div>
          </li>
          <li>
            <IA width={300} height={300} />
            <span>
              Inteligencia artificial
            </span>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </div>
          </li>
          <li>
            <IOT width={300} height={300} />
            <span>
              IOT
            </span>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </div>
          </li>
        </ul>
      </PilarsSection>

      <ContactSection id='contact-section'>
        <div>
          <h2>Gostou? Fale conosco!</h2>
          <h3>
            Estamos prontos para te entregar a melhor solução para seu negócio
          </h3>
        </div>
        <ContactForm >
          <Input 
             id='name' 
             name='name'
             placeholder='Nome' 
             type="name" 
             value={name}
             onChange={e => setName(e.target.value)}
          />

          <Input 
            name='surname'
            id='surname'
            placeholder='Sobrenome' 
            type="name" 
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />

          <Input 
             id='email' 
             name='email'
             placeholder='Email' 
             type="email" 
             value={email}
             onChange={e => setEmail(e.target.value)}
          />

          <Input 
             id='telphone' 
             name='telphone'
             placeholder='Telefone' 
             type="number" 
             value={cellphone}
             onChange={e => setCellphone(e.target.value)}
          />
          
          <Input 
             id='description' 
             name='description'
             placeholder='Descreva' 
             type="text" 
             value={description}
             onChange={e => setDescription(e.target.value)}
          />

          <Button 
            type='submit'
            color='#EE4D29'
          >
            Enviar
          </Button>
        </ContactForm>
      </ContactSection>
    </>
  );
}

export default Home;