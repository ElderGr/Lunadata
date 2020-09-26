import React, {useState, useEffect} from 'react';

import { Container, ContactSection, ContactForm } from './styles';
import EngenhariaDados from "../../../assets/icons/EngenhariaDados";

import Button from '../../../components/Button';
import Input from "../../../components/Input";

export default function DataEngerieer(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <Container>
            <section>
                <div>
                    <EngenhariaDados width={600} height={600}  />
                </div>

                <div>
                    <h2>Engenharia de dados</h2>
                    <p>
                        Nesse momento que, a produção de dados dispara a cada minuto, e que as fontes de dados
                        são cada vez mais diversificadas, dados de redes sociais, dados de sistemas internos como
                        ERPs e CRMs, sendo produzidos em uma velocidade exponencial.
                    </p>

                    <p>
                        Nós vamos, junto com seu time e com as melhores práticas do mercado, desenvolver um
                        pipeline de ingestão de dados, que vai possibilitar a carga de dados estruturados e não
                        estruturados para dentro do seu data lake.
                    </p>

                    <p>
                        Nesse processo, vamos colocar em prática a governança de dados, criando o repositório de
                        metadados e um pipeline de ingestão automatizado com telemetria do processo.
                    </p>

                    <p>
                        Vamos criar visões no seu data lake para que você possa com ferramentas analíticas,
                        acessar essas informações e explorar novos insights.
                    </p>

                    <p>
                        Seus cientistas de dados vão ter um ambiente, padronizado, devidamente estruturado e
                        com dados normalizados para a busca dos insights que vão alavancar seus negócios.
                    </p>
                </div>
            </section>
            <ContactSection id='contact-section'>
                <div>
                <h2>Gostou? Fale conosco!</h2>
                <h3>
                    Estamos prontos para lhe entregar a melhor solução para seu negócio
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
        </Container>
    )
}
