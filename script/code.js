function checkID() {
    let id = document.getElementById('id_number').value;
    let result = document.getElementById('result');
    let idNumber = id.length;
    if (idNumber == 13 && !isNaN(id)) {
        let gender = parseInt(id.charAt(6));
        let year = parseInt(id.slice(0, 2));
        if (year > 22) {
            year = 1900 + year;
        } else {
            year = 2000 + year;
        }
        let month = id.slice(2, 4);
        let day = id.slice(4, 6);
        result.innerHTML = `Your ID number is ${year}-${month}-${day}`;
        if (gender % 2 == 0) {
            result.innerHTML += '<br>Your ID number indicates female';
        } else {
            result.innerHTML += '<br>Your ID number indicates male';
        }
    } else {
        result.innerHTML = 'Your ID number is invalid';
    }
}

function resetForm() {
    document.getElementById('id_number').value = '';
    document.getElementById('result').innerHTML = '';
}

  