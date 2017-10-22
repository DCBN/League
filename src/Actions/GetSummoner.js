
const GetSummonerData = (SummonerName, SummonerRegion) => (dispatch, getState) => {
    const { SummonerData } = getState();
    if (SummonerName !== SummonerData.name && SummonerRegion !== SummonerData.region) {
        fetch(`http://localhost:5000/api/SummonerData/GetSummoner/${SummonerRegion}/${SummonerName}`)
            .then(response => response.json())
            .then(data => {
                if(!SummonerData.region) {
                    data.region = SummonerRegion.toLowerCase();
                }
                dispatch({ type: 'RECEIVE_SUMMONER_DATA',  SummonerData: data });
            });
        dispatch({ type: 'REQUEST_SUMMONER_DATA', payload: { SummonerName: SummonerName, SummonerRegion: SummonerRegion }});
    }
}

    export {
        GetSummonerData
    }