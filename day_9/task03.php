<?php
function dynamic_body(){
    $string = $_GET["page"];

    if ($string=="home"){
        return file_get_contents("home.html");
    }
    elseif ($string=="php"){
        return file_get_contents("php.html");
    }
    elseif ($string=="sql"){
        return file_get_contents("sql.html");
    } 
    else {
        return '<p>Unknown page</p>';
    }
}