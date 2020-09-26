import React, {useState, useRef, useCallback} from 'react';

import { 
  IntroSection, 
  ValuesSection,
  ValuesContainer,
  PilarsSection,
  ContactSection,
  ContactForm,
  CheboxContainer
} from "./styles";

import AnchorButton from '../../components/AnchorButton';
import Button from '../../components/Button';
import Input from "../../components/Input";
import Textarea from '../../components/Textarea';

import Logo from "../../assets/Logo";
import CloudComputing from "../../assets/icons/CloudComputing";
import EngenhariaDados from "../../assets/icons/EngenhariaDados";
import IA from "../../assets/icons/IA";
import IOT from "../../assets/icons/IOT";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

const Home = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [telphone, setTelphone] = useState('');
  const [description, setDescription] = useState('');
  const formRef = useRef(null)

  const handleSubmit = useCallback(async (data) =>{
    try {
      // setLoading(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome é obrigatório'),
        surname: Yup.string()
          .required('Sobrenome é obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        telphone: Yup.string()
          .required('Telefone é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // history.push('/home');
      // setLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);
      }
      // setLoading(false);
      // console.log(err);
    }
  }, [])

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
        <ContactForm ref={formRef} onSubmit={handleSubmit} >
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
             value={telphone}
             onChange={e => setTelphone(e.target.value)}
          />
          
          <Textarea 
             id='description' 
             name='description'
             placeholder='Descreva' 
             type="text" 
             value={description}
             onChange={e => setDescription(e.target.value)}
          />
          <CheboxContainer>
            <input type='checkbox' id='marketingInput' />
            <label htmlFor='marketingInput'>Permite o envio de e-mails pela nossa equipe de marketing?</label>
          </CheboxContainer>
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