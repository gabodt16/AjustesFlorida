<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Conversor RGB a Hexadecimal</title>
    <style>
        body{text-align: center;}
        
        div{margin-top: 150px;}

        form{margin-top: 50px;}

        #boton{margin-top: 25px;}

        span{font-weight: bold;}

        label{margin-left: 20px;}

    </style>
</head>
<body>

    <div>
        <h1>Bienvenido al conversor de RGB a HEX</h1>

        <h2>Introduce tu color RGB aquí</h2>
        <form action="recibe.php" method="post">
            <label for="red"><span>R</span>ed</label>
            <input type="text" id="red">

            <label for="green"><span>G</span>reen</label>
            <input type="text" id="green">
        
            <label for="blue"><span>B</span>lue</label>
            <input type="text" id="blue"><br><br>

            <input type="submit" value="Convertir" id="boton">
        </form>
    </div>
</body>
</html>