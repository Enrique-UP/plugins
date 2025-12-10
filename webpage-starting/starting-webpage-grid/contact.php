<!DOCTYPE html>
<html>
  <head>
    <title>Contact Us</title>
    <meta name="description" content="">
    <meta name="keywords" content=""><?php include "./include/head.php"; ?>
  </head>
  <body>
    <main><?php include "./include/header.php"; ?>
      <section class="section banner">
        <div class="container">
          <div class="row"> 
            <div class="col-lg-6 col-xl-5">
              <hgroup> 
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit veritatis totam</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam.</p>
                <div class="btns"> <a href="tel:<?php echo $numberTel; ?>" target="_blank"><i class="icon">&#xa041; </i><span><?php echo $number; ?></span></a></div>
              </hgroup>
            </div>
            <div class="col-lg-6 col-xl-7 imgEnd"><img src="./assets/images/banner1.webp" alt="" width="600"></div>
          </div>
        </div>
      </section>
      <section class="breadcrumbs"> 
        <div class="container"> 
          <ul> 
            <li> <a href="<?php echo $siteUrl; ?>">Home</a></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
      <section class="section contactPage">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <hgroup class="center">
                <h2>Contact Us</h2>
                <p>Get in touch &mdash; we respond quickly.</p>
              </hgroup>
            </div>
            <div class="col-lg-7">
              <form class="form" action="#">
                <div class="field">
                  <label for="name">Full Name*</label>
                  <input class="inputText" id="name" type="text" placeholder="Enter your full name" required="">
                </div>
                <!-- field-->
                <div class="field">
                  <label for="email">Email Address*</label>
                  <input class="inputText" id="email" type="email" placeholder="Enter your email address" required="">
                </div>
                <!-- field-->
                <div class="field">
                  <label for="message">Message*</label>
                  <textarea class="inputText" id="message" rows="4" placeholder="Write your message here..." required=""></textarea>
                </div>
                <!-- field-->
                <div class="btns">
                  <button><span>Submit</span><i class="icon"> &#xA021;</i></button>
                </div>
                <!-- btns-->
              </form>
            </div>
            <div class="col-lg-5">
              <ul class="contactBox">
                <li><a href="&lt;?php echo $numberTel; ?&gt;" target="_blank"><i class="icon">&#xA001;</i><span><b>Phone Number</b><?php echo $number; ?></span></a></li>
                <li><a href="mailto:&lt;?php echo $email; ?&gt;" target="_blank"><i class="icon">&#xA003;</i><span><b>Email Address</b><?php echo $email; ?></span></a></li>
                <li><a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i class="icon">&#xA039;</i><span><b>Address</b><?php echo $address; ?></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section><?php include "./include/footer.php"; ?>
    </main><?php include "./include/scripts.php"; ?>
  </body>
</html>