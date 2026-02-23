<?php
    $cruises = [
        [
            "title" => "Caribbean Cruises",
            "image" => "cruise1.jpg",
            "location" => "San Diego, United States",
            "price" => "$ 750"
        ],
        [
            "title" => "Bahamas Cruises",
            "image" => "cruise2.jpg",
            "location" => "Boston, United States",
            "price" => "$ 842"
        ],
        [
            "title" => "Alaska Cruises",
            "image" => "cruise3.jpg",
            "location" => "Seattle, United States",
            "price" => "$ 985"
        ]
    ];

    $limit = isset($limit) ? $limit : count($cruises);
    $itemsToShow = array_slice($cruises, 0, $limit);
?>

<div class="row">
    <?php foreach($itemsToShow as $cruise){ ?>
        <div class="col-12">
            <figure class="travel">
                <a href="#">
                    <img src="<?php echo $siteUrl; ?>assets/images/cruises/<?php echo $cruise['image']; ?>" alt="">
                </a>
                <figcaption>
                    <p><b><?php echo $cruise['title']; ?></b></p>
                    <p><?php echo $cruise['location']; ?></p>
                    <p><b><?php echo $cruise['price']; ?></b></p>
                </figcaption>
            </figure>
        </div>
    <?php } ?>
</div>