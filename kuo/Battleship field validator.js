function validateBattlefield(field) {

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


	let countActiveCell = 0
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
			}
		}
	}

	const checkHasNext = (field, y, x) => {
		for (let j = -1; j < 2; j++) {
			if (field[y + j] === undefined) continue;
			for (let i = -1; i < 2; i++) {
				if (field[y + j][x + i] === undefined || j === 0 && i === 0) continue;
				let cellMoore = field[y + j][x + i]
				return cellMoore === 1 ? {
					has: true,
					nextY: y + j,
					nextX: x + i,
				} : { has: false, }
			}
		}
	}

	// let proxyField = [...field]
	// let count = 0
	// proxyField.forEach((row, y, array) => {
	// 	row.forEach((value, x) => {
	// 		if (value) {
	// 			let shipLength =
	// 				checkHasNext(array, y, x)
	// 			array[y][x] = 0
	// 		}
	// 	})
	// })
	// console.log(proxyField)

	// let ships = { submarine: 0, destroyer: 0, cruiser: 0, battleship: 0, }
	// let proxyField = [...field]
	// const getShipLength = (proxyField, y=0, x=0, length = 0) => {
	//   console.log(proxyField)
	//   for (let y in proxyField) {
	//     console.log(y)
	//     for (x in proxyField[y]) {
	//       let curentCell = proxyField[y][x]
	//       if (curentCell === 1) {
	//         length += 1
	//         let next = checkHasNext(proxyField, y, x)
	//         console.log(next)
	//         if (next.has) {
	//           getShipLength(proxyField, next.y, next.x, length)
	//         }
	//         return length
	//       }
	//     }
	//   }
	// }
	// getShipLength(proxyField)

	// for (let row in proxyField) {
	//   for (let value in proxyField[row]) {
	//     let curentCell = proxyField[row][value]
	//     if (curentCell === 1) {
	//       let length = getShipLength(+row, +value)
	//       console.log(proxyField)
	//     }
	//   }
	// }


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

const check = (index, arr, length = 1) => {
	arr[index] = 0
	for (let cord = index - 1; cord <= index + 1; cord++) {
		if (!arr[cord]) continue;
		if (arr[cord] === 1) {
			length += 1
		}
		console.log({ index, cord, length })
		check(cord, arr, length)
		return length
	}
}

const fo = (arr) => {
	arr.forEach((val, index) => {
		if (val) {
			check(index, arr)
		}
	})
}
let proxy = [1, 0, 0, 0, 0, 1, 1, 1, 1, 0]
console.log(proxy)
console.log(fo(proxy))
console.log(proxy)
