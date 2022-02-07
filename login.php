<?php 
    $connection = mysqli_connect('localhost','root','','essentials');
    $email = $_POST['email'];
    $password = $_POST['password'];

    $checkdata = mysqli_query($connection,"SELECT * FROM userdata WHERE email = '$email' AND password = '$password'");
    $check = mysqli_num_rows($checkdata);

    if($check > 0){
        header("Location:http://localhost/EasyEssentials/shop.html");
    }
    else{
        header('Location:http://localhost/EasyEssentials/index.html');
    }
?>