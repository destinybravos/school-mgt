<?php
try {
    include_once '../utils/AuthMiddleware.php';
    include_once '../utils/connect.php';

    $staffs = array();

    // fetch students
    $staffQuery = $conn->query("SELECT * FROM staff");
    while ($staff = $staffQuery->fetch_assoc()) {
        $staff['department'] = fetchDepartment($staff['department_id'], $conn);
        array_push($staffs, $staff);
    }
    header('HTTP/1.1 200');
    echo json_encode([
        'success' => true,
        'body' => [
            'staff' => $staffs,
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