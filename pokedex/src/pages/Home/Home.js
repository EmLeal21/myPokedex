import React from "react";
import { Link } from "react-router-dom";
import {
  PokedexFechada,
  Pokedex,
  BrowserButtonsContainer,
  BrowserButton,
  Capa,
  CapaContainer,
  Image,
  Button,
  TextCountainer,
  Div,
  SubTitle,
  HomeD,
  H3
} from "./styled";


const Home = () => {
  return (
    <HomeD>
      <TextCountainer>
      <H3>Welcome to the fascinating world of Pokémon!</H3>
        <SubTitle>

Embark on a unique journey through the diverse generations of these lovable creatures, exploring their abilities, evolutions, and intriguing facts.
 Our website offers a comprehensive experience with the Pokédex, allowing you to delve deep into all generations of Pokémon, 
 from the classics of the Kanto region to the latest discoveries in Paldea. Be a virtual trainer, discover detailed information about each Pokémon.
 <Div/>
 Click on the Pokeball to find your ultimate guide to becoming a Pokémon master!
        </SubTitle>
      </TextCountainer>
      <Pokedex>
        <PokedexFechada>
          <BrowserButtonsContainer>
            <BrowserButton />
            <BrowserButton />
            <BrowserButton />
          </BrowserButtonsContainer>
          <CapaContainer>
            <Link to="/main">
              <Capa>
                <Image>
                  <Button />
                </Image>
              </Capa>
            </Link>
          </CapaContainer>
        </PokedexFechada>
      </Pokedex>
    </HomeD>
  );
};

export default Home;
