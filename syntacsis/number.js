// Возврашает число в виде строки
(100).toString(); // '100'

// Возврашает число в виде строки
(100).toExponential(4);

// Возврашает строку с числом, записанным с указанным колчиством десятичных знаков
(100).toFixed(2); // 100.00


// Метод toPrecision() возвращает строку с числом, записанным с указанной длиной:
(100).toPrecision(6); // 100.000


// Метод toPrecision() возвращает строку с числом, записанным с указанной длиной:
(100).toPrecision(6); // 100.000


// Метод Number() можно использовать для преобразования переменных JavaScript в числа:
Number(true);          // возвращает 1
Number(false);         // возвращает 0
Number("10");          // возвращает 10
Number("  10");        // возвращает 10
Number("10  ");        // возвращает 10
Number(" 10  ");       // возвращает 10
Number("10.33");       // возвращает 10.33
Number("10,33");       // возвращает NaN
Number("10 33");       // возвращает NaN
Number("Андрей");        // возвращает NaN


// Метод parseInt() анализирует строку и возвращает целое число. Разрешены пробелы. Возвращается только первое число:
parseInt("10");         // возвращает 10
parseInt("10.33");      // возвращает 10
parseInt("10 20 30");   // возвращает 10
parseInt("10 год");   // возвращает 10
parseInt("год 10");   // возвращает NaN

// Метод parseFloat() анализирует строку и возвращает число. Разрешены пробелы. Возвращается только первое число:
parseFloat("10");        // возвращает 10
parseFloat("10.33");     // возвращает 10.33
parseFloat("10 20 30");  // возвращает 10
parseFloat("10 год");  // возвращает 10
parseFloat("год 10");  // возвращает NaN