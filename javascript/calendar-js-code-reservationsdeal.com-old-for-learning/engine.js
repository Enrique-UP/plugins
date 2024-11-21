var t = !0,
    e = !0;

function roundTripRP() {
    $("#txtReturnDate").show(), $("#journeyType").val("2"), $("#departInput").removeClass("col-md-8").addClass("col-md-4"),fillReturndate();
}

function oneWayRP() {
    $("#txtReturnDate").hide(), $("#journeyType").val("1"), $("#departInput").removeClass("col-md-4").addClass("col-md-8"),$("#returnDate").val("");
}

function split(t) {
    return t.split(/,\s*/)
}

function extractLast(t) {
    return split(t).pop()
}
function stripHTML(oldString) {
	//return oldString.substring(oldString.indexOf("'>")+2,oldString.indexOf("</div>"));
	return oldString.replace("/<&#91;^>&#93;*>/g", "");
}
function stripHTMLNew(oldString) { 
	return oldString.replace(/(<([^>]+)>)/ig,""); 
	}
function monkeyPatchAutocomplete(){var oldFn=$.ui.autocomplete.prototype._renderItem;$.ui.autocomplete.prototype._renderItem=function(ul,item){var t=item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+$.ui.autocomplete.escapeRegex(this.term)+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong class='highlight'>$1</strong>");return $("<li></li>").data("item.autocomplete",item).append("<a>"+t+"</a>").appendTo(ul)}}
$("#froCity").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcity", {
            query: extractLast(t.term),
            product: "flight"
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
      return !1
    },
    select: function(e, n) {
        var a = split(this.value);
        a.pop(), a.push(n.item.value), this.value = a, console.log(a), arrSplit = a[0].split("-"), $("#Origin_m_airport").html(arrSplit[0]);
        var r = arrSplit[1].indexOf("("),
            o = arrSplit[1].indexOf(")"),
            i = arrSplit[1].substring(r + 1, o);
			setTimeout(function(){
        //$(window).width() < 992 && ($("#Origin_m_from").html(i), $("#mobile_top_search_origin, #mobile_top_search_destination").fadeOut(), $("#code_location_border_left").removeClass("error"));
		$(window).width() < 992 && ($("#Origin_m_from").html(i), $("#mobile_top_search_origin").removeClass('showOnTopFixed'), $("#mobile_top_search_destination").addClass('showOnTopFixed'), $("#code_location_border_left").removeClass("error"));
    var cust = stripHTMLNew(a[0].toString());
		$("#froCity").val(cust);
		t = !1;
		$("#toCity").focus();
	  },100);
      if( $(window).width() > 767 ){
	      $("#toCity").focus().val(''); //console.log(t);
      }
    }
}).blur(function() { 
    t && -1 == $("#froCity").val().indexOf(",") && $("#froCity").val($("ul#ui-id-1 li:first a").text());
	
}), $("#toCity").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcity", {
            query: extractLast(t.term),
            product: "flight"
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {},
    select: function(t, e) {
        var n = split(this.value);
        n.pop(), n.push(e.item.value);
        e.item.value.indexOf("(");
        var a = n[0].split("-");
        $("#Destination_m_airport").html(a[0]);
        var r = a[1].indexOf("("),
            o = a[1].indexOf(")"),
            i = a[1].substring(r + 1, o);
		setTimeout(function(){	
        $("#Destination_m_from").html(i), $(window).width() < 992 && ($("#mobile_top_search_origin, #mobile_top_search_destination").removeClass('showOnTopFixed'), $("#code_location_border_right").removeClass("error")); 
		var cust = stripHTMLNew(n[0].toString());
		$("#toCity").val(cust);
		$("#departDate").datepicker("show");
		},100)
    }
}).blur(function() {
    if (e) {
        t && -1 == $("#toCity").val().indexOf(",") && $("#toCity").val($("ul#ui-id-2 li:first a").text());
        var t = $("ul#ui-id-2 li:first a").text(),
            n = t.indexOf("("),
            a = t.indexOf(")");
        t = t.substring(n + 1, a)
    }
}),$("#hotelLocation").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcity", {
            query: extractLast(t.term),
            product: "hotel"
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
        return !1
    },
    select: function(e, n) {
        var a = split(this.value);
        a.pop(), a.push(n.item.value), this.value = a, console.log(a), arrSplit = a[0].split("-"), $("#trvD_htl_desti").html(arrSplit[0]);
        try{
        var r = arrSplit[1].indexOf("("),
            o = arrSplit[1].indexOf(")"),
            i = arrSplit[1].substring(r + 1, o);
           }
       catch(err){
      
    }
           $(window).width() < 992 && ($("#trvD_htl_desti_H").html(i), close_mob_fieldpop('trvD_hotel_searchI','trvD_hotel_searchI_cl'), $("#code_location_border_left").removeClass("error")), t = !1;
      
    
            $("#checkIn").focus();
    }
}).blur(function() {
    t && -1 == $("#hotelLocation").val().indexOf(",") && $("#hotelLocation").val($("ul#ui-id-1 li:first a").text())
});

$("#pickupLocation").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcarlocations", {
            query: extractLast(t.term)
           
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
        return !1
    },
    select: function(e, n) {
        $("#pickupDate").focus();
    }
}).blur(function() {
    t && -1 == $("#pickupLocation").val().indexOf(",") && $("#pickupLocation").val($("ul#ui-id-1 li:first a").text())
});

$("#dropLocation").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcarlocations", { 
            query: extractLast(t.term)
            
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
        return !1
    },
    select: function(e, n) {
        $( "#pickupDate" ).focus();
    }
}).blur(function() {
    t && -1 == $("#dropLocation").val().indexOf(",") && $("#dropLocation").val($("ul#ui-id-1 li:first a").text())
});

$( "#pickupDate" ).datepicker({ 
                dateFormat:"mm/dd/yy",
				minDate: new Date(),
					  onSelect: function(dateText, inst) {
						  $("#dropDate").datepicker( "option", "minDate", $(this).val() );
					  }
            });
			
$( "#dropDate" ).datepicker({ 
                dateFormat:"mm/dd/yy",
				minDate: new Date(),
					  onSelect: function(dateText, inst) {
						  
					  }
            });			

$("#carSearchRequest").validate({
        rules: {
            pickupLocation: {
                required: true
            },
			pickupDate: {
                required: true
            },
			pickupTime: {
                required: true
            },
			dropDate: {
                required: true
            },
			dropTime:{
				required: true
			},
			driverAge:{
				required: true
			}
        },
         errorPlacement: function(error, element) {   },
        
    });
	

