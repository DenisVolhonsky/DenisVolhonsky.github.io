<?php
$g1 = array(
    "name" => "Banana",
    "weight" => "23",
    "cost" => "200",
    "img" => "https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png"
);
$g2 = array(
    "name" => "Tomato",
    "weight" => "5",
    "cost" => "23",
    "img" => "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png"
);

$art = $_GET['art'];

if ($art ==1) {
    echo json_encode($g1);
}

if ($art ==2) {
    echo json_encode($g2);
}