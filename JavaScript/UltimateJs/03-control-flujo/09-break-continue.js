let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; //termina la operación, pero continua el ciclo
    }
    if ( i === 4) {
        break;
    }
    console.log(i);
}

