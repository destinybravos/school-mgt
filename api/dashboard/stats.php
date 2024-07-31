<?php

try {
    
    include_once "../utils/AuthMiddleware.php";

    // Data

    $no_student = 230;
    $no_depts = 31;
    $no_courses = 700;
    $no_staff = 150;

    header('HTTP/1.1 200');
    echo json_encode([
        'no_student' => $no_student,
        'no_depts' => $no_depts,
        'no_courses' => $no_courses,
        'no_staff' => $no_staff
    ]);

} catch (Throwable $thrownError) {
    header('HTTP/1.1 ' . $thrownError->getCode());
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