$("#transferpickLocation").autocomplete({
    source: function(t, e) {
        $.getJSON("/gettransferlocations", {
            query: extractLast(t.term)
           
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
        return !1
    },
    select: function(e, n) {
		var pp = n.item.value.toString();
		var cust = pp.substring(0,pp.indexOf("<span"));
		var cust1 = pp.substring(pp.indexOf("<p>")+3,pp.indexOf("</p>"));
		setTimeout(function(){
			$("#transferpickLocation").val(cust);
		$("#transferPickup").val(cust1);
        $("#transferdropLocation").focus();
		},200)
		
    }
}).blur(function() {
    t && -1 == $("#pickupLocation").val().indexOf(",") && $("#pickupLocation").val($("ul#ui-id-1 li:first a").text())
});

$("#transferdropLocation").autocomplete({
    source: function(t, e) {
        $.getJSON("/gettransferlocations", { 
            query: extractLast(t.term)
            
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
        return !1
    },
    select: function(e, n) {
		var pp = n.item.value.toString();
		var cust = pp.substring(0,pp.indexOf("<span"));
		var cust1 = pp.substring(pp.indexOf("<p>")+3,pp.indexOf("</p>"));
		setTimeout(function(){
			$("#transferdropLocation").val(cust);
		$("#transferDrop").val(cust1);
        $( "#transferpickupDate" ).focus();
		},200)
       
    }
}).blur(function() {
    t && -1 == $("#dropLocation").val().indexOf(",") && $("#dropLocation").val($("ul#ui-id-1 li:first a").text())
});

$( "#transferpickupDate" ).datepicker({ 
                dateFormat:"mm/dd/yy",
				minDate: new Date(),
					  onSelect: function(dateText, inst) {
						  //$("#transferdropDate").datepicker( "option", "minDate", $(this).val() );
					  }
            });
			

			
$("#transferSearchRequest").validate({
        rules: {
            pickupLocation: {
                required: true
            },
			dropLocation: {
                required: true
            },
			pickupDate: {
                required: true
            },
			pickupTime: {
                required: true
            },
			noofTraveller:{
				required: true
			}
        },
        errorPlacement: function(error, element) {   },
    });
	
$("#alertFroCity").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcity", {
            query: extractLast(t.term),
            product: "flight",
		currencyselect : currencyselect
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {
        return !1
    },
    select: function(e, n) {
        var a = split(this.value);
        a.pop(), a.push(n.item.value), this.value = a, console.log(a), arrSplit = a[0].split("-"), $("#Origin_m_airport").html(arrSplit[0]);
        var r = arrSplit[1].indexOf("("),
            o = arrSplit[1].indexOf(")"),
            i = arrSplit[1].substring(r + 1, o);
       
    }
}).blur(function() {
     t && -1 == $("#alertFroCity").val().indexOf(",") && $("#alertFroCity").val($("ul#ui-id-4 li:first a").text())
}), $("#alertToCity").autocomplete({
    source: function(t, e) {
        $.getJSON("/getcity", {
            query: extractLast(t.term),
            product: "flight",
currencyselect : currencyselect
        }, e)
    },
    search: function() {
        return !(extractLast(this.value).length < 1) && void 0
    },
    focus: function() {},
    select: function(t, e) {
        var n = split(this.value);
        n.pop(), n.push(e.item.value);
        e.item.value.indexOf("(");
        var a = n[0].split("-");
        $("#Destination_m_airport").html(a[0]);
        var r = a[1].indexOf("("),
            o = a[1].indexOf(")"),
            i = a[1].substring(r + 1, o);
       
    }
}).blur(function() {
    if (e) {
        t && -1 == $("#alertToCity").val().indexOf(",") && $("#alertToCity").val($("ul#ui-id-5 li:first a").text());
        var t = $("ul#ui-id-2 li:first a").text(),
            n = t.indexOf("("),
            a = t.indexOf(")");
        t = t.substring(n + 1, a)
    }
});


$(".goretSctn").click(function(){
	var toCity = $("#froCity").val();
	var froCity = $("#toCity").val();
	$("#froCity").val(froCity);
	$("#toCity").val(toCity);
})




var numberOfMonthValue, totPax = 1;

function ticketList() {
	if($('#searchForm').length===0){
    	$('#mysearches_open_drp').addClass('hidden');
    }
    var t = new Date,
       e = t.getDate();
		  var he = new Date;
    he.setDate(he.getDate() + 2);
          hem=he.getMonth() + 1,
          hed = he.getDate(),
           hey = he.getFullYear();
        n = t.getMonth() + 1,
        a = t.getFullYear();
    if (window.location.pathname.indexOf("search") > -1) {
  // document.getElementById("departDate").value = n + "/" + e + "/" + a, t = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n)], $("#departDate_m_day").html(e + " " + t), $("#departDate_m_year").html(a);
    }
    var r = new Date;
    r.setDate(r.getDate() + 7);
    var o = r.getMonth() + 1 + "/" + r.getDate() + "/" + r.getFullYear();
    
    var rOut = new Date;
    rOut.setDate(rOut.getDate() + 4);
    var oOut = rOut.getMonth() + 1 + "/" + rOut.getDate() + "/" + rOut.getFullYear();
    
  // debugger;
    
    if (window.location.pathname.indexOf("hotelSearch") > -1) {
    	if($('#nights').length!==0){
          	$("#nights").html(daydiff(parseDate($('#checkIn').val()), parseDate($('#checkOut').val())));
          	}
    	$("#selroom").val($('#rooms0').val());
      
    	addRoom($('#rooms0').val());
    
    }else if (window.location.pathname.indexOf("search") > -1) {
        var i = document.getElementById("txtAdult").value,
            l = document.getElementById("txtChild").value,
            u = document.getElementById("txtInfentOnLap").value,
            d = document.getElementById("txtInfentOnSeat").value,
            cc = document.getElementById("cabinClass").value,
            s = "";
      	 if((Number(i)+Number(l)+Number(u)+Number(d))>1){
           
             document.getElementById("person").value = ""+(Number(i)+Number(l)+Number(u)+Number(d)) + " Travelers, "+cc;
             
                         
        }else{
        	if($('#person').length!==0){
            document.getElementById("person").value = "1 Adult, "+cc;
             
        	}
        	
		}	
      	if($('#journeyType').val() == 1){
          $('input[value=1]').attr('checked', true);
      		oneWayRP();
      		 $(".btn-off-1").removeClass('active');
			 $(".btn-on-1").addClass('active');
      	}
      	setLocalStorage();	
			$("#ticketList").hide();
    } else {
    		 document.getElementById("departDate").value = n + "/" + e + "/" + a, t = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n)], $("#departDate_m_day").html(e + " " + t), $("#departDate_m_year").html(a);
    	  document.getElementById("checkIn").value = hem + "/" + hed + "/" + hey;
         if($('#checkInInd').length!=0){
        	 document.getElementById("checkInInd").value = hed + "/" + hem + "/" + hey;
         }
    	 //document.getElementById("checkIn").value = n + "/" + he + "/" + a, $("#checkin_m_day").html(he + " " + t), $("#checkin_m_year").html(a);
        document.getElementById("returnDate").value = o, t = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][r.getMonth() + 1], $("#returnDate_m_day").html("+ADD"), $("#returnDate_m_year").html("Return");//$("#returnDate_m_day").html(r.getDate() + " " + t), $("#returnDate_m_year").html(r.getFullYear());
        document.getElementById("checkOut").value = oOut, t = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][rOut.getMonth() + 1], $("#checkout_m_day").html(rOut.getDate() + " " + t), $("#checkout_m_year").html(rOut.getFullYear());
    	 showlastSearch();
         var i = document.getElementById("txtAdult").value,
            l = document.getElementById("txtChild").value,
            u = document.getElementById("txtInfentOnLap").value,
            d = document.getElementById("txtInfentOnSeat").value;
           
        if((Number(i)+Number(l)+Number(u)+Number(d))>1){
           if($('#tCount').length!==0){
             document.getElementById("tCount").innerHTML = Number(i)+Number(l)+Number(u)+Number(d);
             document.getElementById("tPax").innerHTML = "Travelers";
		   }
        }else{
        	if($('#tCount').length!==0){
            document.getElementById("tCount").innerHTML = "1";
             document.getElementById("tPax").innerHTML = "Adult";
        	}
        }
       
    }
	    }

function addPax(){
   
   //alert("add PAx Method");
      var i = document.getElementById("txtAdult").value,
            l = document.getElementById("txtChild").value,
            u = document.getElementById("txtInfentOnLap").value,
            d = document.getElementById("txtInfentOnSeat").value,
            co = document.getElementById("cabinClass").value;
           
         //  alert("cabin class --- "+co);

        if((Number(i)+Number(l)+Number(u)+Number(d))>1){
           
           //alert("here--"+(Number(i)+Number(l)+Number(u)+Number(d)));
             document.getElementById("tCount").innerHTML = Number(i)+Number(l)+Number(u)+Number(d);
             document.getElementById("tPax").innerHTML = "Travelers";
        }else{
            document.getElementById("tCount").innerHTML = "1";
             document.getElementById("tPax").innerHTML = "Adult";
        }
        document.getElementById("coach_sctn").innerHTML = co;
    


    $("#background_popup").fadeOut();
    
}

