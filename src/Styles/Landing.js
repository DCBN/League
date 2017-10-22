import styled from 'styled-components';

const LandingContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SummonerInputContainer = styled.div`
    height: 50px;
    width: 650px;
    position: relative;
    background: #fff;
`;

const SummonerInput = styled.input`
    border: 1px solid #e3e3e3;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    height: 100%;
    width: 100%;
    max-width: 650px;
    box-shadow: 0px 2.5px 1px 0px rgba(0,0,0,0.25);
    transition: box-shadow .4s ease;
    background: none;
    &:focus {
        outline: none;
        box-shadow: 0px 2.5px 5px 0px rgba(0,0,0,0.5);
    }
`;

const SummonerRegionIcon = styled.div`
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 2px;
    background: #3498db;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1px;
`;

const SummonerRegionSelector = styled.div`
    height: 150px;
    width: 300px;
    padding: 5px;
    background: white;
    position: absolute;
    bottom: calc(100% + 15px);
    right: -125px;
    transition: opacity .4s ease;
    z-index: 999;
    opacity: ${props => props.show ? 1 : 0};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 2px;

    &:after {
        content:'';
        position: absolute;
        top: 100%;
        left: 50%;
        width: 0;
        height: 0;
        border-top: solid 7.5px #fff;
        border-left: solid 7.5px transparent;
        border-right: solid 7.5px transparent;
        transform: translate(-50%, 0);
    }
`;

const RegionIcon = styled.div`
    height: 40px;
    width: 50px;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 2px;
    background: #3498db;
    cursor: ${props => props.show ? 'pointer' : 'default'};
    transition: background .4s ease;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1px;
    &:hover {
        background: #2980b9;
    }
`;

const SummonerSearchButton = styled.div`
    padding: 12px 32px;
    border: none;
    font-family: 'Quicksand', sans-serif;
    width: 100%;
    max-width: 650px;
    box-shadow: 0px 2.5px 1px 0px rgba(0,0,0,0.25);
    transition: box-shadow .4s ease;
    color: white;
    background: #3498db;
    text-align: center;
    cursor: pointer;
    margin: 5px 0;
`;

export {
    LandingContainer, 
    SummonerInput,
    SummonerInputContainer,
    SummonerRegionIcon,
    RegionIcon,
    SummonerRegionSelector,
    SummonerSearchButton
};