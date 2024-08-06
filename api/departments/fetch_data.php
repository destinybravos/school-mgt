<?php

try {
    
    include_once "../utils/AuthMiddleware.php";
    include_once "../utils/connect.php";

    // Data
    $schools = array();
    $departments = array();

    // Fetch Schools
    $sqlQuery = $conn->query("SELECT * FROM schools");
    while ($school = $sqlQuery->fetch_assoc()) {
        array_push($schools, $school);
    }

    // Fetch Departments
    $sqlQuery = $conn->query("SELECT * FROM departments");
    while ($department = $sqlQuery->fetch_assoc()) {
        $department['school'] = fetchSchool($department['school_id'], $conn);
        array_push($departments, $department);
    }

    header('HTTP/1.1 200');
    echo json_encode([
        'success' => true,
        'body' => [
            'schools' => $schools,
            'departments' => $departments,
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

function fetchSchool($school_id, $conn)  {
    $sqlString = "SELECT * FROM schools WHERE id='$school_id'";
    $exec = $conn->query($sqlString);
    if ($exec->num_rows > 0) {
        return $exec->fetch_assoc();
    }

    return null;
}