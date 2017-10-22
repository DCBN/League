import styled from 'styled-components';

const SummonerRow = styled.div`
    width: 100%;
    padding: 5px;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5px;
`;

const SummonerPageContainer = styled.div`
    width: 75%;
    height: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    display: flex; 
    flex-direction: row;
    margin-bottom: 5px;
`;

const SummonerProfile = styled.div`
    width: 15%;
    height: 30%;
    background: white;
    font-family: 'Ostrich Sans', sans-serif;
    margin: 0 5px 5px 0;
`;

const SummonerIcon = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-image: ${props => props.src || ''};
`;

const SummonerLevel = styled.div`
    font-weight: 900;
    margin-right: 10px;
    font-size: 1.5em;
`;

const SummonerName = styled.div`
     font-weight: 900;
     font-size: 1.5em;
     letter-spacing: .125em;
`;

const SummonerRegion = styled.div`
    font-weight: 900;
    font-size: 1.5em;
    letter-spacing: .05em;
`;

const SummonerWinsColumn = styled.div`
    margin-right: 15px;
`;

const SummonerLossesColumn = styled.div`
    margin-left: 15px;
`;

const SummonerLabel = styled.div`
    color: ${props => props.color || 'black'};
    font-size: 1.5em;
    font-weight: 400;
    letter-spacing: .075em;
    margin-bottom 5px;
    -webkit-font-smoothing: antialiased;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
`;

const SummonerValue = styled.div`
    font-weight: 900;
    text-align: center;
    font-size: 1.25em;
`;


export {
    SummonerIcon,
    SummonerLabel,    
    SummonerLevel,
    SummonerLossesColumn,
    SummonerName,
    SummonerRow,
    SummonerRegion,
    SummonerPageContainer,
    SummonerProfile,
    SummonerValue,
    SummonerWinsColumn,
}