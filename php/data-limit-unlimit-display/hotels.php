<!DOCTYPE html>
<html lang="en">
<head>
    <title>Hotels</title>
    <?php include 'include/head.php'; ?>
</head>
<body>
<p>
    <a href="index.php">Home</a>
    &nbsp;&nbsp;&nbsp;
    <a href="flights.php">Flights</a>
    &nbsp;&nbsp;&nbsp;
    <a href="hotels.php">Hotels</a>
</p>
<hr>
<h1>Hotels Page</h1>
<hr>
<?php 
    $limit = 2;
    include 'include/flightsData.php'; 
?>
</body>
</html>