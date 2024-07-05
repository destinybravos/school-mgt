<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");

    $dept = [
        "Computer Science",
        "Mehcanical Engineering",
        "Mechatronics Engineering",
        "Business Administration & Management"
    ];


    header("Content-Type: application/json");
    echo json_encode($dept);



?>