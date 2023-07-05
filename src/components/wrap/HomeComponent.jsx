import React from 'react'
import Section1Component from './home/Section1Component'
import Section2Component from './home/Section2Component'

export default function HomeComponent() {
  return (
    <div id="home">
      <Section1Component />
      <Section2Component />
    </div>
  )
}
