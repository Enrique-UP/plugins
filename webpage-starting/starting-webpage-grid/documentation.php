<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <meta name="description" content="">
    <meta name="keywords" content=""><?php include "./include/head.php"; ?>
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
      </section><?php include "./include/footer.php"; ?>
    </main><?php include "./include/scripts.php"; ?>
  </body>
</html>