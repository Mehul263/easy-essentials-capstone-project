<?php 
    $connection = mysqli_connect('localhost','root','','essentials');
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];

    $checkdata = mysqli_query($connection,"SELECT * FROM userdata WHERE email = '$email'");
    $check = mysqli_num_rows($checkdata);

    if($check > 0){
        echo "Email already exists";
    }
    else{
        $input = mysqli_query($connection,"INSERT INTO userdata(id,email,password) VALUES ('$id','$email','$password')");
        if($input){
            header('Location:http://localhost/EasyEssentials/shop.html');
        }
        else{
            header('Location:http://localhost/EasyEssentials/index.html');
        }
    }
?>