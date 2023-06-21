import { Meteor } from 'meteor/meteor'
import { TrainingSheetCollection } from '../imports/api/TrainingSheetCollection'

const defaultData = [
  {
    title: 'Training Sheet 1',
    description: 'This is the first training sheet',
    exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3'],
  },
  {
    title: 'Training Sheet 2',
    description: 'This is the second training sheet',
    exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3'],
  },
  {
    title: 'Training Sheet 3',
    description: 'This is the third training sheet',
    exercises: ['Exercise 1', 'Exercise 2', 'Exercise 3'],
  },
]

const insertTrainingSheet = ({
  title,
  description,
  exercises,
  createdAt = new Date(),
}) =>
  TrainingSheetCollection.insert({
    title,
    description,
    exercises,
    createdAt,
  })

Meteor.startup(async () => {
  if (TrainingSheetCollection.find().count() === 0) {
    defaultData.forEach(insertTrainingSheet)
  }
})
