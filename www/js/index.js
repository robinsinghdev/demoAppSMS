
$( document ).on( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
	 $.support.cors = true;
     $.mobile.allowCrossDomainPages = true;
     
     jQuery.mobile.phonegapNavigationEnabled = true;
     jQuery.mobile.defaultDialogTransition = "pop";
     jQuery.mobile.defaultPageTransition = "none";
      
     jQuery.mobile.loader.prototype.options.text = "loading";
     jQuery.mobile.loader.prototype.options.textVisible = true;
     jQuery.mobile.loader.prototype.options.theme = "a";
     
     $.mobile.toolbar.prototype.options.updatePagePadding = false;
     $.mobile.toolbar.prototype.options.hideDuringFocus = "";
     $.mobile.toolbar.prototype.options.tapToggle = false;
});

var connectionType;
var appName='EDIT';

var rightPanelObj = //'<div id="rightPanel" class="panel right" data-role="panel" data-position="right" data-display="push" >'+
						'<div id="menu-wrapper">'+
							'<div class="menu-title">'+
						    	'<span>SETTING</span>'+
						    '</div>'+
						
							'<ul class="menu">'+
							
								'<li class="profile-detail person_details_right_panel">'+
									'<div class="person_details">'+
										'<div class="circular">'+'</div>'+
										'<span class="details-data name">'+window.localStorage["name"]+'</span>'+
										//'<a class="edit-link display-none" href="#"><img src="img/icons/edit.png" class="img-circle" alt="">'+'</a>'+
									'</div>'+
									/*
									'<div class="sub_info">'+
										'<img src="img/icons/address.png" alt="address">'+'</a>'+
										'<span class="name">#124,20th main,6th phase,18th cross J.P.Nagar,Banglore</span>'+
									'</div>'+
									*/
									'<div class="sub_info">'+
										'<img src="img/icons/email118.png" alt="email">'+'</a>'+
										'<span class="email details-data">'+window.localStorage["username"]+'</span>'+
									'</div>'+
									'<div class="sub_info">'+
										'<img src="img/icons/contact1.png" alt="contacts">'+'</a>'+
										'<span class="contact_number details-data">'+window.localStorage["mobile"]+'</span>'+
									'</div>'+
								'</li>'+
								
								'<li class="icon notification">'+
									'<a href="#notification-page" data-rel="close" >'+
										'<span class="menu-li-title">Notifications</span>'+
									'</a>'+
								'</li>'+
								'<li class="icon holiday">'+
									'<a href="#" onclick="getHolidays();" data-rel="close" >'+
										'<span class="menu-li-title">Holidays List</span>'+
									'</a>'+
								'</li>'+
								'<li class="icon notification">'+
									'<a href="#" '+
								 ' onclick="openPrivacyPolicyExternalApp();" data-rel="close" >'+
										'<span class="menu-li-title">Privacy Policy</span>'+
									'</a>'+
								'</li>'+
								/*
								'<li class="icon password">'+
									'<a href="#" data-rel="close">'+
										'<span class="menu-li-title">Change Paswword</span>'+
									'</a>'+
								'</li>'+
								*/
								'<li class="icon logout">'+
									'<a href="#" onclick="doLogout();" data-rel="close">'+
										'<span class="menu-li-title">Logout</span>'+
									'</a>'+
								'</li>'+
							'</ul>'+
						'</div>';

var leftPanelObjEmpty = //'<div id="leftPanel" class="panel left" data-role="panel" data-position="left" data-display="push" >'+
							'<div id="menu-wrapper">'+			
								'<div class="menu-title">'+
							    	'<span>MENU</span>'+
							    '</div>'+
								'<ul class="menu">'+	
								'</ul>'+
							'</div>';
var leftPanelObj = '<div id="menu-wrapper">'+			
						'<div class="menu-title">'+
					    	'<span>MENU</span>'+
					    '</div>'+
						'<ul class="menu">';	
var leftPanelObjForStudent= 					
							'<li class="icon home">'+
								'<a href="#" onclick="gotoHome();" data-rel="close" >'+
									'<span class="menu-li-title">Home</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+	
							'<li class="icon assignment">'+
								'<a href="#" onclick="getHomeworkData(0);" data-rel="close" >'+
									'<span class="menu-li-title">Homework</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+
							'<li class="icon assignment">'+
								'<a href="#" onclick="getAssignments();" data-rel="close" >'+
									'<span class="menu-li-title">Assignment & Test</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+	
							'<li class="icon book">'+
								'<a href="#" onclick="getLibraryBooksAllocated();" data-rel="close">'+
									'<span class="menu-li-title">Library</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+					
							'<li class="icon achievement">'+
								'<a href="#" onclick="getAcademicAcheivements();" data-rel="close">'+
									'<span class="menu-li-title">Academic Achievements</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+
							'<li class="icon external">'+
								'<a href="#" onclick="getExternalActivies();" data-rel="close">'+
									'<span class="menu-li-title">External Activity</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+	
							'<li class="icon scholarship">'+
								'<a href="#" onclick="getScholoarships();" data-rel="close">'+
									'<span class="menu-li-title">Scholarships</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+	
							'<li class="icon seminar">'+
								'<a href="#" onclick="getSeminars();" data-rel="close">'+
									'<span class="menu-li-title">Seminars</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+			
							'<li class="icon desciplines">'+
								'<a href="#" onclick="getDisciplines();" data-rel="close">'+
									'<span class="menu-li-title">Disciplines</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>';
							/*
							'<li class="icon timetable">'+
								'<a href="#" onclick="getTimetable(); " data-rel="close">'+
									'<span class="menu-li-title">Time Table</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+	
							'<li class="icon institute">'+
							'<a href="#" onclick="getPreviousInstitutes();" data-rel="close">'+
								'<span class="menu-li-title">Previous Institutes</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
							'</li>';	
						*/					
var leftPanelObjForStaff= 		
						'<li class="icon home">'+
							'<a href="#" onclick="gotoHome();" data-rel="close" >'+
								'<span class="menu-li-title">Home</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
						
						'<li class="icon mapping">'+
							'<a href="#" onclick="getStanDivisionMapForStaff();" data-rel="close">'+
								'<span class="menu-li-title">My Classes</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+							
						'<li class="icon bookmark">'+
							'<a href="#" onclick="getSubjectAllocationForStaff();" data-rel="close">'+
								'<span class="menu-li-title">My Subjects</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
							
						'<li class="icon attendance">'+
							'<a href="#" onclick="getStanDivisionMapForStaff();" data-rel="close">'+
								'<span class="menu-li-title">Take Attendance</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
							
						'<li class="icon bookmark">'+
							'<a href="#" onclick="getStanDivisionMapForStaff();" data-rel="close">'+
								'<span class="menu-li-title">Assign Homework</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>';
						/*
						'<li class="icon attendance">'+
							'<a href="#" onclick="getAttendanceForStaff();" data-rel="close">'+
								'<span class="menu-li-title">My Attendance</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
						'<li class="icon assignment">'+
							'<a href="#" onclick="getStaffDetails();" data-rel="close" >'+
								'<span class="menu-li-title">Assignments</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
						'<li class="icon seminar">'+
							'<a href="#" onclick="getSeminars();" data-rel="close">'+
								'<span class="menu-li-title">Seminars</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>';
						
						'<li class="icon timetable">'+
							'<a href="#" onclick="getTimetable(); " data-rel="close">'+
								'<span class="menu-li-title">Holidays</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
						'<li class="icon book">'+
							'<a href="#" onclick="getEducationalQualificationForStaff();" data-rel="close">'+
								'<span class="menu-li-title">Educational Qualification</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+					
						'<li class="icon scholarship">'+
							'<a href="#" onclick="getLeaveDetailsForStaff();" data-rel="close">'+
								'<span class="menu-li-title">Leave Details</span>'+
								'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
							'</a>'+
						'</li>'+
						*/
var ajaxCallGet = "GET";
var ajaxCallPost = "POST";
var ajaxCallUnset = "GET";
var dynPanelCount = 1,
dynPanelBtnCount = 1;
var noDataFoundMsg = "No data found.";
//$(document).one('pagebeforecreate', function () {});

function panelsInitialization(initLeftPanelFlag, initRightPanelFlag, roleId){
	dynPanelCount = 1;
	dynPanelBtnCount = 1;
    
	$.mobile.pageContainer.find("[data-role=page]").each(function () {
		var currPanelObj = $(this).find(".st-leftPanel");
		var panelFoundFlag = currPanelObj.length;
		
		if($(this).attr("id") == "login-page"){
			if(panelFoundFlag == 0){
				var leftPanelDynObj='<div id="leftPanel' + dynPanelCount + '" class="panel left st-leftPanel" data-role="panel" data-position="left" data-display="push"></div>';
		        var rightPanelDynObj = '<div id="rightPanel' + dynPanelCount + '"  class="panel right st-rightPanel" data-role="panel" data-position="right" data-display="push"></div>';
		        $(this).prepend(leftPanelDynObj);
		        $(this).prepend(rightPanelDynObj);
			}    
		}
		else{
			if(panelFoundFlag == 0){
				var leftPanelDynObj="";
		        leftPanelDynObj += '<div id="leftPanel' + dynPanelCount + '" class="panel left st-leftPanel" data-role="panel" data-position="left" data-position-fixed="true" data-display="push" >';
		        
		        if(roleId==0 || roleId==4 || roleId==9){
		        	leftPanelDynObj += leftPanelObj + leftPanelObjForStudent;
		        	leftPanelDynObj += '</ul>'+'</div>'+'</div>';
		        }
		        else if(roleId==2){
		        	leftPanelDynObj += leftPanelObj + leftPanelObjForStaff;
		        	leftPanelDynObj += '</ul>'+'</div>'+'</div>';
		        }
		        
		        var rightPanelDynObj = '<div id="rightPanel' + dynPanelCount + '"  class="panel right st-rightPanel" data-role="panel" data-position="right" data-position-fixed="true" data-display="overlay" >'+
		        						rightPanelObj + '</div>';
		        
		        $(this).prepend(leftPanelDynObj);
		        $(this).prepend(rightPanelDynObj);
			}
			else{
				console.log("panel--"+$(this).attr("id")+"---"+currPanelObj.find(".ui-panel-inner").length);
				if(roleId==0 || roleId==4 || roleId==9){
					currPanelObj.find("#menu-wrapper .menu").html(leftPanelObjForStudent);
					if(currPanelObj.find(".ui-panel-inner").length == 0){
						currPanelObj.find(".ui-panel-inner ul.menu").html(leftPanelObjForStudent);
					}
		        }
		        else if(roleId==2){
		        	currPanelObj.find("#menu-wrapper .menu").html(leftPanelObjForStaff);
		        	if(currPanelObj.find(".ui-panel-inner").length == 0){
		        		currPanelObj.find(".ui-panel-inner ul.menu").html(leftPanelObjForStaff);
					}
		        }
			}
	        dynPanelCount++;
	        
	        var btnFoundFlag = $(this).find("[data-role=header] .st-leftPanel-btn").length;
	        if(btnFoundFlag == 0){
	        	var leftPanelDynBtn='<a href="#leftPanel' + (dynPanelBtnCount) + '" data-theme="none" data-inline="true" class="ui-btn ui-btn-left st-leftPanel-btn edit-logo" title="Menu">'+
	    		'<img src="img/edit-sm-logo.png" alt="logo" /></a>';
	
	    		var rightPanelDynBtn='<div class="ui-btn-right right-space">'+
			    							'<a href="#notification-page" class="ui-btn ui-shadow ui-corner-all st-rightPanel-btn no-border margin-right notification-count-link"  title="Notification"><span class="">0</span></a>'+
			    							'<a href="#rightPanel' + (dynPanelBtnCount) + '" class="ui-btn ui-corner-all ui-icon-gear ui-btn-icon-notext st-rightPanel-btn no-border"  title="Setting"> </a>'+
			    						'</div>';
	    		$(this).find("[data-role=header]").append(leftPanelDynBtn);
	    		$(this).find("[data-role=header]").append(rightPanelDynBtn);
	        }
			dynPanelBtnCount++;	
		}	
    }); 
}

