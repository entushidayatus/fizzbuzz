function fizzBuzz() {
    var nilaiInput = document.querySelector(".inputNumber").value;
    var hasilInput = document.getElementById("resultNumber");

    if (nilaiInput != 0) {
        for (var x = 1; x <= nilaiInput; x++) {
            if (x % 15 == 0) {
                hasilInput.innerHTML+="<p class='fizzbuzz'>FizzBuzz</p> ";
            } else if (x % 3 == 0) {
                hasilInput.innerHTML+="<p class='fizz'>Fizz</p>";
            } else if (x % 5 == 0) {
                hasilInput.innerHTML+="<p class='buzz'>Buzz</p> ";
            } else {
                // hasilInput.innerHTML+=x+" ";
                if (x % 2 == 0) {
                    hasilInput.innerHTML+="<p class='even'>"+x+"</p>";
                } else {
                    hasilInput.innerHTML+="<p class='odd'>"+x+"</p>";
                }
            }
        }
    } else {
        alert("Woops.. Masukin nilainya dulu baru bisa di check");
    }
}

