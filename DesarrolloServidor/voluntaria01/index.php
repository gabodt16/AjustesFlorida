<?php
$i = 1;

while ($i <= 100) {
    $m1 = $i % 3;
    $m2 = $i % 5;
    if ($m1 == 0 and $m2 == 0) {
        echo "FizzBuzz" . "<br>";
    }elseif ($m1 == 0) {
        echo "Fizz" . "<br>";
    }elseif ($m2 == 0) {
        echo "Buzz" . "<br>";
    }else {
        echo $i . "<br>";
    }
    
    $i ++;
}

?>