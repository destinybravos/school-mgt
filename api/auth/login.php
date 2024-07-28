<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");


try {
    include_once "../utils/connect.php";
    include_once "../utils/validate.php";

    validateInputsAdvanced($_POST, [
        'email' => ['required'],
        'password' => ['required']
    ]);

    $email = $_POST['email'];
    $password = md5($_POST['password']);

    $sqlString = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $execQuery = $conn->query($sqlString);

    if ($execQuery->num_rows > 0) {
        $user = $execQuery->fetch_assoc();
        header('HTTP/1 200');
        echo json_encode([
            'success' => true,
            'message' => "User login successfull",
            'user' => $user,
            'api_token' => generateAccessToken($user['email'])
        ]);
    }else{
        header('HTTP/1 404');
        echo json_encode([
            'success' => false,
            'message' => "Invalid username or password",
        ]);
    }

} catch (\Throwable $thrownError) {
    header('HTTP/1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}


function generateAccessToken($email){
    return base64_encode($email);
}

//  Function to generate a random string for token payload
// function generateRandomString($length = 32) {
//     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     $randomString = '';
//     for ($i = 0; $i < $length; $i++) {
//         $randomString .= $characters[random_int(0, strlen($characters) - 1)];
//     }
//     return $randomString;
// }