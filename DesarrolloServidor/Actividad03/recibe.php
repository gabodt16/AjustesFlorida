<?php

    function multiexplode ($delimiters,$string) {
        
        $ready = str_replace($delimiters, $delimiters[0], $string);
        $launch = explode($delimiters[0], $ready);
        return  $launch;
    }

    $nom = (empty($_POST['nom'])) ? 'default' : $_POST['nom'];
    $destacar = (empty($_POST['destacar'])) ? 'default' : $_POST['destacar'];
    $textolargo = (empty($_POST['textoLargo'])) ? 'default' : $_POST['textoLargo'];
    $encontrado = false;
    $count = 0;

    $nuevoArray = multiexplode(array(" ",",",".",":",";","(",")","|"),$textolargo);

    foreach ($nuevoArray as $key => $valorActual) {
        if ($destacar == $valorActual) {
            $nuevoArray[$count] = "<b>" . $valorActual . "</b>";
            $encontrado = true;
        }
        $count ++;
    }

    if ($encontrado) {
        print_r($nuevoArray);
    }else {
        echo "La palabla a destacar no ha sido encontrada en el texto";
    }
    

?>














<!-- 
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Conversor RGB a Hexadecimal</title>
        <style type="text/css">
            body{text-align: center;}
            h1{margin-top: 230px;}
            div.caja{
                    width: 19.6%;
                    height: 141px;
                    text-align: center;
                    display: inline-block;
                    margin-top: 20px;
            }
            a{
                display: block;
                margin-top: 50px;
                text-decoration: none;
                color: #000000;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <?php

        /*
            function pasar_a_letras($numero){
                if ($numero < 0 or $numero > 15) {
                    return "Error número inválido";
                }elseif ($numero == 10) {
                    return "A";
                }elseif ($numero == 11) {
                    return "B";
                }elseif ($numero == 12) {
                    return "C";
                }elseif ($numero == 13) {
                    return "D";
                }elseif ($numero == 14) {
                    return "E";
                }elseif ($numero == 15) {
                    return "F";
                }else{
                    return $numero;
                }
            }
            function convertir($num){
                $num = $num / 16;
                
                if (is_float($num)) {
                    list($entero, $decimal) = explode("." , $num);
                    $decimal = "0." . $decimal;
                    $decimal = $decimal * 16;
                    
                    $devuelve = pasar_a_letras($entero);
                    $devuelve = $devuelve . pasar_a_letras($decimal);
                }else {
                    $devuelve = pasar_a_letras($num);
                    $devuelve = $devuelve . 0;
                }
                
                return $devuelve;
            }
            $red = $_POST['red'];
            $green = $_POST['green'];
            $blue = $_POST['blue'];
            $comprobar = $red . $green . $blue;
            
            if (is_numeric($comprobar)) {
                $hex = convertir($red) . convertir($green) . convertir($blue);
            }else {
                echo("Error NO ES UN NÚMERO");
            }
            
        ?>

        <h1>Tu color en hexadecimal es este:</h1>

        <div class="caja" style="background-color: #<?php echo($hex);?>">
        
            <p>#<?php echo($hex);?></p>
        
        </div>

        <div class="enlace">
            <a href="index.php">Convertir otro RGB</a>
        </div>

            <?php*/?>


    </body>
</html>
 -->