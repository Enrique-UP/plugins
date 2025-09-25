<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <meta name="description" content="">
    <meta name="keywords" content=""><?php include "./include/head.php"; ?>
    <style type="text/css">
      [class*="box"]{display:flex;width:100%;padding:8px;text-align:center;color:#fff;}
      .box1{background:brown;}
      .box2{background:green;}
    </style>
  </head>
  <body>
    <main><?php include "./include/header.php"; ?>
      <section class="section bg">
        <div class="container">
          <p> <b>npm install -g pug-cli</b><br>pug ./assets/compile/pug-php/ --out ./ --extension php --watch<br>For minify<br>pug ./assets/compile/pug-php/ --out ./ --extension php --watch --pretty<br>For unminify<br><br></p>
          <hr>
          <p> <br><b>npm run build-css</b><br><br></p>
          <hr>
          <p> <br><b>Type Script</b><br>npm install typescript -g<br>tsc.cmd --init<br>Setting in tsconfig.json<br>"rootDir": "./assets/compile/ts/script",<br>"outDir": "./assets/compile/js",<br>"include": [<br>"./assets/compile/ts/script"<br>]<br>tsc.cmd --w</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12"> 
              <div class="row">
                <div class="col-12">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="box1">Cols</div>
            </div>
            <div class="col-6">
              <div class="box1">Cols</div>
            </div>
            <div class="col-6">
              <div class="box1">Cols</div>
            </div>
            <div class="col-6">
              <div class="box1">Cols</div>
            </div>
            <div class="col-6">
              <div class="box1">Cols</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row"> 
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="box1">Cols</div>
            </div>
            <div class="col-6">
              <div class="box1">Cols</div>
            </div>
            <div class="col-6">
              <div class="row"> 
                <div class="container-fluid">
                  <div class="box2">ContainerFluid</div>
                </div>
                <div class="container-fluid">
                  <div class="box2">ContainerFluid</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-12">
                  <div class="box1">Cols</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row"> 
            <div class="col-12">
              <div class="row"> 
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-6">
                  <div class="box1">Cols</div>
                </div>
                <div class="col-12">
                  <div class="box1">Cols</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box2">Container</div>
        </div>
        <div class="container"> 
          <div class="row"> 
            <div class="col-12">
              <div class="box1">Cols</div>
            </div>
          </div>
        </div>
      </section>
      <section class="section bg1"> 
        <div class="container"><i class="icon">&#xa001;</i><i class="icon">&#xa002;</i><i class="icon">&#xa003;</i><i class="icon">&#xa004;</i><i class="icon">&#xa005;</i><i class="icon">&#xa006;</i><i class="icon">&#xa007;</i><i class="icon">&#xa008;</i><i class="icon">&#xa009;</i><i class="icon">&#xa010;</i><i class="icon">&#xa011;</i><i class="icon">&#xa012;</i><i class="icon">&#xa013;</i><i class="icon">&#xa014;</i><i class="icon">&#xa015;</i><i class="icon">&#xa016;</i><i class="icon">&#xa017;</i></div>
      </section>
      <hr><?php include "./include/footer.php"; ?>
    </main><?php include "./include/scripts.php"; ?>
  </body>
</html>