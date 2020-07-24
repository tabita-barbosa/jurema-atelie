import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import ArgilaVerde from '../../assets/argila-verde.png';
import BarbatimaoCalendula from '../../assets/barbatimao.png';
import ArrudaAlecrim from '../../assets/arruda-alecrim.png';
import Oleo from '../../assets/oleo-corporal.png';
import Serum from '../../assets/serum-facial.png';
import Desodorante from '../../assets/desodorante.jpeg';
import BanhoAssento from '../../assets/banho-de-assento-1.png';
import EscaldaPes from '../../assets/escalda-pes.jpeg';
import './styles.css';



const CardProdutos = (props) => {
  return (
    <>
    <CardDeck>
      <Card>
        <CardImg top src={ArgilaVerde} alt="sabonete de argila verde" />
        <CardBody>
          <CardTitle>Sabonete vegano de argila verde</CardTitle>
          <CardSubtitle>R$ 15,00</CardSubtitle>
          <CardText>Base vegetal de coco palmiste e babaçu, argila verde, lavanda e óleo essencial de melaleuca. É indicado para peles oleosas ou propensas a acne, atua como adstringente e antisséptico, reduz os poros dilatados e deixa a pele com aspecto sequinho e aveludado.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={BarbatimaoCalendula} alt="sabonete de barbatimão e calendula" />
        <CardBody>
          <CardTitle>Sabonete vegano de barbatimão e calêndula</CardTitle>
          <CardSubtitle>R$ 15,00</CardSubtitle>
          <CardText> Base vegetal de coco palmiste e babaçu, extrato de calêndula é barbatimão. Forte aliado da saúde íntima, previne e remedia questões como candidíase, infecções, corrimentos não naturais e feridas. Pode ser usado também no tratamento de doenças de pele como a psoríase.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={ArrudaAlecrim} alt="sabonete de arruda e alecrim" />
        <CardBody>
          <CardTitle>Sabonete vegano de arruda e alecrim </CardTitle>
          <CardSubtitle>R$ 15,00</CardSubtitle>
          <CardText> Base vegetal de coco palmiste e babaçu, arruda e alecrim frescos e óleo essencial de alecrim. Essa alquimia busca através do poder das ervas quentes trabalhar questões como ansiedade, medo, apatia. A arruda limpa o corpo astral e o alecrim potencializa a força de iniciativa e cocriação. Perfeito para afastar energias densas e negativas e se manter sereno.
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
    <CardDeck>
      <Card>
        <CardImg top src={Desodorante} alt="desodorante natural" />
        <CardBody>
          <CardTitle>Desodorante</CardTitle>
          <CardSubtitle>R$ </CardSubtitle>
          <CardText>Totalmente livre de alumínios o nosso desodorante é composto por óleo de coco, bicarbonato de sódio, óleos essenciais de melaleuca e bergamota. Inibe o mau odor por em média 4 horas e permite que seus poros respirem naturalmente.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={Serum} alt="serum facial" />
        <CardBody>
          <CardTitle>Sérum facial controle de oleosidade</CardTitle>
          <CardSubtitle>R$ 35,00</CardSubtitle>
          <CardText>Sem dúvidas esse produto é nosso queridinho, composto por óleo vegetal de jojoba, óleos essenciais de melaleuca e lavanda e vitamina E ele além de equilibrar a oleosidade garante uma hidratação profunda. Auxilia na diminuição de acnes e poros dilatados e deixa a pele com aquele glow.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top src={Oleo} alt="óleo corporal afrodisíaco" />
        <CardBody>
          <CardTitle>Óleo corporal afrodisíaco </CardTitle>
          <CardSubtitle>R$ </CardSubtitle>
          <CardText>Composto por óleo vegetal de gergelim e óleos essenciais de ylang ylang, pimenta rosa e patchouli. Além de hidratar profundamente a pele, estimula a circulação sanguínea. Através da aromaterapia trabalhar a nossa sensualidade e magnetismo.
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
    <CardDeck>
      <Card>
        <CardImg top src={EscaldaPes} alt="escalda pés" />
        <CardBody>
          <CardTitle>Escalda pés de rosas brancas, camomila e sal do himalaia</CardTitle>
          <CardSubtitle>R$ </CardSubtitle>
          <CardText>Nada mais é que a prática de mergulhar os pés em uma bacia com água morna e ervas ou óleos tendo como objetivo aliviar a sensação de cansaço e trazer relaxamento. Nesse caso as rosas brancas trazer nuances de paz e serenidade e a camomila desperta nossa energia feminina, afetuosa e cheia de amor. Perfeito para finalizar um daqueles dias cansativos da melhor maneira.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top  src={BanhoAssento} alt="banho de assento" />
        <CardBody>
          <CardTitle>Banho de assento ou vaporização uterina</CardTitle>
          <CardSubtitle>R$ </CardSubtitle>
          <CardText>Nosso útero armazena memórias ancestrais, alegrias e dores que já estão no nosso DNA a várias gerações.
          As ervas de poder escolhidas são artemísia, calêndula e camomila elas vão através de seu poder de cura nos auxiliar a limpar os padrões limitantes de memórias negativas e também a transmutar toda dor em força criativa.
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  </>
  )
}


export default CardProdutos;