function addRooms(){
	
	
	 var i = document.getElementById("occupancies0_adults").value,l=0,u=0;
		if($('#occupancies1_adults').length!==0){
          l = document.getElementById("occupancies1_adults").value;
		}
		if($('#occupancies2_adults').length!==0){
           u = document.getElementById("occupancies2_adults").value;
		}
      ci = document.getElementById("occupancies0_children").value,cl=0,cu=0;
      if($('#occupancies1_children').length!==0){
     cl = document.getElementById("occupancies1_children").value;
      }
      if($('#occupancies2_children').length!==0){
     cu = document.getElementById("occupancies2_children").value;
      }
     ri = document.getElementById("rooms0").value;
	 if((Number(i)+Number(l)+Number(u))>1){
	   document.getElementById("trpC_ttlAdult").innerHTML = Number(i)+Number(l)+Number(u)+ " Adults";
	 }else{
		 document.getElementById("trpC_ttlAdult").innerHTML = Number(i)+Number(l)+Number(u)+ " Adult";
	 }
    
	 if((Number(ci)+Number(cl)+Number(cu))>1){
		   document.getElementById("trpC_ttlchildrn").innerHTML = Number(ci)+Number(cl)+Number(cu)+ " Children";
		 }else{
			 document.getElementById("trpC_ttlchildrn").innerHTML = Number(ci)+Number(cl)+Number(cu)+ " Child";
		 }
	 document.getElementById("trpC_ttlRoom").innerHTML = ri+" Room(s)";
	 $("#trpC_alltrvl_popup").hide();
     
}
function setLocalStorage() {
	
       var a = [];
       if(localStorage.getItem("srHistory") != null){
       a = JSON.parse(localStorage.getItem('srHistory'));
       }
    
       var push=false;
         var data = $('#searchForm').serializeFormJSON();
       if(a.length>0){
       for (var i = 0; i < a.length; i++) {
    	  if(JSON.stringify(data) === JSON.stringify(a[i])){
    	push=true;
    }
      }
       }
     
        
     if(!push){
       a.push(data);
     }
     if(a.length>3){
  	   a.splice(0, 1);
     }
       localStorage.setItem('srHistory', JSON.stringify(a));
}
function startSearch(id){
var a = [];
if(localStorage.getItem("srHistory") != null){
a = JSON.parse(localStorage.getItem('srHistory'));
var JSONText = JSON.stringify(a[id]);
var JSONObject = JSON.parse(JSONText);
	 var c = JSONObject["journeyType"];
	 var o = JSONObject["froCity"];
	 var t = JSONObject["toCity"];
	 var fd = JSONObject["froDate"];
	 var ad = JSONObject["adult"];
	 var ch = JSONObject["child"];
	 var il = JSONObject["infantlap"];
	 var ifn = JSONObject["infant"];
	 var ca = JSONObject["cabinClass"];
	 arrSplit = o.split("-"); 
	 var r = arrSplit[1].indexOf("("),
	 ot = arrSplit[1].indexOf(")"),
	 i_from = arrSplit[1].substring(r + 1, ot);
	 arrtSplit = t.split("-");
	 var r = arrtSplit[1].indexOf("("),
	 ot = arrtSplit[1].indexOf(")"),
	 i_to = arrtSplit[1].substring(r + 1, ot);
		 $("#froCity").val(o);
		 $("#toCity").val(t);
		 $("#departDate").val(fd);
		
		 if(c == "2"){
			 var td = JSONObject["toDate"];
			
			 roundTrip();
			 $("#returnDate").val(td);
			 $(".btn-on-1").removeClass('active');
			 $(".btn-off-1").addClass('active');
		 }else{
			 oneWay();
			 $(".btn-off-1").removeClass('active');
			 $(".btn-on-1").addClass('active');
		 }
		 $("#txtAdult").val(ad);
		 $("#txtChild").val(ch);
		 $("#txtInfentOnLap").val(il);
		 $("#txtInfentOnSeat").val(ifn);
		 $("#cabinClass").val(ca);
		 submitForm();
}
}
function showlastSearch(){
	 var a = [];
     if(localStorage.getItem("srHistory") != null){
     a = JSON.parse(localStorage.getItem('srHistory'));
     if(a.length>0){
    	 var obj = [];
    	 for (var i = 0; i < a.length; i++) {
    		 var JSONText = JSON.stringify(a[i]);

    		 var JSONObject = JSON.parse(JSONText);
    		 var c = JSONObject["journeyType"];
    		 var o = JSONObject["froCity"];
    		 var t = JSONObject["toCity"];
    		 var fd = JSONObject["froDate"];
    		 var ad = JSONObject["adult"];
    		 var ch = JSONObject["child"];
    		 var il = JSONObject["infantlap"];
    		 var ifn = JSONObject["infant"];
    		 var ca = JSONObject["cabinClass"];
    		 arrSplit = o.split("-"); 
    		 var r = arrSplit[1].indexOf("("),
    		 ot = arrSplit[1].indexOf(")"),
    		 i_from = arrSplit[1].substring(r + 1, ot);
    		 arrtSplit = t.split("-");
    		 var r = arrtSplit[1].indexOf("("),
    		 ot = arrtSplit[1].indexOf(")"),
    		 i_to = arrtSplit[1].substring(r + 1, ot);
    		 if((i+1) == a.length){
    			 $("#froCity").val(o);
    			 $("#toCity").val(t);
				 $("#departDate").val(fd);
    			 if($('#departDate_m_day').length!==0){
    			 var tds=fd.split("/");
    			 ts = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][Number(tds[0])], 
				 $("#departDate_m_day").html(tds[1] + " " + ts), 
				 $("#departDate_m_year").html(tds[2]);
    			 }
    			 if(c == "2"){
    				 var td = JSONObject["toDate"];
    				 $("#returnDate").val(td);
    				 if($('#returnDate_m_day').length!==0){
    				 var tdd=td.split("/");
    				 ts = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][Number(tdd[0])], 
    				 $("#returnDate_m_day").html(tdd[1] + " " + ts), 
    				 $("#returnDate_m_year").html(tdd[2]);
    				 }
    				 roundTrip();
    				 $(".btn-on-1").removeClass('active');
    				 $(".btn-off-1").addClass('active');
    			 }else{
            $('input[value=1]').attr('checked', true);
    				 oneWay();
    				 $(".btn-off-1").removeClass('active');
    				 $(".btn-on-1").addClass('active');
    			 }
    			 $("#txtAdult").val(ad);
    			 $("#txtChild").val(ch);
    			 $("#txtInfentOnLap").val(il);
    			 $("#txtInfentOnSeat").val(ifn);
    			 $("#cabinClass").val(ca);

    			 if($('#Origin_m_airport').length!==0){
    				 $("#Origin_m_airport").html(arrSplit[0]);
    				 $("#Origin_m_from").html(i_from);
    			 }

    			 if($('#Destination_m_airport').length!==0){
    				 $("#Destination_m_airport").html(arrtSplit[0]);

    				 $("#Destination_m_from").html(i_to);
    			 }
    			 
    			
    		 }
             var text="";
             if(c == "2"){
            	 text=text+"<span class='mysearch_plane'><img src='/resources/images/mysearch_plane.png' alt='Plane' class='img-responsive' /></span>"+"<label class='mysearch_from_'>"+arrSplit[0]+"</label>"+"<span class='mysearch_re_one'><img src='/resources/images/mysearch_rt.png' alt='Plane' class='img-responsive' /></span>"+"<label class='mysearch_to_'>"+arrtSplit[0]+"</label>";
                   
            	 var td = JSONObject["toDate"];
            	 text=text+"<span class='mysearch_frm_date'><img alt='calender' src='/resources/images/mysearch_cal.png'>"+fd+"</span>"+"<span class='mysearch_to_date'><img alt='calender' src='/resources/images/mysearch_cal.png'>"+td+"</span>";
				
			 }else{
				 text=text+"<span class='mysearch_plane'><img src='/resources/images/mysearch_plane.png' alt='Plane' class='img-responsive' /></span>"+"<label class='mysearch_from_'>"+arrSplit[0]+"</label>"+"<span class='mysearch_re_one'><img src='/resources/images/arrow-oneway.png' alt='Plane' class='img-responsive' /></span>"+"<label class='mysearch_to_'>"+arrtSplit[0]+"</label>";
	               
				 text=text+"<span class='mysearch_frm_date'><img alt='calender' src='/resources/images/mysearch_cal.png'>"+fd+"</span>";
					
			 }
             var objs = [];
             objs.push(a[i]);
             tmp = {
            	        'text': text,
            	        'id': (i),
            	        'parentid':'-1'
            	    };
             obj.push(tmp);
    	 }
    		 addSearch(obj);
    		 $("#s_count").html(a.length);
         }
     }else{
    	 var obj = [];
    	 var text="<span class='mysearch_notfound'><img src='/resources/images/mysearch_notfound.png' alt='Plane' class='img-responsive'></span><label class='mysearch_norecentsearch_'>No Recent Searches</label>"; 
    	 tmp = {
     	        'text': text,
     	        'id': 0,
     	        'parentid':'-1'
     	    };
      obj.push(tmp);
      addSearch(obj);
     }
}


function addSearch(data){
	  var builddata = function () {
		    var source = [];
		    var items = [];
		    for (i = 0; i < data.length; i++) {
		        var item = data[i];
		        var label = item["text"];
		        var parentid = item["parentid"];
		        var id = item["id"];
		        if (items[parentid]) {
		            var item = { parentid: parentid,id:id, label: label, item: item };
		            if (!items[parentid].items) {
		                items[parentid].items = [];
		            }
		            items[parentid].items[items[parentid].items.length] = item;
		            items[id] = item;
		        }
		        else {
		            items[id] = { parentid: parentid,id:id, label: label, item: item };
		            source[id] = items[id];
		        }
		    }
		    return source;
		}
		var source = builddata();
		var buildUL = function (parent, items) {
		    $.each(items, function () {
		        if (this.label) {
		            var li = $("<li style='cursor:pointer;' onclick='startSearch("+this.id+")'>" + this.label + "</li>");
		            li.appendTo(parent);
		            if (this.items && this.items.length > 0) {
		                var ul = $("<ul></ul>");
		                ul.appendTo(li);
		                buildUL(ul, this.items);
		            }
		        }
		    });
		}
		var ul = $("<ul></ul>");
		ul.appendTo("#jqxMenu");
		buildUL(ul, source);
}

