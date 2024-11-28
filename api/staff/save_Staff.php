<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

try {

    include_once '../utils/AuthMiddleware.php';
    include_once '../utils/connect.php';
    include_once '../utils/validate.php';

    validateInputsAdvanced($_POST, [
        'firstname' => ['required'],
        'lastname' => ['required'],
        'email' => ['required', 'email', 'users:unique'],
        'homeAddress' => ['required'],
        // 'password' => ['required', 'min:6'],
        'gender' => ['required'],
        'dept_id' => ['required'],
    ]);


    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $homeAddress = $_POST['homeAddress'];
    // $password = md5($_POST['password']);
    // $password = $_POST['password'];
    $gender = $_POST['gender'];
    $dept_id = $_POST['dept_id'];


    $checkStaffSql = $conn->query("SELECT * FROM staff WHERE email='$email'");

    if ($checkStaffSql->num_rows > 0) {
        header('HTTP/1.1 403');
        echo json_encode([
            'success' => false,
            'body' => [],
            'message' => 'Staff already exist in the our records. '
        ]);
    } else {

        $sqlString = "INSERT INTO staff (firstname, lastname, email, homeAddress, gender, department_id) 
                        VALUES('$firstname', '$lastname', '$email', '$homeAddress','$gender','$dept_id')";

        $query = $conn->query($sqlString);
        if ($query) {
            header('HTTP/1 200');
            echo json_encode([
                'success' => true,
                'body' => [],
                'message' => 'Staff added successfully'
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
    $sqlString = "SELECT * FROM staff WHERE email='$userEmail'";
    $exec = $conn->query($sqlString);
    if ($exec->num_rows > 0) {
        return $exec->fetch_assoc();
    }

    return null;
}
?>