<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

try {

    include_once '../utils/AuthMiddleware.php';
    include_once '../utils/connect.php';
    include_once '../utils/validate.php';

    validateInputsAdvanced($_POST, [
        'regNo' => ['required'],
        'firstname' => ['required'],
        'lastname' => ['required'],
        'email' => ['required', 'email', 'users:unique'],
        'password' => ['required', 'min:6'],
        'gender' => ['required'],
        'dept_id' => ['required'],
    ]);

    $regNo = $_POST['regNo'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    // $password = md5($_POST['password']);
    $password = $_POST['password'];
    $gender = $_POST['gender'];
    $dept_id = $_POST['dept_id'];


    $checkStdSql = $conn->query("SELECT * FROM students WHERE email='$email' || regNo='$regNo'");

    if ($checkStdSql->num_rows > 0) {
        header('HTTP/1.1 403');
        echo json_encode([
            'success' => false,
            'body' => [],
            'message' => 'Student\'s already exist in the our records. '
        ]);
    } else {

        $sqlString = "INSERT INTO students(regNo, firstname, lastname, email, password, gender, department_id) 
                        VALUES('$regNo', '$firstname', '$lastname', '$email', '$password','$gender','$dept_id')";

        $query = $conn->query($sqlString);
        if ($query) {
            header('HTTP/1 200');
            echo json_encode([
                'success' => true,
                'body' => [],
                'message' => 'Student added successfully'
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

} catch (\Throwable $thrownError) {
    header('HTTP/1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}

function verifyUser($userEmail)
{
    include_once "../utils/connect.php";
    $sqlString = "SELECT * FROM users WHERE email='$userEmail'";
    $exec = $conn->query($sqlString);
    if ($exec->num_rows > 0) {
        return $exec->fetch_assoc();
    }

    return null;
}
?>