function getWayTrip(t) {
    "One Way" == t ? ($("#txtReturn").hide(), $("#journeyType").val(1)) : ($("#txtReturn").show(), $("#journeyType").val(2))
}

function roundTrip() {
    $("#txtReturn").show(), $("#journeyType").val(2),fillReturndate();
    $("#date_deaprt").removeClass("width_full")
}

function oneWay() {
    $("#txtReturn").hide(), $("#journeyType").val(1),$("#returnDate").val("");
    $("#date_deaprt").addClass("width_full")
}

function customRange(t) {
    var e = new Date,
        n = new Date(e.getFullYear(), e.getMonth(), e.getDate());
    return "returnDate" == t.id && null != $("#departDate").datepicker("getDate") && (n = $("#departDate").datepicker("getDate")), {
        minDate: n
    }
}
function fillReturndate(){
	 var e = new Date,
     n = new Date(e.getFullYear(), e.getMonth(), e.getDate());
	 if(null != $("#departDate").datepicker("getDate")){
		 n = $("#departDate").datepicker("getDate");
	 }
	 $("#returnDate").datepicker("setDate", n);
	 if($('#returnDate_m_day').length!==0){
	 today = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n.getMonth())];
	 $("#returnDate_m_day").html(n.getDate() + " " + today);
	 $("#returnDate_m_year").html(n.getFullYear());
	 }
}
function customCheckOut(t) {
    var e = new Date,
    n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    r = new Date();
      (n = $("#checkIn").datepicker("getDate")),
      console.log(n.getFullYear());
      r= new Date(n.getFullYear(), n.getMonth(), n.getDate()+30);
    return "checkOut" == t.id && null != $("#checkIn").datepicker("getDate"), {
        minDate: n,
        maxDate: r
    }}

		function customCheckIn(t) { 
			
			var e = new Date,
        n = new Date(e.getFullYear(), e.getMonth(), e.getDate()+2);
    return "#checkIn" == t.id && null != $("#checkIn").datepicker("getDate") && (n = $("#checkIn").datepicker("getDate")), {
        minDate: n
			
	}
		}
function customRanges(t) {
    var e = new Date,
        n = new Date(e.getFullYear(), e.getMonth(), e.getDate());
    return "toDate1" == t.id && null != $("#froDate1").datepicker("getDate") && (n = $("#froDate1").datepicker("getDate")), {
        minDate: n
    }
}

function minusAd() {
    var t = document.getElementById("txtAdult").value;
    if (!(parseInt(t) <= 1)) {
        t = parseInt(t) - 1, this.totPax = parseInt(this.totPax) - 1, document.getElementById("txtAdult").value = t;
        var e = document.getElementById("txtInfentOnSeat").value,
            n = document.getElementById("txtInfentOnLap").value;
        if (parseInt(n) > parseInt(t) && (n = parseInt(n) - 1, this.totPax = parseInt(this.totPax) - 1, document.getElementById("txtInfentOnLap").value = n), 2 * parseInt(e) > parseInt(t) + parseInt(n)) {
            var a = 2 * parseInt(t) - parseInt(n) - parseInt(1);
            this.totPax = parseInt(this.totPax) - (e - a), document.getElementById("txtInfentOnSeat").value = a
        }
    }
}

function plusAd() {
    var t = document.getElementById("txtAdult").value;
    parseInt(t) + 1 != 10 && (parseInt(totPax) >= 9 || (t = parseInt(t) + 1, totPax = parseInt(totPax) + 1, document.getElementById("txtAdult").value = t))
}

function minueChild() {
    var t = document.getElementById("txtChild").value;
    parseInt(t) <= 0 || (t = parseInt(t) - 1, totPax = parseInt(totPax) - 1, document.getElementById("txtChild").value = t)
}

function plusChild() {
    var t = document.getElementById("txtChild").value;
    parseInt(totPax) >= 9 || (t = parseInt(t) + 1, totPax = parseInt(totPax) + 1, document.getElementById("txtChild").value = t)
}

function minusInfentOnSeat() {
    var t = document.getElementById("txtInfentOnSeat").value;
    parseInt(t) <= 0 || (t = parseInt(t) - 1, totPax = parseInt(totPax) - 1, document.getElementById("txtInfentOnSeat").value = t)
}

function plusInfentOnSeat() {
    var t = document.getElementById("txtInfentOnSeat").value,
        e = document.getElementById("txtInfentOnLap").value,
        n = document.getElementById("txtAdult").value;
    parseInt(totPax) >= 9 || parseInt(e) + parseInt(t) >= 2 * parseInt(n) || (t = parseInt(t) + 1, totPax = parseInt(totPax) + 1, document.getElementById("txtInfentOnSeat").value = t)
}

function minusInfentOnLap() {
    var t = document.getElementById("txtInfentOnLap").value;
    parseInt(t) <= 0 || (t = parseInt(t) - 1, totPax = parseInt(totPax) - 1, document.getElementById("txtInfentOnLap").value = t)
}

function plusInfentOnLap() {
    var t = document.getElementById("txtInfentOnLap").value,
        e = document.getElementById("txtAdult").value;
    parseInt(totPax) >= 9 || parseInt(t) >= parseInt(e) || (t = parseInt(t) + 1, totPax = parseInt(totPax) + 1, document.getElementById("txtInfentOnLap").value = t)
}

function submitForm() {
	if ( form_data == $('#searchForm').serialize()) {
		 if($('#againSearch').length!==0){
		$('#againSearch').show();
		 }
        return false;
      } else {
    	  if($('#againSearch').length!==0){
    	  $('#againSearch').hide();
    	  }
    var t = $("#searchForm").validate({
        showErrors: function() {
            if (this.settings.highlight)
                for (var t = 0; this.errorList[t]; ++t) this.settings.highlight.call(this, this.errorList[t].element, this.settings.errorClass, this.settings.validClass);
            if (this.settings.unhighlight) {
                t = 0;
                for (var e = this.validElements(); e[t]; ++t) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass)
            }
        },
        ignore: "",
        rules: {
            froCity: {
                required: !0,
                minlength: 3
            },
            toCity: {
                required: !0,
                minlength: 3
            },
            returnFroCity: {
                required: !0,
                minlength: 3
            },
            returnToCity: {
                required: !0,
                minlength: 3
            },
            froDate: {
                required: !0
            },
            toDate: {
                required: {
                    depends: function(t) {
                        return "2" == $("#journeyType").val()
                    }
                }
            },
            adult: {
                required: !0,
                range: [1, 9]
            },
            infantlap: {
                required: !0,
                range: [0, 8]
            },
            infant: {
                required: !0,
                range: [0, 8]
            }
        },
        errorElement: "span",
        messages: {
            froCity: {
                minlength: "Origin City must consist of at least 3 characters"
            },
            toCity: {
                minlength: "Destination City must consist of at least 3 characters"
            },
            froDate: {
                required: "Please enter a valid Depart Date."
            },
            toDate: {
                required: "Please enter a valid Return Date."
            },
            infantlap: {
                required: "Please enter a valid Return Date.",
                le: "Infant less than or equal to adult"
            }
        }
    });
    if (0 == parseInt($("#adult").val())) return messhow && (messhow = !1), !1;
    if (t.form() || (console.log("Failed"), "" == $.trim($("#froCity").val()) ? $("#code_location_border_left").addClass("error") : $("#code_location_border_left").removeClass("error"), "" == $.trim($("#toCity").val()) ? $("#code_location_border_right").addClass("error") : $("#code_location_border_right").removeClass("error")), t.form()) {
        if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) return $("#error").html("<p>  Please enter a different From and To city/ airport code!</p>"), !1;
        $("#code_location_border_left").removeClass("error"), $("#code_location_border_right").removeClass("error");
        var e = randomString(),
            n = $("#tabId").val();

        var froC=$.trim($("#froCity").val());
        var toC=$.trim($("#toCity").val());
        
        froC=froC.substr(froC.indexOf("(")+1, 3).toLocaleLowerCase();
        toC=toC.substr(toC.indexOf("(")+1, 3).toLocaleLowerCase();
        //alert(froC);
        $("form#searchForm").attr({
            action: "/search/" + n + "/req/"+froC+toC+"-" + e
        }), $("form#searchForm").submit()
    
    /*    $("form#searchForm").attr({
            action: "/search/" + n + "/req/" + e
        }), $("form#searchForm").submit()*/
    }
      }
}

(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

var form_data = $('#searchForm').serialize();
//console.log(form_data);



function randomString() {
    for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 15; n++) t += e.charAt(Math.floor(Math.random() * e.length));
    return t
}

