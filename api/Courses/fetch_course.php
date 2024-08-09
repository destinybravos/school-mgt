<?php

try {
    
    include_once "../utils/AuthMiddleware.php";
    include_once "../utils/connect.php";

    // Data
    $courses = array();

    // Fetch Courses
    $sqlQuery = $conn->query("SELECT * FROM courses");
    while ($course = $sqlQuery->fetch_assoc()) {
        $course['department'] = fetchDepartment($course['department_id'], $conn);
        array_push($courses, $course);
    }


    header('HTTP/1.1 200');
    echo json_encode([
        'success' => true,
        'body' => [
            'courses' => $courses,
        ],
        'message' => ''
    ]);

} catch (Throwable $thrownError) {
    header('HTTP/1.1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}

function fetchDepartment($dept_id, $conn)  {
    $sqlString = "SELECT * FROM departments WHERE id='$dept_id'";
    $exec = $conn->query($sqlString);
    if ($exec->num_rows > 0) {
        return $exec->fetch_assoc();
    }

    return null;
}