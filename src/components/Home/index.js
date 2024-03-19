// Write your code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    matchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    // console.log(data)

    const formattedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({matchData: formattedData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state
    // console.log(matchData)
    // console.log(matchData)
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="main-container">
            <div className="main-top-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1>IPL Dashboard</h1>
            </div>

            <div className="teams-container">
              {matchData.map(eachT => (
                <TeamCard teamDetails={eachT} key={eachT.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
