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
        <div class="container">
          <hgroup class="textCenter"> 
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis totam</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam</p>
          </hgroup>
          <hgroup class="center"> 
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis totam</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam</p>
          </hgroup>
          <h2>This is a Heading</h2>
          <p> <a href="tel:<?php echo $numberTel; ?>" target="_blank"><?php echo $number; ?></a></p>
          <ul class="unlist">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
          <ol class="list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ol>
        </div>
      </section><?php include "./include/footer.php"; ?>
    </main><?php include "./include/scripts.php"; ?>
  </body>
</html>