$(document).on("pageinit", function () {
    if($(this).attr("href") == "#"+$.mobile.pageContainer.pagecontainer("getActivePage")[0].id) {
    	//alert($.mobile.pageContainer.pagecontainer("getActivePage")[0].id);
    }
    
    /* New Design for Edit CSS Starts */
	$('.mb-student-links li a').click(function(){
		var currentDivName = $(this).attr('rel');
		var hideDivName='.'+$(this).attr('rel');												
		$('.mb-student-tab-content').hide();
		$(hideDivName).show();
		$('.mb-student-links li a').removeClass('current');
		$(this).addClass('current');
		
		if(currentDivName == "mb-student-assignment"){
			getAssignmentForStudTabs();
		}
		else if(currentDivName == "mb-student-communication"){
			getNewsEventAndCommListForParent();
		}
		return false;
	});
	
	$('.mb-student-assignment-dashboard li a').click(function(){
		var hideDivName='.'+$(this).attr('rel');										
		$('.mb-assignment-tab-content').hide();
		$(hideDivName).show();
		$('.mb-student-assignment-dashboard li').removeClass('highlighte');
		$(this).parent().parent().addClass('highlighte');
		return false;
	});
	/* New Design for Edit CSS Ends */	
});

//var appUrl='http://192.168.1.11:8080/Edit/appEntry.do';
//var appUrl='http://122.166.218.28:8080/Edit/appEntry.do';
var appUrl = '';
var appRequiresWiFi='This action requires internet.';
var serverBusyMsg='Server is busy, please try again later.';
var mData={};
var db;
var pushNotification;

var app = {
    SOME_CONSTANTS : false,  // some constant
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.initFastClick();
    },
    // Bind Event Listeners Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
    onDeviceReady: function() {
        document.addEventListener("backbutton", onBackKeyDown, false);
        if(window.localStorage["gcmregistrationId"] === undefined ) {
			window.localStorage["gcmregistrationId"] = "";
		}
		pushNotification = window.plugins.pushNotification;
		try{
        	pushNotification = window.plugins.pushNotification;
        	pushNotification.register(successHandler, errorHandler, {"senderID":"329763220550","ecb":"onNotification"});		// required!
        }
		catch(err){
			var txt="There was an error on this page.\n\n"; 
			txt+="Error description: " + err.message + "\n\n"; 
			console.log(txt); 
		}
		
        if(window.localStorage["appUrl"] === undefined ) {
        	window.localStorage["appUrl"] = '';
        	window.localStorage["schoolCode"] = '';
        	$(".schoolCodeContainer").show();
			$(".loginFormContainer").hide();
        }else{
    		//db = window.sqlitePlugin.openDatabase({name: "stims.db", location: 2});
    		//db.transaction(initializeDB, errorCB, successCB);
        	appUrl=window.localStorage["appUrl"];
        	$(".schoolCodeContainer").hide();
			$(".loginFormContainer").show();
			$(".schoolCodeLabel").html(window.localStorage["schoolCode"]);
        	checkPreAuth();
        }	
        $("#loginForm").on("submit",handleLogin);
		$("#schoolCodeForm").on("submit",getSchoolInfo);
    },
};

//handle GCM notifications for Android
function onNotification(e) {
    switch( e.event ){
        case 'registered':
			if ( e.regid.length > 0 ){
				// Your GCM push server needs to know the regID before it can push to this device
				// here is where you might want to send it the regID for later use.
				console.log("regID = " + e.regid);
				window.localStorage["gcmregistrationId"] = e.regid;
			}
        break;
        
        case 'message':
        	// if this flag is set, this notification happened while we were in the foreground.
        	// you might want to play a sound to get the user's attention, throw up a dialog, etc.
        	if (e.foreground){
        		//console.log("INLINE NOTIFICATION");
			    // on Android soundname is outside the payload. 
			}
			else{	
				// otherwise we were launched because the user touched a notification in the notification tray.
				if (e.coldstart){}
					//console.log("COLDSTART NOTIFICATION");
				else{}
					//console.log("BACKGROUND NOTIFICATION");
			}
        	var dataNotifyObj = '<li>'+
									'<div class="main-content">'+
										'<div class="feat_small_icon">'+
											'<i class="fa fa-bell-o"></i>'+
										'</div>'+
										'<div class="feat_small_details">'+
											'<h5> '+ e.payload.message +' </h5>'+
											'<a href="#" class="ui-link"> '+getTodayDate();+' </a>'+
										'</div>'+
									'</div>'+	
								'</li>';
			var $notificationUlObj = $("#notification-page").find("ul.features_list_detailed");
        	$notificationUlObj.append(dataNotifyObj);
        	
        	var currentNotificationCount = $(".notification-count-link span").html();
        	var currentNotificationCountNew = parseInt(currentNotificationCount) + 1;
        	$(".notification-count-link span").html(currentNotificationCountNew);
        	$(".notification-count-link").show();        	
			//console.log(e.payload.message+"---"+e.payload.msgcnt);
            //android only
        	break;
        
        case 'error':
			 console.log(e.msg);
			 break;
        
        default:
		 	console.log(" Unknown, an event was received and we do not know what it is");
        	break;
    }
}

function successHandler (result) {
    console.log(result);
}

function errorHandler (error) {
    console.log(error);
}

function showModal(){
  $('body').append("<div class='ui-loader-background'> </div>");
  $.mobile.loading( "show" );
}

function hideModal(){
	 $(".ui-loader-background").remove();
	 $.mobile.loading( "hide" );
}

function onBackKeyDown() {
	if($.mobile.activePage.is('#login-page')){
        showExitDialog();
    }
	else if($.mobile.activePage.is('#home-page')){
        /* 
        Event preventDefault/stopPropagation not required as adding backbutton
         listener itself override the default behaviour. Refer below PhoneGap link.
       */
       //e.preventDefault();
       showExitDialog();
   }
	else if($.mobile.activePage.is('#page-2')){
       $.mobile.changePage('#home-page','slide');
   }
	else{
		$.mobile.changePage('#home-page','slide');
		//window.history.back();
   }
}

function checkConnection() {
	/*
	connectionType="WiFi connection";//For Testing
	return connectionType;
	*/
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    return states[networkState];
}

function checkPreAuth() {
	connectionType=checkConnection();
	if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
		var form = $("#loginForm");
		if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined && window.localStorage.getItem("user_logged_in")==1) {
			$("#username", form).val(window.localStorage["username"]);
			$("#password", form).val(window.localStorage["password"]);
			handleLogin();
		}
	}
	else{
		navigator.notification.alert(appRequiresWiFi, exitAppForcefully, appName,'Ok');
	}
}

function logout() {
	window.localStorage["password"] = '';
	window.localStorage["user_logged_in"] = 0;
	window.localStorage["ID"] = '';
	window.localStorage["permissions"] = '';
	window.localStorage["email"] = '';
	var form = $("#loginForm");
	$("#username", form).val(window.localStorage["username"]);
	$("#password", form).val('');
	$(".schoolCodeContainer").hide();
	$(".loginFormContainer").show();
	$.mobile.changePage('#login-page','slide');
}

function gotoHome(){
	if(window.localStorage["userRoleId"] ==4 || window.localStorage["userRoleId"]==9){
		$("#staff_homepage").hide();
		$("#student_homepage").show();
	}else if(window.localStorage["userRoleId"]==2){ // Teacher Role
		$("#staff_homepage").show();
		$("#student_homepage").hide();
	}
	$.mobile.changePage('#home-page','slide');
}

