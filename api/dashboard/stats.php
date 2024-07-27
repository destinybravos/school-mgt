<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: authorization');
header("Content-Type: application/json");

// $_SERVER["Authorization"]
// $_SERVER["HTTP_AUTHORIZATION"]
// apache_request_headers()

try {
    
    // Verify User
    // $requestHeader = apache_request_headers();

    // if (!isset($requestHeader['Authorization'])) {
    //     throw new Exception("Request unauthorized!", 401);
    // }

    // $authorization = $requestHeader['Authorization'];
    // if (!str_contains($authorization, 'Bearer')) {
    //     throw new Exception("Request unauthorized!", 401);
    // }

    // $token = explode(' ', $authorization)[1];
    // $userEmail =  base64_decode($token);
    // $user = verifyUser($userEmail);

    // if ($user == null) {
        throw new Exception("Request unauthorized!", 401);
    // }


    // Data

    $no_student = 2300;
    $no_depts = 31;
    $no_courses = 700;
    $no_staff = 150;


    echo json_encode([
        'no_student' => $no_student,
        'no_depts' => $no_depts,
        'no_courses' => $no_courses,
        'no_staff' => $no_staff,
        'user' => $user
    ]);

} catch (\Throwable $thrownError) {
    header('HTTP/1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}

function verifyUser($userEmail)  {
    include_once "../utils/connect.php";
    $sqlString = "SELECT * FROM users WHERE email='$userEmail'";
    $exec = $conn->query($sqlString);
    if ($exec->num_rows > 0) {
        return $exec->fetch_assoc();
    }

    return null;
}