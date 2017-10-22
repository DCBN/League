import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetSummonerData } from '../Actions/GetSummoner';
import _ from 'lodash';

import {
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
} from '../Styles/SummonerPage';

class SummonerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Summoner: {},
            Loading: true
        }
    }

    componentWillMount() {
        const { GetSummonerData, Loading, match, SummonerData } = this.props;
        const Params = match.params;
        const { Region, Name } = Params;
        if(!Loading && _.isEmpty(SummonerData)) {
            GetSummonerData(Name.toLowerCase(), Region.toLowerCase())
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            Summoner: nextProps.SummonerData,
            Loading: nextProps.Loading
         });
    }

    render() {
        const { Loading, Summoner } = this.state;
        if(Loading) return <div> Loading Summoner...</div>;
        console.log(Summoner)
        return (
            <SummonerPageContainer>
                <SummonerProfile>
                    <SummonerRow>
                        <SummonerIcon src={`http://ddragon.leagueoflegends.com/cdn/7.20.1/img/profileicon/${Summoner.profileIconId}.png`} alt="Summoner Icon"/>
                    </SummonerRow>
                    <SummonerRow>
                        <SummonerName> {Summoner.name || 'No name found'} </SummonerName> 
                    </SummonerRow>
                    <SummonerRow>
                        <SummonerLevel> {Summoner.summonerLevel || 'No name found'} </SummonerLevel>
                        <SummonerRegion> {Summoner.region.toUpperCase() || 'No name found'} </SummonerRegion> 
                    </SummonerRow>
                    <SummonerRow>
                        <SummonerWinsColumn> 
                            <SummonerLabel color="green"> Wins </SummonerLabel>
                            <SummonerValue> 50% </SummonerValue>
                        </SummonerWinsColumn>
                        <SummonerLossesColumn> 
                            <SummonerLabel color="red"> Losses </SummonerLabel>
                            <SummonerValue> 50% </SummonerValue>
                        </SummonerLossesColumn>
                    </SummonerRow>
                </SummonerProfile>
            </SummonerPageContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SummonerData: state.SummonerData,
        Loading: state.SummonerLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetSummonerData: (SummonerName, SummonerRegion) => {
            dispatch(GetSummonerData(SummonerName, SummonerRegion))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummonerPage);