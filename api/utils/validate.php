<?php

    function validateInputs(array $data, array $constraints) : bool | string
    {

        foreach ($constraints as $field => $constraint) {
            if ($constraint == 'required') {
                if (!existsInArray($field, $data)) {
                    throw new Exception($field . " is required.", 422);
                }

                if (empty($data[$field])) {
                    throw new Exception($field . " does not have a value.", 422);
                }
            }
        }

        return true;
    }


    function existsInArray(string $needle, array $hastack, string $arrayType = 'assoc') : bool{

        if ($arrayType == 'assoc') {
            foreach ($hastack as $key => $value) {
                if ($key == $needle) {
                    return true;
                }
            }
        }

        return false;
    }

    function validateInputsAdvanced(array $data, array $constraints) : bool | string
    {
        foreach ($constraints as $field => $constraint) {
            foreach ($constraint as $constraintName) {
                if ($constraintName == 'required') {
                    if (!existsInArray($field, $data)) {
                        throw new Exception($field . " is required.", 422);
                    }
    
                    if (empty($data[$field])) {
                        throw new Exception($field . " does not have a value.", 422);
                    }
                }

                if ($constraintName == 'email') {
                    $value = explode('@', $data[$field]);
                    if (count($value) < 2) {
                        throw new Exception($field . " must be an email", 422);
                    }
                }
            }
        }

        return true;
    }