function submitFormNE() {
    var t = $("#searchForm1").validate({
        rules: {
            froDate1: {
                required: !0
            },
            toDate1: {
                required: !0
            },
            adult1: {
                required: !0,
                range: [1, 9]
            },
            infantlap1: {
                required: !0,
                range: [0, 8]
            },
            infant1: {
                required: !0,
                range: [0, 8]
            }
        },
        errorElement: "span",
        messages: {
            froDate1: {
                required: "Please enter a valid Depart Date."
            },
            toDate1: {
                required: "Please enter a valid Return Date."
            },
            infantlap1: {
                required: "Please enter a valid Return Date.",
                le: "Infant less than or equal to adult"
            }
        }
    });
    if (0 == parseInt($("#adult").val())) return messhow && (messhow = !1), !1;
    if (t.form()) {
        if ($.trim($("#froCity").val()) == $.trim($("#toCity").val()) && ($.trim($("#toCity").val()).length > 0 || $.trim($("#froCity").val()).length > 0)) return $("#error").html("<p>  Please enter a different From and To city/ airport code!</p>"), !1;
        var e = randomString1(),
            n = $("#tabId").val();



  var froC=$.trim($("#froCitys").val());
        var toC=$.trim($("#toCitys").val());
        
        froC=froC.substr(froC.indexOf("(")+1, 3).toLocaleLowerCase();
        toC=toC.substr(toC.indexOf("(")+1, 3).toLocaleLowerCase();
        //alert(froC);
        $("form#searchForm1").attr({
            action: "/search/" + n + "/req/"+froC+toC+"-" + e
        }), $("form#searchForm1").submit()

/*
        $("form#searchForm1").attr({
            action: "/search/" + n + "/req/" + e
        }), $("form#searchForm1").submit()*/
    }
}

