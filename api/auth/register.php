<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

try {
    include_once "../utils/connect.php";
    include_once "../utils/validate.php";

    validateInputsAdvanced($_POST, [
        'firstname' => ['required'],
        'lastname' => ['required'],
        'email' => ['required', 'email', 'users:unique'],
        'password' => ['required', 'min:6'],
    ]);

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    $sqlString = "INSERT INTO users(firstname, lastname, email, password) 
                    VALUES('$firstname', '$lastname', '$email', '$password')";
    $execQuery = $conn->query($sqlString);

    if ($execQuery) {
        header('HTTP/1 200');
        echo json_encode([
            'success' => true,
            'message' => 'User record created successfully'
        ]);
    }else{
        header('HTTP/1 500');
        echo json_encode([
            'success' => false,
            'message' => 'An unxpected server sql error occured.',
            'error' => $conn->error
        ]);
    }
    
} catch (\Throwable $thrownError) {
    header('HTTP/1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}