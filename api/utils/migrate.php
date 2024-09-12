<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$baseUrl = 'http://localhost/school-mgt/api';

try {

    $conn = new MySQLi("localhost", "root", "");

    // Create database
    $databaseName = 'school_mgt';
    $conn->query("CREATE DATABASE IF NOT EXISTS $databaseName");
    // Use the create for all other connection by select on the connection object ($conn)
    $conn->select_db($databaseName);

    // create school table structure if not exist
    $sqlSchools = "CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(6000)
    )";
    $conn->query($sqlSchools);

    $sqlDepartments = "CREATE TABLE IF NOT EXISTS departments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(6000),
        school_id INT NOT NULL,
        FOREIGN KEY (school_id) REFERENCES schools(id)
    )";
    $conn->query($sqlDepartments);



// create courses table structure if not exist
    $sqlCourses= "CREATE TABLE IF NOT EXISTS courses(
         id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(6000),
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    
    )";
    $conn->query($sqlCourses);
    
    // create users table structure if not exist
    $sqlUsers = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        email_verified_at DATETIME NULL,
        phone VARCHAR(255),
        password VARCHAR(255) NOT NULL,
        photo VARCHAR(255) DEFAULT('$baseUrl/assets/images/users/default.png'),
        role VARCHAR(100) DEFAULT('lecturer'),
        gender VARCHAR(100),
        bio VARCHAR(6000),
        department_id INT NULL,
        FOREIGN KEY (department_id) REFERENCES departments(id),
        created_at DATETIME DEFAULT(CURRENT_TIMESTAMP),
        updated_at DATETIME DEFAULT(CURRENT_TIMESTAMP)
    )";

    $conn->query($sqlUsers);

    // create students table structure if not exist
    $sqlStd = "CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        regno VARCHAR(20) NOT NULL,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        email_verified_at DATETIME NULL,
        phone VARCHAR(255),
        password VARCHAR(255) NOT NULL,
        photo VARCHAR(255) DEFAULT('$baseUrl/assets/images/users/std.png'),
        gender VARCHAR(100),
        department_id INT NOT NULL,
        FOREIGN KEY (department_id) REFERENCES departments(id),
        created_at DATETIME DEFAULT(CURRENT_TIMESTAMP),
        updated_at DATETIME DEFAULT(CURRENT_TIMESTAMP)
    )";

    $conn->query($sqlStd);

    // create Personal Access Token table structure if not exist
    $sqlAccessToken = "CREATE TABLE IF NOT EXISTS access_tokens (
        email VARCHAR(255) NOT NULL,
        token VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT(CURRENT_TIMESTAMP),
        expires_at DATETIME
    )";

    $conn->query($sqlAccessToken);

    // Return success
    header("HTTP/1 200");
    echo json_encode([
        'success' => true,
        'message' => 'Database and all table structures created successfuly'
    ]);
} catch (\Throwable $th) {
    header("HTTP/1 500");
    echo json_encode([
        'success' => false,
        'message' => $th->getMessage(),
        'trace' => $th->getTrace()
    ]);
}
