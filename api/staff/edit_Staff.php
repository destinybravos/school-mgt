<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

try {
    include_once '../utils/AuthMiddleware.php';
    include_once '../utils/connect.php';
    include_once '../utils/validate.php';

    validateInputsAdvanced($_POST, [
        'id' => ['required'],
        'firstname' => ['required'],
        'lastname' => ['required'],
        'email' => ['required', 'email', 'users:unique'],
        'homeAddress' => ['required'],
        // 'password' => ['required', 'min:6'],
        'gender' => ['required'],
        'dept_id' => ['required'],
    ]);

    $id = $_POST['id'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    // $password = md5($_POST['password']);
    // $password = $_POST['password'];
    $homeAddress = $_POST['homeAddress'];
    $gender = $_POST['gender'];
    $dept_id = $_POST['dept_id'];

    $updateStaffSql = "UPDATE staff SET id='$id', firstname='$firstname', lastname='$lastname', email='$email', homeAddress='$homeAddress', gender='$gender', department_id='$dept_id' WHERE id='$id'";
    $query = $conn->query($updateStaffSql);

    if ($query) {
        header('HTTP/1, 200');
        echo json_encode([
            'success' => true,
            'body' => [],
            'message' => 'Record Updated successfully',
        ]);
    } else {
        header('HTTP/1.1 500');
        echo json_encode([
            'success' => false,
            'body' => ['error' => $conn->error],
            'message' => 'An unexpected error occured'
        ]);
    }
} catch (\Throwable $thrownError) {
    header('HTTP/1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}
?>