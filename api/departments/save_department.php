<?php

try {
    
    include_once "../utils/AuthMiddleware.php";
    include_once "../utils/connect.php";

    include_once "../utils/validate.php";

    validateInputsAdvanced($_POST, [
        'school_id' => ['required'],
        'department' => ['required']
    ]);

    $school_id = $_POST['school_id'];
    $department = $_POST['department'];
    $description = $_POST['description'];

    // Check if the school exists
    $checkDeptSql = $conn->query("SELECT * FROM departments WHERE name='$department'");

    if ($checkDeptSql->num_rows > 0) {
        header('HTTP/1.1 403');
        echo json_encode([
            'success' => false,
            'body' => [],
            'message' => 'Department already in the our records. '
        ]);
    } else {
        $sqlQuery = $conn->query("INSERT INTO departments(name, school_id, description) VALUES('$department', '$school_id', '$description')");
        if ($sqlQuery) {
            header('HTTP/1.1 200');
            echo json_encode([
                'success' => true,
                'body' => [],
                'message' => 'Department added successfully'
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