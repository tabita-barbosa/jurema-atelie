import React from 'react';
import{Container, Col, Row} from 'reactstrap';
import Maos from '../../assets/maos-insta.PNG';
import Logo from '../../assets/logo-jurema.png';
import './styles.css';

const SobreNos = () => {
    return(
        <Container className="">
            <Row className="d-flex div-sobre">
                <Col className="div-imagem col-m-6 justify-content-center ">
                <img src={Maos} className="sobre-imagem" alt="imagem com perspectiva de cima dos braços e mãos de duas pessoas, uma jovem e uma idosa, lavando as mãos em uma pia branca utilizando um dos sabonetes da Jurema Atelie"></img>
                </Col>
                <Col className="col-m-6">
                <h5 className="sobre-titulo">Jurema Ateliê</h5>
                <p className="sobre-texto">A Jurema é um ateliê criativo que começou com o ideal de reconectar as pessoas a mãe natureza e toda sua energia de cura. Todos os nossos produtos são feitos com as melhores intenções e energias garantinho que você se sinta especial assim que recebê-los . Nossa intenção é despertar cada vez mais o poder selvagem adormecido que existe dentro de cada um de nós através do toque, do afeto e do amor! 
                Produtos totalmente livres de crueldade animal, embalagens retornáveis, consumo consciente, e atendimento humanizado são nossas diretrizes. 
                </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <img className="logo-jurema" src={Logo} alt="Logo da Jurema Atelie, que consiste em um meio sol, o nome do atelie e duas mãos em gesto de entrega desenhadas"></img>
            </Row>
        </Container>
    )
}

export default SobreNos;