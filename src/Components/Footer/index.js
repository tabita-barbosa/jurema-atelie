import React from 'react';
import { Container, Row, Button} from 'reactstrap';
import InstaLogo from '../../assets/instalogo.png';
import WhatsLogo from '../../assets/whatslogo.png';
import './styles.css';

const Footer = () => {
    return (
        <Container className="">
            <h5 className="text-center">Fale comigo</h5>
            <Row className="justify-content-center">
                    <Button color="link" className="botao-insta" href="https://www.instagram.com/jurema_jureme/">
                        <img alt="icone do instagram" className="icones" src={InstaLogo}></img>
                    </Button>
                    <Button color="link" className="botao-whats" href="https://bit.ly/39jUzp0">
                        <img alt="icone do whatsapp" className="icones" src={WhatsLogo}></img>
                    </Button>
            </Row>
            <p className="texto-rodape"> Copyright © 2020 Todos os direitos reservados.</p>
            <p className="texto-rodape">Feito com ❤️ por Tabita Barbosa.</p>
        </Container>
    )
}

export default Footer;