function randomString1() {
    for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 15; n++) t += e.charAt(Math.floor(Math.random() * e.length));
    return t
}
$("body").on('click', '#departDate, #departDate_m, #checkIn, #checkinDate_m',function(){
    //$('#ui-datepicker-div').addClass('dis-flex');
    //setTimeout(function(){ 
      if( $('#ui-datepicker-div td').hasClass('startDateCal') ){ //console.log('Mobile Yes');
        if ($("#status .btn-on-1 input:checked").val()){
            $('#ui-datepicker-div td.startDateCal:first').addClass('S_DateCal');
        }else{
            $('#ui-datepicker-div td.startDateCal:first').addClass('S_DateCal');
            $('#ui-datepicker-div td.startDateCal:last').addClass('E_DateCal');
        }
      }
    //}, 3000);
});
$("body").on('click', '#returnDate, #returnDate_m, #checkOut, #checkoutDate_m',function(){
  //$('#ui-datepicker-div').addClass('dis-flex');
  if( $('#ui-datepicker-div td').hasClass('endDateCal') ){
    $('#ui-datepicker-div td.endDateCal:first').addClass('S_DateCal');
    $('#ui-datepicker-div td.endDateCal:last').addClass('E_DateCal');
  }
});
dpmode='';
var startDate='0';
var endDate='0';
$(document).ready(function() {
	monkeyPatchAutocomplete();
    ticketList();
}), $(window).resize(function() {
    $(window).width() < 992 ? (numberOfMonthValue = 12, $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue), $("#returnDate").datepicker("option", "numberOfMonths", numberOfMonthValue)) : (numberOfMonthValue = 12, $("#departDate").datepicker("option", "numberOfMonths", numberOfMonthValue), $("#returnDate").datepicker("option", "numberOfMonths", numberOfMonthValue))
}).trigger("resize"), $.datepicker.setDefaults({
    minDate: 0,
    changeMonth: !1,
    changeYear: !1,
    dateFormat: "mm/dd/yy",
    defaultDate: 2,
    minDate: 0,
    maxDate: "+1y",
    numberOfMonths: numberOfMonthValue,
    showAnim: "fadeIn",
    showButtonPanel: !0
}), $(function() {
    $("#departDate").datepicker({
      beforeShow: function(input, calendar){
        $('#ui-datepicker-div').addClass('dis-flex depGetDate');
          menuLocked=true;
          dpmode='depart';
          var xPos = $("#departDate").offset();
          setTimeout(function () {
            $('.ui-datepicker').css({'top': xPos.top + 50});
          }, 0);
        },
        beforeShowDay: function(date) {
            var date1 = $.datepicker.parseDate("mm/dd/yy", $("#departDate").val());
            var date2 = $.datepicker.parseDate("mm/dd/yy", $("#returnDate").val());
            if ( $("#status .btn-on-1 input:checked").val() ){
                return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "" : ""];
            }else{
                return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight startDateCal" : ""];
            }
        },
        onSelect: function(t, e) {
            if ($("#status .btn-on-1 input:checked").val()){
                $('#ui-datepicker-div').css({ 'display': 'none' });
                $('#ui-datepicker-div').removeClass('dis-flex');
                console.log('Oneway Checked')
            }
            $('#ui-datepicker-div').removeClass('depGetDate');
            $('#ui-datepicker-div').addClass('retGetDate');
            var n = t.split("/");
            today = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n[0])], $("#departDate_m_day").html(n[1] + " " + today), $("#departDate_m_year").html(n[2]);
            var a = $("#departDate").datepicker("getDate", "+3d");
            a.setDate(a.getDate() + 1), $("#returnDate").datepicker("setDate", a), $("#returnDate_m_day").html(n[1] + " " + today), $("#returnDate_m_year").html(n[2])
        },
        onClose: function(selectedDate) {
          if ($("#status .btn-on-1 input:checked").val()){
            $('#ui-datepicker-div').css({ 'display': 'none' });
            $('#ui-datepicker-div').removeClass('dis-flex');
            console.log('Oneway Checked')
          }
          $('#ui-datepicker-div').removeClass('depGetDate');
          $('#ui-datepicker-div').addClass('retGetDate');
          $( "#returnDate" ).datepicker( "option", "minDate", selectedDate );
          //$('#returnDate').datepicker('show');
          startDate = selectedDate;
            2 == $("#journeyType").val() && $(window).width() > 991 && $("#returnDate").datepicker("show"), $("#fixed_background").fadeOut()
        }
    })
}), $(function() {
    $("#returnDate").datepicker({
        //beforeShow: customRange,
        beforeShow: function(t){
            if ($("#status .btn-on-1 input:checked").val()){
                $('#ui-datepicker-div').css({ 'display': 'none' });
                console.log('Oneway Checked')
            }
          $('#ui-datepicker-div').addClass('dis-flex');
          $('#ui-datepicker-div').removeClass('depGetDate');
          $('#ui-datepicker-div').addClass('retGetDate');
          dpmode='return';
          $("#ui-datepicker-div").addClass('addcssonhover');
          var xPos = $("#departDate").offset();
          setTimeout(function () {
            $('.ui-datepicker').css({ 'left': xPos.left, 'top': xPos.top + 50 });
          }, 0);
          var e = new Date,
              n = new Date(e.getFullYear(), e.getMonth(), e.getDate());
          return "returnDate" == t.id && null != $("#departDate").datepicker("getDate") && (n = $("#departDate").datepicker("getDate")), {
              minDate: n
          }
        },
        beforeShowDay: function(date) {
            var date1 = $.datepicker.parseDate("mm/dd/yy", $("#departDate").val());
            var date2 = $.datepicker.parseDate("mm/dd/yy", $("#returnDate").val());
            return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight endDateCal" : ""];
        },
        onSelect: function(t, e) {
            $('#ui-datepicker-div').removeClass('depGetDate retGetDate');
          $('#ui-datepicker-div').removeClass('dis-flex');
            $("#ui-datepicker-div").removeClass('addcssonhover');
            var n = t.split("/");
            today = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n[0])], $("#returnDate_m_day").html(n[1] + " " + today), $("#returnDate_m_year").html(n[2])
        },
        onClose: function(selectedDate) {
            $('#ui-datepicker-div').removeClass('depGetDate retGetDate');
          $('#ui-datepicker-div').removeClass('dis-flex');
          //$( "#departDate" ).datepicker( "option", "maxDate", selectedDate );
          //endDate = selectedDate;
            $("#ui-datepicker-div").removeClass('addcssonhover');
            $(window).width(), $("#fixed_background").fadeOut()
        }
    }),
    /*$("body").on('click', '#departDate',function(){
      //$('#ui-datepicker-div').addClass('dis-flex');
      if( $('#ui-datepicker-div td').hasClass('startDateCal') ){
        $('#ui-datepicker-div td.startDateCal:first').addClass('S_DateCal');
        $('#ui-datepicker-div td.startDateCal:last').addClass('E_DateCal');
      }
    }),
    $("body").on('click', '#checkIn',function(){
      //$('#ui-datepicker-div').addClass('dis-flex');
      if( $('#ui-datepicker-div td').hasClass('startDateCal') ){
        $('#ui-datepicker-div td.startDateCal:first').addClass('S_DateCal');
        $('#ui-datepicker-div td.startDateCal:last').addClass('E_DateCal');
      }
    }),
    $("body").on('click', '#returnDate',function(){
      //$('#ui-datepicker-div').addClass('dis-flex');
      if( $('#ui-datepicker-div td').hasClass('endDateCal') ){
        $('#ui-datepicker-div td.endDateCal:first').addClass('S_DateCal');
        $('#ui-datepicker-div td.endDateCal:last').addClass('E_DateCal');
      }
    }),
    $("body").on('click', '#checkOut',function(){
      //$('#ui-datepicker-div').addClass('dis-flex');
      if( $('#ui-datepicker-div td').hasClass('endDateCal') ){
        $('#ui-datepicker-div td.endDateCal:first').addClass('S_DateCal');
        $('#ui-datepicker-div td.endDateCal:last').addClass('E_DateCal');
      }
    }),*/
    $('#ui-datepicker-div').delegate('.ui-datepicker-calendar td', 'mouseover', function() {
          if ($(this).data('year')==undefined)return;
          if (dpmode=='depart' && endDate=='0')return;
          if (dpmode=='return' && startDate=='0')return;
          
          var currentDate = ($(this).data('month')+1)+'/'+$('a',this).html()+'/'+$(this).data('year');
          currentDate = $.datepicker.parseDate("mm/dd/yy",currentDate).getTime();
          if (dpmode=='depart') {
              var StartDate = currentDate;
              var EndDate = $.datepicker.parseDate("mm/dd/yy",endDate).getTime(); 
          }else{
              var StartDate = $.datepicker.parseDate("mm/dd/yy",startDate).getTime();
              var EndDate = currentDate; 
          };
          $('#ui-datepicker-div td').each(function(index, el) {
              if ($(this).data('year')==undefined)return;

              var currentDate = ($(this).data('month')+1)+'/'+$('a',this).html()+'/'+$(this).data('year');

              currentDate=$.datepicker.parseDate("mm/dd/yy",currentDate).getTime();
              if( StartDate == currentDate ){
                console.log("Yes");
                $(this).addClass('ui-datepicker-current-day');
                $(this).find('.ui-state-default').addClass('ui-state-active');
              }

              if (currentDate >= StartDate && currentDate <= EndDate) {
                  $(this).addClass('dp-highlight')
              }else{
                  $(this).removeClass('dp-highlight')
              };
          });
      }),
    /*$("#returnDate").datepicker('widget').on('mouseover', 'tr td', function () {
      if(!$( "#departDate" ).datepicker( "getDate" )){
        return
      }
      let calendarId = $(this).closest('.ui-datepicker').attr('id')
      $('#' + calendarId + ' .ui-datepicker-calendar tr td.highlight-day').each((index, item) => {
        $(item).removeClass('highlight-day')
      })
      let tds = $('#' + calendarId + ' .ui-datepicker-calendar tr td')
      for(let index = 0; index < tds.size(); ++index) {
        let item = tds[index]
        $(item).addClass('highlight-day')

        if($(item)[0].outerHTML === $(this)[0].outerHTML) {
          break
        }
      }
    }),*/
    $("#departDate_m").click(function() {
        $("#departDate").datepicker("show"), $("#fixed_background").fadeIn()
    }), $("#returnDate_m").click(function() {
        $("#returnDate").datepicker("show"), $("#fixed_background").fadeIn()
    })
}), $(function() {
    $("#checkIn").datepicker({
		  //beforeShow: customCheckIn,
      beforeShow: function(t){
          $('#ui-datepicker-div').addClass('dis-flex depGetDate');
          dpmode='return';
          $("#ui-datepicker-div").addClass('addcssonhover');
          var xPos = $("#checkIn").offset();
          setTimeout(function () {
            $('.ui-datepicker').css({ 'left': xPos.left, 'top': xPos.top + 50 });
          }, 0);
          var e = new Date,
          n = new Date(e.getFullYear(), e.getMonth(), e.getDate()+2);
            return "#checkIn" == t.id && null != $("#checkIn").datepicker("getDate") && (n = $("#checkIn").datepicker("getDate")), {
                minDate: n 
          }
        },
        beforeShowDay: function(date) {
            var date1 = $.datepicker.parseDate("mm/dd/yy", $("#checkIn").val());
            var date2 = $.datepicker.parseDate("mm/dd/yy", $("#checkOut").val());
            return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight startDateCal" : ""];
        },
        onSelect: function(t, e) {
          $('#ui-datepicker-div').addClass('dis-flex');
          $('#ui-datepicker-div').removeClass('dis-flex');
          $('#ui-datepicker-div').removeClass('depGetDate');
          $('#ui-datepicker-div').addClass('retGetDate');
            var n = t.split("/");
            today = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n[0])], $("#checkin_m_day").html(n[1] + " " + today), $("#checkin_m_year").html(n[2]);
            var a = $("#checkIn").datepicker("getDate", "+3d");
            a.setDate(a.getDate() + 2), $("#checkOut").datepicker("setDate", a),today = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(a.getMonth())+1],
            $("#checkout_m_day").html(a.getDate() + " " + today), $("#checkout_m_year").html(a.getFullYear());
                     	
        },
        onClose: function( selectedDate ) {
            $('#ui-datepicker-div').removeClass('depGetDate');
            $('#ui-datepicker-div').addClass('retGetDate');
          $( "#returnDate" ).datepicker( "option", "minDate", selectedDate );
          startDate = selectedDate;
             $(window).width() > 991 && $("#checkOut").datepicker("show"), $("#fixed_background").fadeOut();
             $("#nights").html(daydiff(parseDate($('#checkIn').val()), parseDate($('#checkOut').val())));
        }
    })
}), $(function() {
    $("#checkOut").datepicker({
        //beforeShow: customCheckOut,
      beforeShow: function(t){
          $('#ui-datepicker-div').addClass('dis-flex');
          $('#ui-datepicker-div').removeClass('depGetDate');
          $('#ui-datepicker-div').addClass('retGetDate');
          dpmode='return';
          $("#ui-datepicker-div").addClass('addcssonhover');
          var xPos = $("#checkIn").offset();
          setTimeout(function () {
            $('.ui-datepicker').css({ 'left': xPos.left, 'top': xPos.top + 50 });
          }, 0);
          var e = new Date,
          n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
          r = new Date();
            (n = $("#checkIn").datepicker("getDate")),
            console.log(n.getFullYear());
            r= new Date(n.getFullYear(), n.getMonth(), n.getDate()+30);
          return "checkOut" == t.id && null != $("#checkIn").datepicker("getDate"), {
              minDate: n,
              maxDate: r
          }
        },
        beforeShowDay: function(date) {
            var date1 = $.datepicker.parseDate("mm/dd/yy", $("#checkIn").val());
            var date2 = $.datepicker.parseDate("mm/dd/yy", $("#checkOut").val());
            return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight endDateCal" : ""];
        },
        onSelect: function(t, e) {
          $('#ui-datepicker-div').removeClass('dis-flex');
          $('#ui-datepicker-div').removeClass('depGetDate retGetDate');
            var n = t.split("/"); 
            today = ["XX", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][parseInt(n[0])], $("#checkout_m_day").html(n[1] + " " + today), $("#checkout_m_year").html(n[2])
        },
        onClose: function() {
          $('#ui-datepicker-div').removeClass('dis-flex');
          $('#ui-datepicker-div').removeClass('depGetDate retGetDate');
        	$("#nights").html(daydiff(parseDate($('#checkIn').val()), parseDate($('#checkOut').val())));
            $(window).width(), $("#fixed_background").fadeOut()
        }
    }), $("#checkinDate_m").click(function() {
        $("#checkIn").datepicker("show"), $("#fixed_background").fadeIn()
    }), $("#checkoutDate_m").click(function() {
        $("#checkOut").datepicker("show"), $("#fixed_background").fadeIn()
    })
})//, $(function(){
  $( "#pickupDate" ).datepicker({ 
    // dateFormat:"yy-mm-dd",
    // minDate: new Date(),
    beforeShow: function(){ console.log('Pick Date');
      $('#ui-datepicker-div').addClass('dis-flex');
        menuLocked=true;
        dpmode='depart';
        var xPos = $("#pickupDate").offset();
        setTimeout(function () {
          $('.ui-datepicker').css({'top': xPos.top + 50});
        }, 0);
    },
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate("mm/dd/yy", $("#pickupDate").val());
        var date2 = $.datepicker.parseDate("mm/dd/yy", $("#dropDate").val());
        return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight startDateCal" : ""];
    },
    onSelect: function(dateText, inst) {
      $("#dropDate").datepicker( "option", "minDate", $(this).val() );
    },
    onClose: function( selectedDate ) {
      $( "#dropDate" ).datepicker( "option", "minDate", selectedDate );
      startDate = selectedDate;
      $("#dropDate").datepicker("show");
    }
  });
