<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <meta name="description" content="">
    <meta name="keywords" content=""><?php include "./include/head.php"; ?>
  </head>
  <body>
    <main><?php include "./include/header.php"; ?>
      <h1>This is a Heading</h1>
      <p> <a href="tel:<?php echo $numberTel; ?>" target="_blank"><?php echo $number; ?></a></p><?php include "./include/footer.php"; ?>
    </main><?php include "./include/scripts.php"; ?>
  </body>
</html>