import {currentYear, animationLeft, animationRight} from "./var.js";
/* ======================== header ======================== */
(function(){
    const header = () => {
        return (`
            <div class="headerTop">
                <div class="container">
                    <a class="number rml">
                        <i class="icon">&#xe001;</i>
                        <b>Phone Number:-</b>
                        <span class="numText"></span>
                    </a>
                    <a class="email rml">
                        <i class="icon">&#xe002;</i>
                        <b>Email Address:-</b>
                        <span class="emailText"></span>
                    </a>
                </div><!--container-->
            </div><!--headerTop-->
            <div class="headerMiddle">
                <div class="container">
                    <div class="logoArea">
                        <a href="/" class="logo rml">
                            <img src="./images/delete/logo.png" />
                        </a>
                    </div><!--logoArea-->
                    <div class="searchBar">
                        <div class="searchBack">
                            <p class="head">Quick Search <i class="icon">&#xe039;</i></p>
                            <div class="inputTabs">
                                <div class="search_bar">
                                    <input type="text" placeholder="Search.." value="" />
                                    <a class="searchIcon rml"><i class="icon">&#xe030;</i></a>
                                    <a class="timesIcon rml"><i class="icon">&#xe039;</i></a>
                                </div><!--search_bar-->
                                <ul class="dropdown"></ul>
                            </div><!--inputTabs-->
                            <div class="searchBarAds">
                                <img src="./images/delete/searchBar-ads.jpg" />
                            </div><!--searchBarAds-->
                        </div><!--searchBack-->
                    </div><!--searchBar-->
                    <div class="followArea">
                        <div class="followUs">
                            <p class="head">Follow Us:-</p>
                            <p class="follow">
                                <span>
                                    <a class="fb rml"><i class="icon">&#xe021;</i></a>
                                    <a class="tw rml"><i class="icon">&#xe022;</i></a>
                                    <a class="lin rml"><i class="icon">&#xe023;</i></a>
                                </span>
                                <span>
                                    <a class="ig rml"><i class="icon">&#xe024;</i></a>
                                    <a class="skype rml"><i class="icon">&#xe025;</i></a>
                                    <a class="whatsapp rml"><i class="icon fw">&#xe026;</i></a>
                                </span>
                            </p>
                        </div><!--followUs-->
                    </div><!--followArea-->
                </div><!--container-->
            </div><!--headerMiddle-->
            <div class="headerBottom">
                <div class="container">
                    <div class="navBack">
                        <div class="navArea">
                            <p class="head">Quick Links <i class="icon">&#xe039;</i></p>
                            <ul class="navBar">
                                <li class="active"><a href="/"><i class="icon">&#xe042;</i>Home</a></li>
                                <li><a href="javascript:;"><i class="icon">&#xe015;</i> About Us</a></li>
                                <li><a href="javascript:;"><i class="icon">&#xe044;</i>Work</a></li>
                                <li><a href="javascript:;"><i class="icon fw">&#xe054;</i>Skills</a></li>
                                <li><a href="javascript:;"><i class="icon">&#xe043;</i>Port</a></li>
                                <li><a href="javascript:;"><i class="icon">&#xe008;</i>Image Gallery</a></li>
                                <li><a href="javascript:;"><i class="icon">&#xe016;</i>Cld</a></li>
                                <li class="dropDown">
                                    <a href="javascript:;" class="rml"><i class="icon">&#xe041;</i></a>
                                    <ul>
                                        <li><a href="javascript:;"><i class="icon">&#xe043;</i>Port</a></li>
                                        <li><a href="javascript:;"><i class="icon">&#xe008;</i>Image Gallery</a></li>
                                        <li><a href="javascript:;"><i class="icon">&#xe016;</i>Cld</a></li>
                                        <li><a href="javascript:;"><i class="icon">&#xe009;</i>Edu</a></li>
                                        <li><a href="javascript:;"><i class="icon fw">&#xe046;</i>LSle</a></li>
                                        <li><a href="javascript:;"><i class="icon">&#xe047;</i>Team</a></li>
                                        <li><a href="javascript:;"><i class="icon">&#xe048;</i>Review</a></li>
                                        <li><a href="javascript:;"><i class="icon">&#xe027;</i>Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="searchBarAds">
                                <img src="./images/delete/searchBar-ads.jpg" />
                            </div><!--searchBarAds-->
                        </div><!--navArea-->
                    </div><!--navBack-->
                    <div class="mobileIcons">
                        <i class="menu">Menu</i>
                        <span>
                            <i class="icon search">&#xe030;</i>
                            <i class="icon bar">&#xe003;</i>
                        </span>
                    </div><!--mobileIcons-->
                </div><!--container-->
            </div><!--headerBottom-->
        `);
    };
    
    if (document.contains(document.querySelector("header"))) {
        document.querySelector("header").innerHTML = header();
        (function(){
            var a = document.querySelectorAll("a");
            var t = "";
            for (var i = 0; i < a.length; i++){
                t += "<li>" + a[i].outerHTML + "</li>";
            }
            document.querySelector(".searchBar .dropdown").innerHTML = t;
          
            const tags = [...document.querySelectorAll(".searchBar .dropdown>li")];
            const texts = new Set(tags.map(x => x.innerHTML));
            tags.forEach(tag => {
              if (texts.has(tag.innerHTML)) {
                texts.delete(tag.innerHTML);
              }else {
                tag.remove()
              }
            });
          })();
    };
})();
/* ======================== header ======================== */
/* ======================== education ======================== */
(function(){
    const education = () => {
        let eduContent = '<div class="container"><h1 class="heading animate bounceInDown">Main <span>Heading</span><i>Lorem ipsum dolor</i></h1></div><!--container--><div class="container"><ul class="edu">';
        const dataEdu = [
            {
                left : animationLeft,
                right: animationRight,
                year : "1001",
                sr : "01",
                head : "Head 1",
                subHead : "Sub Head 1",
                text : "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                left : animationRight,
                right: animationLeft,
                year : "1002",
                sr : "02",
                head : "Head 2",
                subHead : "Sub Head 2",
                text : "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                left : animationLeft,
                right: animationRight,
                year : "1003",
                sr : "03",
                head : "Head 3",
                subHead : "Sub Head 3",
                text : "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                left : animationRight,
                right: animationLeft,
                year : "1004",
                sr : "04",
                head : "Head 4",
                subHead : "Sub Head 4",
                text : "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                left : animationLeft,
                right: animationRight,
                year : "1005",
                sr : "05",
                head : "Head 5",
                subHead : "Sub Head 5",
                text : "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                left : animationRight,
                right: animationLeft,
                year : "1006",
                sr : "06",
                head : "Head 6",
                subHead : "Sub Head 6",
                text : "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            }
        ]; 
        dataEdu.forEach(function(e){
            eduContent += `
                <li>
                    <i class="circles"></i>
                    <aside class="year">
                        <span class="animate ${e.right}">${e.year}</span>
                    </aside><!--year-->
                    <aside class="headText">
                        <div class="shadow animate ${e.left}">
                            <p class="head">
                                <span>${e.sr}</span>
                                <b>${e.head}</b>
                            </p>
                            <p class="text">
                                <b>${e.subHead}</b>
                                <span>${e.text}</span>
                            </p>
                        </div><!--shadow-->
                    </aside><!--headText-->
                </li>
            `;
        });
        eduContent += '</ul></div><!--container-->';
        if (document.contains(document.querySelector("section.education"))) {
            document.querySelector("section.education").innerHTML = eduContent;

            var li = $(".education .edu>li");
            const colors = [
                {
                    color: "var(--back1)"
                },
                {
                    color: "var(--back2)"
                },
                {
                    color: "var(--back3)"
                },
                {
                    color: "var(--back4)"
                },
                {
                    color: "var(--back5)"
                },
                {
                    color: "var(--back6)"
                }
            ];
            let name = "";
            for(var i = 0; i < colors.length; i++){
                name = colors[i].color;
                for(var j = 0; j < li.length; j++){
                    li[i].style.setProperty("--border1", name);
                }
            }
        };  
    };
    education();
})();
/* ======================== education ======================== */
/* ======================== experience ======================== */
(function(){
    const experience = () => {
        let expContent = '<div class="container"><h1 class="heading animate bounceInDown">Main <span>Heading</span><i>Lorem ipsum dolor</i></h1></div><!--container--><div class="container"><ul class="exp">';
        const dataExp = [
            {
                animation : animationLeft,
                duration : "0000 - 0000",
                head : "Profile",
                subHead : "C Name",
                text : "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                animation : animationRight,
                duration : "0000 - 0000",
                head : "Profile",
                subHead : "C Name",
                text : "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                animation : animationLeft,
                duration : "0000 - 0000",
                head : "Profile",
                subHead : "C Name",
                text : "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                animation : animationRight,
                duration : "0000 - 0000",
                head : "Profile",
                subHead : "C Name",
                text : "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                animation : animationLeft,
                duration : "0000 - 0000",
                head : "Profile",
                subHead : "C Name",
                text : "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            },
            {
                animation : animationRight,
                duration : "0000 - 0000",
                head : "Profile",
                subHead : "C Name",
                text : "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!"
            }
        ]; 
        dataExp.forEach(function(e){
            expContent += `
                <li>
                    <i class="circles animate"></i>
                    <aside class="headText animate ${e.animation}">
                        <p class="duration"><i class="icon">&#xe051;</i>${e.duration}</p>
                        <p class="head"><i class="icon">&#xe015;</i>${e.head}</p>
                        <p class="subHead1">Roles & Responsibilities</p>
                        <p class="text mb">${e.text}</p>
                        <p class="subHead"><i class="icon">&#xe009;</i>${e.subHead}</p>
                        <p class="subHead1">About the Cname</p>
                        <p class="text">${e.text}</p>
                    </aside><!--headText-->
                </li>
            `;
        });
        expContent += '</ul></div><!--container-->';
        if (document.contains(document.querySelector("section.experience"))) {
            document.querySelector("section.experience").innerHTML = expContent;
    
            var li = $(".experience .exp>li");
            const colors = [
                {
                    color: "var(--back1)"
                },
                {
                    color: "var(--back2)"
                },
                {
                    color: "var(--back3)"
                },
                {
                    color: "var(--back4)"
                },
                {
                    color: "var(--back5)"
                }
            ];
            let name = "";
            for(var i = 0; i < colors.length; i++){
                name = colors[i].color;
                for(var j = 0; j < li.length; j++){
                    li[i].style.setProperty("--border1", name);
                }
            }
        };  
    };
    experience();
})();
/* ======================== experience ======================== */
/* ======================== skills ======================== */
(function(){
    const skills = () => {
        let skillContent = '<div class="container"><h1 class="heading animate bounceInDown">Lorem <span>Ipsum</span><i>Lorem ipsum dolor</i></h1><div class="outlineBox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident saepe laudantium deleniti alias cum quisquam velit perferendis sed facere rem facilis voluptas atque, magni cumque. Ratione, aliquam! Natus, iusto voluptatem architecto eaque, repellendus libero et perspiciatis quasi facilis ab commodi dolores hic sint rerum enim deserunt dicta similique delectus deleniti!</div><!--outlineBox--><div class="row skillCol">';
        const dataSkill = [
            {
                left : animationLeft,
                right : animationRight,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",
            },
            {
                left: animationRight,
                right: animationLeft,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left : animationLeft,
                right : animationRight,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left: animationRight,
                right: animationLeft,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left : animationLeft,
                right : animationRight,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left: animationRight,
                right: animationLeft,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left : animationLeft,
                right : animationRight,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left: animationRight,
                right: animationLeft,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left : animationLeft,
                right : animationRight,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left: animationRight,
                right: animationLeft,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left : animationLeft,
                right : animationRight,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            },
            {
                left: animationRight,
                right: animationLeft,
                totalYear : currentYear - 2014,
                name : `Lorem ipsum <span>dolor sit amit</span>`,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim amet facere vitae temporibus quibusdam consequatur alias dolore? Aliquid, ullam!",            
            }        
        ];
        dataSkill.forEach(function(e){
            skillContent += `
                <div class="col-xs-12 col-lg-6">
                    <div class="skill">
                        <div class="back">
                            <span class="animate ${e.right}">${e.totalYear} Years Exp</span>
                        </div><!--back-->
                        <div class="content animate ${e.left}">
                            <p class="head">${e.name}</p>
                            <p class="text">${e.text}</p>
                        </div><!--content-->
                    </div><!--skill-->
                </div><!--cols-->
            `;
        });
        skillContent += '</div><!--row--></div><!--container-->';
        if (document.contains(document.querySelector("section.skills"))) {
            document.querySelector("section.skills").innerHTML = skillContent;
    
            (function(){
                const classsData = [
                    {color : "var(--back1)"},
                    {color : "var(--back2)"},
                    {color: "var(--back3)"},
                    {color: "var(--back4)"},
                    {color: "var(--back5)"},
                    {color: "var(--back6)"},
                    {color: "var(--back7)"},
                    {color: "var(--back8)"},
                    {color: "var(--back9)"},
                    {color: "var(--back10)"}
                ];
                
                var li = document.querySelectorAll(".skills .skillCol [class*=col-]");
                for (var j = 0; j < dataSkill.length;){
                    for (var k = 0; k < classsData.length; k++){                 
                        li[j].style.setProperty("--border1", classsData[k].color);
                        j++;                   
                        if (j == li.length || k == classsData.length - 1) {						
                            break;
                        }
                    } 
                }
            }());
    
            (function(){
                var number = 100;
                var span = document.querySelectorAll(".skill .content .text");
                for(var i = 0; i < span.length; i++){
                    var allText = span[i].innerHTML;
                    if(number < allText.length){
                        span[i].innerHTML = "<span>"+allText.slice(0, number)+"</span><i>"+allText.slice(number, allText.length)+"</i> <b>i... </b><a href='javascript:;'>View More</a>";
                    }
                }
    
                const link = document.querySelectorAll("[class*='col-'] .skill .content .text a");
                for (var i = 0; i < link.length; i++){
                    link[i].addEventListener("click", function () {
                        if (this.closest("[class*='col-']").classList.contains("active")){
                            this.closest("[class*='col-']").classList.remove("active");
                            this.innerText = "View More";
                        }
                        else{
                            const active = document.querySelectorAll("[class*='col-'].active");
                            for (var j = 0; j < active.length; j++){
                                active[j].classList.remove("active");
                                active[j].querySelectorAll("a").forEach(function(e){
                                    e.innerText = "View More";
                                });
                            }
                            this.closest("[class*='col-']").classList.add("active");
                            this.innerText = "View Less";
                        }
                    });
                }
    
                document.querySelectorAll(".skills .skill").forEach(function(f){
                    f.addEventListener("click", function(e){
                        e.stopPropagation();
                    });
                });
                document.addEventListener("click", function(){
                    document.querySelectorAll(".skills .skillCol [class*=col-]").forEach(function(e){
                        e.classList.remove("active");
                        e.querySelectorAll("a").forEach(function(a){
                            a.innerText = "View More";
                        });
                    });
                });
    
            })();
        };  
    };
    skills();
})();
/* ======================== skills ======================== */
/* ======================== lifeStyle ======================== */
(function(){
    const lifeStyle = () => {
        return(`
            <div class="container"><h1 class="heading animate bounceInDown">Main <span>Heading</span><i>Lorem ipsum dolor</i></h1><div class="outlineBox"><span>Heading</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident saepe laudantium deleniti alias cum quisquam velit perferendis sed facere rem facilis voluptas atque, magni cumque. Ratione, aliquam! Natus, iusto voluptatem architecto eaque, repellendus libero et perspiciatis quasi facilis ab commodi dolores hic sint rerum enim deserunt dicta similique delectus deleniti!</div><!--outlineBox--></div><!--container-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 animate bounceInLeft">
                            <a href="javascript:;" class="figure one">
                                <img src="./images/delete/lifeStyle-1.jpg" />
                                <figcaption>Lorem<span>Ipsum</span></figcaption>
                            </a>
                        </div><!--cols-->
                        <div class="col-sm-12 col-md-6 mb">
                            <div class="row">
                                <div class="col-xs-6 animate bounceInLeft">
                                    <a href="javascript:;" class="figure">
                                        <img src="./images/delete/lifeStyle-1.jpg" />
                                        <figcaption>Lorem<span>Ipsum</span></figcaption>
                                    </a>
                                </div><!--cols-->
                                <div class="col-xs-6 animate bounceInRight">
                                    <a href="javascript:;" class="figure">
                                        <img src="./images/delete/lifeStyle-1.jpg" />
                                        <figcaption>Lorem<span>Ipsum</span></figcaption>
                                    </a>
                                </div><!--cols-->
                                <div class="col-xs-6 animate bounceInLeft">
                                    <a href="javascript:;" class="figure">
                                        <img src="./images/delete/lifeStyle-1.jpg" />
                                        <figcaption>Lorem<span>Ipsum</span></figcaption>
                                    </a>
                                </div><!--cols-->
                                <div class="col-xs-6 animate bounceInRight">
                                    <a href="javascript:;" class="figure">
                                        <img src="./images/delete/lifeStyle-1.jpg" />
                                        <figcaption>Lorem<span>Ipsum</span></figcaption>
                                    </a>
                                </div><!--cols-->
                            </div><!--row-->
                        </div><!--cols-->
                        <div class="col-xs-6 col-md-3 col-lg-3 animate bounceInLeft">
                            <a href="javascript:;" class="figure">
                                <img src="./images/delete/lifeStyle-1.jpg" />
                                <figcaption>Lorem<span>Ipsum</span></figcaption>
                            </a>
                        </div><!--cols-->
                        <div class="col-xs-6 col-md-3 col-lg-3 animate bounceInRight">
                            <a href="javascript:;" class="figure">
                                <img src="./images/delete/lifeStyle-1.jpg" />
                                <figcaption>Lorem<span>Ipsum</span></figcaption>
                            </a>
                        </div><!--cols-->
                        <div class="col-xs-6 col-md-3 col-lg-3 animate bounceInLeft">
                            <a href="javascript:;" class="figure">
                                <img src="./images/delete/lifeStyle-1.jpg" />
                                <figcaption>Lorem<span>Ipsum</span></figcaption>
                            </a>
                        </div><!--cols-->
                        <div class="col-xs-6 col-md-3 col-lg-3 animate bounceInRight">
                            <a href="javascript:;" class="figure">
                                <img src="./images/delete/lifeStyle-1.jpg" />
                                <figcaption>Lorem<span>Ipsum</span></figcaption>
                            </a>
                        </div><!--cols-->
                        <div class="col-xs-12 m0">
                            <p class="btns center">
                                <a href="javascript:;" class="btn-grey rml">Explore More</a>
                            </p>
                        </div><!--cols-->
                    </div><!--row-->
                </div><!--container-->
            `);
        };
    if (document.contains(document.querySelector("section.lifeStyle"))) {
        document.querySelector("section.lifeStyle").innerHTML = lifeStyle();
        (function(){
            const classsData = [
                {color : "var(--back1)"},
                {color : "var(--back2)"},
                {color : "var(--back3)"},
                {color: "var(--back4)"},
                {color: "var(--back5)"},
                {color: "var(--back6)"},
                {color: "var(--back7)"},
                {color: "var(--back8)"},
                {color: "var(--back9)"},
                {color: "var(--back10)"}
            ];
            var li = document.querySelectorAll(".figure");
            for (var j = 0; j < li.length;){
                for (var k = 0; k < classsData.length; k++){                 
                    li[j].style.setProperty("--grey1", classsData[k].color);
                    j++;                   
                    if (j == li.length || k == classsData.length - 1) {						
                        break;
                    }
                } 
            }
        })();
    };
})();
/* ======================== lifeStyle ======================== */
(function(){
    let work = [
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0001",
            category: "Lorem 1",
            text: "default",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0002",
            category: "Lorem 2",
            text: "default1",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/slider-1.jpg",
            duration: "00-00-0003",
            category: "Lorem 3",
            text: "default",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0004",
            category: "Lorem 4",
            text: "default1",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0001",
            category: "Lorem 5",
            text: "default",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0002",
            category: "Lorem 6",
            text: "default1",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0003",
            category: "Lorem 7",
            text: "default",
            web: "default",
            link: "window.open('#')"
        },
        {
            img : "./images/delete/work.jpg",
            duration: "00-00-0004",
            category: "Lorem 8",
            text: "default1",
            web: "default",
            link: "window.open('#')"
        }
    ];
    work.forEach(function(e){
        document.querySelector(".work .container .row").innerHTML += `
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="workArea">
                    <div class="image">
                        <img src=${e.img} />
                        <span class="date">${e.duration}</span>
                        <span class="detail">View Detail</span>
                        <span class="category">${e.category}</span>
                        <span class="details">
                            <i class="icon">&#xe039;</i>
                            <span class="head">Details</span>
                            <span class="about ${e.text}"><i></i></span>
                        </span>
                    </div><!--image-->
                    <div class="more">
                        <span class="icon view">&#xe028;</span>
                        <span class="icon stop">&#xe029;</span>
                        <span class="name ${e.web}">Loremipsumdolor</span>
                        <span class="icon" onclick=${e.link}>&#xe004;</span>
                    </div><!--more-->
                </div><!--workArea-->
            </div><!--cols-->
        `;
    });
})();
/* ======================== demo ======================== */
(function(){
    var number = "+91-000-000-0000";
    var email = "demo@gmail.com";
    //var address = ;
    var fb = "fb-demo.com";
    var tw = "tw-demo.com";
    var lin = "li-demo.com";
    var ig = "ig-demo.com";
    var skype = "sk-demo.com";
    var whatsapp = "wh-demo.com";
    document.querySelectorAll("a.number, a.email, a.fb, a.tw, a.lin, a.ig, a.skype, a.whatsapp").forEach(function(e){
        e.setAttribute("target", "_blank");
    });
    document.querySelectorAll("a.number").forEach(function(e){
        e.setAttribute("href", `tel:${number}`);
        e.querySelector(".numText").innerHTML = number;
    });
    document.querySelectorAll("a.email").forEach(function(e){
        e.setAttribute("href", `mailto:${email}`);
        e.querySelector(".emailText").innerHTML = email;
    });
    document.querySelectorAll("a.fb").forEach(function(e){
        e.setAttribute("href", fb);
    });
    document.querySelectorAll("a.tw").forEach(function(e){
        e.setAttribute("href", tw);
    });
    document.querySelectorAll("a.lin").forEach(function(e){
        e.setAttribute("href", lin);
    });
    document.querySelectorAll("a.ig").forEach(function(e){
        e.setAttribute("href", ig);
    });
    document.querySelectorAll("a.skype").forEach(function(e){
        e.setAttribute("href", `skype:${skype}`);
    });
    document.querySelectorAll("a.whatsapp").forEach(function(e){
        e.setAttribute("href", `tel:${whatsapp}`);
    });
})();