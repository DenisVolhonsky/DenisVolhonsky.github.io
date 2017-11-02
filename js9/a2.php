<?php

//$_POST['year'] = 1983;

if (isset($_POST['year']) && $_POST['year']!='' ) {
    $year = $_POST['year'];
    echo 'Вам '.( date('Y') - $year ).' лет / года';
}
else {
    echo 'Ошибка, введите год рождения!';
}
?>