//}), $(function(){
  $( "#dropDate" ).datepicker({ 
    // dateFormat:"yy-mm-dd",
    // minDate: new Date(),
    beforeShow: function(){ console.log('Drop Date');
      $('#ui-datepicker-div').addClass('dis-flex');
        menuLocked=true;
        dpmode='return';
        var xPos = $("#dropDate").offset();
        setTimeout(function () {
          $('.ui-datepicker').css({'top': xPos.top + 50});
      }, 0);
    },
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate("mm/dd/yy", $("#pickupDate").val());
        var date2 = $.datepicker.parseDate("mm/dd/yy", $("#dropDate").val());
        return [true, date1 && date2 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight endDateCal" : ""];
    },
    onSelect: function() {
      $('#ui-datepicker-div').removeClass('dis-flex');
    },
    onClose: function() {
      $('#ui-datepicker-div').removeClass('dis-flex');
    }            
  }),
  $("body").on('click', '#pickupDate',function(){
    if( $('#ui-datepicker-div td').hasClass('startDateCal') ){
      $('#ui-datepicker-div td.startDateCal:first').addClass('S_DateCal');
      $('#ui-datepicker-div td.startDateCal:last').addClass('E_DateCal');
    }
  }),
  $("body").on('click', '#dropDate',function(){
    if( $('#ui-datepicker-div td').hasClass('endDateCal') ){
      $('#ui-datepicker-div td.endDateCal:first').addClass('S_DateCal');
      $('#ui-datepicker-div td.endDateCal:last').addClass('E_DateCal');
    }
  })
//});
function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return (second-first)/(1000*60*60*24);
}
var totPaxNE = 1;

function minusAdNE() {
    var t = document.getElementById("txtAdultNE").value;
    if (!(parseInt(t) <= 1)) {
        t = parseInt(t) - 1, this.totPaxNE = parseInt(this.totPaxNE) - 1, document.getElementById("txtAdultNE").value = t;
        var e = document.getElementById("txtInfentOnSeatNE").value,
            n = document.getElementById("txtInfentOnLapNE").value;
        if (parseInt(n) > parseInt(t) && (n = parseInt(n) - 1, this.totPaxNE = parseInt(this.totPaxNE) - 1, document.getElementById("txtInfentOnLapNE").value = n), 2 * parseInt(e) > parseInt(t) + parseInt(n)) {
            var a = 2 * parseInt(t) - parseInt(n) - parseInt(1);
            this.totPaxNE = parseInt(this.totPaxNE) - (e - a), document.getElementById("txtInfentOnSeatNE").value = a
        }
    }
}

function plusAdNE() {
    var t = document.getElementById("txtAdultNE").value;
    parseInt(t) + 1 != 10 && (parseInt(totPaxNE) >= 9 || (t = parseInt(t) + 1, totPaxNE = parseInt(totPaxNE) + 1, document.getElementById("txtAdultNE").value = t))
}

function minueChildNE() {
    var t = document.getElementById("txtChildNE").value;
    parseInt(t) <= 0 || (t = parseInt(t) - 1, totPaxNE = parseInt(totPaxNE) - 1, document.getElementById("txtChildNE").value = t)
}

function plusChildNE() {
    var t = document.getElementById("txtChildNE").value;
    parseInt(totPaxNE) >= 9 || (t = parseInt(t) + 1, totPaxNE = parseInt(totPaxNE) + 1, document.getElementById("txtChildNE").value = t)
}

function minusInfentOnSeatNE() {
    var t = document.getElementById("txtInfentOnSeatNE").value;
    parseInt(t) <= 0 || (t = parseInt(t) - 1, totPaxNE = parseInt(totPaxNE) - 1, document.getElementById("txtInfentOnSeatNE").value = t)
}

function plusInfentOnSeatNE() {
    var t = document.getElementById("txtInfentOnSeatNE").value,
        e = document.getElementById("txtInfentOnLapNE").value,
        n = document.getElementById("txtAdultNE").value;
    parseInt(totPaxNE) >= 9 || parseInt(e) + parseInt(t) >= 2 * parseInt(n) || (t = parseInt(t) + 1, totPaxNE = parseInt(totPaxNE) + 1, document.getElementById("txtInfentOnSeatNE").value = t)
}

function minusInfentOnLapNE() {
    var t = document.getElementById("txtInfentOnLapNE").value;
    parseInt(t) <= 0 || (t = parseInt(t) - 1, totPaxNE = parseInt(totPaxNE) - 1, document.getElementById("txtInfentOnLapNE").value = t)
}

function plusInfentOnLapNE() {
    var t = document.getElementById("txtInfentOnLapNE").value,
        e = document.getElementById("txtAdultNE").value;
    parseInt(totPaxNE) >= 9 || parseInt(t) >= parseInt(e) || (t = parseInt(t) + 1, totPaxNE = parseInt(totPaxNE) + 1, document.getElementById("txtInfentOnLapNE").value = t)
}

function returnCity() {
    $("#toStateCity").toggle(1e3)
}
$(function() {
    $("#froDate1").datepicker({
        onSelect: function(t, e) {
            t.split("-");
            var n = $("#froDate1").datepicker("getDate", "+3d");
            n.setDate(n.getDate() + 1), $("#toDate1").datepicker("setDate", n)
        },
        onClose: function() {
            2 == $("#journeyType").val() && $("#toDate1").datepicker("show")
        }
    })
}), $(function() {
    $("#toDate1").datepicker({
        beforeShow: customRanges
    })
});

function showage(thiss,age){
	if(thiss.value>0){
		$("#chd"+age+"Age0").show();
		for (i = 0; i <= 5; i++) { 
			$("#chd"+age+"Age"+i).hide();
		}
		for (i = 0; i <= Number(thiss.value); i++) { 
			$("#chd"+age+"Age"+i).show();
		}
	}else{
		$("#chd"+age+"Age0").hide();
		for (i = 0; i <= 5; i++) { 
			$("#chd"+age+"Age"+i).hide();
		}
	}
	
}

function addRoom(a){
  
    /*var chd=$("#occupancies0_children").val();
    for (i = Number(0); i < Number(chd); i++) {
    	$("#chd0Age0").show();
    $("#chd0Age"+(i+1)).show();
    }*/
    //addRooms();
    for (i = Number(1); i < Number(a); i++) {
        var d = i;
        $("#room" + d).css("display", "inline")
       /* $("#chd"+(Number(d) - 1)+"Age0").after($("#room" + (Number(d) - 1)).clone().attr("id", "room" + d)), $("#room" + d).css("display", "inline").attr("class","room_number");
        
       // $("#chd"+(d-1)+"age"+(d-1)).after($("#room" + (Number(d) - 1)).clone().attr("id", "room" + d)), $("#room" + d).css("display", "inline").attr("class","room_number");
        $("#room" + d).find("#rooms"+(Number(d)-1)).attr("id", "rooms" + d);
        $("#room" + d).find("#label"+(Number(d)-1)).attr("id", "label" + d).attr("class","room_label").html("Room " + (Number(d) + 1));
        
        $("#room" + d).find("#rooms" + d).remove();
        $("#room" + d).find("#occupancies"+(Number(d)-1)+"_adults").attr("id", "occupancies"+(d)+"_adults").attr("name","occupancies["+(d)+"].adults");
        $("#room" + d).find("#occupancies"+(Number(d)-1)+"_children").attr("id", "occupancies"+(d)+"_children").attr("name","occupancies["+(d)+"].children").attr("onchange","showage(this,"+(d)+");");
       
        
        $("#room" + d).after($("#chd"+(Number(d)-1)+"Age0").clone().attr("id", "chd"+(d)+"Age0")),$("id", "chd"+(d)+"Age0").css("display", "none");*/
       
       // $("#room" + d).find("#chd"+(d-1)+"age"+(d-1)).attr("id", "#chd"+(d)+"age"+(d));
        //$("#room" + d).find("#chd"+(d-1)+"age"+(d-1)).attr("id", "#chd"+(d)+"age"+(d));
        
       /* $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age1").attr("id", "chd"+(d)+"Age1").hide();
        $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age2").attr("id", "chd"+(d)+"Age2").hide();
        $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age3").attr("id", "chd"+(d)+"Age3").hide();
        $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age4").attr("id", "chd"+(d)+"Age4").hide();
        $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age5").attr("id", "chd"+(d)+"Age5").hide();*/
        //chd0Age1,chd0Age2 ....
        //id="occupancies0_paxes0", id="occupancies0_paxes1"
        
      /*  $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes0").attr("id", "occupancies"+(d)+"_paxes0").attr("name", "occupancies["+(d)+"].paxes[0].age");
        $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes1").attr("id", "occupancies"+(d)+"_paxes1").attr("name", "occupancies["+(d)+"].paxes[1].age");
        $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes2").attr("id", "occupancies"+(d)+"_paxes2").attr("name", "occupancies["+(d)+"].paxes[2].age");
        $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes3").attr("id", "occupancies"+(d)+"_paxes3").attr("name", "occupancies["+(d)+"].paxes[3].age");
        $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes4").attr("id", "occupancies"+(d)+"_paxes4").attr("name", "occupancies["+(d)+"].paxes[4].age");*/
        //occupancies[0].adults" id="occupancies0_adults"occupancies[0].children
        /*var chd=$("#occupancies"+(Number(d)-1)+"_children").val();
        for (i = Number(0); i < Number(chd); i++) {
        $("#chd"+(d)+"Age"+(i+1)).show();
        }*/
        //class="room_label"
        //	$("#cust" + a)
      
    }

}
$("#mysearches_open_drp").click(function(){
	$("#jqxMenu").slideToggle();
});


