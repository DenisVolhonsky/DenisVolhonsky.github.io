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
    case 'addSinglePost':
        addSinglePost();
        break;
    case 'changePost':
        changePost();
        break;
    case 'updatePost':
        updatePost();
        break;
}