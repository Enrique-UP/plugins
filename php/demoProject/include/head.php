<?php
    $siteUrl = "http://localhost/demoProject/";
    $page = "title here";
    $head = "Heading here...";
    $text = "Text here...";

    $url = str_replace('/demoProject', '', $_SERVER['REQUEST_URI']);
    $content = [
        "/" => [
            "page" => "Home Page",
            "desc" => "Home page here...",
        ],
       
        "/about" => [
            "page" => "About Us Page",
            "desc" => "About Us page here...",
        ],

        "/contact" => [
            "page" => "Contact Us Page",
            "desc" => "Contact Us page here...",
        ],
    ];
    
    $defaultContent = [
        "page" => "Default Page",
        "desc" => "Default Page here...",
    ];
    
    $pageContent = $content[$url] ?? $defaultContent;
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">