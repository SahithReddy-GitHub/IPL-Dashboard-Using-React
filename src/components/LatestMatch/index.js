import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  console.log(latestMatchDetails.result)
  return (
    <div className="match-con">
      <h1 className="match-head">Latest Matches</h1>
      <div className="match-card">
        <div className="card1">
          <h1 className="team-head">{competingTeam}</h1>
          <h1 className="date">{date}</h1>
          <p className="para2">{venue}</p>
          <p className="para2">{result}</p>
        </div>
        <div className="card2">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="card2-img"
          />
        </div>
        <div className="card3">
          <h1 className="title-head">First Innings</h1>
          <p className="para">{firstInnings}</p>
          <h1 className="title-head">Second Innings</h1>
          <p className="para">{secondInnings}</p>
          <h1 className="title-head">Man Of The Match</h1>
          <p className="para">{manOfTheMatch}</p>
          <h1 className="title-head">Umpires</h1>
          <p className="para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
