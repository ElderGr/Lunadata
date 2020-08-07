import React, {useState} from 'react';

import { Container, ContactSection, ContactForm } from './styles';
import CloudComputing from "../../../assets/icons/CloudComputing";

import Button from '../../../components/Button';
import Input from "../../../components/Input";

export default function DataEngerieer(){
    const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [description, setDescription] = useState('');

    return(
        <Container>
            <section>
                <div>
                    <CloudComputing width={600} height={600}  />
                </div>

                <div>
                    <h2>Cloud</h2>
                    <p>
                        A Lunadata esta capacitada para levar sua empresa para o próximo nível, seja na implantação de uma arquitetura cloud, ou para entender seu uso de um serviço já contratado.
                    </p>

                    <p>
                        Na implantação, vamos mapear as áreas de negócio que podem trazer mais resultados para suas metas baseados nas metas da sua empresa. Vamos levar seus dados para cloud e usar as ferramentas disponíveis para tirar os insights que vão levar sua empresa para o próximo nível.
                    </p>

                    <p>
                        No entendimento de um serviço já contratado existem muitos pontos de ganho, estratégia de uso de ferramentas disponíveis e não utilizadas, mapeamento de custos indevidos e auxilio a equipe da sua empresa de como reduzir esses custos e continuar tirando o máximo de proveito dos serviços da nuvem.
                    </p>
                </div>
            </section>
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
        </Container>
    )
}
