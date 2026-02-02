<style type="text/css">
.repeat{width: 100%;display:flex;background:#eee;justify-content:space-between;}
.repeat:not(:last-of-type){margin-bottom:32px;}
</style>

<?php
// Data array: each item has hd, txt, t1
$data = [
    ["hd"=>"Lorem","txt"=>"Ipsum","t1"=>"Dolor"],
    ["hd"=>"Dolor","txt"=>"Ipsum","t1"=>"Dolor"],
    ["hd"=>"Sit","txt"=>"Ipsum","t1"=>"Dolor"],
    ["hd"=>"Ameet","txt"=>"Ipsum","t1"=>"Dolor"],
    ["hd"=>"Lorem","txt"=>"Ipsum","t1"=>"Dolor"],
    ["hd"=>"Anta","txt"=>"Ipsum","t1"=>"Dolor"],
    ["hd"=>"Lorem","txt"=>"Ipsum","t1"=>"Dolor"],
];

// Default limit (use page to override)
$limit = $limit ?? count($data);

// Render HTML
foreach (array_slice($data, 0, $limit) as $item): ?>
    <div class="repeat">
        <p class="hd"><?= htmlspecialchars($item['hd']) ?></p>
        <p class="txt"><?= htmlspecialchars($item['txt']) ?></p>
        <p class="t1"><?= htmlspecialchars($item['t1']) ?></p>
    </div>
<?php endforeach; ?>
