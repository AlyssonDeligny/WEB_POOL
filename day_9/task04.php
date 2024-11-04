<?php
function whoami(){
    $name = $_POST["name"];
    $age= (int)$_POST["age"];
    
    if ($name===NULL && $age>0){
        echo "Hi, I have no name and I'm $age years old.";
    }
    elseif ($name!==NULL && $age<=0){
        echo "Hi, my name is $name.";
    }
    elseif ($name===NULL && $age<=0){
        echo "Hi, I have no name.";
    }
    else {
        echo "Hi, my name is $name and I'm $age years old.";
    }
}
