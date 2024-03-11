namespace Mission10_BrammerBackend.Data
{
    public interface IBowlingRepository
    {
        IEnumerable<Bowler> Bowlers {  get; }
    }
}
