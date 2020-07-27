import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row
} from 'reactstrap';
import './styles.css';

const items = [
    {
        text: '"Seu sérum é milagroso. A minha cara tava com umas espinhas internar horrível, por causa da máscara não saia as pontinhas. Estourei tudo, ficou uma bela vista minha cara. Passo o sérum num dia, só ele, mais nada. No outro dia já desinchou todas elas. Mais um dia usando já parece que querem sumir."',
        author: 'Ana Malta'
    },
    {
        text:'"Que serium milagroso é esse?? Simplesmente amando, minha pele acorda hidratada e sem óleo hahaha Passando para agradecer ... (sem) sua energia, dedicação, amor e doação, seriam apenas produtos e não uma linha de tratamento dedicados pensando para cada ocasição."',
        author:'Suellen Coutinho'
    },
    {
        text:'"Olha o cheiro é incrível, eu to emocionada felizona. Mano parabéns, pode ter certeza que irei comprar mais produtos com vc. Eu nem usei e já da pra sentir todo amor e carinho desde a ecobag até abrir cada vidrinho."',
        author: 'Janaina Prado'
    },
    {
        text:'"Eu amei a ideia dos chás. E menina, minha pele se deu SUPER bem com o sabonete de argila branca e rosa ❤️ quero reposição"',
        author: 'Barbara Duarte'
    },
    {
        text:'"Esse sérum e o hidratante melhoraram minha oleosidade quase que 100% não sei mais o que é testa escorrendo óleo ❤️"',
        author:'Paulo Dutra'
    }
];

const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (
      <CarouselItem className="carousel-item"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <p className="text-center">{item.text}</p>
        <p className="text-center">{item.author}</p>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}


export default Carrousel;