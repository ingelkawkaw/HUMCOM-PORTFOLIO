function add() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var sum = num1 + num2;
        document.getElementById("result").textContent = sum;
    }
    function sub() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var sum = num1 - num2;
        document.getElementById("result").textContent = sum;
    }
    function multi() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var sum = num1 * num2;
        document.getElementById("result").textContent = sum;
    }
    function div() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var sum = num1 / num2;
        document.getElementById("result").textContent = sum;
    }