import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const dataObject = await response.json()
    const {teams} = dataObject
    const updatedTeams = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: updatedTeams, isLoading: false})
  }

  render() {
    const {isLoading, teamsData} = this.state

    return (
      <div className="dash-bg-custom">
        <div className="main-head-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-img"
          />
          <h1 className="dash-main-head">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div className="loader-cen">
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          </div>
        ) : (
          <ul className="teams-con">
            {teamsData.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
