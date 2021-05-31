/*
contains the calculations for the bmr aswell and daily calories
*/

async function maleBMR(weight, height, age, multiplier) {
  return await (multiplier * (66 + 6.3 * weight + 12.9 * height - 6.8 * age));
}

module.exports = { maleBMR };
