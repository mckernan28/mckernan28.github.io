<?php
include "database.php";
include "settings.php";
$current_description = $_POST[description];
Header("Location: settings.php");
?>