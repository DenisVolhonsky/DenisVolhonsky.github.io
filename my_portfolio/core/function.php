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

