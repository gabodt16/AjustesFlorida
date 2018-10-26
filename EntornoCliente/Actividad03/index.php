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
        <h1>Bienvenido al resaltador de palabas</h1>

        <h2>Introduce tus datos para continuar aquí</h2>
        <form action="recibe.php" method="post">
            <label for="nom">Nombre</label>
            <input type="text" id="nom" name="nom" required><br><br>

            <label for="destacar">Letras a destacar</label>
            <input type="text" id="destacar" name="destacar" required><br><br>
            
            <label for="textoLargo">Texto Largo</label>
            <textarea name="textoLargo" id="textoLargo" cols="30" rows="5"></textarea><br>
        

            <input type="submit" value="Convertir" id="boton">
        </form>
    </div>
</body>
</html>