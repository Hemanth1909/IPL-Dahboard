// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const MatchDetails = {
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    date: latestMatch.date,
    firstInnings: latestMatch.first_innings,
    id: latestMatch.id,
    manOfTheMatch: latestMatch.man_of_the_match,
    matchStatus: latestMatch.match_status,
    result: latestMatch.result,
    secondInnings: latestMatch.second_innings,
    umpires: latestMatch.umpires,
    venue: latestMatch.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = MatchDetails

  //   console.log(latestMatch)

  return (
    <div className="latest-match-container">
      <div className="latest-top-container">
        <p className="opp-team">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="bottom-text">{venue}</p>
        <p className="bottom-text">{result}</p>
      </div>
      <div className="latest-mid-container">
        <img
          src={competingTeamLogo}
          className="opp-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="latest-bottom-container">
        <p>First Innings</p>
        <p className="bottom-text">{firstInnings}</p>
        <p>Second Innings</p>
        <p className="bottom-text">{secondInnings}</p>
        <p>Man Of The Match</p>
        <p className="bottom-text">{manOfTheMatch}</p>
        <p>Umpires</p>
        <p className="bottom-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
