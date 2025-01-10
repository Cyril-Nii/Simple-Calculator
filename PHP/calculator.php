<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple PHP Calculator</title>
</head>
<body>
<h2>Simple Calculator</h2>
<form method="post">
    <label for="num1">Number 1:</label>
    <input type="number" name="num1" id="num1" step="any" required>
    <br><br>
    <label for="num2">Number 2:</label>
    <input type="number" name="num2" id="num2" step="any" required>
    <br><br>
    <label for="operation">Operation:</label>
    <select name="operation" id="operation" required>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
    </select>
    <br><br>
    <button type="submit">Calculate</button>
</form>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operation = $_POST['operation'];

    $result = null;

    switch ($operation) {
        case 'add':
            $result = $num1 + $num2;
            break;
        case 'subtract':
            $result = $num1 - $num2;
            break;
        case 'multiply':
            $result = $num1 * $num2;
            break;
        case 'divide':
            if ($num2 != 0) {
                $result = $num1 / $num2;
            } else {
                $result = "Error: Division by zero!";
            }
            break;
        default:
            $result = "Invalid operation!";
    }

    echo "<h3>Result: $result</h3>";
}
?>
</body>
</html>
