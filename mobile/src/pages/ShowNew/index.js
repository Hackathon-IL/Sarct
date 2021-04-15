import React from 'react';

import {
  Container,
  Image,
  NewContainer,
  DateTime,
  Title,
  TextContainer,
  Text,
  TranslateContainer,
} from './styles';
import BackgroundNew from '../../assets/';

export default function ShowNew() {
  return (
    <Container>
      <Image source={BackgroundNew} />
      <NewContainer>
        <TextContainer>
            <DateTime>13/04/2021 19:44</DateTime>
            <Title>O que é Coronavírus e como reconhecer os seus sintomas</Title>
            <Text>      SO coronavírus é uma família de vírus que causa infecções respiratórias e provoca a doença chamada COVID-19, que foi identificada no ano passado em Wuhan, China. No dia 11 de março de 2020,
              essa doença foi classificada como PANDEMIA pela Organização, Mundial da Saúde (OMS). Isso quer dizer que ela se espalhou por uma grande região do mundo, infectando milhares de pessoas e acabou
              chegando aqui na região Amazônica também. Por isso, temos que nos cuidar e evitar que essa doença se espalhe no Rio Negro.</Text>
            <Text>    Lorem ipsum amet egestas cubilia fusce aliquam ipsum dictum magna libero porta donec risus venenatis, platea suscipit ac placerat aenean dictumst potenti tincidunt curabitur facilisis
              sollicitudin bibendum. laoreet cras porttitor hac facilisis habitasse hendrerit mattis pretium, faucibus vel duis varius venenatis ornare malesuada adipiscing, aliquam justo ornare conubia
              fringilla potenti condimentum. nullam risus quisque malesuada donec neque porttitor aenean lobortis auctor condimentum odio litora nibh a torquent, nibh venenatis velit hac mollis consectetur
              morbi laoreet netus nam quisque magna eros. quis egestas ligula elit eros pellentesque cursus pellentesque metus, bibendum accumsan fermentum aenean etiam neque consequat, fermentum amet lacus
              ut sollicitudin tortor egestas.</Text>
        </TextContainer>
      </NewContainer>
    </Container>
  );
}