function findUniq(arr) {
  const unique = [...new Set(arr)];
  console.log(unique)
  for (let j in unique) {
    let countDuble = 0
    for (let i in arr) {
      if (unique[j] === arr[i]) {
        countDuble += 1
      }
      if (countDuble > 1) {
        const filteredNumbers = unique.filter((number) => number !== unique[j])
        console.log(filteredNumbers)
        return filteredNumbers[0]
      }
    }
  }
}

let nums = [3, 10, 3, 3, 3]
findUniq(nums)