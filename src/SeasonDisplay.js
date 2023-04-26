import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
  //names 'summer' and 'winter' must be the same as we define them in our func getSeason
  summer: {
    text: 'Let`s get to the beach',
    iconName: 'sun',
  },
  winter: {
    text: 'Brrr, it`s chilly!',
    iconName: 'snowflake',
  },
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth())
  // console.log(season)

  //   const text =
  //     season === 'summer' ? 'Let`s get to the beach' : 'Brrr, it`s chilly!'
  //   //setting conditionally class
  //   const icon = season === 'summer' ? 'sun' : 'snowflake'
  //INSTEAD of all this up we will configure an object

  //Now we will destructure our object
  const { text, iconName } = seasonConfig[season]

  return (
    //   season returns string: winter or summer so we can use it in CSS
    <div className={`season-display ${season}`}>
      {/* One way it is to put logic inside of JSX
      {season === 'summer' ? 'Let`s get to the beach' : 'Brrr, it`s chilly!'} */}
      {/* , another it is to put in variable */}
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
}

export default SeasonDisplay
