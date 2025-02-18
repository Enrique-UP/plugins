<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "include/head.php"; ?>
    <title><?php echo $pageContent['page']; ?></title>
</head>
<body>
    <h1><?php echo $pageContent['page']; ?></h1>
    <h2><?php echo $pageContent['desc'];?></h2>
    <p><?php echo $head; ?></p>
    <p><?php echo $text; ?></p>

    <?php include "include/footer.php"; ?>
</body>
</html>