function handleLogin() {
	var form = $("#loginForm");
	//disable the button so we can't resubmit while we wait
	$("#submitButton",form).attr("disabled","disabled");
	var u = $("#username", form).val();
	var p = $("#password", form).val();
	
	// Default test login data
	//u='ven000082pt'; //parent 
	//p='parent'; // parent
	
	//u='ven000082st'; //student 
	//p='student'; // student
	
	//u='GAY000007SF'; //staff
	//p='staff'; // staff 
	
	if(u != '' && p!= '') {
		connectionType=checkConnection();
		
		var loginData={};
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			if(window.localStorage["user_logged_in"] ==1) {
				navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
				//checkingUserAssignedRoles();
				//$.mobile.changePage('#home-page',{ transition: "slideup"});
			}
			else{
				navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
			}	
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			showModal();
			loginData.username=u;
			loginData.password=p;
			loginData.gcmregdid = window.localStorage["gcmregistrationId"];
			//loginData.gcmregdid = "reg";//For Testing
			
			$.ajax({
				//type : 'POST',
				url:appUrl,
				data : {"action":"login","loginData":JSON.stringify(loginData), "mData":JSON.stringify(mData) },
				success:function(data){
					var responseJson=jQuery.parseJSON(data);
					var responseMessage=responseJson["msg"];
					if(responseJson.statusCode == "0" ){
						//var appUserData=responseJson.appUserData;
						window.localStorage["username"] = u;
						window.localStorage["password"] = p;
						window.localStorage["user_logged_in"] = 1;
											
						if (window.localStorage.getItem("permissions") === null ) {
							window.localStorage["permissions"] = '';
						}
						
						var loginDataResponse=responseJson["loginDataResponse"];
						window.localStorage["name"] = loginDataResponse["name"];
						window.localStorage["userRoleId"] = loginDataResponse["userRoleId"];
						window.localStorage["userRoleName"] = loginDataResponse["userRoleName"];
						window.localStorage["userRoleNameSimple"] = "";// loginDataResponse["userRoleNameSimple"]; // FIXME
						
						//checkingUserAssignedRoles(); 
						$person_details_right_panel=$(".person_details_right_panel");
						$person_details_right_panel.find(".name").html(window.localStorage["name"]);
						$person_details_right_panel.find(".email").html(window.localStorage["username"]);
						
						var allData=responseJson["allData"];
						
						if(loginDataResponse["userRoleId"]==4 || loginDataResponse["userRoleId"]==9){ // 4= Parent Role, 9= Student Role
							
							$("#staff_homepage").hide();
							$("#student_homepage").show();
							
							// Student & Parent Related data
							var studData= allData["jsonObjStudData"];
							
							var studName=studData["name"];
							var studMobileNo=studData["mobileNumber"];
							var studentEmail=studData["studentEmail"];
							var admissionNo=studData["admissionNo"];
							var rollNumber=studData["rollNumber"];
							var studentDetailsId=studData["studentDetailsId"];
							var studentStandardDivisionId=studData["studentStandardDivisionId"];
							var age=studData["age"];
							var gender=studData["gender"];
							
							var userImgSrc = "img/avatars/avatar-male.png";
							var studImage = studData["image"];
							if(gender){
								gender='Male';
								userImgSrc = "img/avatars/avatar-male.png";
							}else{
								gender='Female';
								userImgSrc = "img/avatars/avatar-female.png";
							}
							
							var addressOne=studData["addressOne"];
							var addressTwo=studData["addressTwo"];
							var studContactNo=studData["studContactNo"];
							
							var parentsName=studData["parentsName"];
							var parentEmail=studData["email"];
							window.localStorage["email"]=parentEmail;
							
							var parentsMobileNo=studContactNo;
							
							// 4= Parent Role, 9= Student Role
							if(loginDataResponse["userRoleId"]==4 ){
								window.localStorage["mobile"]=parentsMobileNo;
							}
							else if(loginDataResponse["userRoleId"]==9){
								window.localStorage["mobile"]=studMobileNo;
							}
							$person_details_right_panel.find(".contact_number").html(window.localStorage["mobile"]);
							
							window.localStorage["studDetailsId"] = studentDetailsId;
							window.localStorage["studStandardDivisionId"] = studentStandardDivisionId;
							
							// User Profile Details - Compact Info
							var $userCompactInfoObj = $('.user-compact-info');
							$userCompactInfoObj.find(".mb-student-photo img").attr("src", userImgSrc);
							$userCompactInfoObj.find(".mb-student-name").html(studName);
							
							// User Profile Details - More Info
							var $userMoreInfoObj = $userCompactInfoObj.find(".mb-student-more-info");
							$userMoreInfoObj.find(".user-id").html("");
							$userMoreInfoObj.find(".user-id-other span").html(admissionNo);
							$userMoreInfoObj.find(".gender span").html(gender);
							$userMoreInfoObj.find(".age span").html(age);
							
							// User Profile Details - Deatiled Info
							// Student Contact Details
							var $userDetailedInfoObj = $(".user-detailed-info");
							var $userDetailedContactInfo = $userDetailedInfoObj.find(".user-contact-info-content");
							$userDetailedContactInfo.find(".address-info span").html(addressOne+" "+addressTwo);
							$userDetailedContactInfo.find(".mobile-info span").html(parentsMobileNo);
							$userDetailedContactInfo.find(".email-info span").html(studentEmail);
							
							// Student Parent Details
							var $parentInfoObj = $userDetailedInfoObj.find(".user-parent-info-content");
							$parentInfoObj.find(".parent-name span").html(parentsName);
							$parentInfoObj.find(".parent-mobile span").html(parentsMobileNo);
							$parentInfoObj.find(".parent-email span").html(parentEmail);
							
							// Student Acheivements/Awards Details
							var $userAwardInfoContentObj = $userDetailedInfoObj.find(".user-award-info-content .user-data-info");
							$userAwardInfoContentObj.find('span').remove();
							
							var jsonObjAcheivements = allData["jsonObjAcheivements"];
							var jsonArrAcheivements=jsonObjAcheivements["jsonArrAcheivements"];
							
							var $achievementDetailsUlObj=$('#achievementDetailsUl');
							if(jsonArrAcheivements.length>0){
								jQuery.each(jsonArrAcheivements, function(index, item) {
									var dataEleObj='<span class="line-break-span">'+
														'<i class="fa fa-trophy fa-fw"></i>'+
														'<span>'+item["studentAcademicAchievementDetails"]+'</span>'+
													'</span>';
									$userAwardInfoContentObj.append(dataEleObj);
								});
							}
							else{
								var dataEleObj='<span class="line-break-span">'+
													'<i class="fa fa-info-circle fa-fw"></i>'+
													'<span>No awards gained yet, just Belive You Can.</span>'+
												'</span>';
								$userAwardInfoContentObj.append(dataEleObj);
							}
							
							// Student Attendance related data
							var jsonArrAttendance = allData["jsonArrAttendance"];
							
							var $leaveDescriptionTableObj=$('#leaveDescription');
							$leaveDescriptionTableObj.find('tbody tr').remove();
							jQuery.each(jsonArrAttendance, function(index, item) {
								var jsonObj=item;
								
								var trObj='<tr>'+
						                 	'<td class="date">'+jsonObj["date"]+'</td>'+
						                 	'<td class="reason">'+jsonObj["reason"]+'</td>'+
				                 			'<td class="approve-type red">'+jsonObj["approveType"]+'</td>'+
					                	 '</tr>';
								//$leaveDescriptionTableObj.find('tbody').append(trObj);
							});
							
							var mDataGetStudentAttendance={};
							mDataGetStudentAttendance.p1=studentStandardDivisionId;
							mDataGetStudentAttendance.p2=1;
							mDataGetStudentAttendance.p3=0;
							getDataByAction("getStudentAttendance", JSON.stringify(mDataGetStudentAttendance), getAttendanceSuccessCallback, commonErrorCallback);
							
							// Assignment related data
							var jsonObjAssignment=allData["jsonObjAssignment"];
							
							var assignmentSubmissionDate=jsonObjAssignment["assignmentSubmissionDate"];
							var studAssignmentName=jsonObjAssignment["studAssignmentName"];
							
							var $assignmentDivObj=$(".div-block.assignment");
							$assignmentDivObj.find(".div-block-data").html('');
							if(studAssignmentName != "No Assignments"){
								$assignmentDivObj.find(".div-block-data").append('<p class="message"><span class="bold">Assignment: </span>'+studAssignmentName+'</p>');
								$assignmentDivObj.find(".div-block-data").append('<p class="message"><span class="bold">Submission Date: </span>'+assignmentSubmissionDate+'</p>');
							}else{
								$assignmentDivObj.find(".div-block-data").append('<p class="message assignment-name">Enjoy you do not have any assignments</p>');
							}
							
							// Fees related data
							var jsonObjFees=allData["jsonObjFees"];
							
							var paymentPendingAmount=jsonObjFees["paymentPendingAmount"];
							var lastPaymentDate=jsonObjFees["lastPaymentDate"];
							var paymentAmountPaid=jsonObjFees["paymentAmountPaid"];
							var paymentMsg=jsonObjFees["paymentMsg"];
							
							var $accountDetailsDivObj=$(".div-block.account-details");
							$accountDetailsDivObj.find(".div-block-data").html('');
							
							$accountDetailsDivObj.find(".div-block-data").append('<p class="message">'+paymentMsg+'</p>');
							$accountDetailsDivObj.find(".div-block-data").append('<p class="message"><span class="">Pending Amount: </span>'+paymentPendingAmount+'</p>');
							$accountDetailsDivObj.find(".div-block-data").append('<p class="message"><span class="">Amount Paid: </span>'+paymentAmountPaid+'</p>');
							$accountDetailsDivObj.find(".div-block-data").append('<p class="message"><span class="">Lats Payment Date: </span>'+lastPaymentDate+'</p>');
							// Health Details related data
							var jsonObjHealth=allData["jsonObjHealth"];
							var healthDetails=jsonObjHealth["healthDetails"];
							
							var $healthDetailsDivObj=$(".div-block.health-details");
							$healthDetailsDivObj.find(".div-block-data").html('');
							
							if(healthDetails != "No Details"){
								$healthDetailsDivObj.find(".div-block-data").append('<p class="message">'+healthDetails+'</p>');
							}else{
								$healthDetailsDivObj.find(".div-block-data").append('<p class="message">No health problems reported.</p>');
							}
						}
						else if(loginDataResponse["userRoleId"]==2){ // Teacher Role
							window.localStorage["staffDetailsId"] = loginDataResponse["staffDetailsId"];
							$("#staff_homepage").show();
							$("#student_homepage").hide();
							
							var $userDataEle=$("#staff_homepage").find(".user-data");
							
							var $dynamicDataEle=$("#staff_homepage").find(".dynamic-data");
														
							$dynamicDataEle.find("ul.user_list_detailed.mb-student-attendance-list").remove();
							var dataEleObj='<ul class="user_list_detailed mb-student-attendance-list">';
							//onclick="getUserProfile();"
							dataEleObj+='<li >'+
											'<div class="mb-student-container less-zindex" >'+
												'<div class="full-width">'+											
													'<div class="st-prof-info">'+								
														'<p>Hello, '+window.localStorage["name"]+'</p>'+
														'<p class="st-contact-no">'+window.localStorage["username"]+"("+window.localStorage["userRoleName"]+')</p>'+
														'<span class="st-contact-no">TIP: Click on below links to see related data.</span>'+
													'</div>'+							
												'</div>'+
											'</div>'+
										'</li>';
							dataEleObj+='<li onclick="getStanDivisionMapForStaff();" >'+
												'<div class="mb-student-container less-zindex" >'+
													'<div class="st-profile-img list">'+
														'<span><span></span><i class="fa fa-tags" aria-hidden="true"></i>'+
													'</div>'+
													'<div class="mb-st-content full-width">'+											
														'<div class="st-prof-info">'+								
															'<p>My Classes</p>'+
															'<span class="st-contact-no">Classes assigned to you.</span>'+
														'</div>'+							
													'</div>'+
												'</div>'+
											'</li>';
							
							dataEleObj+='<li onclick="getSubjectAllocationForStaff();" >'+
											'<div class="mb-student-container less-zindex" >'+
												'<div class="st-profile-img list">'+
													'<span><span></span><i class="fa fa-files-o" aria-hidden="true"></i>'+
												'</div>'+
												'<div class="mb-st-content full-width">'+											
													'<div class="st-prof-info">'+								
														'<p>My Subjects</p>'+
														'<span class="st-contact-no">Subjects assigned to you.</span>'+
													'</div>'+							
												'</div>'+
											'</div>'+
										'</li>';
							
							dataEleObj+='<li onclick="getStanDivisionMapForStaff();" >'+
											'<div class="mb-student-container less-zindex" >'+
												'<div class="st-profile-img list">'+
													'<span><span></span><i class="fa fa-calendar-check-o" aria-hidden="true"></i>'+
												'</div>'+
												'<div class="mb-st-content full-width">'+											
													'<div class="st-prof-info">'+								
														'<p>Take Attendance</p>'+
														'<span class="st-contact-no">Take Class Attendance.</span>'+
													'</div>'+							
												'</div>'+
											'</div>'+
										'</li>';
							dataEleObj+='<li onclick="getStanDivisionMapForStaff();" >'+
											'<div class="mb-student-container less-zindex" >'+
												'<div class="st-profile-img list">'+
													'<span><span></span><i class="fa fa-file-text" aria-hidden="true"></i>'+
												'</div>'+
												'<div class="mb-st-content full-width">'+											
													'<div class="st-prof-info">'+								
														'<p>Assign Homework</p>'+
														'<span class="st-contact-no">Assigned Homework.</span>'+
													'</div>'+							
												'</div>'+
											'</div>'+
										'</li>';
							
							/*
							dataEleObj+='<li onclick="getAttendanceForStaff();" >'+
											'<div class="mb-student-container" >'+
												'<div class="st-profile-img list">'+
													'<span><span></span><i class="fa fa-calendar-check-o" aria-hidden="true"></i>'+
												'</div>'+
												'<div class="mb-st-content full-width">'+											
													'<div class="st-prof-info">'+								
														'<p>My Attendance</p>'+
														'<span class="st-contact-no">Mark Attendance & Reports.</span>'+
													'</div>'+							
												'</div>'+
											'</div>'+
										'</li>';
							*/
							dataEleObj+='</ul>';
			
							$dynamicDataEle.append(dataEleObj);
							
						}
						panelsInitialization(true, true, loginDataResponse["userRoleId"]);
						$.mobile.changePage('#home-page',{ transition: "slideup"});
					}else{
						window.localStorage["password"] = '';
						window.localStorage["user_logged_in"] = 0;
						window.localStorage["appUserData"] = '';
						
						window.localStorage["email"] = '';
						
						var form = $("#loginForm");
						$("#username", form).val(window.localStorage["username"]);
						$.mobile.changePage('#login-page','slide');
						
						navigator.notification.alert(responseMessage,		//'Invalid Credentials, please try again.',
						    alertConfirm, appName, 'Ok');
					}
				hideModal();
			   },
			   error:function(data,t,f){
				   hideModal();
				   navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
				   var responseJson = $.parseJSON(data);
				   if(responseJson.status==404){
					   navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
				   }
			   }
			});
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		}
		$("#submitButton").removeAttr("disabled");
	}
	else{
		navigator.notification.alert('You must enter a username and password.', alertConfirm, appName, 'Ok');
		$("#submitButton").removeAttr("disabled");
	}
	return false;
}

