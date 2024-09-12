<?php

try {
    
    include_once "../utils/AuthMiddleware.php";
    include_once "../utils/connect.php";

    include_once "../utils/validate.php";

    validateInputsAdvanced($_POST, [
        'course' => ['required'],
        'department_id' => ['required']
    ]);

    $department_id = $_POST['department_id'];
    $course = $_POST['course'];
    $course_code = $_POST['course_code'];
    $credit_unit = $_POST['credit_unit'];
    $credit_hour = $_POST['credit_hour'];
    $description = $_POST['description'];

    // Check if the course exists
    $checkCourseSql = $conn->query("SELECT * FROM Courses WHERE title='$course'");

    if ($checkCourseSql->num_rows > 0) {
        header('HTTP/1.1 403');
        echo json_encode([
            'success' => false,
            'body' => [],
            'message' => 'Course already in the our records.'
        ]);
    } else {
        $sqlQuery = $conn->query("INSERT INTO Courses(title, department_id, description, code, credit_unit, credit_hour) VALUES('$course', '$department_id', '$description', '$course_code', '$credit_unit', '$credit_hour')");
        if ($sqlQuery) {
            header('HTTP/1.1 200');
            echo json_encode([
                'success' => true,
                'body' => [],
                'message' => 'Course added successfully'
            ]);
        } else {
            header('HTTP/1.1 500');
            echo json_encode([
                'success' => false,
                'body' => ['error' => $conn->error],
                'message' => 'An unexpected error occured'
            ]);
        }
    }

} catch (Throwable $thrownError) {
    header('HTTP/1.1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
        'trace' => $thrownError->getTrace()
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