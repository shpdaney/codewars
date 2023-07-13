// console.log('Запрос даных...')


// window.setTimeout(() => {
// 	console.log('Обработка даных...')

// 	const serverDate = {
// 		server: 'aws',
// 		port: 5000,
// 		state: 'working',
// 	}

// 	setTimeout(() => {
// 		serverDate.status = 'connected'
// 		console.log('Данные отправленны\n', serverDate)
// 	}, 2000)
// }, 2000)


console.log('Запрос даных...')

const prom = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Обработка даных...')
		const serverDate = {
			server: 'aws',
			port: 5000,
			state: 'working',
		}
		resolve(serverDate)
	}, 2000)
})

prom.then((date) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			date.status = 'connected'
			resolve(date)
			console.log('Отправка данных...')
		}, 2000)
	})
})
	.then((date) => {
		date.modified = true
		return date
	})
	.then((date) => console.log(date))
	.finally(() => console.log('Prom finally'))


const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))


sleep(5000).then(() => console.log("sleep 5s"))