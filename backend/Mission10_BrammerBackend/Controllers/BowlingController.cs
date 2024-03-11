using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_BrammerBackend.Data;

namespace Mission10_BrammerBackend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _brepo;
        public BowlingController(IBowlingRepository temp) { 
            _brepo = temp;
        }
        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var bowlerData = _brepo.Bowlers.Where(x => x.TeamId is 1 or 2).ToArray();

            return bowlerData;
        }  



    }
}
