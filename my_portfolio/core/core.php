<?php
require_once 'config.php';
require_once 'function.php';

$action = $_POST['action'];

switch ($action) {
    case 'getAllPosts':
        getAllPosts();
        break;
    case 'getSinglePost':
        getSinglePost();
        break;
}