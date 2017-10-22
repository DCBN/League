export const SummonerData = (state = {}, action) => {
    switch(action.type) {
        case 'RECEIVE_SUMMONER_DATA':
            return action.SummonerData;
        default:
            return state
    }
}

export const SummonerLoading = (state = false, action = {}) => {
    switch(action.type) {
        case 'REQUEST_SUMMONER_DATA':
            return true;
        case 'RECEIVE_SUMMONER_DATA':
            return false;
        default:
            return state
    }
}