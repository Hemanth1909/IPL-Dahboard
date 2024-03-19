// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: {},
    recentMatches: [],
    bg: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props

    const {params} = match
    const {id} = params
    console.log(id)

    const bgColor = id

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const formattedRecentMatches = formattedData.recentMatches.map(
      eachMatch => ({
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        date: eachMatch.data,
        firstInnings: eachMatch.first_innings,
        id: eachMatch.id,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        secondInnings: eachMatch.second_innings,
        umpires: eachMatch.umpires,
        venue: eachMatch.venue,
      }),
    )
    this.setState({
      teamBanner: formattedData.teamBannerUrl,
      latestMatch: formattedData.latestMatchDetails,
      recentMatches: formattedRecentMatches,
      bg: bgColor,
      isLoading: false,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatches, bg, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className={`main-team-matches-container ${bg}`}>
            <img src={teamBanner} className="team-banner" alt="team banner" />

            <p className="latest-matches-heading">Latest Matches</p>

            <LatestMatch latestMatch={latestMatch} />

            <div>
              <ul className="recent-container">
                {recentMatches.map(eachMat => (
                  <MatchCard matchDetails={eachMat} key={eachMat.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
