function validateBattlefield(field) {

  let countActiveCell = 0
  let countSubmarine = 0
  let result = {
    state: true,
    error: 'Error: 0'
  }

  // Проверка периметра
  const checkDiagonal = (cells, row, column) => {
    if (cells[row + 1] === undefined) return false;
    if (cells[row + 1][column - 1] === 1 ||
      cells[row + 1][column + 1] === 1) {
      return true
    }
    return false
  }

  const checkHasNext = (field, y, x) => {
    // let next = {
    //   has: false,
    //   nextY: y,
    //   nextX: x,
    // }
    for (let j = -1; j < 2; j++) {
      if (field[y + j] === undefined) continue;
      for (let i = -1; i < 2; i++) {
        if (field[y + j][x + i] === undefined || j === 0 && i === 0) continue;
          proxyField[y][x] = 0
          let cellMoore = field[y + j][x + i]
          console.log(cellMoore)
          return cellMoore ? {
          has: true,
          nextY: y + j,
          nextX: x + i,
        } : { has: false, }
      }
    }
  }

  let ships = { submarine: 0, destroyer: 0, cruiser: 0, battleship: 0, }
  let proxyField = [...field]
  const getShipLength = (y, x, length = 0) => {
    length += 1
    let next = checkHasNext(proxyField, y, x)
    console.log(next)
    if (next.has) {
      getShipLength(nextY, nextX, length)
    }
    return length
  }

  for (let row in field) {
    for (let value in field[row]) {
      let curentCell = field[row][value]
      if (curentCell === 1) {
        countActiveCell += 1
        // Проверка Диогонали
        if (checkDiagonal(field, +row, +value)) {
          result.state = false
          result.error = `Error: checkDiagonal = true`
          return result.error
          return false
        }
        getShipLength()
      }
    }
  }

  // Проверка количества активных клеток
  if (countActiveCell !== 20) {
    result.state = false
    result.error = `Error: countActiveCell = ${countActiveCell} not 20`
    return result.error
    return false
  }

  return result.state
  return true
}


let field = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

console.log(validateBattlefield(field))



  // const countCell = (field) => {
  //     let count = 0
  //     field.forEach(row => row.forEach(cell => { if (cell) count += 1 }))
  //     return count
  // }
  // if (countCell(field) !== 20) {
  //     return false
  // }



  // const checkMoore = (cells, row, column) => {
  //   for (let j = -1; j < 2; j++) {
  //     if (cells[row + j] === undefined) continue;
  //     for (let i = -1; i < 2; i++) {
  //       if (cells[row + j][column + i] === undefined ||
  //         j === 0 && i === 0) continue;
  //       let cellMoore = cells[row + j][column + i]
  //       return cellMoore ? {
  //         has: true,
  //         nextY: y + j,
  //         nextX: x + i,
  //       } : { has: false, }
  //     }
  //   }