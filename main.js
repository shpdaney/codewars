// function playFlou(gameMap){
//     //Coding like playing game
//     var exampleSolution=[
//         [[0,0,"Right"]],  //an example solution for basic test-1
//         [[0,0,"Right"],[3,3,"Left"]],  //an example solution for basic test-2
//         [[0,1,"Down"],[3,2,"Up"]],  //an example solution for basic test-3
//         [[0,1,"Down"],[0,2,"Right"]],  //an example solution for basic test-4
//         [[1,0,"Right"],[0,0,"Right"]]  //an example solution for basic test-5
//     ]
// }

function playFlou(gameMap) {
  const regex = new RegExp('[A-Z\|\.]', 'g')
  let res = []
  let newGameMap = gameMap
    .split('\n')
    .filter(row => regex.test(row) && row)
    .map(row => row
      .split('')
      .splice(1).reverse()
      .splice(1).reverse()
    )

  function rotateRight(matrix) {
    return matrix.map((val, index) => matrix.map(row => row[index]).reverse())
  }
  function rotateLeft(matrix) {
    return matrix[0].map((val, index) => matrix.map(row => row[row.length-1-index]))
  }

  console.table(newGameMap);
  console.table(rotateRight(newGameMap));
  console.table(rotateLeft(newGameMap));

  const startPosition = [];
  newGameMap.forEach((row, indexRow) => {
      row.forEach((cell, indexCell) => {
        /[A-Z]/.test(cell) && startPosition.push([indexRow, indexCell, cell])
      })
    })
  console.log(startPosition);
}


const map =
  `+----+
|B...|
|....|
|....|
|..B.|
+----+`
playFlou(map)