function showExitDialog() {
    navigator.notification.confirm(
            ("Do you want to Exit?"), // message
            alertexit, // callback
            appName, // title
            'YES,NO' // buttonName
    );
}

//Call exit function
function alertexit(button){
    if(button=="1" || button==1){
        //device.exitApp();
        navigator.app.exitApp();
    }
}

function doLogout() {
	connectionType=checkConnection();
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
		navigator.notification.alert('Logout requires active internet connection', alertConfirm, appName, 'Ok');
	}
	else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
		showLogoutDialog();
	}
}

function alertConfirm(buttonIndex){
	// function for alert having no actions
}

function exitAppForcefully(buttonIndex){
	//Call exit function
    if(button=="1" || button==1){
        navigator.app.exitApp();
    }
}

function showLogoutDialog() {
    navigator.notification.confirm(
            ("Are you sure to Logout?"), // message
            alertlogout, // callback
            appName, // title
            'YES,NO' // buttonName
    );
}

//Call logout function
function alertlogout(button){
    if(button=="1" || button==1){
    	logout();
    }
}

function getRandomNumber(){
	var minimumNum=1;
	var maximumNum=74;
	var randomNum = Math.floor(Math.random() * (maximumNum - minimumNum + 1)) + minimumNum;
	return (randomNum-1);
}

function changeLoginRole(roleId,roleName){}

function refreshSelect(ele,currentValue){
	// Grabbing a select field
	var el = $(ele);
	// Select the relevant option, de-select any others
	if(currentValue!=""){
		el.val(currentValue).attr('selected', true).siblings('option').removeAttr('selected');
	}
	// Initialize the selectmenu
	el.selectmenu();
	// jQM refresh
	el.selectmenu("refresh", true);
}

/** 
 * Convert seconds to hh-mm-ss format.
 * @param {number} totalSeconds - the total seconds to convert to hh- mm-ss
**/
function secondsTohhmm(totalSeconds) {
  var hours   = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  //var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  // round seconds
  //seconds = Math.round(seconds * 100) / 100

  var result = (hours < 10 ? "0" + hours : hours);
      result += ":" + (minutes < 10 ? "0" + minutes : minutes);
      //result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}

function getTodayDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;//January is 0, so always add + 1

	var yyyy = today.getFullYear();
	if(dd<10){dd='0'+dd}
	if(mm<10){mm='0'+mm}
	//var todayString = yyyy+'-'+mm+'-'+dd;
	var todayString = dd + '/' +mm + '/' + yyyy;
	return todayString;
}

function currentDateTime() {
	var currentdate = new Date();
	var formattedSeconds=currentdate.getSeconds();
	if(formattedSeconds < 10){
		formattedSeconds = "0"+formattedSeconds;
	}
    var datetimeValue = formatdateTimeStr(currentdate.getFullYear()) + "-"
    				+formatdateTimeStr(currentdate.getMonth()+1)  +"-"
				    +formatdateTimeStr(currentdate.getDate()) 
	                +"T" 
	                + formatdateTimeStr(currentdate.getHours()) + ":"  
	                + formatdateTimeStr(currentdate.getMinutes()) + ":" 
	                + formatdateTimeStr(currentdate.getSeconds());
	return datetimeValue;
}

function formatdateTimeStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

function calculateDateTimeDiff(old_date,new_date) {
	// The number of milliseconds in one second
     var ONE_SECOND = 1000;
     // Convert both dates to milliseconds
     var old_date_obj = new Date(old_date).getTime();
     var new_date_obj = new Date(new_date).getTime();
     // Calculate the difference in milliseconds
     var difference_ms = Math.abs(new_date_obj - old_date_obj)
     // Convert back to totalSeconds
     var totalSeconds = Math.round(difference_ms / ONE_SECOND);
     //alert('total seconds--' +totalSeconds);
     return totalSeconds;
}
//function checkingUserAssignedRoles(){}

/* ************* Database Code Starts   -------------------------  */
// Open Database
function openDatabase() {
   db.transaction(initializeDB, errorCB, successCB);
}
//Close Database
function closeDatabase() {
}
//Populate the database 
function initializeDB(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS datas (id integer primary key autoincrement,pid integer,stud_manager text )');
}
//Transaction success callback
function successCB() {
	//alert('db transcation success');
}
//Transaction error callback
function errorCB(err) {
	//alert("Error processing SQL: "+err.code);
	//console.log("Error processing SQL: "+err.code);
}
/* ************* Database Code Ends   -------------------------  */

