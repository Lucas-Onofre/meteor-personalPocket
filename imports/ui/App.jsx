import React from 'react'

import { useTracker } from 'meteor/react-meteor-data'
import { TrainingSheetCollection } from '../api/TrainingSheetCollection.js'

export const App = () => {
  const trainingSheet = useTracker(() =>
    TrainingSheetCollection.find({}).fetch()
  )

  return (
    <>
      <h1>Training Sheet rendering</h1>

      <ul>
        {trainingSheet.map((t) => (
          <li>
            <span>
              <p>{t.title}</p>
              <p>{t.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
