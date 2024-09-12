<?php
try {
    include_once '../utils/AuthMiddleware.php';
    include_once '../utils/connect.php';

    $students = array();

    // fetch students
    $stdQuery = $conn->query("SELECT * FROM students");
    while ($student = $stdQuery->fetch_assoc()) {
        $student['department'] = fetchDepartment($student['department_id'], $conn);
        array_push($students, $student);
    }
    header('HTTP/1.1 200');
    echo json_encode([
        'success' => true,
        'body' => [
            'students' => $students,
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
function fetchDepartment($dept_id, $conn)
{
    $sqlString = "SELECT * FROM departments WHERE id='$dept_id'";
    $exec = $conn->query($sqlString);
    if ($exec->num_rows > 0) {
        return $exec->fetch_assoc();
    }

    return null;
}

?>