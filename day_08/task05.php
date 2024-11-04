<?php
function calc_average(array $numbers){
    $somme = 0;
    $average = 0;

    foreach($numbers as $number){
        $somme += $number;
    }
    $average = $somme / count($numbers);
    $average = round($average,1);
    return $average;
}