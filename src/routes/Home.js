import React, { Component } from 'react'
import { AllPartiesQuery } from '../graphql/queries'
import EventCard from '../components/EventList/EventCard'
import EventCardGrid from '../components/EventList/EventCardGrid'

import SafeQuery from '../components/SafeQuery'

class Home extends Component {
  render() {
    return (
      <>
        <h2>All parties</h2>
        <SafeQuery query={AllPartiesQuery}>
          {({ data: { parties } }) => {
            return parties ? (
              <EventCardGrid>
                {parties.map((party, index) => (
                  <EventCard party={party} key={index} />
                ))}
              </EventCardGrid>
            ) : (
              <div>No parties to show!</div>
            )
          }}
        </SafeQuery>
      </>
    )
  }
}

export default Home
