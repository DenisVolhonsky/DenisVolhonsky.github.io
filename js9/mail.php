<?php
//$_POST['fio'] = 'alex ivanov';
//$_POST['email'] = 'alexxlu@mail.ru';
//$_POST['phone'] = '33444555';

if (isset($_POST['fio']) && $_POST['fio']!='' && isset($_POST['email']) && $_POST['email']!='' ) {
    $fio = $_POST['fio'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
        $to  = 'dvolhonsky@gmail.com';
        $subject = 'Вам отправили запрос';
        $message = "Пользователь $fio с email $email и телефоном $phone отправил вам запрос";
    $res = mail ($to, $subject, $message);
    if ($res) {
        echo 'Письмо отправлено';
    }
    else {
        echo 'Ошибка отправки. Проверьте правильность написания email';
    }
}
else {
    echo 'Ошибка! Введите верные данные';
}


?>