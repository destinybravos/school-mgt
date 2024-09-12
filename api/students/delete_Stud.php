<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

try {
    include_once '../utils/AuthMiddleware.php';
    include_once '../utils/connect.php';
    include_once '../utils/validate.php';

    validateInputsAdvanced($_POST, [
        'student_id' => ['required'],
    ]);

    $id = $_POST['student_id'];

    $deletStdSql = "DELETE FROM students WHERE id=$id";
    $query = $conn->query($deletStdSql);

    if ($query) {
        header('HTTP/1, 200');
        echo json_encode([
            'success' => true,
            'body' => [],
            'message' => 'Student deleted successfully',
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