import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamId: '', teamDetails: {}, isLoading: true}

  componentDidMount = () => {
    this.getEachTeamDetails()
  }

  getEachTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({teamId: id, teamDetails: updatedData, isLoading: false})
  }

  render() {
    const {teamId, teamDetails, isLoading} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = teamDetails
    const bgColors = {
      RCB: '#a4261d',
      KKR: '#5755a7',
      KXP: ' #d91c1f',
      CSK: '#f7db00',
      RR: '#da237b',
      MI: '#13418b',
      SH: '#f26d22',
      DC: '#4f5db0',
    }
    const colorCode = bgColors[teamId]

    return (
      <div className="bg" style={{backgroundColor: colorCode}}>
        {isLoading ? (
          <div className="loader-cen">
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          </div>
        ) : (
          <div className="team-con">
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul>
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} recentMatchData={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
