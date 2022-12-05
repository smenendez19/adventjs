// Solucion con backtracking (120)

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let max = 0;
  const backtrack = (nums, path) => {
      let sum = 0
      path.forEach(item => {
        sum += item
      })
      if (sum > max && sum <= maxGifts) {
        max = sum
      }
      nums.forEach((item, i) => {
          path.push(item);
          if (path.length <= maxCities) {
            backtrack(nums.slice(i + 1), path);
          }
          path.pop(item);
      })
  }
  backtrack(giftsCities, []);
  return max;
}

// Solucion normal (96)

//function getMaxGifts(giftsCities, maxGifts, maxCities) {
//  let possible = 0
//  for (let i = 0; i < giftsCities.length; i++) {
//    let sum = giftsCities[i]
//    let cities = 1
//    for (let j = i + 1; j < giftsCities.length; j++) {
//      if(sum + giftsCities[j] > maxGifts) {
//        continue
//      }
//      if (cities + 1 > maxCities) {
//        break
//      }
//      sum += giftsCities[j]
//      cities += 1
//    }
//    if (sum > possible && sum <= maxGifts) {
//      possible = sum
//    }
//  }
//  return possible
//}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))