/*  ------------------- Function/Module Wise Code(For Parents/Student) Starts -------------------------  */

	function getDataByAction(actionName, mDataJsonString, successCallbackFn, errorCallbackFn) {
		connectionType=checkConnection();
		
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			showModal();
			var loginData={};
			loginData.username=window.localStorage["username"];
			loginData.password=window.localStorage["password"];
			loginData.gcmregdid = window.localStorage["gcmregistrationId"];
			//loginData.gcmregdid = "reg";//For Testing
			
			$.ajax({
				//type : 'POST',
				url:appUrl,
				data : {"action":actionName, "loginData":JSON.stringify(loginData), "mData":mDataJsonString },
				success: successCallbackFn,
			    error: errorCallbackFn
			});
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		}
	}
	
	function getDataByUrlAndData(url, data, successCallbackFn, errorCallbackFn, ajaxCallType) {
		connectionType=checkConnection();
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			showModal();
			var loginData={};
			loginData.username=window.localStorage["username"];
			loginData.password=window.localStorage["password"];
			loginData.gcmregdid = window.localStorage["gcmregistrationId"];
			//loginData.gcmregdid = "reg";//For Testing
			
			$.ajax({
				type : ajaxCallType,
				url: url,
				data : data,
				success: successCallbackFn,
			    error: errorCallbackFn
			});
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		}
	}
	
	function commonSuccessCallback(data) {
		hideModal();
		var res=jQuery.parseJSON(data);
		responseData=JSON.stringify(res);
		console.log(responseData);
	}
	
	function commonErrorCallback(data) {
	    hideModal();
		navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		var responseJson = $.parseJSON(data);
		if(responseJson.status==404){
		     navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');
		}
	}
	
	function drawSparkline(studentAttendence, periodsList) {
		studentAttendence[studentAttendence.length]= 0;
		var sparklineAttendance =$('.dynamicSparkbar').sparkline(
			 studentAttendence,{
				type : 'bar',
				width: '100%',
				height: '20',
				barWidth : 8,
				barSpacing : 1,
				colorMap : {
					'20' : '#DA8C10 ',
					'19' : '#000'
				},
				tooltipFormat : '<span style="color: {{color}}">&#9679;</span>{{offset:daysAndPeriods}} : {{value:levels}}',
				tooltipValueLookups : {
					levels : $.range_map({
						'0:' : '_',
						'1:19' : 'Absent',
						'20:' : 'Present'
					}),
					daysAndPeriods : periodsList,
				}
		});
		/*
		 * var sparkResize;
		$(window).resize(function(e) {
			clearTimeout(sparkResize);
			sparkResize = setTimeout(sparklineAttendance, 500);
		});
		sparklineAttendance();
		*/
	}
	
	function getAttendanceSuccessCallback(data){
		var responseJson=jQuery.parseJSON(data);
		if(responseJson.statusCode == "0" ){
			var actionResponse=responseJson["actionResponse"];
			var studentAttendence = actionResponse["output"];
			var periodsList = actionResponse["periodsList"];
			var maxDays = actionResponse["monthDays"];
			var month = actionResponse["month"];
			var monthYear = actionResponse["monthYear"];
			$("#monthWithYear").html(monthYear);
			drawSparkline(studentAttendence, periodsList);						
		}else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
	}
	
	var tableDivObj='<div class="table-div">'+
					    '<div class="date-time-details">'+
						'<span class="">replaceDate</span>'+
					    '<span class="pull-right">replaceTime</span>'+
					'</div>'+
					'<div class="general-details">'+
					     '<div class="ui-grid-a my-breakpoint">'+
					         '<div class="ui-block-a">'+
					            '<div class="name">replaceName</div>'+
					         '</div>'+
					        '<div class="ui-block-b text-align-right">'+
					           '<span class="link-custom-spam">'+
					             //'<a href="#">View</a>'+
					           '</span>'+
					        '</div>'+
					     '</div>'+
					     '<div class="more-details-main ">'+
					          '<div class="text-align-right">'+
					              '<a class="link" href="#" onclick="moreDetails(this);">Show Details</a>'+
					          '</div>'+
					          '<div style="display: none;" class="more-details moreDetailsDiv12">'+
					                 '<p class="other-details"><span>replaceOtherDetails</span></p>'+
					           '</div>'+
					      '</div>'+
					  '</div>'+
					'</div>';
	
	var tableDivObjEmpty='<div class="table-div">'+
						    '<div class="date-time-details"></div>'+
						    	'<div class="general-details">'+
							     '<div class="ui-grid-a my-breakpoint">'+
							         '<div class="ui-block-a">'+
							            '<div class="name">replaceName</div>'+
							         '</div>'+
							        '<div class="ui-block-b text-align-right">'+
							           '<span class="link-custom-spam">'+
							           '</span>'+
							        '</div>'+
							     '</div>'+
						  '</div>'+
						'</div>';
	
	function commonPageSuccessCallback(data){
		var responseJson=jQuery.parseJSON(data);
		if(responseJson.statusCode == "0" ){
			//var $parentEleObj=$('.common-page-tab1 .table-main-div');
			var $parentEleObj = $('.common-page-tab1 .mb-st-assignment-list ul.st-assigment');
			$parentEleObj.html("");
			$('.common-page-tab1 .mb-st-assignment-list').show();
			var actionHeading=responseJson["actionHeading"];
			$('.common-page-tab1 .common-page-tab-heading').html(actionHeading);
			
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
			
			if(action=="getAssignments"){
				commonPageAssignmentData($parentEleObj, jsonData);
			}
			else if(action=="getLibraryBooksAllocated"){
				commonPageLibraryData($parentEleObj, jsonData);
			}
			else if(action=="getAcademicAcheivements"){
				commonPageAcademicAcheivementsData($parentEleObj, jsonData);
			}
			else if(action=="getSeminars"){
				commonPageSeminarsData($parentEleObj, jsonData);
			}
			else if(action=="getExternalActivies"){
				commonPageExternalActiviesData($parentEleObj, jsonData);
			}
			else if(action=="getDisciplines"){
				commonPageDisciplinesData($parentEleObj, jsonData);
			}
			else if(action=="getScholoarships"){
				commonPageScholoarshipsData($parentEleObj, jsonData);
			}
			else if(action=="getPreviousInstitutes"){
				commonPagePreviousInstitutesData($parentEleObj, jsonData);
			}
			else if(action=="getTimetable"){
				commonPageTimetableData($parentEleObj, jsonData);
			}
			else if(action=="getHolidays"){
				commonPageHolidaysData($parentEleObj, jsonData);
			}
			else if(action=="getStanDivisionMapForStaff"){
				commonPageStanDivisionMapForStaffData($parentEleObj, jsonData);
			}
			else if(action=="getSubjectAllocationForStaff"){
				$commonListPageHeadingEle = $('#common-list-page #dynamicDataMain .dynamic-data-heading').html(actionHeading);;
				$commonListPageUlEle = $('#common-list-page #dynamicDataMain .data-div ul');
				$commonListPageUlEle.html("");
				
				commonPageSubjectAllocationForStaffData($commonListPageUlEle, jsonData);
			}
			else if(action=="getAttendanceForStaff"){
				commonPageAttendanceForStaffData($parentEleObj, jsonData);
			}
			$.mobile.changePage('#common-page','slide');
		}else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
	}
	
	function commonPageLiNoDataMsg($parentEleObj, msg){
		var statusClass = "status-common";
		var dataEleObj = '<li>'+
							'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
							'<div class="st-assign-detail">'+
								'<span class="assign-arrow"></span>'+
									'<p class="assign-title"> ' + msg +
									'</p>'+
							'</div>'+
						'</li>';
		$parentEleObj.append(dataEleObj);
	}
	
	function getNewsEventAndCommListForParent(){
		mData={};
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getNewsEventAndCommListForParent", JSON.stringify(mData), getNewsEventAndCommListForParentSuccessCB, commonErrorCallback);
	}
	
	function getNewsEventAndCommListForParentSuccessCB(data){
		var responseJson=jQuery.parseJSON(data);
		if(responseJson.statusCode == "0" ){
			var $parentEleObj=$('#allChatsDiv ul.all-chats-ul');
			$parentEleObj.html("");
			//var actionHeading=responseJson["actionHeading"];
			//$('.common-user-list-details .page-tab-heading').html(actionHeading);
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
			if(jsonData.length > 0){
				jQuery.each(jsonData, function(index, item) {
					var onclickFn = "alertCustomMsg('No reply option availabe for this event.');return false;";
					if(item["participation_required"]){
						onclickFn = "loadChat(this);return false;";
					}
					var dataEleObj = '<li onclick=" '+onclickFn+' " data-id="'+ item["id"] +'" data-name="'+ item["name"] +'" data-participationFlag="'+ item["participation_required"] +'" '+
											' >'+
										'<div class="main-content">'+
											'<div class="feat_small_icon">'+
												'<i class="fa fa-calendar"></i>'+
											'</div>'+
											'<div class="feat_small_details">'+
												'<h5> '+ item["name"] +' </h5>'+
												'<a href="#" class="ui-link"> '+ item["message"] + '</a>'+
											'</div>'+
										'</div>'+	
										'<div class="time_detail">'+
											'<span class="time_sub">'+
												' Contact Person: '+ item["contact_person_name"] +'</span>'+
										'</div>'+
										'<div class="time_detail">'+
											'<span class="time_sub">'+
												'Start Date: '+ item["start_date"] +' '+ item["start_time"] +' </span>'+
											'<span class="sub_person"> </span>'+
										'</div>'+
										'<div class="time_detail">'+
											'<span class="time_sub">'+
												'End Date: '+ item["end_date"] +' '+ item["end_time"] +' </span>'+
										'</div>'+
										'<div class="time_detail">'+
											'<span class="time_sub">'+
												'Evevt Type: '+ item["evevt_type"] +' </span>'+
										'</div>'+
										
									'</li>';
					$parentEleObj.append(dataEleObj);
				});
			}else{
				var dataEleObj="<li>No Data</li>";
				$parentEleObj.append(dataEleObj);
			}
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
	}
	
	function loadChat(thiss){
		mData={};
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		mData.p3= $(thiss).data("id");
		getDataByAction("getNewsEventAndCommCommentsListForParent", JSON.stringify(mData), getNewsEventAndCommCommentsListForParentSuccessCB, commonErrorCallback);
		$.mobile.changePage('#chat-page','slide');
	}
	
	function getNewsEventAndCommCommentsListForParentSuccessCB(data){
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			var $parentEleObj=$('#oneToOneChatSection ul.chat');
			$parentEleObj.html("");
			var jsonData=responseJson["data"];
			$("#chat-page .eventId").val(jsonData["id"]);
			
			if( jsonData["participation_required"] ){
				$(".msg-send-conatiner").show();	
			}else{
				$(".msg-send-conatiner").hide();	
			}
			var commentsArr = jsonData["commentsArr"];
			if(commentsArr.length > 0){
				jQuery.each(commentsArr, function(index, item) {
					var msgInOutClass="";
					if(item["userRole"] == "Me"){
						msgInOutClass ="msg-in";
					}else{
						msgInOutClass ="msg-out";
					}
					var dataEleObj = '<li class="'+ msgInOutClass +'">'+
										'<span class="avatar"><span></span><img src="img/avatars/avatar-male.png" alt=""></span>'+
										'<div class="message">'+
											'<div class="msg-txt">'+
												'<span class="arrow"></span>'+
												'<p class="msg-body">'+ item["comment"] +'</p>'+
											'</div>'+
											'<div class="msg-detail">'+
												'<span class="st-sender name">'+ item["userRole"] +'</span>'+
												'<span class="st-sender msg-date pull-right"><i class="fa fa-clock-o"></i>'+ item["datetime"] +'</span>'+
											'</div>'+
										'</div>'+							
									'</li>';
					$parentEleObj.append(dataEleObj);
				});
			}else{
				var dataEleObj="<li>No Data</li>";
				$parentEleObj.append(dataEleObj);
			}
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
	}
	
	function addCommentDetails(thiss){
		var $commentData = $("#chat-page .commentBox").val();
		if($commentData == ""){
			alertCustomMsg("Please input some text.");
		}else{
			mData={};
			mData.p1=window.localStorage["studDetailsId"];
			mData.p2=window.localStorage["studStandardDivisionId"];
			mData.p3= $("#chat-page .eventId").val();
			mData.p4= $commentData;
			getDataByAction("addCommentDetails", JSON.stringify(mData), addCommentDetailsSuccessCB, commonErrorCallback);
		}	
	}
	
	function addCommentDetailsSuccessCB(data){
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			$("#chat-page .commentBox").val('');
			var $parentEleObj=$('#oneToOneChatSection ul.chat');
			var jsonData=responseJson["data"];
			
			var msgInOutClass ="msg-in";
			var dataEleObj = '<li class="'+ msgInOutClass +'">'+
								'<span class="avatar"><span></span><img src="img/avatars/avatar-male.png" alt=""></span>'+
								'<div class="message">'+
									'<div class="msg-txt">'+
										'<span class="arrow"></span>'+
										'<p class="msg-body">'+ jsonData["comment"] +'</p>'+
									'</div>'+
									'<div class="msg-detail">'+
										'<span class="st-sender name">Me</span>'+
										'<span class="st-sender msg-date pull-right"><i class="fa fa-clock-o"></i>Now</span>'+
									'</div>'+
								'</div>'+							
							'</li>';
			$parentEleObj.append(dataEleObj);
				
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
	}
	
	function getLibraryBooksAllocated(){
		mData={};
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getLibraryBooksAllocated", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageLibraryData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "status-common";
				
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												//'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
												'<span class="assign-date">Issued On:' + item["bookIssuedDate"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["book"] +
											'</p>'+
											'<div class="st-assign-more-info">'+
												'<span class="sub-name">Return Date: ' + item["bookReturnDate"] + ' </span>'+
												'<span class="submit-date">Standard Division:  ' + item["stanDiv"] + '   </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	//getAssignments -- revamped(For Student Parent Only)
	//getAcademicAcheivements -- revamped(For Student Parent Only)
	//getSeminars -- revamped(For Student Parent Only)
	//getExternalActivies -- revamped(For Student Parent Only)
	//getDisciplines -- revamped(For Student Parent Only)
	//getScholoarships -- revamped(For Student Parent Only)
	//getPreviousInstitutes -- revamped(For Student Parent Only)
	//getTimetable -- revamped(For Student Parent Only)
	//getHolidays -- revamped(For Student Parent Only)
	
	function getHolidays(){
		mData={};	
		mData.p1="";
		getDataByAction("getHolidays", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageHolidaysData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "status-common";
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												'<span class="sub-name">Day: ' + item["day"] + ' </span>'+
												'<span class="assign-date">Year: ' + item["year"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["date"] +"("+item["reason"]+")" +
											'</p>'+
											'<div class="st-assign-more-info">'+
												'<span class="sub-name">Reason: ' + item["reason"] + ' </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	function getAssignments(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getAssignments", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageAssignmentData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "";
				var studAssignmentStatus = item["studAssignmentStatus"];
				
				if(studAssignmentStatus == 2 || studAssignmentStatus == 8 || studAssignmentStatus == 9  ){
					statusClass = "status-completed";
				}else if(studAssignmentStatus == 3 || studAssignmentStatus == 6 || studAssignmentStatus == 7  ){
					statusClass = "status-pending";
				}
				
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												//'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
												'<span class="assign-date">Posted On:' + item["assignmentPublishdDate"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["assignmentName"] +
												//'<a href="" class="assign-attachment"><i class="fa fa-paperclip"></i></a>'+
											'</p>'+
											'<div class="st-assign-more-info">'+
												// '<span class="teacher-name">By :  ' + item["assignmentSubjectName"] + '   </span>'+
												'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
												'<span class="submit-date">Due on:  ' + item["submissionDate"] + '   </span>'+
												'<span class="submit-status">Status :  ' + item["studAssignmentStatusName"] + ' </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				var otherDetails='Comment :'+item["comment"]+'<br/><p>Description: '+item["assignmentDescription"]+'</p>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	function getAssignmentForStudTabs(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getAssignmentsForStudTabs", JSON.stringify(mData), assignmentForStudTabsSuccessCB, commonErrorCallback);
	}
	
	function assignmentForStudTabsSuccessCB(data){
		var responseJson=jQuery.parseJSON(data);
		if(responseJson.statusCode == "0" ){
			var $mbStudentAssignment =$('.mb-student-assignment');
			var $parentEleObj = $mbStudentAssignment.find('.mb-st-assignment-list ul.st-assigment');
			var $parentEleObjCompleted = $mbStudentAssignment.find('.mb-st-assignment-completed ul.st-assigment');
			var $parentEleObjPending = $mbStudentAssignment.find('.mb-st-assignment-pending ul.st-assigment');
			$parentEleObj.html("");
			$parentEleObjCompleted.html("");
			$parentEleObjPending.html("");
			
			var jsonData=responseJson["data"];
			var totalAssignmentCount=0, pendingAssignmentCount = 0, completedAssignmentCount= 0, notCompletedAssignmentCount= 0;
			totalAssignmentCount = jsonData.length;
			if(jsonData.length > 0){
				jQuery.each(jsonData, function(index, item) {
					var pendingFlag= false, completedFlag= false;
					var statusClass = "";
					var studAssignmentStatus = item["studAssignmentStatus"];
					// Yellow 1 4 5 // Green 2 8 9	// Red 3 6 7
					if(studAssignmentStatus == 1 || studAssignmentStatus == 4 || studAssignmentStatus == 5  ){
						statusClass = "";
						pendingFlag =  true;
						pendingAssignmentCount++;
					}
					else if(studAssignmentStatus == 2 || studAssignmentStatus == 8 || studAssignmentStatus == 9  ){
						statusClass = "status-completed";
						completedFlag =  true;
						completedAssignmentCount++;
					}else if(studAssignmentStatus == 3 || studAssignmentStatus == 6 || studAssignmentStatus == 7  ){
						statusClass = "status-pending";
						notCompletedAssignmentCount++;
					}
					var dataEleObj = '<li>'+
										'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
										'<div class="st-assign-detail">'+
											'<span class="assign-arrow"></span>'+
												'<div class="assign-header">'+
													//'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
													'<span class="assign-date">Posted On:' + item["assignmentPublishdDate"] + ' </span>'+
												'</div>'+
												'<p class="assign-title"> ' + item["assignmentName"] +
													//'<a href="" class="assign-attachment"><i class="fa fa-paperclip"></i></a>'+
												'</p>'+
												'<div class="st-assign-more-info">'+
													// '<span class="teacher-name">By :  ' + item["assignmentSubjectName"] + '   </span>'+
													'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
													'<span class="submit-date">Due on:  ' + item["submissionDate"] + '   </span>'+
													'<span class="submit-status">Status :  ' + item["studAssignmentStatusName"] + ' </span>'+
												'</div>'+
										'</div>'+
									'</li>';
					
					var otherDetails='Comment :'+item["comment"]+'<br/><p>Description: '+item["assignmentDescription"]+'</p>';
					if(pendingFlag){
						$parentEleObjPending.append(dataEleObj);
					}else if(completedFlag){
						$parentEleObjCompleted.append(dataEleObj);
					}
					$parentEleObj.append(dataEleObj);
				});
				
				if(completedAssignmentCount == 0){
					commonPageLiNoDataMsg($parentEleObjCompleted, noDataFoundMsg);
				}
				if(pendingAssignmentCount == 0){
					commonPageLiNoDataMsg($parentEleObjPending, noDataFoundMsg);
				}
			}else{
				commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
				commonPageLiNoDataMsg($parentEleObjCompleted, noDataFoundMsg);
				commonPageLiNoDataMsg($parentEleObjPending, noDataFoundMsg);
			}
			$(".mb-student-assignment .mb-student-assignment-dashboard li").each(function( index ) {
				var $currentLink = $(this).find("a");
				var relAttr = $(this).find("a").attr("rel");
				
				if(relAttr == "mb-st-assignment-list"){
					$currentLink.find("span").html(totalAssignmentCount);
				}else if(relAttr == "mb-st-assignment-completed"){
					$currentLink.find("span").html(completedAssignmentCount);
				}else if(relAttr == "mb-st-assignment-pending"){
					$currentLink.find("span").html(pendingAssignmentCount);
				}
			});
			
		}else{
			navigator.notification.alert(serverBusyMsg, alertConfirm,appName,'Ok');					
		}
		hideModal();
	}
	
	function getAcademicAcheivements(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getAcademicAcheivements", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageAcademicAcheivementsData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			var statusClass = "status-common";
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												//'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
												//'<span class="assign-date">For: ' + item["standardName"] + item["divisionName"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["studentAcadimicAchievementsDetails"] +
											'</p>'+
											'<div class="st-assign-more-info">'+
												// '<span class="teacher-name">By :  ' + item["assignmentSubjectName"] + '   </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	function getSeminars(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getSeminars", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageSeminarsData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "status-common";
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												//'<span class="sub-name">Day: ' + item["day"] + ' </span>'+
												//'<span class="assign-date">For: ' + item["standardName"] + item["divisionName"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["seminarName"] +
											'</p>'+
											'<div class="st-assign-more-info">'+
												'<span class="sub-name">Details: ' + item["seminarDetails"] + ' </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	function getExternalActivies(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getExternalActivies", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageExternalActiviesData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "status-common";
					var dataEleObj = '<li>'+
										'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
										'<div class="st-assign-detail">'+
											'<span class="assign-arrow"></span>'+
												'<div class="assign-header">'+
													//'<span class="sub-name">Subject: ' + item["assignmentSubjectName"] + ' </span>'+
													//'<span class="assign-date">Year:' + item["year"] + ' </span>'+
												'</div>'+
												'<p class="assign-title"> ' + item["studentExternalActivityName"] +
												'</p>'+
												'<div class="st-assign-more-info">'+
													'<span class="teacher-name">Type:' + item["studentExternalActivityAchievement"] + '   </span>'+
												'</div>'+
										'</div>'+
									'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	function getDisciplines(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getDisciplines", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageDisciplinesData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "status-common";
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												'<span class="sub-name">Date: ' + item["date"] + ' </span>'+
												//'<span class="assign-date">Year: ' + item["year"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["warningLevel"] +
											'</p>'+
											'<div class="st-assign-more-info">'+
												'<span class="teacher-name">Comment:  ' + item["comment"] + '   </span>'+
												//'<span class="assign-date">For: ' + item["standardName"] + item["divisionName"] + ' </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	function getScholoarships(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getScholoarships", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageScholoarshipsData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var statusClass = "status-common";
				var dataEleObj = '<li>'+
									'<i class="fa fa-dot-circle-o status-circle '+statusClass+' "></i>'+
									'<div class="st-assign-detail">'+
										'<span class="assign-arrow"></span>'+
											'<div class="assign-header">'+
												//'<span class="sub-name">Date: ' + item["date"] + ' </span>'+
												//'<span class="assign-date">For: ' + item["standardName"] + item["divisionName"] + ' </span>'+
											'</div>'+
											'<p class="assign-title"> ' + item["scholarshipType"] +
											'</p>'+
											'<div class="st-assign-more-info">'+
												'<span class="teacher-name">Schlorship Prize:  ' + item["studentSchlorshipAmount"] + '   </span>'+
												'<span class="teacher-name">Schlorship Grade:  ' + item["studentSchlorshipGrade"] + '   </span>'+
											'</div>'+
									'</div>'+
								'</li>';
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}	
	
	function getPreviousInstitutes(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getPreviousInstitutes", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPagePreviousInstitutesData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj="";
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}	
	
	function getTimetable(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getTimetable", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageTimetableData($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj="";
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageLiNoDataMsg($parentEleObj, noDataFoundMsg);
		}
	}
	
	// Staff Realted Ajax Methods	
	// getStanDivisionMapForStaff 
	// getSubjectAllocationForStaff 
	// getAttendanceForStaff
	var userListsLi='<li class="user_list_li" onclick="replaceOnClickMethod;" >'+
						'<div class="user-details">'+
							'<div class="user-img"><img title="" alt="" src="img/avatars/avatar-male.png"></div>'+
							
							'<div class="small_details">'+
								'<h5 class="user-name">replaceName</h5>'+
								'<input type="hidden" id="user-id" value="replaceUserId" >'+
								'<a href="#" class="ui-link">replaceUserData1</a>'+
							'</div>'+
							
							'<div class="display-none">replaceHiddenFields</div>'+
							
							'<div class="action_icon">'+
								'<a href="#" class="ui-link"><img title="" alt="" src=""></a>'+
							'</div>'+
						'</div>'+
					'</li>';
	
	var userListsLiNoData='<li class="user_list_li" >'+
							'<div class="user-details">'+
								'<div class="small_details">'+
									'<h5 class="user-name">replaceName</h5>'+
								'</div>'+
							'</div>'+
						'</li>';
	
	var periodListAttendanceDiv = 	'<div class="period-list-attendance-div display-none" >'+
										'<ul class="period-list-attendance" id="period-list-attendance">'+
											'<li class="select-all selected">All</li>'+
										'</ul>'+
									'</div>';
	
	function getStanDivisionMapForStaff(){
		mData={};	
		mData.p1=window.localStorage["staffDetailsId"];
		mData.p2="";
		getDataByAction("getStaffSDMapByStaffData", JSON.stringify(mData), getStanDivisionMapForStaffSuccessCallback, commonErrorCallback);
	}
	
	function getStanDivisionMapForStaffSuccessCallback(data){
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			var $parentEleObj=$('.common-user-list-details ul.user_list_detailed');
			$parentEleObj.html("");
			
			var actionHeading=responseJson["actionHeading"];
			$('.common-user-list-details .page-tab-heading').html(actionHeading);
			
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
		
			getStanDivisionMapForStaffDataParse($parentEleObj, jsonData);
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
		$.mobile.changePage('#common-user-list-page', 'slide');
	}
	
	var staffSelectedSDID;
	function getStanDivisionMapForStaffDataParse($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var yearString=0;
				var dataEleObj='<li onclick="staffStanDivMapActionBtn(this);" >'+
									'<div class="mb-student-container" data-ssdmid="' + item["ssdmid"] + '" data-sdid="' + item["sdid"] + '" >'+
										'<div class="st-profile-img list">'+
											'<span><span></span><i class="fa fa-tags" aria-hidden="true"></i>'+
										'</div>'+
										'<div class="mb-st-content">'+											
											'<div class="st-prof-info">'+								
												'<p>' + item["stanDivName"] + '</p>'+
												'<span class="st-contact-no">' + item["stanName"] + '</span>'+
												//'<span class="st-atte-percent">99%</span>'+
												
											'</div>'+							
										'</div>'+
									'</div>'+
									'<div class="attendance-form animate bounceInRight display-none" style="position: relative; top: 0px;">'+
										'<div class="st-atte-detail-info">'+
											'<div class="st-atte-approve" onclick="getSSDListForAttendance(' + item["sdid"] + ',' + yearString + ');">'+
												'<label>Attendance</label>'+
												'<a class="" href="#"> <i class="fa fa-calendar-check-o"></i></a>'+
											'</div>'+
											'<div class="st-atte-approve" onclick="getHomeworkData('+ item["sdid"] +');">'+
												'<label>Homework</label>'+
												'<a class="" href="#"> <i class="fa fa-file-text"></i></a>'+
											'</div>'+
										'</div>'+	
									'</div>'+
								'</li>';
				var hiddenData="";
				hiddenData+="";
				$parentEleObj.append(dataEleObj);
				
			});
			/*
			var tipText='<div>'+
							'<strong>TIP: Click on above link to get actions.</strong>'+
						'</div>';
			
			$parentEleObj.after(tipText);
			*/
		}else{
			var resMsg="Its seesm that no classes assigned to you, please contact administrator.";
			var dataEleObj='<li>'+ resMsg +'</li>';
			$parentEleObj.append(dataEleObj);
			
			navigator.notification.alert(resMsg, alertConfirm, appName, 'Ok');	
		}
	}
	
	function getSSDListForAttendance(stanDivId, year){
		mData={};	
		mData.p1 = stanDivId;
		mData.p2 = "";//year
		mData.p3 = window.localStorage["staffDetailsId"];
		getDataByAction("getSSDListForAttendance", JSON.stringify(mData), getSSDListForAttendanceSuccessCB, commonErrorCallback);
	}
	
	function getSSDListForAttendanceSuccessCB(data){
		var page="take-attendance-page";
		var responseJson=jQuery.parseJSON(data);
		if(responseJson.statusCode == "0" ){
			var $parentEleObj=$('#'+page+' .stan-div-students-details ul.user_list_detailed');
			$parentEleObj.html("");
			var actionHeading=responseJson["actionHeading"];
			$('.stan-div-students-details .page-tab-heading').html(actionHeading);
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
			var jsonDataAttendanceConfig=responseJson["attendanceConfig"];
			parseSSDListForAttendance($parentEleObj, jsonData, jsonDataAttendanceConfig, responseJson);
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
		hideModal();
		$.mobile.changePage('#'+page,'slide');
	}
	
	function parseSSDListForAttendance($parentEleObj, jsonData, jsonDataAttendanceConfig, responseJson){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			
			var attendancePerDay=jsonDataAttendanceConfig["attendancePerDay"];
			var dayType=jsonDataAttendanceConfig["dayType"];
			var dayName=jsonDataAttendanceConfig["dayName"];
			var serverCurrentDayName=jsonDataAttendanceConfig["serverCurrentDayName"];
			var serverCurrentDate=jsonDataAttendanceConfig["serverCurrentDate"];
			
			var actionHeading= jsonData[0]["stanDivName"] + " " + responseJson["actionHeading"];
			$('.stan-div-students-details .page-tab-heading').html(actionHeading);
			
			
			var attendanceDateDivData= serverCurrentDate + " - " + serverCurrentDayName;
			$('.stan-div-students-details .attendance-date-div').html(attendanceDateDivData);
			
			jQuery.each(jsonData, function(index, item) {
				
				var dataEleObj='<li data-sdid="' + item["studid"] + '"  data-ssdid="' + item["ssdid"] + '"  data-rollno="' + item["roll_no"] + '" >'+
									'<div class="mb-student-container" data-ssdid="' + item["ssdid"] + '" >'+
										'<div class="st-profile-img">'+
											'<span><span></span><img alt="" src="' + item["image"] + '"></span>'+
										'</div>'+
										'<div class="mb-st-content">'+											
											'<div class="st-prof-info">'+								
												'<p>' + item["name"] + '</p>'+
												'<span class="st-contact-no">' + item["roll_no"] + '</span>'+
												//'<span class="st-atte-percent">99%</span>'+
												'<div class="st-period-info period-result">'+
													'<ul class="period-list">';
				
													for(attenCount = 1; attenCount <= attendancePerDay; attenCount++) { 
														  dataEleObj +=
																'<li><a class="atten-cust-checkbox" href="#">'+ attenCount +'</a></li>';
													}
													
										dataEleObj +='</ul>'+
												'</div>'+
											'</div>'+							
											'<a class="action-btn default" data-state="" onclick="attendanceActionBtn(this);" ></a>'+
										'</div>'+
									'</div>'+
									'<div class="attendance-form animate bounceInRight display-none" style="position: relative; top: 0px;">'+
										'<div class="st-atte-detail-info">'+
											'<div class="st-atte-approve" data-sdid="' + item["studid"] + '" >'+
												'<label>Approve</label>'+
												'<a class="atten-cust-checkbox attendanceApproveCheckbox" href="#" id="attendanceApproveCheckbox" name="attendanceApproveCheckbox" data-approvereasonid="" onclick="attendanceApproveCheckboxFn(this);"> <i class="fa fa-check"></i></a>'+
												'<label data-sdid="' + item["studid"] + '" name="approveReasonsSelectLabel" id="approveReasonsSelectLabel" for="approveReasonsSelect" class="select approveReasonsSelectLabel" onclick="openapproveReasonsSelect(this);"></label>'+
												'<select name="approveReasonsSelect'+item["studid"]+'" id="approveReasonsSelect'+item["studid"]+'" data-native-menu="false" class="approveReasonsSelect approveReasonsSelect'+item["studid"]+' display-none" data-sdid="' + item["studid"] + '" onchange="approveReasonsSelectChangeFn(this);" > cur'+
													'<option value="0">-- Select Reason  --</option>'+
													'<option value="1">No Reason</option>'+
													'<option value="2">Sick Leave</option>'+
													'<option value="3">Approved By Parent</option>'+
												'</select>'+
											'</div>'+
											'<div class="st-period-info">'+
												'<label>Periods</label>'+
												'<ul class="period-list">';
													
													if(attendancePerDay>1){
														dataEleObj +=
															'<li class="select-all"><a class="atten-cust-checkbox" href="#" onclick="attendanceCheckboxAll(this);">All</i></a></li>';
													}
													
													for(attenCount = 1; attenCount <= attendancePerDay; attenCount++) { 
														dataEleObj +=
															'<li class="single"><a class="atten-cust-checkbox" href="#" onclick="attendanceCheckbox(this);">'+ attenCount +'</a></li>';
													}
												
									dataEleObj +='</ul>'+
									
											'</div>'+
										'</div>'+	
									'</div>'+
								'</li>';
				$parentEleObj.append(dataEleObj);
			});
		}else{
			var dataEleObj=tableDivObj;
			$parentEleObj.append(dataEleObj);
		}
	}
	
	function getSubjectAllocationForStaff(){
		mData={};	
		mData.p1=window.localStorage["staffDetailsId"];
		mData.p2="";//year
		getDataByAction("getSubjectAllocationForStaff", JSON.stringify(mData), getSubjectAllocationForStaffSuccessCB, commonErrorCallback);
	}
	
	function getSubjectAllocationForStaffSuccessCB(data){
		var page="show-my-subjects";
		
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			var actionHeading=responseJson["actionHeading"];
			$('#'+page+' .dynamic-data-heading').html(actionHeading);
			
			var $parentEleObj=$('#'+page+' .dynamic-data-main .data-div');
			$parentEleObj.html("");
			
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
			
			var dataEleObj= '<ul class="user_list_detailed mb-student-attendance-list">';
			
			$parentEleObj.html("");
			
			if(jsonData.length > 0){
				
				jQuery.each(jsonData, function(index, item) {
					dataEleObj+='<li >'+
									'<div class="mb-student-container" >'+
										'<div class="st-profile-img list">'+
											'<span><span></span><i class="fa fa-files-o" aria-hidden="true"></i>'+
										'</div>'+
										'<div class="mb-st-content full-width">'+											
											'<div class="st-prof-info">'+								
												'<p>'+ item["subjectName"] +'</p>'+
												'<span class="st-contact-no">'+ item["stanDivName"] +
													'<br/>'+ item["subjectShortName"] +'- '+ item["subjectCode"] +' </span>'+
											'</div>'+							
										'</div>'+
									'</div>'+
								'</li>';
				});
				dataEleObj+='</ul>';
				
				$parentEleObj.append(dataEleObj);
			
			}
			else{
				var resMsg="Its seesm that no classes assigned to you, please contact administrator.";
				$parentEleObj.html("");
				var dataEleObj= '<ul class="user_list_detailed mb-student-attendance-list">';
				dataEleObj+='<li>'+resMsg+'</li>';
				dataEleObj+='</ul>';
				$parentEleObj.append(dataEleObj);
				
				navigator.notification.alert(resMsg,alertConfirm,appName,'Ok');					
			}
			hideModal();
			$.mobile.changePage('#'+page,'slide');
		}
	}
	
	function saveUpdateStudAttendanceData(attenJsonData){
		mData={};	
		mData.p1="";//year
		mData.p2="";//date
		mData.p3=window.localStorage["userRoleId"];//user role id
		var currUserId=0;
		if(window.localStorage["userRoleId"] == 4 || window.localStorage["userRoleId"] == 9){
			currUserId=window.localStorage["studDetailsId"];
			mData.p5= window.localStorage["studStandardDivisionId"]; // Student Standard Division Id
		}
		else if(window.localStorage["userRoleId"] == 2){
			currUserId=window.localStorage["staffDetailsId"];
			//mData.p6= sdid; // Standard Division Id
		}
		else{
			currUserId=window.localStorage["staffDetailsId"];
		}
		mData.p4= currUserId;// user id
		
		mData.p7= attenJsonData;// attenJsonData
		getDataByAction("saveUpdateStudAttendanceData", JSON.stringify(mData), saveUpdateStudAttendanceDataSuccessCB, commonErrorCallback);
	}
	
	function saveUpdateStudAttendanceDataSuccessCB(data){
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			navigator.notification.alert(responseJson.m, alertConfirm, appName, 'Ok');
			hideModal();
		}
		else{
			hideModal();
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
	}
	
	function getHomeworkData(sdid){
		staffSelectedSDID=sdid;
		mData={};	
		mData.p1="";//year
		mData.p2="";//date
		mData.p3=window.localStorage["userRoleId"];//user role id
		var currUserId=0;
		if(window.localStorage["userRoleId"] == 4 || window.localStorage["userRoleId"] == 9){
			currUserId=window.localStorage["studDetailsId"];
			mData.p5= window.localStorage["studStandardDivisionId"]; // Student Standard Division Id
		}
		else if(window.localStorage["userRoleId"] == 2){
			currUserId=window.localStorage["staffDetailsId"];
			mData.p6= sdid; // Standard Division Id
		}
		else{
			currUserId=window.localStorage["staffDetailsId"];
		}
		mData.p4= currUserId;// user id
		getDataByAction("getHomeworkData", JSON.stringify(mData), getHomeworkDataSuccessCB, commonErrorCallback);
	}
	
	var staffSubjectsArr=[];
	function getHomeworkDataSuccessCB(data){
		var page="show-homework-data";
		
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			var actionHeading=responseJson["actionHeading"];
			
			if(window.localStorage["userRoleId"] == 4 || window.localStorage["userRoleId"] == 9){
			}	
			else if(window.localStorage["userRoleId"] == 2){
				actionHeading+= '<a style="color: black;" class="app-link active ui-link ui-btn ui-btn-b" '+
				'data-theme="b" data-icon="" href="#" onclick="gotoAssignHomeworkPage();">Assign Homework</a>';
			}
			
			$('#'+page+' .dynamic-data-heading').html(actionHeading);
			
			var $parentEleObj=$('#'+page+' .dynamic-data-main .data-div');
			$parentEleObj.html("");
			
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
			var jsonDynDataArr=jsonData["dynData"];
			
			staffSubjectsArr=jsonData["staffSubjectsArr"];
			
			var dynDateData="";
			$('#'+page+' .dynamic-date-div').html(jsonData["dynDate"]);
			
			var dataEleObj= '<ul class="user_list_detailed mb-student-attendance-list">';
			
			$parentEleObj.html("");
			
			if(jsonDynDataArr.length > 0){
				jQuery.each(jsonDynDataArr, function(index, item) {
					dataEleObj+='<li >'+
									'<div class="mb-student-container" >'+
										'<div class="st-profile-img list">'+
											'<span><span></span><i class="fa fa-files-o" aria-hidden="true"></i>'+
										'</div>'+
										'<div class="mb-st-content full-width">'+											
											'<div class="st-prof-info">'+								
												'<p class="st-bg-dark-purple">'+ item["subjectName"] +'</p>'+
												'<p class="st-bg-dark-purple">Assigned On:'+ item["homeworkAssignDate"] +'</p>'+
												'<p class="st-bg-dark-purple">Submission Date:'+ item["homeworkSubmissionDate"] +'</p>'+
												'<p class="st-contact-no">'+ item["homeworkText"] +' </p>'+
											'</div>'+							
										'</div>'+
									'</div>'+
								'</li>';
				});
			}
			else{
				dataEleObj+='<li >'+
								'<div class="mb-student-container" >'+
									'<div class="mb-st-content full-width">'+											
										'<div class="st-prof-info">'+								
											'<p class="st-bg-dark-purple">No Homework Assigned</p>'+
										'</div>'+							
									'</div>'+
								'</div>'+
							'</li>';
			}
			
			dataEleObj+='</ul>';
			$parentEleObj.append(dataEleObj);
			
			hideModal();
			$.mobile.changePage('#'+page,'slide');
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,appName,'Ok');					
		}
	}
	
	function gotoAssignHomeworkPage(){
		var page="data-entry-homework";
		
		var select=$('#'+page).find("#selectSubject");
		
		$('#'+page).find("#selectSubject option").remove();
        $.each(staffSubjectsArr, function(index, itemData) {           
            var optTempl = '<option value="' +itemData["stanSubjectId"]+ '">'+itemData["subjectName"]+'</option>';            
            select.append(optTempl)
        });
        var option1 = $($("option", select).get(1));
        var currentValue="";
        if(staffSubjectsArr.length>0){
        	currentValue=staffSubjectsArr[0]["stanSubjectId"];
        }
		refreshSelect(select, currentValue);
		
		$('#'+page).find("#staffSelectedSDID").val(staffSelectedSDID);
		
		$.mobile.changePage('#'+page,'slide');
	}
	
	function saveUpdateHomeworkData(){
		var $formObj=$("#data-entry-homework form#dataEntryHomeworkForm");
		
		if($formObj[0].checkValidity()){
			var formData={};
			formData["studhwId"]=$formObj.find("#studhwId").val();
			formData["staffSelectedSDID"]=$formObj.find("#staffSelectedSDID").val();
			formData["subAfterInDays"]=$formObj.find("#subAfterInDays").val();
			formData["selectSubject"]=$formObj.find("#selectSubject option:selected").val();
			formData["homeworkText"]=$formObj.find("#homeworkText").val();
			
			mData={};	
			mData.p1="";//year
			mData.p2="";//date
			mData.p3=window.localStorage["userRoleId"];//user role id
			var currUserId=0;
			if(window.localStorage["userRoleId"] == 4 || window.localStorage["userRoleId"] == 9){
				currUserId=window.localStorage["studDetailsId"];
				mData.p5= window.localStorage["studStandardDivisionId"]; // Student Standard Division Id
			}
			else if(window.localStorage["userRoleId"] == 2){
				currUserId=window.localStorage["staffDetailsId"];
			}
			else{
				currUserId=window.localStorage["staffDetailsId"];
			}
			mData.p4= currUserId;// user id
			mData.p7= formData;// user id
			
			getDataByAction("saveUpdateHomeworkData", JSON.stringify(mData), saveUpdateHomeworkDataSuccessCB, commonErrorCallback);
		}
		else{
			navigator.notification.alert("Please fill the form.",alertConfirm,appName,'Ok');
		}
	}
	
	function saveUpdateHomeworkDataSuccessCB(data){
		var responseJson=jQuery.parseJSON(data);
		if(responseJson.statusCode == "0" ){
			var $formObj=$("#data-entry-homework form#dataEntryHomeworkForm");
			$formObj[0].reset();
			
			getStanDivisionMapForStaff();
			navigator.notification.alert("Homework assigned sucessfully..",alertConfirm,appName,'Ok');
		}
		hideModal();
	}	
	
	function getAttendanceForStaff(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		getDataByAction("getAttendanceForStaff", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
/*  ------------------- Function/Module Wise Code(For Parents/Student) Ends -------------------------  */
	function moreDetails(currObj){
		var $parentDiv = $(currObj).parents(".more-details-main");
		var $moreDetails = $parentDiv.find('.more-details');
		
		if($moreDetails.is(':visible')){
			$(currObj).text('Show Details');
			$moreDetails.hide();
		}else{
	        $(currObj).text('Hide Details');
	        $moreDetails.show();
		}
	}
	
	function openAttendanceDetails(obj){
		$("ul#markAttendanceUl li .period-list-attendance-div").hide();
		$(obj).find(".period-list-attendance-div").show();
	}
	
	function selectPeriodLi(obj){
		if($(obj).hasClass("selected")){
			$(obj).removeClass("selected");
		}else{
			$(obj).addClass("selected");
		}
	}
	
	//$('.action-btn').click(
	function attendanceActionBtn(thiss){			
		$(thiss).parents('li').find('.attendance-form').toggle().css({'position':'relative'}).animate({'top':0});
		var btnState = $(thiss).data("state");
		if(btnState == ""){
			$(thiss).data("state","ok");
			$(thiss).removeClass('absent present presentok').addClass('presentok');							
		}
		else if(btnState == "present" || btnState == "absent" ){
			$(thiss).removeClass('absent present presentok').addClass('presentok');
			$(thiss).data("state","ok");
		}
		else if(btnState == "ok"){
			calcAttendanceOnActionBtn(thiss);
		}
		//$(thiss).toggleClass('absent');							
		return false;
	}
	
	function calcAttendanceOnActionBtn(thiss){
		var $studLi = $( thiss ).parents( "li" );
		var $periodAbsentyResultUlObj = $studLi.find( ".st-period-info.period-result ul.period-list" );
		var absentyFoundFlag = false;
		
		$periodAbsentyResultUlObj.find("li a").removeClass("absent").addClass("present");
		$($studLi).find(".period-list li.single").each(function(index, value) {
			if($(this).find("a").hasClass("active")){
				var periodNo = $(this).text();
				absentyFoundFlag = true;
				
				$periodAbsentyResultUlObj.find("li").each(function(index, value) {
					if( $(this).find("a").text() ==  periodNo){
						$(this).find("a").removeClass("present").addClass("absent");
					}
				});
			}	
		});
		
		if(absentyFoundFlag){
			$(thiss).removeClass('absent present presentok').addClass('absent');
			$(thiss).data("state","absent");
		}else{
			$(thiss).removeClass('absent present presentok').addClass('present');
			$(thiss).data("state","present");
		}
	}
	
	function staffStanDivMapActionBtn(thiss){			
		$(thiss).find('.attendance-form').toggle().css({'position':'relative'}).animate({'top':0});
		return false;
	}
	
	function attendanceApproveCheckboxFn(thiss){
		if($( thiss ).hasClass("approved") ){
			$(thiss).closest('.st-atte-approve').find('.approveReasonsSelectLabel').html('');
			$( thiss ).data("approvereasonid","");			
		}else{
			openapproveReasonsSelect(thiss);			
		}		
		$(thiss).toggleClass('approved');
	}
	
	function openapproveReasonsSelect(thiss){
		var sdid = $( thiss ).parents('.st-atte-approve').data("sdid");
		$( thiss ).parents('.st-atte-approve').find('#approveReasonsSelect'+sdid).selectmenu('open');
	}
	
	function approveReasonsSelectChangeFn(thiss){
		$(thiss).parents('.st-atte-approve').find('.attendanceApproveCheckbox').data("approvereasonid", $(thiss).val());
		//$(thiss).parents('.st-atte-approve').find('.approveReasonsSelectLabel').text($(thiss).find(":selected").text());
	}		
	
	//$('.st-atte-detail-info .atten-cust-checkbox').click(
	function attendanceCheckbox(thiss){
		var $periodListUl = $( thiss ).closest( "ul.period-list");
		var totalPeriods = $periodListUl.find("li.single a" ).length;
		var selectedPeriods = $periodListUl.find("li.single a.active" ).length;
		if($( thiss ).hasClass("active") ){
			if( (selectedPeriods -1) == 0){
				$( thiss ).closest( ".attendance-form" ).removeClass( "absent" );
			}
			$periodListUl.find("li.select-all a" ).removeClass('active');
		}else{			
			if(totalPeriods == (selectedPeriods + 1)){
				$periodListUl.find("li.select-all a" ).addClass('active');
			}
			$( thiss ).closest( ".attendance-form" ).addClass( "absent" );
		}	
		$(thiss).toggleClass('active');
		return false;
	}
	
	function attendanceCheckboxAll(thiss){							
		if($( thiss ).hasClass("active") ){
			$( thiss ).closest( "ul.period-list").find("li.single a" ).removeClass( "active" );
			$( thiss ).closest( ".attendance-form" ).removeClass( "absent" );
		}else{
			$( thiss ).closest( "ul.period-list").find("li.single a" ).addClass( "active" );
			$( thiss ).closest( ".attendance-form" ).addClass( "absent" );
		}
		$(thiss).toggleClass('active');
		return false;
	}
	
	/* New Design for Edit CSS Starts */
	function studentProfileTitleClick(thiss){
		$(thiss).toggleClass('mini').next().toggle();
		return false;
	}
	/* New Design for Edit CSS Ends */		
	
	function saveUpdateStudAttendance(){
		var mainJsonObj={};
		mainJsonObj["absentOnDate"] = ""; //absenteeDate;
		mainJsonObj["periodsForDay"] = 0; //$(".selected-date").attr("noOfPeriods");
		mainJsonObj["year"] = ""; //$("#currentSelectedYear :selected").text();
		
		var mainArr=[];
		
		var listItemsAttendance = $("ul#markAttendanceUl li");
		// //$("ul#markAttendanceUl li").each(function(index, value) {
		listItemsAttendance.each(function(idx, li) {
		    var $liEleObj = $(li);
		    
		    if(idx==0){
		    	mainJsonObj["periodsForDay"] = $(this).find("ul.period-list li.single").length;
		    }
		    
		    var absentyTakenFlag= $(this).find(".attendance-form").hasClass("absent");
			console.log("absentyTakenFlag---"+absentyTakenFlag)
			
			if(absentyTakenFlag){
				var studAbsentyObj = {};
				var studAbsentyArr = [];
				
				$(this).find(".period-list li.single").each(function(index, value) {
					if($(this).find("a").hasClass("active")){
						studAbsentyArr.push($(this).text());
					}
				});
				studAbsentyObj["studAbsentyArr"] = studAbsentyArr;
				
				if(studAbsentyArr.length > 0){
					studAbsentyObj["rollno"] = $(this).data("rollno");
					studAbsentyObj["sdid"] = $(this).data("sdid");
					studAbsentyObj["ssdid"] = $(this).data("ssdid");
					
					studAbsentyObj["studentAbsenteeId"] = "";
					
					if ( $(this).find('.attendanceApproveCheckbox').hasClass('approved') ){
						studAbsentyObj["approveStatus"]=1;
						
						studAbsentyObj["reasonType"] = $(this).find('.attendanceApproveCheckbox').data('approvereasonid');
					}else{
						studAbsentyObj["approveStatus"]=0;
					}
					mainArr.push(studAbsentyObj);
				}
			}
		});
		
		mainJsonObj["studentAttDataArr"] = mainArr;
		saveUpdateStudAttendanceData(JSON.stringify(mainJsonObj));
	}
	
	function getSchoolInfo(){
		var form = $("#schoolCodeForm");
		$("#getSchoolInfoSubmitBtn", form).attr("disabled","disabled");
		var schoolCode = $("#schoolCode", form).val();
		//schoolCode ='editlocal001'; //schoolCode
		
		if(schoolCode != '') {
			var mData={};
			showModal();
			mData.schoolCode = schoolCode;
			var schoolInfoAppUrl ='http://editapi.edit-ims.com/editimsapi.php';
			var dataToSend = {};
			dataToSend["action"] = "instcode";
			dataToSend["instcode"] = schoolCode;
			window.localStorage["schoolCode"] = schoolCode;
			dataToSend["mData"] = JSON.stringify(mData);
			//{"action":"instcode","instcode": schoolCode, "mData":JSON.stringify(mData) },
			getDataByUrlAndData(schoolInfoAppUrl, dataToSend, schoolInfoSuccessCB, schoolInfoErrorCB, ajaxCallPost);
			
			$("#getSchoolInfoSubmitBtn").removeAttr("disabled");
		}
		else{
			$("#getSchoolInfoSubmitBtn").removeAttr("disabled");
			navigator.notification.alert('You must enter school code.',	alertConfirm,appName,'Ok');
		}
		return false;
	}
	
	function schoolInfoSuccessCB(data){
		var responseJson = jQuery.parseJSON(data);
		var jsonArrInstitutes = responseJson["jsonArrInstitutes"];
		var status = jsonArrInstitutes["status"];
		if(status == 1){
			var server_appentry = jsonArrInstitutes["server_appentry"];
			//console.log(server_appentry);
			appUrl=server_appentry;
			window.localStorage["appUrl"]=server_appentry;
			$(".schoolCodeContainer").hide();
			$(".loginFormContainer").show();
			$(".schoolCodeLabel").html(window.localStorage["schoolCode"]);
		}else if(status == 0){
			navigator.notification.alert('Please input correct institute code', alertConfirm, appName,'Ok');
		}
		hideModal();
	}
	
	function schoolInfoErrorCB(data){
		 hideModal();
		 navigator.notification.alert("Connection Problem" ,alertConfirm,appName,'Ok');
		 var responseJson = $.parseJSON(data);
		 if(responseJson.status==404){
		   navigator.notification.alert("Connection Problem" ,alertConfirm,appName,'Ok');
		 }
	}
	
	function changeSchoolCode(){
		var form = $("#schoolCodeForm");
		$("#schoolCode", form).val(window.localStorage["schoolCode"]);
		$(".schoolCodeContainer").show();
		$(".loginFormContainer").hide();
	}
	
	function alertCustomMsg(msg){
		navigator.notification.alert(msg, alertConfirm, appName, 'Ok');	
	}
	
	function openPrivacyPolicyExternalApp(){
		var url="http://www.edit-ims.com/privacypolicy.html";
		navigator.app.loadUrl(url, { openExternal:true });
	}
	