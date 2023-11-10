function calculate(operator) {
    const fnbr = Number(document.getElementById('first_number').value);
    const snbr = Number(document.getElementById('second_number').value);
    let result;

    switch (operator) {
        case '+':
            result = fnbr + snbr;
            document.getElementById('show-result').style.color = 'green';
            break;
        case '-':
            result = fnbr - snbr;
            document.getElementById('show-result').style.color = 'brown';
            break;
        case '*':
            result = fnbr * snbr;
            document.getElementById('show-result').style.color = 'blue';
            break;
        case '/':
            if (snbr !== 0) {
                result = fnbr / snbr;
                document.getElementById('show-result').style.color = 'yellow';
            } else {
                result = "Can't";
                document.getElementById('show-result').style.color = 'red';
                alert("STOP!");
            }
            break;
    }
    document.getElementById('show-result').innerHTML = result;
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
    document.getElementById('show-result').innerHTML = result;
    
}

