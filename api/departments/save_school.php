<?php

try {
    
    include_once "../utils/AuthMiddleware.php";
    include_once "../utils/connect.php";

    include_once "../utils/validate.php";

    validateInputsAdvanced($_POST, [
        'school' => ['required']
    ]);

    $school = $_POST['school'];

    // Check if the school exists
    $checkSchSql = $conn->query("SELECT * FROM schools WHERE name='$school'");

    if ($checkSchSql->num_rows > 0) {
        header('HTTP/1.1 403');
        echo json_encode([
            'success' => false,
            'body' => [],
            'message' => 'School already in the our records. '
        ]);
    } else {
        $sqlQuery = $conn->query("INSERT INTO schools(name) VALUES('$school')");
        if ($sqlQuery) {
            header('HTTP/1.1 200');
            echo json_encode([
                'success' => true,
                'body' => [],
                'message' => 'School added successfully'
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