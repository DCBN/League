using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace LeagueAPI.Controllers
{
    [Route("api/[controller]")]
    public class SummonerDataController : Controller
    {
        private string APIKEY = "RGAPI-fb45b1e2-d99f-475f-8a50-9ab8979a77b9";

        [HttpGet("[action]/{SummonerRegion}/{SummonerName}")]
        public async Task<string> GetSummoner(string SummonerRegion, string SummonerName)
        {
            string Region = SummonerRegion.ToLower() + "1";
            string Name = SummonerName.ToLower();
            string baseUrl = $"https://{Region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/{Name}?api_key={APIKEY}";

            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage res = await client.GetAsync(baseUrl))
            using (HttpContent content = res.Content)
            {
                string data = await content.ReadAsStringAsync();
                if (data != null)
                {
                    return data;
                }
                return "Could not get any data!";
            }
        }
    }
}
