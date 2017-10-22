import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    LandingContainer, 
    SummonerInput,
    SummonerInputContainer,
    SummonerRegionIcon,
    RegionIcon,
    SummonerRegionSelector,
    SummonerSearchButton
} from '../Styles/Landing';

import { GetSummonerData } from '../Actions/GetSummoner';


class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SummonerName: '',
            SummonerRegion: 'EUW',
            ShowRegionSelector: false,
            Regions: [
                'EUNE', 'EUW', 'NA',
                'LAN', 'LAS', 'OCE',
                'KR', 'RU', 'TR', 'JP',
                'BR'
            ],
        }
        this.ToggleRegionSelector = this.ToggleRegionSelector.bind(this);
        this.SetSummonerRegion = this.SetSummonerRegion.bind(this);
        this.SetSummonerName = this.SetSummonerName.bind(this);
        this.SearchForSummoner = this.SearchForSummoner.bind(this);
    }

    ToggleRegionSelector() {
        const { ShowRegionSelector } = this.state;
        this.setState({ ShowRegionSelector: !ShowRegionSelector });
    }

    SetSummonerRegion(e) {
        const { SummonerRegion } = this.state;
        if(!e || !e.target) return console.error('No element provided to set Summoner Region');
        const Region = e.target.getAttribute('value');
        if(Region === SummonerRegion) return this.ToggleRegionSelector();
        this.setState({ SummonerRegion: Region }, this.ToggleRegionSelector);
    }

    SetSummonerName(e) {
        if(!e || !e.target) return console.error('No name provided to set Summoner Name');
        const Name = e.target.value;
        this.setState({ SummonerName: Name });
    }

    SearchForSummoner(e) {
        const { SummonerName, SummonerRegion } = this.state;
        const { GetSummonerData, history } = this.props;
        if(!this.state || !SummonerName || !SummonerRegion) return false;
        GetSummonerData(SummonerName, SummonerRegion);
        const Region = SummonerRegion.toLowerCase();
        let Name;
        if(SummonerName.indexOf(' ') > -1) {
            Name = SummonerName.split(' ').join('').toLowerCase();
        } else {
            Name = SummonerName.toLowerCase();
        }
        history.push(`/${Region}/${Name}`);
    }

    render() {
        const { ShowRegionSelector, SummonerRegion, Regions } = this.state;
        return (
            <LandingContainer className="animated fadeIn" >
                <SummonerInputContainer>
                    <SummonerInput type="text" placeholder="Enter your Summoner name." onChange={this.SetSummonerName}/>
                    <SummonerRegionIcon onClick={this.ToggleRegionSelector}>{ SummonerRegion }</SummonerRegionIcon>
                    <SummonerRegionSelector show={ShowRegionSelector}>
                        {
                            Regions && Regions.map(Region => <RegionIcon key={Region} show={ShowRegionSelector} onClick={this.SetSummonerRegion} value={Region}> { Region } </RegionIcon> )
                        }
                    </SummonerRegionSelector>
                </SummonerInputContainer>
                <SummonerSearchButton onClick={this.SearchForSummoner}> Click here or press enter to search! </SummonerSearchButton>
            </LandingContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetSummonerData: (SummonerName, SummonerRegion) => {
            dispatch(GetSummonerData(SummonerName, SummonerRegion))
        }
    }
}

export default connect(null, mapDispatchToProps)(Landing);