$("#rooms0").change(function () {
	var a=$("#selroom").val();
    var b = this.value;
        c = Number(b) - Number(a);
    
    if (a < b ) {
        for (i = Number(a); i < Number(b); i++) {
            var d = i;
            $("#chd"+(Number(d) - 1)+"Age0").after($("#room" + (Number(d) - 1)).clone().attr("id", "room" + d)), $("#room" + d).css("display", "inline").attr("class","room_number");
            
           // $("#chd"+(d-1)+"age"+(d-1)).after($("#room" + (Number(d) - 1)).clone().attr("id", "room" + d)), $("#room" + d).css("display", "inline").attr("class","room_number");
            $("#room" + d).find("#rooms"+(Number(d)-1)).attr("id", "rooms" + d);
            $("#room" + d).find("#label"+(Number(d)-1)).attr("id", "label" + d).attr("class","room_label").html("Room " + (Number(d) + 1));
            
            $("#room" + d).find("#rooms" + d).remove();
            $("#room" + d).find("#occupancies"+(Number(d)-1)+"_adults").attr("id", "occupancies"+(d)+"_adults").attr("name","occupancies["+(d)+"].adults");
            $("#room" + d).find("#occupancies"+(Number(d)-1)+"_children").attr("id", "occupancies"+(d)+"_children").attr("name","occupancies["+(d)+"].children").attr("onchange","showage(this,"+(d)+");");
           
            
            $("#room" + d).after($("#chd"+(Number(d)-1)+"Age0").clone().attr("id", "chd"+(d)+"Age0")),$("id", "chd"+(d)+"Age0").css("display", "none");
           
           // $("#room" + d).find("#chd"+(d-1)+"age"+(d-1)).attr("id", "#chd"+(d)+"age"+(d));
            //$("#room" + d).find("#chd"+(d-1)+"age"+(d-1)).attr("id", "#chd"+(d)+"age"+(d));
            
            $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age1").attr("id", "chd"+(d)+"Age1").hide();
            $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age2").attr("id", "chd"+(d)+"Age2").hide();
            $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age3").attr("id", "chd"+(d)+"Age3").hide();
            $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age4").attr("id", "chd"+(d)+"Age4").hide();
            $("#chd"+(d)+"Age0").find("#chd"+(Number(d)-1)+"Age5").attr("id", "chd"+(d)+"Age5").hide();
            //chd0Age1,chd0Age2 ....
            //id="occupancies0_paxes0", id="occupancies0_paxes1"
            
            $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes0").attr("id", "occupancies"+(d)+"_paxes0").attr("name", "occupancies["+(d)+"].paxes[0].age");
            $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes1").attr("id", "occupancies"+(d)+"_paxes1").attr("name", "occupancies["+(d)+"].paxes[1].age");
            $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes2").attr("id", "occupancies"+(d)+"_paxes2").attr("name", "occupancies["+(d)+"].paxes[2].age");
            $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes3").attr("id", "occupancies"+(d)+"_paxes3").attr("name", "occupancies["+(d)+"].paxes[3].age");
            $("#chd"+(d)+"Age0").find("#occupancies"+(Number(d)-1)+"_paxes4").attr("id", "occupancies"+(d)+"_paxes4").attr("name", "occupancies["+(d)+"].paxes[4].age");
            //occupancies[0].adults" id="occupancies0_adults"occupancies[0].children
            
            //class="room_label"
            //	$("#cust" + a)
          
        }
    } else{

        for (i = a; i > b; i--) {
     	   var d=i;
     	   $("#room" + (Number(d)-1)).remove();
     	   $("#chd"+(Number(d)-1)+"Age0").remove();
        }
    }
    $("#selroom").val(b);
    
    
})




function submitHotelForm() {
	$("#hotelLocation").removeClass("error");
	console.log($("#hotelLocation").val());
    if ($("#hotelLocation").val().length >3) {
        var e = randomString(),
            n = $("#tabId").val();
        
        $("form#hotelSearchRequest").attr({
            action: "/hotelSearch/" + n + "/req/" + e
        }), $("form#hotelSearchRequest").submit();
    }else{
    	$("#hotelLocation").addClass("error");
    	return false;
    }
}

function open_mob_fieldpop(id1,id2){
	$("#"+id1).addClass(id2);
	$("#hotelLocation").focus();
}
function close_mob_fieldpop(id1,id2){
	$("#"+id1).removeClass(id2);
}


$(".saveall_G_U").click(function(){
    var room_1 = $("#rooms0").val();
    var adult_1 = $("#occupancies0_adults").val();
    var adult_2 = $("#occupancies1_adults").val();
    var adult_3 = $("#occupancies2_adults").val();
    var child_1 = $("#occupancies0_children").val();
    var child_2 = $("#occupancies1_children").val();
    var child_3 = $("#occupancies2_children").val();
    var child_age_1 = $("#occupancies0_paxes0").val();
    var child_age_2 = $("#occupancies0_paxes1").val();
    var child_age_3 = $("#occupancies0_paxes2").val();
    var child_age_4 = $("#occupancies0_paxes3").val();
    var child_age_5 = $("#occupancies0_paxes4").val();
    var child_age_6 = $("#occupancies1_paxes0").val();
    var child_age_7 = $("#occupancies1_paxes1").val();
    var child_age_8 = $("#occupancies1_paxes2").val();
    var child_age_9 = $("#occupancies1_paxes3").val();
    var child_age_10 = $("#occupancies1_paxes4").val();
    var child_age_11 = $("#occupancies2_paxes0").val();
    var child_age_12 = $("#occupancies2_paxes1").val();
    var child_age_13 = $("#occupancies2_paxes2").val();
    var child_age_14 = $("#occupancies2_paxes3").val();
    var child_age_15 = $("#occupancies2_paxes4").val();
    var total_adult = adult_1 + adult_2 + adult_3;
    console.log(total_adult);
    var total_child = child_1 + child_2 + child_3;
    // if( room_1 == 1){
    //     $("#trpC_ttlRoom").text('1 Room');
    // }else if( room_1 == 2){
    //     $("#trpC_ttlRoom").text('2 Rooms');
    // }else{
    //     $("#trpC_ttlRoom").text('3 Rooms');
    // }
    // if(total_adult==1){
    //     $("#trpC_ttlAdult").text('1 Adult');
    // }else{
    //     $("#trpC_ttlAdult").text(total_adult + " Adults");
    // }
    // if(total_child==0){
    //    $("#trpC_ttlchildrn").text('0 Child');
    // }else{
    //     $("#trpC_ttlchildrn").text(total_child + " Child");
    // }
    $("#open_guests_popup").removeClass('trpC_alltrvl_popup_hover');
    $("#open_guests_popup .fa-angle-down").toggleClass('rotate_180');
});
function opnmobilnav(id){
  $("#"+id).slideToggle();
}
function rmvmobilnav(id){
  $("#"+id).slideToggle();
}

function searchDealEngine(froCity,toCity,depDate,retDate){
        document.getElementById("froCity").value = froCity;
        document.getElementById("toCity").value = toCity;
        document.getElementById("departDate").value = depDate;
        document.getElementById("returnDate").value = retDate;
         $("#journeyType").val("2");

submitForm();
}