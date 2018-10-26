<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Formulario para buscar palabras en un texto</title>
        <style>
        
            body{
                text-align: center; 
            }

            form{
                margin-top: 250px;
            }
        
        </style>
    </head>
    <body>
        
        <form action="recibe.php" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre"><br><br>

            <label for="textoLargo">Texto largo:</label>
            <input type="text" id="textoLargo"><br><br>

            <label for="destacar">Palabra a destacar:</label>
            <input type="text" id="destacar"><br><br>

            <input type="submit" value="Enviar">
        </form>

    </body>
</html>