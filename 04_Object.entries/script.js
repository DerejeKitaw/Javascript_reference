/***************************************************************
 *
 *	The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well) . The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array needs to be sorted first like Object.entries(obj).sort((a, b) => a[0] - b[0]);.
 *
 ****************************************************************/
const muscles = ['shoulders', 'chest', 'arms', 'back', 'legs'];

const exercisesData = [
  {
    id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders'
  },
  {
    id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'bench-press',
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest'
  },
  {
    id: 'pull-ups',
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back'
  },
  {
    id: 'deadlifts',
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back'
  },
  {
    id: 'squats',
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs'
  }
];
const run=() =>{
  console.log(Object.entries(exercisesData.reduce((exercises, exercise) => {
    const { muscles } = exercise;
    // console.log(exercises);
    console.log(exercise);
    // console.log(exercises[muscles]);
    exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise];
    return exercises;
  }, {})));
}
/***************************************************************
 *
 * return
 ["shoulders", Array(1)]
 ["arms", Array(2)]
 ["chest", Array(1)]
 ["back", Array(2)]
 ["legs", Array(1)]
run();
*
/***************************************************************/
