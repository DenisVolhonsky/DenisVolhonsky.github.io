<?php
function connectToDb()
{
    $conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    return $conn;
}

function getAllPosts(){
	$conn = connectToDb();
    $sql = "SELECT * FROM posts";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row['id']] = $row;
        }        
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function getSinglePost(){
	$id = $_POST['id'];
	$conn = connectToDb();
    $sql = "SELECT * FROM posts WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);      
        echo json_encode($row);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}


function addSinglePost(){
    if (isset($_POST['name']) AND isset($_POST['img']) AND isset($_POST['description'])){
        $name = trim($_POST['name']);
        $img = ($_POST['img']);
        $description = ($_POST['description']);
        if ($name!=='' AND $img!='' AND $description!=''){
            $conn = connectToDb();
            $sql = "INSERT INTO posts (name, img, description) VALUES ('$name', '$img', '$description')";
            if (mysqli_query($conn, $sql)) {
                echo "1";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
            mysqli_close($conn);

        }
        else {
            echo 2;
        }
    }
    else {
        echo 0;
    }
}

function changePost(){
    $conn = connectToDb();
    $sql = "SELECT id, name FROM posts";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $out[$row['id']] = $row['name'];
        }        
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function updatePost(){
    if (isset($_POST['name']) AND isset($_POST['img']) AND isset($_POST['description'])){
        $name = trim($_POST['name']);
        $img = ($_POST['img']);
        $description = ($_POST['description']);
        $id = $_POST['id'];
        if ($name!=='' AND $img!='' AND $description!=''){
            $conn = connectToDb();
            $sql = "UPDATE posts SET name='$name', img='$img', description='$description' WHERE id='$id'";
            if (mysqli_query($conn, $sql)) {
                echo "1";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
            mysqli_close($conn);

        }
        else {
            echo 2;
        }
    }
    else {
        echo 0;
    }
}