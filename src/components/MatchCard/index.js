import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentMatchData

  const classNameCard = matchStatus === 'Won' ? 'won-card' : 'lost-card'

  return (
    <div className="matchCard-con">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="matchCard-img"
      />
      <h1 className="matchCard-head">{competingTeam}</h1>
      <p className="matchCard-para">{result}</p>
      <p className={`matchCard-res ${classNameCard}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
