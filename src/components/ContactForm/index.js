import React, {useRef, useCallback} from 'react';

import Input from '../Input';
import TextArea from '../Textarea';
import Button from '../Button';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { CheboxContainer, ContactForm } from "./styles";

const ContactFormComponent = (props) =>{
    const formRef = useRef(null)

    const handleSubmit = useCallback(async (data) =>{
        try {
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
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
    
            formRef.current.setErrors(errors);
          }
        }
      }, [])

    return(
        <ContactForm ref={formRef} onSubmit={handleSubmit} >
          <Input 
             id='name' 
             name='name'
             placeholder='Nome' 
             type="text"
          />

          <Input 
            name='surname'
            id='surname'
            placeholder='Sobrenome' 
            type="text" 
          />

          <Input 
             id='email' 
             name='email'
             placeholder='Email' 
             type="email" 
          />

          <Input 
             id='telphone' 
             name='telphone'
             placeholder='Telefone' 
             type="number" 
          />
          
          <TextArea 
             id='description' 
             name='description'
             placeholder='Descreva' 
             type="text" 
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
    )
}

export default ContactFormComponent