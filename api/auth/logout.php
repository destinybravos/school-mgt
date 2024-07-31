<?php

try {
    include_once '../utils/AuthMiddleware.php';
    
    deleteToken($auth->token);

    header('HTTP/1 200');
    echo json_encode([
        'success' => true,
        'message' => 'Logout successfully'
    ]);
    
} catch (\Throwable $thrownError) {
    header('HTTP/1 ' . $thrownError->getCode());
    echo json_encode([
        'success' => false,
        'message' => $thrownError->getMessage(),
    ]);
}

?>