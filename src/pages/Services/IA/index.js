import React, {useState, useEffect} from 'react';

import { Container, ContactSection, ContactForm } from './styles';
import IA from "../../../assets/icons/IA";

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
                    <IA width={600} height={600}  />
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
