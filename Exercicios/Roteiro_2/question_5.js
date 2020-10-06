function primos ({a = 0, b = 100}) {
    let output = '';
    for (let i = a; i <= b; i++) {
        let divisor = 0;
        let j = 1;
        while (j <= i) {
            if (i % j == 0) divisor++;

            j++;
        }
        if (divisor == 2) {
            output += i + ' ';
        }
    }
    console.log(output);
}

primos({ a: 34, b: 70});

