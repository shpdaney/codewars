// Vigenère Cipher Helper

function VigenèreCipher(key, abc) {

	// Создает ключ-строку
	const getStrKey = (str) => {
	  let repeatCount = Math.ceil(str.length / key.length)
	  return key.repeat(repeatCount).slice(0, str.length)
	}
	
	// Возврашает индекс буквы
	const getCharNum = (value, abc) => abc.includes(value) ? abc.indexOf(value) : value
	// Возврашает массив с индексами букв
	const keyToNum = (str) => {
	  let res = str
		.split('')
		.map(char => getCharNum(char, abc))
	  return res
	}
  
	this.encode = function (str) {
	  const encoding = (str, key, abc) => {
		let mergedStr = [...str]
		for (let index in str) {
		  console.log(str[index])
		  console.log(key[index])
		  if (Number.isInteger(mergedStr[index])) {
			let endNum = (mergedStr[index] + key[index]) % abc.length
			mergedStr[index] = abc[endNum]
  
		  }
		}
		console.log(mergedStr.join(''))
		return mergedStr.join('')
	  }
  
	  return encoding(
		keyToNum(str),
		keyToNum(getStrKey(str)),
		abc
	  )
	};
  
	this.decode = function (str) {
	  const decoding = (str, key, abc) => {
		let mergedStr = [...str]
		for (let index in str) {
		  console.log(str[index])
		  console.log(key[index])
		  if (Number.isInteger(mergedStr[index])) {
			let endNum = (mergedStr[index] - key[index])
			if (endNum < 0) {
			  endNum = abc.length + endNum
			  console.log(endNum)
			}
			console.log(endNum)
			mergedStr[index] = abc[endNum]
  
		  }
		}
		console.log(mergedStr.join(' '))
		return mergedStr.join('')
	  }
  
	  return decoding(
		keyToNum(str),
		keyToNum(getStrKey(str)),
		abc
	  )
	};
  }
  
  // start
  
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let key = "password"
  // let key = "abc"
  const c = new VigenèreCipher(key, abc);
  
  c.encode('codewars') // rovwsoiv
  c.decode('laxxhsj') // waffles