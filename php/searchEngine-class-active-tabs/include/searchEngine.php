<style>
    *{padding:0;margin:0;box-sizing:border-box;}
    .banner{width: 100%;display:flex;}
    .banner .left{width: 30%;flex-shrink:0;}
    .banner .right{width: 70%;display:none;}
    .banner .right.active{display:flex;}

    .banner .accTabs{width: 100%;display:flex;flex-direction:column;row-gap:16px;}
    .banner .accTabs .active{color:red;}
</style>


<section class="banner <?php echo $pageNewClass ?? ''; ?>">
    <div class="left">
        <ul class="accTabs">
            <li class="<?php echo ($activeTab === 'hotel') ? 'active' : ''; ?>"><span data-href="#hotel">Hotel</span></li>
            <li class="<?php echo ($activeTab === 'flight') ? 'active' : ''; ?>"><span data-href="#flight">Flight</span></li>
            <li class="<?php echo ($activeTab === 'flightHotel') ? 'active' : ''; ?>"><span data-href="#flightHotel">Flight & Hotel</span></li>
            <li class="<?php echo ($activeTab === 'cruise') ? 'active' : ''; ?>"><span data-href="#cruise">Cruise</span></li>
            <li class="<?php echo ($activeTab === 'car') ? 'active' : ''; ?>"><span data-href="#car">Rent a Car</span></li>
        </ul>
    </div>
    <div class="right" id="flight">Flight</div>
    <div class="right" id="hotel">Hotel</div>
    <div class="right" id="flightHotel">Flight + Hotel</div>
    <div class="right" id="cruise">Cruise</div>
    <div class="right" id="car">Car</div>
</section>


<!-- <script>
    $(function() {
        $(".banner .form .accTabs > li.active > span").each(function(){
            $($(this).data("href")).addClass("active");
        });
        $(".banner .form .accTabs > li > span").on('click', function () {
            $(this).parent("li").siblings("li").removeClass("active");
            $(this).parent("li").addClass("active");

            $($(this).data("href")).siblings().removeClass("active");
            $($(this).data("href")).addClass("active");
        });
    });
</script> -->

<script>
    document.addEventListener("DOMContentLoaded", function () {

    // Activate panel for already-active tab on load
    document
        .querySelectorAll(".banner .accTabs > li.active > span")
        .forEach(function (span) {
        var target = span.getAttribute("data-href");
        var panel = document.querySelector(target);
        if (panel) {
            panel.classList.add("active");
        }
        });

    // Click event for tabs
    document
        .querySelectorAll(".banner .accTabs > li > span")
        .forEach(function (span) {
        span.addEventListener("click", function () {

            var li = this.parentElement;
            var ul = li.parentElement;
            var target = this.getAttribute("data-href");
            var panel = document.querySelector(target);

            // Remove active class from all li
            ul.querySelectorAll("li").forEach(function (item) {
            item.classList.remove("active");
            });

            // Add active to clicked li
            li.classList.add("active");

            // Remove active from all sibling panels
            if (panel) {
            panel.parentElement
                .querySelectorAll(".right")
                .forEach(function (item) {
                item.classList.remove("active");
                });

            // Activate target panel
            panel.classList.add("active");
            }

        });
        });

    });
</script>