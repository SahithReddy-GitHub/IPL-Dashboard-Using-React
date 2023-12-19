import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <img src={teamImageUrl} alt={name} className="logo-img" />
      <div className="text-center">
        <h1 className="team-head">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
