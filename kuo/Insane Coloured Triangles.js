function triangle(row) {
    const colors = 'RGB'
    if (row.length === 1) {
        return row
    }

    let nextRow = ''

    function nextColor(left, right) {
        if (left === right) {
            return left
        }
        const deleteColor = (color, colors) => colors.replace(color, '');
        let proxyColors = [...colors].join('')
        proxyColors = deleteColor(left, proxyColors)
        proxyColors = deleteColor(right, proxyColors)
        return proxyColors
    }

    for (let i = 0; i < row.length - 1; i++) {
        let left = row[i],
            right = row[i + 1]
        nextRow += nextColor(left, right)
    }
    return triangle(nextRow)
}

function countRGB(row) {
    const res = {R: 0, G: 0, B: 0}
    row.split('')
        .forEach(color => {
            if (color === 'R') {
                res.R += 1
            } else if (color === 'G') {
                res.G += 1
            } else if (color === 'B') {
                res.B += 1
            }
        })
    console.log(res.R);
    console.log(res.G);
    console.log(res.B);
}


const row = 'rgrbgrbrbgbbgrgbgrbgrbgggbbbrrrrrrrrrbgbrbbgbgrbbbb'.toUpperCase()
countRGB(row)
console.log(triangle(row));

