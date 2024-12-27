<!DOCTYPE html>
<html>
  <head>
    <title>Webpage</title>
    <meta name="description" content="">
    <meta name="keywords" content=""><?php include "./include/head.php"; ?>
  </head>
  <body>
    <main><?php include "./include/header.php"; ?>
      <section class="section bg" style="min-height:200vh;">
        <div class="container">Index Page</div>
      </section>
      <h1>This is a Heading</h1>
      <p> <a href="tel:<?php echo $numberTel; ?>" target="_blank"><?php echo $number; ?></a></p><?php include "./include/footer.php"; ?>
    </main><?php include "./include/scripts.php"; ?>
  </body>
</html>