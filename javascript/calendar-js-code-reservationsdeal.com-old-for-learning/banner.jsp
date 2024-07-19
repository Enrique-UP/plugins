<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Calendar" %>
<%@ page import="java.text.ParseException" %> 
<%@ page import="java.text.SimpleDateFormat" %>
<%@taglib prefix="sessionConversation" uri="/WEB-INF/tld/sessionConversation.tld" %>
<%@ page import="javax.servlet.http.HttpUtils.*" %>

<link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@700&display=swap" rel="stylesheet">
<style>
#fbooking p { margin: 9px 0; font-size: 11px; }
#fbooking input { display: block; padding: 2px; }
.pdc-block {     position: relative; top: 156px; right: -88px; }
.pdc-left-panel{  width: 100%; }
#error p { color:red; }
.pdc-right-panel { background: rgba(0,0,0,0.5); padding: 20px 5px; float: left; width: 100%; }
.pdc-right-panel .content-box { width: 90%; float: left; }
.pdc-right-panel h6 { width: 100%; float: left; text-align: left; font-size: 22px; font-weight: bold; border-bottom: 1px solid #ffffff; color: #fff; height: 40px; margin: 0px; }
.pdc-right-panel p { color: #ffffff; font-size: 18px; float: left; padding-top: 13px; line-height: 26px; }
.pdc-right-panel .click-btn { float: right; width: 130px; box-shadow: 0px 2px 5px rgba(0,0,0,0.3); }
.click-btn .genrate-text { width: 100%; font-size: 12px; color: #ffffff; background: #524e4f; text-align: center; border-top-left-radius: 3px; border-bottom-left-radius: 3px; border: 0px; padding: 10px 0px; float: left;  text-transform: uppercase; }
.click-btn .arrow-click { background: #fc0; text-align: center; border-top-right-radius: 3px; border-bottom-right-radius: 3px; font-size: 15px; padding: 8px 10px; color: #ffffff; width: 100%; border: 0px; }
.banner .container { position: relative; height:100% }
.trpC_banr_tab > li.active a { background:rgb(255 102 0)!important; color:#fff !important; }
    .home_banner_content{    text-align: center; display:none; margin: 0 0 67px; color: #fff;}
.home_banner_content p {color:#fff; font-size: 22px;font-family:'El Messiri', sans-serif; margin:0;}
.home_banner_content .b_title{ font-size: 37px; font-weight: bold; font-family: 'El Messiri', sans-serif; text-shadow: 2px 0px #333333b0; margin: 7px 0 12px; text-transform:uppercase; }
    .home_banner_content h5{font-size: 18px;font-family: 'El Messiri', sans-serif;}
    #date_deaprt.width_full{width: 100%;}
.srch_outpnl{width: 100%;}
  .traveller_drop{position: relative;}
  .traveller_drop .trvl_input{height: 50px;}
  .traveller_drop .traveler_drop_box{ background:#fff; padding:10px; position:absolute; width:450px; text-align:center; display:none; z-index:9; box-shadow:0px 3px 12px rgb(0 0 0 / 29%); top: 100%;border-radius:6px; right:0; margin:3px 0 0; }
    .trvel_colse .close_done{    background: #f60; color: #fff; padding: 7px 15px; display: inline-block; border-radius: 4px;margin:5px 0 0; cursor: pointer;}
    .traveler_drop_box label{color: #333;   }
.traveller_drop .traveler_drop_box select{height: 35px !important;}
.room_gest { position:relative; width:30%; padding-left:15px; }
    .room_gest .room_gest_drop{ background: #fff; padding: 10px; position: absolute; width: 128%; text-align: center; display: none; box-shadow: 0px 3px 12px rgb(0 0 0 / 29%); z-index:100; top: 100%; right: 0; border-radius: 4px;}
    .room_gest .romm_gest_box{position: relative;    background:#f3f5f7; height: 50px;border-radius: 0; padding:17px 12px 17px 35px; font-size:16px; font-family:'Open Sans', sans-serif; letter-spacing:0.5px; cursor:pointer; width:100%; float:left; }
.room_gest .room_gest_drop ul { display:flex; justify-content:space-between; flex-wrap:wrap; }
    .room_gest .room_done_bnt span{    background: #f60; color: #fff; display: inline-block; border-radius: 4px; padding: 6px 17px; margin: 5px 0 0; cursor: pointer;}
    .room_gest .room_drop_ico{    position: absolute; top: 10px; right: 8px; font-size: 22px; color: #5f748a;}
    .room_gest .room_gest_drop ul li{display: inline-block;text-align: left;/*margin:0 3px;*/ width:32.5%; }
.room_gest .room_gest_drop ul.children li { width:19.5%; }
.room_gest .room_gest_drop ul li.heading_area { width:100%; }
    .room_gest .room_gest_drop ul li select{margin:0 0 8px; width:100%; height:40px !important; background:#f3f5f7; border:0; }
    .room_gest .room_gest_drop ul li label{color: #333 !important;display: block;}
#status label input[type='radio']:after { width: 15px; height: 15px; border-radius: 15px; top: -2px; left: -1px; position: relative; background-color: #d1d3d1; content: ''; display: inline-block; visibility: visible; border: 2px solid white; }
#status .active input[type='radio']:checked:after { width: 15px; height: 15px; border-radius: 15px; top: -2px; left: -1px; position: relative; background-color:#ff6600; content: ''; display: inline-block; visibility: visible; border: 2px solid #e8e8e8; outline: none }
input[type=file]:focus, input[type=checkbox]:focus, input[type=radio]:focus {  outline: 0 !important; outline-offset:0 !important; }
@media (max-width: 767px){
    .search-en .error { border:0 !important; border-bottom: 1px solid red!important; }
.traveller_drop .engine_drop_ico{padding:8px 6px;}
}



.mobile_top_search_area .EplaneIcon { position:absolute; top:10px; left:7px; height:25px; transform:rotate(45deg); filter:invert(100%) sepia(100%) saturate(0%)  brightness(10%) contrast(100%); }
.HfltSbmtBtn { text-align:center; margin:5px 0 10px; float:right; width:auto; padding:0 5px 0 0 }
.HfltSbmtBtn button { width:250px; font-size:30px; letter-spacing:2px; }
.Efl_origi { padding-left:0; }
.Efl_desti { padding-right:0; }
.goretSctn { position:absolute; top:0; right:-10px; width:20px; height:50px; background:#f3f5f7; }
.goretSctn img { filter:invert(100%) sepia(100%) saturate(0%)  brightness(10%) contrast(100%); height:9px; }
.goretSctn img:first-child { transform:rotate(90deg); position:absolute; top:calc(50% - 10px); left:5px; }
.goretSctn img:last-child { transform:rotate(-90deg); position:absolute; bottom:calc(50% - 10px); left:5px; }
#txtDepart { padding:0 8px }
#txtDepart .EplaneIcon { position:absolute; top:13px; left:12px; height:23px; }
#date_deaprt { padding:0 10px 0 0 }
#txtReturn { padding:0 0 0 10px }
.cal_centrSctn { position:absolute; top:0; right:-6px; background:#f3f5f7; width:12px; height:100%; }
.cal_centrSctn:before { content:''; background:black; width:1px; height:calc(100% - 8px); position:absolute; left:6px; top:4px; }
.trvD_hotel_dateP .first .cal_centrSctn { height:50px; bottom:0; top:unset; right:-10px; }
#txtDepart #date_deaprt .EplaneIcon { left:8px; }
#txtDepart #txtReturn .EplaneIcon { left:18px }
#date_deaprt:before, #txtReturn:before { content:"\f104"; font-family:FontAwesome; position:absolute; top:14px; right:35px; font-size:17px; }
#date_deaprt:after, #txtReturn:after { content:"\f105"; font-family:FontAwesome; position:absolute; top:14px; right:20px; font-size:17px; }
.traveller_drop .travel_input { position:absolute; top:0; white-space:nowrap; left:0; text-overflow:ellipsis; overflow:hidden; width:100%; margin:0; height:50px; display:flex; align-items:center; background:#f3f5f7; padding:0 0 0 33px; font-family:'Open Sans', sans-serif; color:black; letter-spacing:0.5px; }
.traveller_drop .EplaneIcon { position:absolute; top:13px; left:8px; height:23px; }
.traveller_drop .engine_drop_ico { position:absolute; top:0; right:0; font-size:22px; color:#000; background:#f3f5f7; padding:9px 6px; }
.search-engine .tab-content { position: absolute; bottom:100px; padding:0 20px 10px; left: 0; background: white; border-radius: 8px; box-shadow:0 10px 20px #868686; }
.tabMore:after { content:"\f107"; font-family:FontAwesome; position:absolute; top:0; right:0; font-size:17px; height:40px; padding:8px 0 0; width:20px; }
.tabMore > span:first-child { display:none !important }
.tabMore { padding-right:30px !important }
.tabMore > span:last-child { padding:2px 0 3px 0 }
#trpC_hotels_tab input.error, #trpC_hotels_tab select.error, #trpC_cars_tab input.error, #trpC_cars_tab select.error { position:static; float:none; }
.needDropLoca { position:absolute; bottom:0; left:0; width:0; height:50px; background:#f3f5f7; padding:0 5px 0; z-index:-11111; transition:all 0.5s; -webkit-transition:all 0.5s; }
.needDropLoca input { margin:0; float:left; }
.needDropLoca span { line-height:normal; float:left; height:50px; display:flex; align-items:center; padding:0 0 0 10px; font-size:12px; }
.OpenneedDropLoca { display:flex; align-items:center; justify-content:center; z-index:1; width:calc(100% - 7px); transition:all 0.5s; -webkit-transition:all 0.5s; }
@media(max-width:767px){
    #txtDepart { padding:0 }
    .search-engine .tab-content { position:relative; bottom:0; left:15px; margin:15px 0 0; width:calc(100% - 30px); float:left }
    #date_deaprt { padding:0 15px 0 0 }
    #txtReturn { padding:0 0 0 15px; }
    .cal_centrSctn { right:-10px;  width:20px }
    .cal_centrSctn:before { left:9px; }
    .Efl_origi, .Efl_desti { margin-bottom:20px; }
    .Ban_trvlSctn { padding:0 !important; margin-top:20px; }
    #txtDepart .EplaneIcon, .cal_centrSctn, .goretSctn { /*display:none*/ }
    #date_deaprt:before, #txtReturn:before, #date_deaprt:after, #txtReturn:after { display:none }
    .mobile_top_search_area .EplaneIcon { top:20px; left:17px; }
    #mobile_top_search_origin .mobile_top_search_area .EplaneIcon, #mobile_top_search_destination .mobile_top_search_area .EplaneIcon { top:10px; left:7px; }
    #mobile_top_search_origin.showOnTopFixed .mobile_top_search_area .EplaneIcon, #mobile_top_search_destination.showOnTopFixed .mobile_top_search_area .EplaneIcon { top:20px; left:17px; display:none; }
    .room_gest .romm_gest_box { /*background:white; padding-left:0 !important; border-bottom:1px solid #ccc; font-size:20px;*/ }
    .traveller_drop .travel_input { background:#f3f5f7; /*padding-left:0 !important; border-bottom:1px solid #ccc;*/ }
    .traveller_drop .engine_drop_ico { /*background:#fff*/ }
    #hotelLocation { /*padding-left:0 !important*/ }
}
@media(max-width:480px){
  .Efl_origi { /*width:100%; padding:0*/ }
  .Efl_desti { /*width:100%; padding:0*/ }
  .goretSctn { /*top:35px; right:0*/ }
  #date_deaprt, #txtReturn { /*width:100%; padding:0*/ }
  #date_deaprt { margin-bottom:20px }
  .cal_centrSctn { /*display:none*/ }
  #txtDepart #txtReturn .EplaneIcon { /*left:8px;*/ }
  .HfltSbmtBtn button { width:100%; margin-bottom:0 }
  .HfltSbmtBtn { margin:10px 0 10px; padding:0 }
  .trvD_hotel_dateP .first .cal_centrSctn { /*display:none*/ }
  .Ban_trvlSctn { margin-top:0; }
}
</style>

<div>
	<input type="hidden" id="tabId" value='<c:out value="${sessionFlightsRequest.id+1}"/>'/>
	<div>
		  <c:if test="${empty param.imgPath}">
   	<div class="banner">
</c:if>
<!--   <c:if test="${not empty param.imgPath}">

		<div class="banner" style="background:url(/resources/images/city/${param.imgPath}.png) top center no-repeat !important; background-size: cover !important;">
	</c:if>	 -->		
    <c:if test="${not empty param.toCity}">
  
        <div class="banner" style="background:url(/resources/images/city-new/${fn:toLowerCase(param.imgPath)}.jpg ), url(/resources/images/city/city_bg<%= (int) (Math.random() * 4) %>.jpg) top center no-repeat !important; background-size: cover !important;">
    </c:if>

 <c:if test="${not empty param.imgPath}">
  
  <c:import url="/resources/images/${fn:toLowerCase(param.imgPath)}.jpg" var="imageData" />
<c:if test = "${imageData!=null && not empty imageData}">
<div class="banner" style="background:url(/resources/images/${fn:toLowerCase(param.imgPath)}.jpg?5678 ) top center no-repeat !important; background-size: cover !important;">
</c:if>
<c:if test = "${empty imageData}">
<div class="banner" style="background:url(/resources/images/city/city_bg<%= (int) (Math.random() * 4) %>.jpg) top center no-repeat !important; background-size: cover !important;">
</c:if>
        
    </c:if>

    

    <div class="container">

<c:if test="${not empty param.toCity}">
                    <div class="banner_text">
                        
                    
              
                         <div class="banner_text_head">Cheap Flights  <c:if test="${not empty param.fromCity}"><br/>from ${param.fromCity}
                          </c:if> <br/>to ${param.toCity}<span>  </span></div> 
                     
                    </div></c:if>

    

				<!-- <div class="main_engine_out mob-padd"> -->
 
				<div class="search-engine">
		
<ul class="nav nav-tabs trpC_banr_tab" role="tablist">
    <li role="presentation" class="active">
        <a href="#trpC_flights_tab" aria-controls="trpC_flights_tab" role="tab" data-toggle="tab" class="active">
            <span><!-- <i class="fa fa-plane" aria-hidden="true"></i> -->
                <img src="/resources/images/icons/1.svg" class="tabIconOrang">
                <img src="/resources/images/icons/planeW.svg" class="tabIconWhite">
            </span> 
            <span>Flights</span>
        </a>
    </li>
    <li role="presentation">
        <a href="#trpC_hotels_tab" role="tab" data-toggle="tab" aria-controls="trpC_hotels_tab">
            <span><!-- <i class="fa fa-bed" aria-hidden="true"></i> -->
                <img src="/resources/images/icons/bedO.svg" class="tabIconOrang">
                <img src="/resources/images/icons/bed.svg" class="tabIconWhite">
            </span> 
            <span>Hotels</span>
        </a>
    </li>
    <li role="presentation">
        <a href="#trpC_cars_tab" role="tab" data-toggle="tab" aria-controls="trpC_cars_tab">
            <span>
                <img src="/resources/images/icons/carO.svg" class="tabIconOrang">
                <img src="/resources/images/icons/car.svg" class="tabIconWhite">
            </span> 
            <span>Car Rental</span>
        </a>
    </li>
    <!-- <li role="presentation">
        <a href="#trpC_vacation_tab" role="tab" data-toggle="tab" aria-controls="trpC_vacation_tab">
            <span>
                <img src="/resources/images/icons/vacationO.svg" class="tabIconOrang">
                <img src="/resources/images/icons/vacation.svg" class="tabIconWhite">
            </span> 
            <span>Vacation</span>
        </a>
    </li> -->
	
	 <li role="presentation" onclick="openTransfer();">
        <a href="#trpC_transfer_tab" aria-controls="trpC_transfer_tab" role="tab" data-toggle="tab">
            <span><!-- <i class="fa fa-car" aria-hidden="true"></i> -->
                <img src="/resources/images/icons/car.svg">
            </span>
            <span>Transfer</span>
        </a>
    </li>
    <!-- <li>
        <a href="javascript:;" class="tabMore">
            <span></span> 
            <span>More</span>
        </a>
    </li> -->
    
</ul>				                           
<div class="tab-content">

<div role="tabpanel" class="tab-pane" id="trpC_cars_tab">
  <form:form method="POST" action="/car/search" modelAttribute="carSearchRequest" id="carSearchRequest">
    <div class="car_heading">Find a Car<img src="/resources/images/icons/carO.svg" alt="Car Image">
    </div>
    <div class="pickupDropoffSctn">
        <div class="trvD_hotel_searchI" id="trvD_car_searchI">
            <label>Pick-up</label>
            <i class="fa fa-times" onclick="close_mob_fieldpop('trvD_car_searchI','trvD_car_searchI_cl')"></i>
            <img src="/resources/images/icons/pin.png" alt="Map pin icon">
            <form:input  path="pickupLocation"  placeholder="Type a location" class="form-control ui-autocomplete-input" autocomplete="off" />
        </div>
        <div class="trvD_hotel_searchI" id="trvD_carDrop_searchI">
            <label>Drop-off</label>
            <i class="fa fa-times" onclick="close_mob_fieldpop('trvD_carDrop_searchI','trvD_carDrop_searchI_cl')"></i>
            <img src="/resources/images/icons/pin.png" alt="Map pin icon">
            <form:input path="dropLocation" placeholder="Type a location" class="form-control ui-autocomplete-input" autocomplete="off" />
            <div class="needDropLoca OpenneedDropLoca">
                <input type="checkbox">
                <span>Need a different <br>Drop off Location?</span>
            </div>
        </div>
    </div>
    <div class="pickDropSct">
        <div class="pickDateTimeSct">
          <div class="pickDateSct">
            <label>Pick-up Date</label>
            <img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
            <form:input path="pickupDate" class="form-control" readonly="readonly" placeholder="Pick Date" />
          </div>
          <div class="pickTimeSct">
            <label>Pick-up Time</label>
            <img src="/resources/images/icons/time.png" class="EplaneIcon" alt="Time icon">
          
            <form:select  path="pickupTime">
                <form:option value="">Select Pick Time</form:option>
                <c:forEach var="time" items="${timeList}">
        <form:option value="${time.key}">${time.value}</form:option>
        </c:forEach>
            </form:select>
          </div>
        </div>
        <div class="dropDateTimeSct">
          <div class="dropDateSct">
            <label>Drop-off Date</label>
            <img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
            <form:input path="dropDate" class="form-control" readonly="readonly"  placeholder="Drop Date" />
          </div>
          <div class="dropTimeSct">
            <label>Drop-off Time</label>
            <img src="/resources/images/icons/time.png" class="EplaneIcon" alt="Time icon">

            <form:select path="dropTime">
                <form:option value="">Select Pick Time</form:option>
                <c:forEach var="time" items="${timeList}">
        <form:option value="${time.key}">${time.value}</form:option>
        </c:forEach>
                
            </form:select>
          </div>
        </div>
    </div>
    <div class="drvage_passngr_sctn">
        <div class="drivrAgeSct">
            <label>Driver Age</label>
            <img src="/resources/images/icon/driver_age.png" class="EplaneIcon" alt="Time icon">
            <form:select path="driverAge">
                <form:option value="">Select Driver Age</form:option>
        <c:forEach var="driver" begin="20" end="90">
                <form:option value="${driver}">${driver} years</form:option> 
               </c:forEach>
            </form:select>
          </div>
           
    </div>
	<form:hidden path="mode" value="one_way" />
	<form:hidden path="currencyCode" value="USD" />
    <div class="col-xs-12 HfltSbmtBtn">
      <button type="submit"  value="Search" class="search">
        <span class="vissible-xs vissible-sm">Search</span>
      </button>
    </div>
  </form:form>
</div> 

<div role="tabpanel" class="tab-pane" id="trpC_transfer_tab">
  <form:form method="POST" action="/transfer/search" modelAttribute="transferSearchRequest" id="transferSearchRequest">
  <form:hidden value="" path="transferPickup" />
  <form:hidden value="" path="transferDrop" />
    <div class="car_heading">Airport Transfer<img src="/resources/images/icons/carO.svg" alt="Car Image">
    </div>
    <div class="pickupDropoffSctn">
        <div class="trvD_hotel_searchI" id="trvD_car_searchI">
            <label>Pick-up</label>
            <i class="fa fa-times" onclick="close_mob_fieldpop('trvD_car_searchI','trvD_car_searchI_cl')"></i>
            <img src="/resources/images/icons/pin.png" alt="Map pin icon">
            <form:input  path="pickupLocation" id="transferpickLocation" placeholder="Type a location" class="form-control ui-autocomplete-input" autocomplete="off" />
        </div>
        <div class="trvD_hotel_searchI" id="trvD_carDrop_searchI">
            <label>Drop-off</label>
            <i class="fa fa-times" onclick="close_mob_fieldpop('trvD_carDrop_searchI','trvD_carDrop_searchI_cl')"></i>
            <img src="/resources/images/icons/pin.png" alt="Map pin icon">
            <form:input path="dropLocation" id="transferdropLocation" placeholder="Type a location" class="form-control ui-autocomplete-input" autocomplete="off" />
        </div>
    </div>
    <div class="pickDropSct">
        <div class="pickDateTimeSct">
          <div class="pickDateSct">
            <label>Pick-up Date</label>
            <img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
            <form:input path="pickupDate" id="transferpickupDate" class="form-control" readonly="readonly" placeholder="Pick Date" />
          </div>
          <div class="pickTimeSct">
            <label>Pick-up Time</label>
            <img src="/resources/images/icons/time.png" class="EplaneIcon" alt="Time icon">
          
            <form:select  path="pickupTime">
                <form:option value="">Select Pick Time</form:option>
                <c:forEach var="time" items="${timeList}">
				<form:option value="${time.key}">${time.value}</form:option>
				</c:forEach>
            </form:select>
          </div>
        </div>
        
    </div>
    <div class="drvage_passngr_sctn">
        
           <div class="numbPassSct">
            <label>Number of Passengers</label>
            <img src="/resources/images/icons/time.png" class="EplaneIcon" alt="Time icon">
            <form:select path="noofTraveller">
                <form:option value="1">1 passenger</form:option> <form:option value="2">2 passenger</form:option>
                <form:option value="3">3 passenger</form:option> <form:option value="4">4 passenger</form:option>
                <form:option value="5">5 passenger</form:option> <form:option value="6">6 passenger</form:option>
                <form:option value="7">7 passenger</form:option> <form:option value="8">8 passenger</form:option>
                <form:option value="9">9 passenger</form:option> <form:option value="10">10 passenger</form:option>
            </form:select>
          </div> 
    </div>
  <form:hidden path="mode" value="one_way" />
  <form:hidden path="currencyCode" value="USD" />
    <div class="col-xs-12 HfltSbmtBtn">
      <button type="submit"  value="Search" class="search">
        <span class="vissible-xs vissible-sm">Search</span>
      </button>
    </div>
  </form:form>
</div> 

<div role="tabpanel" class="tab-pane active" id="trpC_flights_tab">                       
						<form:form method="POST" action="/flightSearch" modelAttribute="searchForm" id="searchForm">
<div class=''>
  <div class=''>
    <div class='srch_outpnl' style="margin-bottom:0;">
    <div class="search-en">

      <div  style=" width: 100%;">
      <div class="btn-group" id="status" data-toggle="buttons">
              
              <label class="btn btn-default btn-off-1 btn-sm active">
              <input type="radio" value="0" name="multifeatured_module[module_id][status]" checked="checked" onchange="return roundTrip()">Round Trip</label>
              <label class="btn btn-default btn-on-1 btn-sm">
              <input type="radio" value="1" name="multifeatured_module[module_id][status]"  onchange="return oneWay()">One Way</label>
            </div>
                    <form:input type="hidden" path="journeyType" id="journeyType" value="2" name="journeyType" />
    <div class="mobile_eng">
        <div class="col-md-5 col-xs-12 padding_zero">
     <span id="error" style="color:red;"></span>
        <div class="col-xs-6 Efl_origi">
            <div class="depart_left">
                <div class="mobile_top_search" id="mobile_top_search_origin">
                    <div class="mobile_top_search_area">
                        <img src="/resources/images/icons/1.svg" class="EplaneIcon" alt="Plane icon">
                        <form:input path="froCity" id="froCity" name="froCity" class="form-control" placeholder="Origin" autocomplete="off" />
                    </div><!--mobile_top_search_area-->
                        <p class="mobile_top_search_text">Type Origin City or Airport Code</p>
                        <i class="fa fa-times close_icon" aria-hidden="true" id="mobile_top_search_origin_close"></i>
                </div><!--mobile_top_search-->
                <ul class="code_location" id="code_location_border_left">
                    <li class="code" id="Origin_m_from">From</li>
                    <li class="location" id="Origin_m_airport">Airport</li>
                </ul>
            </div>
            <div class="goretSctn">
                <img src="/resources/images/icons/1.svg" alt="Icon">
                <img src="/resources/images/icons/1.svg" alt="Icon">
            </div>
    </div>
    <style type="text/css">
        .chng_to_from span{    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 25px;}
    </style>
    <div class="chng_to_from hidden-md hidden-lg">
                <span>
                   <img src="/resources/images/exh.png">
                </span>
            </div>
       <div class="col-xs-6 Efl_desti">
            <div class="depart_right">
                <div class="mobile_top_search" id="mobile_top_search_destination">
                    <div class="mobile_top_search_area">
                        <img src="/resources/images/icons/1.svg" class="EplaneIcon" alt="Plane icon">
                        <form:input path="toCity"  id="toCity" name="toCity" class="to form-control" placeholder="Destination" autocomplete="off" />
                    </div><!--mobile_top_search_area-->
                        <p class="mobile_top_search_text">Type Destination City or Airport Code</p>
                        <i class="fa fa-times close_icon" aria-hidden="true" id="mobile_top_search_destination_close"></i>
                </div><!--mobile_top_search-->
                <ul class="code_location" id="code_location_border_right">
                    <li class="code" id="Destination_m_from">To</li>
                    <li class="location" id="Destination_m_airport">Airport</li>
                </ul>
             </div>

      </div>
  </div>
       
        
    

    
    <!-- <div class="row mr15x3"> -->
    
    <div id="txtDepart" class="col-md-4 col-xs-12">
    
            <div id="date_deaprt" class="depart col-xs-6">
                <img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
                <form:input class="calander form-control" id="departDate" path="froDate" readonly="true"></form:input>
                <ul class="code_location" id="departDate_m">
                    <li class="code" id="departDate_m_day">Depart</li>
                    <li class="location" id="departDate_m_year">Date</li>
                </ul>
                <div class="cal_centrSctn"></div>
            </div>
        
        <div id="txtReturn" class="col-xs-6">
            <div class="return">
                <img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
                <form:input class="calander form-control" id="returnDate" path="toDate" readonly="true"></form:input>
                <ul class="code_location" id="returnDate_m">
                    <li class="code" id="returnDate_m_day">Return</li>
                    <li class="location" id="returnDate_m_year">Date</li>
                </ul>
            </div>
        </div>
    </div>

<div class="col-md-3 col-xs-12 Ban_trvlSctn pd5x">
  <div class="traveller_drop">
    <div class="trvl_btn">
     <input type="text" id="person" class="form-control trvl_input" name="" readonly="true">
      <p class="travel_input">
        <!-- <span class="fa fa-user"></span> -->
        <img src="/resources/images/icons/user.svg" class="EplaneIcon" alt="Calendar icon">
            <span id="tCount">1</span>
            <span id="tPax">Adult</span>,&nbsp;
            <span id="coach_sctn">Economy</span>
                
            
      </p>
      <span class="engine_drop_ico"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
  </div>
      <div class="traveler_drop_box">
        <div class="col-md-12 traveler_drop_box_inner" style=" padding:0; ">
            <div class="adult col-md-3 col-xs-6 pd5x padding_border">
            <label>Adult(18+)</label>
             <div id="input_div"> 
            <input type="button" id="moins" class="minus min-pl" onclick="minusAd()">
            <form:input path="adult" class="form-control pax_align" id="txtAdult" readonly="true" name="adult" size="25" value="1"/>
            <input type="button"  id="plus" class="plus" onclick="plusAd()">
            </div>

            </div>
            <div class="child col-md-3 col-xs-6 pd5x padding_border">
            <label>Child(1-17)</label>
            <div id="input_div">
            <input type="button" id="moins" class="minus" onclick="minueChild()">
            <form:input path="child" class="form-control pax_align" id="txtChild" readonly="true" name="child" size="25" value="0" />
            <input type="button"  id="plus" class="plus" onclick="plusChild()">

            </div>          </div>
            <div class="child col-md-3 col-xs-6 pd5x padding_border">
            <label>Infant(On Seat)</label>
            <div id="input_div">
            <input type="button" id="moins" class="minus" onclick="minusInfentOnSeat()">
            <form:input path="infant" class="form-control pax_align" id="txtInfentOnSeat" readonly="true" size="25" name="infant" value="0"/>
            <input type="button"  id="plus" class="plus" onclick="plusInfentOnSeat()">

            </div>
            </div>
            <div class="child col-md-3 col-xs-6 pd5x padding_border">
            <label>Infant(On Lap)</label>
            <div id="input_div">
            <input type="button" id="moins" class="minus" onclick="minusInfentOnLap()">
            <form:input path="infantlap" size="25" id="txtInfentOnLap" class="form-control pax_align"  readonly="true" name="infantlap" value="0"/>
            <input type="button"  id="plus" class="plus" onclick="plusInfentOnLap()">
            </div>
            </div>
            <div class="col-md-6 col-xs-6 pd_mb pd5x">
            <form:select path="cabinClass" class="form-control">
            <c:forEach items="${cabinClass}" var="curCategory" varStatus="loop">
            <form:option value="${curCategory}">${curCategory}</form:option>
            </c:forEach>

            </form:select>
            </div>
            <div class="col-md-6 col-xs-6 pd_mb pd5x">
            <form:select id="airlines" class="form-control" path="airlines" name="airlines">
            <form:option value="All">Airlines</form:option>
            <form:options items="${airlineList}" />
            </form:select>  

            </div>
        </div>

        <div class="trvel_colse">
            <span class="close_done" onclick="addPax();">Done</span>
        </div>
      </div>

  </div>
</div>




<div class="col-xs-12 HfltSbmtBtn">
          <button type="button" onClick="submitForm()" value="Search Flights" class="search">

                                <span class="vissible-xs vissible-sm">Search</span>
                                
                            </button>
        </div>
          
    </div>
   

   
    </div>

  </div>
</div>
  </div>
</div>

</form:form>
                                </div>
                               
<div role="tabpanel" class="tab-pane" id="trpC_hotels_tab">                                    
                                 <form:form method="POST" action="/hotelSearch" modelAttribute="hotelSearchRequest" id="hotelSearchRequest" class="hotel_search_engine">
                                  
                                    <ul class="hotel_search_engine_list">
                                        <li class="hotel_heading">Find a Hotel<img src="/resources/images/icons/bedO.svg" alt="Hotel Image"></li>
                                        <li class="input_area first_in">
                                        	<div class="trvD_hotel_searchI" id="trvD_hotel_searchI">
                                            	<label>Destination</label>
                                            	<i class="fa fa-times" onclick="close_mob_fieldpop('trvD_hotel_searchI','trvD_hotel_searchI_cl')"></i>
<img src="/resources/images/icons/pin.png" alt="Map pin icon">                                                
                                            	<form:input path="stay.location" id="hotelLocation" placeholder="Select Destination" class="map form-control" />
                                            </div>
                                            <ul class="code_location" onclick="open_mob_fieldpop('trvD_hotel_searchI','trvD_hotel_searchI_cl')" id="trvD_location_destination">
						                        <li class="code" id="trvD_htl_desti">Hotel</li>
						                        <li class="location" id="trvD_htl_desti_H">Destination</li>
						                    </ul>
                                        </li>
                                        <li class="input_area">
                                            <ul class="calendar trvD_hotel_dateP">
                                                <li class="first">
                                                    <label class="hidden-xs hidden-sm">Check In</label>
<img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
                                                     <form:input class="calander form-control" id="checkIn" path="stay.checkIn" readonly="true"></form:input>
                                                <ul class="code_location" id="checkinDate_m">
                        <li class="code" id="checkin_m_day">Check In</li>
                        <li class="location" id="checkin_m_year">Date</li>
                    </ul>
<div class="cal_centrSctn"></div>                    
                                                </li>
                                                <li class="middle">
                                                    <label class="hidden-xs hidden-sm">Check Out</label>
<img src="/resources/images/icons/calendar.svg" class="EplaneIcon" alt="Calendar icon">
                                                     <form:input class="calander form-control" id="checkOut" path="stay.checkOut" readonly="true"></form:input>
                                                   <ul class="code_location" id="checkoutDate_m">
                        <li class="code" id="checkout_m_day">Check Out</li>
                        <li class="location" id="checkout_m_year">Date</li>
                    </ul>
                                        
                                                </li>
                                                <li class="last">
                                                    <label>Nights</label>
                                                    <span id="nights">2</span>
                                                </li>
                                            </ul>
                                        </li>

        <li class="room_gest">
            <label class="rm_mb">Rooms / Guests</label>
            <div class="romm_gest_box">
                <p>
                    <img src="/resources/images/icons/user.svg" class="EplaneIcon" alt="User icon">
                    <span id="trpC_ttlRoom">1 Room</span>,
                    <span id="trpC_ttlAdult">1 Adult</span>,
                    <span id="trpC_ttlchildrn">0 Child</span>
                </p>
                <span class="room_drop_ico"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
            <div class="room_gest_drop" id="">
                <div>
                    <ul class="room" id="room0">
                                                <li class="first">
                                                    <label id="label0">Room 1</label><input type="hidden" id="selroom" value="1"/>
                                                    <form:select path="room" class="select_area" id="rooms0">
                                                        <option value="1">1 Room</option>
                                                        <option value="2">2 Rooms</option>
                                                        <option value="3">3 Rooms</option>
                                                   <!--      <option value="4">4 Rooms</option>
                                                        <option value="5">5 Rooms</option> -->
                                                    </form:select>
                                                </li>
                                                <li class="middle">
                                                    <label>Adult</label>
                                                    <form:select path="occupancies[0].adults" id="occupancies0_adults" class="select_area">
                                                    <form:option value="1">1 Adult</form:option>
                                                     <form:option value="2">2 Adults</form:option>
                                                      <form:option value="3">3 Adults</form:option>
                                                       <form:option value="4">4 Adults</form:option>
                                                        <form:option value="5">5 Adults</form:option>
                                                    </form:select>
                                                   
                                                </li>
                                                <li class="last">
                                                    <label>Child</label>
                                                    <form:select id="occupancies0_children" path="occupancies[0].children" onchange="showage(this,0);" class="select_area">
                                                     <form:option value="0">No Children</form:option>
                                                    <form:option value="1">1 Child</form:option>
                                                     <form:option value="2">2 Children</form:option>
                                                      <form:option value="3">3 Children</form:option>
                                                       <form:option value="4">4 Children</form:option>
                                                        <form:option value="5">5 Children</form:option>
                                                    </form:select>
                                                </li>
                                            </ul>
                                            <ul class="children" style="display:none;" id="chd0Age0">
                                                <li class="heading_area"><label>Children Ages <span>(1-17, enter 0 for infants)</span></label></li>
                                                <li style="display:none;" id="chd0Age1">
                                                <form:select id="occupancies0_paxes0" path="occupancies[0].paxes[0].age"
                                                    class="select_area">
                                                    <form:option value="0">Age</form:option>
                                                    <form:option value="1">1</form:option>
                                                    <form:option value="2">2</form:option>
                                                    <form:option value="3">3</form:option>
                                                    <form:option value="4">4</form:option>
                                                    <form:option value="5">5</form:option>
                                                    <form:option value="6">6</form:option>
                                                    <form:option value="7">7</form:option>
                                                    <form:option value="8">8</form:option>
                                                    <form:option value="9">9</form:option>
                                                    <form:option value="10">10</form:option>
                                                    <form:option value="11">11</form:option>
                                                    <form:option value="12">12</form:option>
                                                    <form:option value="13">13</form:option>
                                                    <form:option value="14">14</form:option>
                                                    <form:option value="15">15</form:option>
                                                    <form:option value="16">16</form:option>
                                                    <form:option value="17">17</form:option>
                                                </form:select>
                                            </li>
                                                <li style="display:none;" id="chd0Age2">
                                                   <form:select path="occupancies[0].paxes[1].age" id="occupancies0_paxes1" class="select_area">
                                                    <form:option value="0">Age</form:option>
                                                    <form:option value="1">1</form:option>
                                                    <form:option value="2">2</form:option>
                                                    <form:option value="3">3</form:option>
                                                    <form:option value="4">4</form:option>
                                                    <form:option value="5">5</form:option>
                                                    <form:option value="6">6</form:option>
                                                    <form:option value="7">7</form:option>
                                                    <form:option value="8">8</form:option>
                                                    <form:option value="9">9</form:option>
                                                    <form:option value="10">10</form:option>
                                                    <form:option value="11">11</form:option>
                                                    <form:option value="12">12</form:option>
                                                    <form:option value="13">13</form:option>
                                                    <form:option value="14">14</form:option>
                                                    <form:option value="15">15</form:option>
                                                    <form:option value="16">16</form:option>
                                                    <form:option value="17">17</form:option>
                                                </form:select>
                                                </li>
                                                <li style="display:none;" id="chd0Age3">
                                                   <form:select path="occupancies[0].paxes[2].age" id="occupancies0_paxes2"
                                                    class="select_area">
                                                    <form:option value="0">Age</form:option>
                                                    <form:option value="1">1</form:option>
                                                    <form:option value="2">2</form:option>
                                                    <form:option value="3">3</form:option>
                                                    <form:option value="4">4</form:option>
                                                    <form:option value="5">5</form:option>
                                                    <form:option value="6">6</form:option>
                                                    <form:option value="7">7</form:option>
                                                    <form:option value="8">8</form:option>
                                                    <form:option value="9">9</form:option>
                                                    <form:option value="10">10</form:option>
                                                    <form:option value="11">11</form:option>
                                                    <form:option value="12">12</form:option>
                                                    <form:option value="13">13</form:option>
                                                    <form:option value="14">14</form:option>
                                                    <form:option value="15">15</form:option>
                                                    <form:option value="16">16</form:option>
                                                    <form:option value="17">17</form:option>
                                                </form:select>
                                                </li>
                                                <li style="display:none;" id="chd0Age4">
                                                   <form:select path="occupancies[0].paxes[3].age" id="occupancies0_paxes3"
                                                    class="select_area">
                                                    <form:option value="0">Age</form:option>
                                                    <form:option value="1">1</form:option>
                                                    <form:option value="2">2</form:option>
                                                    <form:option value="3">3</form:option>
                                                    <form:option value="4">4</form:option>
                                                    <form:option value="5">5</form:option>
                                                    <form:option value="6">6</form:option>
                                                    <form:option value="7">7</form:option>
                                                    <form:option value="8">8</form:option>
                                                    <form:option value="9">9</form:option>
                                                    <form:option value="10">10</form:option>
                                                    <form:option value="11">11</form:option>
                                                    <form:option value="12">12</form:option>
                                                    <form:option value="13">13</form:option>
                                                    <form:option value="14">14</form:option>
                                                    <form:option value="15">15</form:option>
                                                    <form:option value="16">16</form:option>
                                                    <form:option value="17">17</form:option>
                                                </form:select>
                                                </li>
                                                <li style="display:none;" id="chd0Age5">
                                                    <form:select path="occupancies[0].paxes[4].age" id="occupancies0_paxes4"
                                                    class="select_area">
                                                    <form:option value="0">Age</form:option>
                                                    <form:option value="1">1</form:option>
                                                    <form:option value="2">2</form:option>
                                                    <form:option value="3">3</form:option>
                                                    <form:option value="4">4</form:option>
                                                    <form:option value="5">5</form:option>
                                                    <form:option value="6">6</form:option>
                                                    <form:option value="7">7</form:option>
                                                    <form:option value="8">8</form:option>
                                                    <form:option value="9">9</form:option>
                                                    <form:option value="10">10</form:option>
                                                    <form:option value="11">11</form:option>
                                                    <form:option value="12">12</form:option>
                                                    <form:option value="13">13</form:option>
                                                    <form:option value="14">14</form:option>
                                                    <form:option value="15">15</form:option>
                                                    <form:option value="16">16</form:option>
                                                    <form:option value="17">17</form:option>
                                                </form:select>
                                                </li>
                                            </ul>
                </div>

                <div class="room_done_bnt">
                    <span><a a href="javascript:;addRooms();">Done</a></span>
              </div>
        </li>

        <li class="search_li">
        <button type="button" onClick="submitHotelForm()" value="Search Flights" class="search">Search</button>              
                    </li>        
                                    </ul>  
                                  </form:form>
                                </div>
                              </div>
  </div>
					
					<!-- </div> -->
                    <c:if test="${not empty topDestList}">
                    <div class="ads_area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <ul class="ads_main_area">
                                        <li class="heading">Cheapest Fare From</li>
                                        <c:forEach items="${topDestList}" var="topDestList" begin="0" end="0">
<fmt:parseDate pattern="yyyy-MM-dd" value="${fn:split(topDestList.depDate,' ')[0]}" var="depDate" />
    <fmt:parseDate pattern="yyyy-MM-dd" value="${fn:split(topDestList.retDate,' ')[0]}" var="retDate" />
                                        <li class="fares">
                                            <span>${fn:split(topDestList.froCityName,'-')[0]}-(${topDestList.froCity})</span>
                                            <i class="fa fa-long-arrow-right"></i>
                                            <span>${fn:split(topDestList.toCityName,'-')[0]}-(${topDestList.toCity})</span>
                                        </li>
                                        <li class="date"><fmt:formatDate value='${depDate}' pattern='dd MMM yyyy' /> - <fmt:formatDate value='${retDate}' pattern='dd MMM yyyy' /></li>
                                        <li class="cost"><i class="fa fa-dollar"></i><fmt:formatNumber type="number" minFractionDigits="2" maxFractionDigits="2" value="${topDestList.totalPrice}" /></li>
                                         </c:forEach>
                                        <li class="number">Toll Free: <a href="tel: ${tfnNumber}" target="_blank">${tfnNumber}</a></li>
                                    </ul>
                                </div><!--cols-->
                                
                            </div><!--row-->
                        </div><!--container-->
                    </div><!--ads_area-->
          </c:if>
          

				</div>

			</div>

				<!--ads slider-->
			

			</div>
		</div>

	</div>



 <div class="fixed_background" id="fixed_background"></div><!--fixed_background-->
    
    <script type="text/javascript">
        $("#accordion button.btn").click(function(){
            $("#accordion div.collapse").removeClass("show, in");
        });
    </script>
    <script type="text/javascript">
    // Add active class to the current button (highlight it)
    // var header = document.getElementById("accordion");
    // var btns = header.getElementsByClassName("btn-link");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //   });
    // }
    </script>
    
    
     
    <script type="text/javascript">
        $("#code_location_border_left").click(function(){
            $("#mobile_top_search_origin").addClass('showOnTopFixed');
             $("#froCity").focus();
        });
         $("#code_location_border_right").click(function(){
            $("#mobile_top_search_destination").addClass('showOnTopFixed');
              $("#toCity").focus();
        });
        $("#mobile_top_search_origin_close, #mobile_top_search_destination_close").click(function(){
            $("#mobile_top_search_origin, #mobile_top_search_destination").removeClass('showOnTopFixed');
        });
        $("#demo_traveller").click(function(){
            $("#background_popup").fadeIn();
        });


    </script>
    <script type="text/javascript">
        $("#accordion button.btn").click(function(){
            $("#accordion div.collapse").removeClass("show");
        });
    </script>

    <script type="text/javascript">
  $(document).ready(function(){
    $(".trvl_btn").click(function(){
      $(".traveler_drop_box").slideToggle();
    });
    $(".close_done").click(function(){
      $(".traveler_drop_box").hide();
    });
    $(".romm_gest_box").click(function(){
      $(".room_gest_drop").slideToggle();
    });
    $(".room_done_bnt").click(function(){
      $(".room_gest_drop").hide();
    });
    var froVal = '';
    $("#froCity").focus(function(){
        froVal = $("#froCity").val();
        $("#froCity").val('')
        console.log(froVal);
    });
    $("#froCity").blur(function(){
       let froV = $("#froCity").val();
       if( froV == '' ){
          $("#froCity").val(froVal)
       }
    });
    var toVal = '';
    $("#toCity").focus(function(){
        toVal = $("#toCity").val();
        $("#toCity").val('')
        console.log(toVal);
    });
    $("#toCity").blur(function(){
       let toV = $("#toCity").val();
       if( toV == '' ){
          $("#toCity").val(toVal)
       }
    });

  });
  function openTransfer(){

  	 var url = window.location.href;
					var data = {
							page : url
								}
							$.ajax({
								url: '/transfer/click/tracking',
								type: 'post',
								contentType: 'application/json; charset=utf-8',
								data: JSON.stringify(data),
								dataType: "text"
							});
							
window.open("https://reservationsdeal.mozio.com/en-us/","_target");
}


jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var amount = $('#ui-datepicker-div > div:first-child').width();
            //console.log(amount);
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            // if( position + direction > 0 ){
            //     console.log('Plus')
            // }else{
            //     console.log('Minus')
            // }
            console.log(position + direction);
            $(this).scrollLeft(position);
            //$(this).animate({scrollLeft : position});
            event.preventDefault();
        })
    };
});
jQuery(function ($) {
    $.fn.wScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var amount = $('#ui-datepicker-div > div:first-child').height();
            //console.log(amount);
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollTop();
            position += direction > 0 ? -amount : amount;
            console.log('A '+amount);
            $(this).scrollTop(position);
            //$(this).animate({scrollLeft : position});
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    if( $(window).width() > 991 ){
        $('#ui-datepicker-div').hScroll(80); // You can pass (optionally) scrolling amount
    }
    if( $(window).width() < 992 ){
        $('#ui-datepicker-div').wScroll(80); // You can pass (optionally) scrolling amount
    }
    $(".needDropLoca").click(function(){
        $(this).removeClass('OpenneedDropLoca');
        $("#dropLocation").focus()
    });
    $("#dropLocation").blur(function(){
        setTimeout(function(){ 
            var dcla = $("#dropLocation").val();
            if( dcla == '' ){
                $(".needDropLoca").addClass('OpenneedDropLoca');
            }
            console.log(dcla);
        }, 100);
        
        
    })
});



$(document).on('mouseenter', '.ui-datepicker-calendar .ui-state-hover', function(e){
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var month_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    var c1 =        $(this).closest('.ui-datepicker-group');    //closest datepicker...
    var day1 =      $(this).text();
    var month1 =    c1.find('.ui-datepicker-month').text();
    var mindxNmb =  monthNames.indexOf(month1);
    var mob_month = month_short[mindxNmb];
    // console.log(mindxNmb);
    // console.log(mob_month);
    month1 =        monthNames.indexOf(month1) + 1;
    var year1 =     c1.find('.ui-datepicker-year').text();
    //var fullDate = day1 + "_" + month1 + "_" + year1;
    
    //$('h1').html(fullDate);
    var element =  document.getElementById('departDateInd');
    if (typeof(element) != 'undefined' && element != null)
    {
      var indDate = day1 + "/" + month1 + "/" + year1;
      var usaDate = month1 + "/" + day1 + "/" + year1;
      if( $("#ui-datepicker-div").hasClass('depGetDate') ){
        $("#departDateInd").val(indDate);
        $("#departDate").val(usaDate);
        var dTxt = $("#departDate").val();
        var dTxt_ = $("#departDateInd").val();
        //console.log('DepartDate: '+dTxt+' India Date: '+dTxt_);
        $("#departDate_m_year").text(year1);
        $("#departDate_m_day").text(day1 + ' ' + mob_month);
      }else if( $("#ui-datepicker-div").hasClass('retGetDate') ){
        $("#returnDateInd").val(indDate);
        $("#returnDate").val(usaDate);
        var dTxt = $("#returnDate").val();
        var dTxt_ = $("#returnDateInd").val();
        //console.log('Return Date: '+dTxt+' India Return Date: '+dTxt_);
        if( $("#returnDate_m_year").text() != 'Return'){
          $("#returnDate_m_year").text(year1);
          $("#returnDate_m_day").text(day1 + ' ' + mob_month);
        }
      }
    }else{
      var indDate = day1 + "/" + month1 + "/" + year1;
      var usaDate = month1 + "/" + day1 + "/" + year1;
      if( $("#ui-datepicker-div").hasClass('depGetDate') ){
        $("#departDateInd").val(indDate);
        $("#departDate").val(usaDate);
        var dTxt = $("#departDate").val();
        var dTxt_ = $("#departDateInd").val();
        //console.log('DepartDate: '+dTxt+' India Date: '+dTxt_);
        $("#departDate_m_year").text(year1);
        $("#departDate_m_day").text(day1 + ' ' + mob_month);
      }else if( $("#ui-datepicker-div").hasClass('retGetDate') ){
        $("#returnDateInd").val(indDate);
        $("#returnDate").val(usaDate);
        var dTxt = $("#returnDate").val();
        var dTxt_ = $("#returnDateInd").val();
        //console.log('Return Date: '+dTxt+' India Return Date: '+dTxt_);
        if( $("#returnDate_m_year").text() != 'Return'){
          $("#returnDate_m_year").text(year1);
          $("#returnDate_m_day").text(day1 + ' ' + mob_month);
        }
      }
    }
    
});
</script>