import React, {useEffect} from 'react';

import { Container, ContactSection } from './styles';
import EngenhariaDados from "../../../assets/icons/EngenhariaDados";

import ContactForm from '../../../components/ContactForm';

export default function DataEngerieer(){

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

                <ContactForm />
            </ContactSection>
        </Container>
    )
}
