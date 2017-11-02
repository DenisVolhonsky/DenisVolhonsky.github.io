<?php
//    $_POST['num1'] = 7;
//    $_POST['num2'] = 9;
    if (isset($_POST['num1']) && $_POST['num1']!='' && isset($_POST['num2']) && $_POST['num2']!='') {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        echo "Сумма чисел $num1 и $num2 равна ".($num1+$num2);
    }
    else {
        echo 'Ошибка! Введите числа';
    }


?>