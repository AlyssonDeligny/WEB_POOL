<?php
function get_shortest(array $arr){
    $short = $arr[0];
    foreach ($arr as $element ) {
        if (strlen($short) > strlen($element)){
            $short = $element;
        }
    }
    return $short;
};
?>