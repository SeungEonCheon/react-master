import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
    coinId : string;
}

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  margin-bottom:20px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteState{
    coinName: string;
}


function Coin(){
    const [loading, setLoding] = useState(true); 
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();
    return (
        <Container>
      <Header>
        <Title>{state?.coinName||"Loading..."}</Title>
      </Header>
      {loading ? (<Loader>Loading...</Loader>) : null}
      </Container>
    );
}

export default Coin;