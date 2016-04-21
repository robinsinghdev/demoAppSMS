
var noDataFoundMsg = "No data found.";
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
										'<a class="edit-link display-none" href="#" onclick="editProfile();"><img src="img/icons/edit.png" class="img-circle" alt="">'+'</a>'+
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
								
								'<li class="icon holiday">'+
									'<a href="#" onclick="getHolidays();" data-rel="close" >'+
										'<span class="menu-li-title">Holidays List</span>'+
									'</a>'+
								'</li>'+
								
								/*
								'<li class="icon profile2">'+
									'<a href="#user-profile-page" data-rel="close">'+
										'<span class="menu-li-title">Profile</span>'+
									'</a>'+
								'</li>'+
								
								'<li class="icon master_document">'+
									'<a href="#" data-rel="close" >'+
										'<span class="menu-li-title">Master Documents</span>'+
									'</a>'+
								'</li>'+
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
						'</div>'+
					'</div>';

//getAssignments
//getAcademicAcheivements
//getSeminars
//getExternalActivies
//getDisciplines
//getScholoarships
//getPreviousInstitutes
//getTimetable
var leftPanelObjForStudent= //'<div id="leftPanel" class="panel left" data-role="panel" data-position="left" data-display="push" >'+
					'<div id="menu-wrapper">'+			
						'<div class="menu-title">'+
					    	'<span>MENU</span>'+
					    '</div>'+
						'<ul class="menu">'+					
							'<li class="icon home">'+
								'<a href="#" onclick="gotoHome();" data-rel="close" >'+
									'<span class="menu-li-title">Home</span>'+
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
							'</li>'+		
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
							*/
						'</li>'+
						'</ul>'+
					'</div>'+
				'</div>';

var leftPanelObjForStaff= //'<div id="leftPanel" class="panel left" data-role="panel" data-position="left" data-display="push" >'+
					'<div id="menu-wrapper">'+			
						'<div class="menu-title">'+
					    	'<span>MENU</span>'+
					    '</div>'+
						'<ul class="menu">'+		
							'<li class="icon home">'+
								'<a href="#" onclick="gotoHome();" data-rel="close" >'+
									'<span class="menu-li-title">Home</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+
							
							'<li class="icon">'+
								'<a href="#" onclick="getStanDivisionMapForStaff();" data-rel="close">'+
									'<span class="menu-li-title">My Classes</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+							
							'<li class="icon">'+
								'<a href="#" onclick="getSubjectAllocationForStaff();" data-rel="close">'+
									'<span class="menu-li-title">My Subjects</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+		
							'<li class="icon">'+
								'<a href="#" onclick="getStaffAttendanceForStaff();" data-rel="close">'+
									'<span class="menu-li-title">My Attendance</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+
							
							/*
							'<li class="icon timetable">'+
								'<a href="#" onclick="getTimetable(); " data-rel="close">'+
									'<span class="menu-li-title">Holidays</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+
							
							'<li class="icon assignment">'+
								'<a href="#" onclick="getStaffDetails();" data-rel="close" >'+
									'<span class="menu-li-title">My Details</span>'+
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
							'<li class="icon seminar">'+
								'<a href="#" onclick="getSeminars();" data-rel="close">'+
									'<span class="menu-li-title">Seminars</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+
							*/
							
						'</ul>'+					
					'</div>'+					 
				'</div>';


var dynPanelCount = 1,
dynPanelBtnCount = 1;
$(document).one('pagebeforecreate', function () {
	/*
	var panelDOM = $("[data-role=panel]").length;
    if (panelDOM === 0) {
         //add panel 
    	$.mobile.pageContainer.prepend(rightPanelObj);
    	$.mobile.pageContainer.prepend(leftPanelObj);
    	$("#rightPanel").panel().enhanceWithin();
    	$("#leftPanel").panel().enhanceWithin();
    	 alert("pagebeforecreate");
    	//
    	setTimeout(function(){
    	   
    	 }, 300);
    }
   */
    
	panelsInitialization(true, true, 0);
});

function panelsInitialization(initLeftPanelFlag, initRightPanelFlag, roleId){
	dynPanelCount = 1;
	dynPanelBtnCount = 1;
	
	$(".st-leftPanel").remove();
    $(".st-rightPanel").remove();
    $(".st-leftPanel-btn").remove();
    $(".st-rightPanel-btn").remove();
    
	
	 $.mobile.pageContainer.find("[data-role=page]").each(function () {
	        var leftPanelDynObj="";
	        leftPanelDynObj += '<div id="leftPanel' + dynPanelCount + '" class="panel left st-leftPanel" data-role="panel" data-position="left" data-display="push" >';
	        
	        if(roleId==0 || roleId==4 || roleId==9){
	        	leftPanelDynObj += leftPanelObjForStudent;
	        }
	        else if(roleId==2){
	        	leftPanelDynObj += leftPanelObjForStaff;
	        }
	        
	        var rightPanelDynObj = '<div id="rightPanel' + dynPanelCount + '"  class="panel right st-rightPanel" data-role="panel" data-position="right" data-display="push" >'+
	        						rightPanelObj;
	        
	        $(this).prepend(leftPanelDynObj);
	        $(this).prepend(rightPanelDynObj);
	        dynPanelCount++;
    });
	 
    $.mobile.pageContainer.find("[data-role=header]").each(function () {
        var leftPanelDynBtn='<a href="#leftPanel' + (dynPanelBtnCount+1) + '" data-theme="none" data-inline="true" class="ui-btn ui-btn-icon-notext st-leftPanel-btn edit-logo" title="Menu">'+
						'<img src="img/edit-sm-logo.png" alt="logo" /></a>';
        
        var rightPanelDynBtn='<div class="ui-btn-right right-space">'+
								'<a href="#rightPanel' + (dynPanelBtnCount+1) + '" class="ui-btn ui-corner-all ui-icon-gear ui-btn-icon-notext st-rightPanel-btn"  title="Setting"> </a>'+
							'</div>';
        
        $(this).append(leftPanelDynBtn);
        $(this).append(rightPanelDynBtn);
        dynPanelBtnCount++;
    });
    
}

$(document).on("pageinit", function () {
    if($(this).attr("href") == "#"+$.mobile.pageContainer.pagecontainer("getActivePage")[0].id) {
    	alert($.mobile.pageContainer.pagecontainer("getActivePage")[0].id);
    	//$("[data-role=panel]").panel("close");
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
var appUrl='http://188.166.232.255:8080/Edit/appEntry.do';

var appRequiresWiFi='This action requires internet.';
var serverBusyMsg='Server is busy, please try again later.';
var mData={};
var db;
var pushNotification;

var app = {
    SOME_CONSTANTS : false,  // some constant

    // Application Constructor
    initialize: function() {
        //console.log("console log init");
        this.bindEvents();
        this.initFastClick();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
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
        // Start adding your code here....
		//db = window.sqlitePlugin.openDatabase({name: "stims.db", location: 2});
		//db.transaction(initializeDB, errorCB, successCB);
        
        //checkPreAuth();
		$("#loginForm").on("submit",handleLogin);
		window.localStorage["gcmregistrationId"] = "";
		
		pushNotification = window.plugins.pushNotification;
		try 
		{ 
        	pushNotification = window.plugins.pushNotification;
        	pushNotification.register(successHandler, errorHandler, {"senderID":"329763220550","ecb":"onNotification"});		// required!
        }
		catch(err) 
		{
			var txt="There was an error on this page.\n\n"; 
			txt+="Error description: " + err.message + "\n\n"; 
			console.log(txt); 
		}
		
    },
	// Update DOM on a Received Event
    /* receivedEvent: function(id) {}   */
};


//handle GCM notifications for Android
function onNotification(e) {
  console.log("e.event-:"+e.event);
  
  switch( e.event )
  {
      case 'registered':
		if ( e.regid.length > 0 )
		{
			// Your GCM push server needs to know the regID before it can push to this device
			// here is where you might want to send it the regID for later use.
			console.log("regID = " + e.regid);
			window.localStorage["gcmregistrationId"] = e.regid;
		}
      break;
      
      case 'message':
      	// if this flag is set, this notification happened while we were in the foreground.
      	// you might want to play a sound to get the user's attention, throw up a dialog, etc.
      	if (e.foreground)
      	{
      		console.log("INLINE NOTIFICATION--"+e.message);
			      
			        // on Android soundname is outside the payload. 
		                // On Amazon FireOS all custom attributes are contained within payload
		               // var soundfile = e.soundname || e.payload.sound;
		                // if the notification contains a soundname, play it.
		                // playing a sound also requires the org.apache.cordova.media plugin
		                //var my_media = new Media("/android_asset/www/"+ soundfile);

		               // my_media.play();
		}
		else
		{	// otherwise we were launched because the user touched a notification in the notification tray.
			if (e.coldstart)
				console.log("COLDSTART NOTIFICATION");
			else
				console.log("BACKGROUND NOTIFICATION");
		}
			
      //android only
		//console.log(e.payload.message+"---"+e.payload.msgcnt);
          
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
	var form = $("#loginForm");
	if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined && window.localStorage.getItem("user_logged_in")==1) {
		$("#username", form).val(window.localStorage["username"]);
		$("#password", form).val(window.localStorage["password"]);
		handleLogin();
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
	$.mobile.changePage('#login-page','slide');
}

function gotoHome(){
	if(window.localStorage["userRoleId"] ==4 || window.localStorage["userRoleId"]==9){
		$("#staff_homepage").hide();
		$("#student_homepage").show();
	}else if(loginDataResponse["userRoleId"]==2){ // Teacher Role
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
	//u='hcsvenkatesh@g.com'; //parent username
	//u='sanjithhcs@g.com'; //student username sanjithhcs@g.com
	//u='jat@g.com'; //staff username jat@g.com
	//p='admin';
	
	if(u != '' && p!= '') {
		
		var connectionType=checkConnection();
		//var connectionType="WiFi connection";//For Testing
		
		var loginData={};
		
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			
			if(window.localStorage["user_logged_in"] ==1) {
				//checkingUserAssignedRoles();
				//$.mobile.changePage('#home-page',{ transition: "slideup"});
			}
			else{
				navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
			}	
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			
			showModal();
			loginData.username=u;
			loginData.password=p;
			loginData.gcmregdid = window.localStorage["gcmregistrationId"];
			//var appUrl='http://192.168.1.11:8080/Edit/appEntry.do';
			$.ajax({
				//type : 'POST',
				url:appUrl,
				data : {"action":"login","loginData":JSON.stringify(loginData), "mData":JSON.stringify(mData) },
				success:function(data){
					//alert('handle login called ajax auccess----'+JSON.stringify(data));
				/*	
				var datass={
						   "msg":"Success",
						   "allData":{
						      "jsonObjAssignment":{
						         "assignmentSubmissionDate":"NA",
						         "studAssignmentName":"No Assignments"
						      },
						      "jsonObjAcheivements":{
						         "jsonArrAcheivements":[
						
						         ]
						      },
						      "jsonObjFees":{
						         "paymentPendingAmount":0,
						         "lastPaymentDate":"",
						         "paymentAmountPaid":0,
						         "paymentMsg":"Payment is completed"
						      },
						      "jsonObjStudData":{
						         "stdHome":"",
						         "image":"IMS/images/students/lg/stu_male_avtar.png",
						         "transportStudentsMapId":null,
						         "eventList":"",
						         "gender":"true",
						         "data":"",
						         "mobileNumber":"NA",
						         "destination":null,
						         "stdOffice":"",
						         "studContactNo":"NA",
						         "studentEmail":"sanjithhcs@g.com",
						         "admissionNo":"15CFA0001",
						         "addressTwo":"Bangalore",
						         "studentStandardDivisionId":"1",
						         "name":"SANJITH RAAJU H.V",
						         "rollNumber":"15CFA0001",
						         "transportRouteName":null,
						         "studentDetailsId":"1",
						         "comment":[
						
						         ],
						         "addressOne":"Basavanagudi ",
						         "age":"19",
						         "email":"hcsvenkatesh@gmail.com",
						         "parentsName":"VENKATESH H.S"
						      },
						      "jsonObjHealth":{
						         "healthDetails":"No Details"
						      }
						   },
						   "loginDataResponse":{
						      "name":"VENKATESH",
						      "userRoleId":4,
						      "userRoleName":"ROLE_PARENT"
						   },
						   "statusCode":0
						}
				*/
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
						
						panelsInitialization(true, true, loginDataResponse["userRoleId"]);
						
						console.log(responseJson["loginDataResponse"]);
					}
					
					$.mobile.changePage('#home-page',{ transition: "slideup"});
				}else{
					window.localStorage["password"] = '';
					window.localStorage["user_logged_in"] = 0;
					window.localStorage["appUserData"] = '';
					
					window.localStorage["email"] = '';
					
					var form = $("#loginForm");
					$("#username", form).val(window.localStorage["username"]);
					$.mobile.changePage('#login-page','slide');
					
					navigator.notification.alert(
						responseMessage,
						//'Invalid Credentials, please try again.',
					    alertConfirm,
					    'EDIT',            // title
					    'Ok'                  // buttonName
					);
				}
				hideModal();
			   },
			   error:function(data,t,f){
				   hideModal();
				   navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
				   var responseJson = $.parseJSON(data);
				   if(responseJson.status==404){
					   navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
				   }
			   }
			});
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
		}
		$("#submitButton").removeAttr("disabled");
	}
	else{
		navigator.notification.alert(
			'You must enter a username and password.',
			alertConfirm,
			'EDIT',            // title
			'Ok'                  // buttonName
		);
		$("#submitButton").removeAttr("disabled");
	}
	return false;
}

function checkingUserAssignedRoles(){}

function showExitDialog() {
    navigator.notification.confirm(
            ("Do you want to Exit?"), // message
            alertexit, // callback
            'EDIT', // title
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
	var connectionType=checkConnection();
	//var connectionType="Unknown connection";//For Testing
	
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
		navigator.notification.alert(
		    'Logout requires active internet connection',
		    alertConfirm,
		    'EDIT',            // title
		    'Ok'                  // buttonName
		);
	}
	else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
		showLogoutDialog();
	}
}

function alertConfirm(buttonIndex){
	// function for alert having no actions
}

function showLogoutDialog() {
    navigator.notification.confirm(
            ("Are you sure to Logout?"), // message
            alertlogout, // callback
            'EDIT', // title
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
	el.val(currentValue).attr('selected', true).siblings('option').removeAttr('selected');
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
	var todayString = yyyy+'-'+mm+'-'+dd;
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
		var connectionType=checkConnection();
		//var connectionType="WiFi connection";//For Testing
		
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			showModal();
			var loginData={};
			loginData.username=window.localStorage["username"];
			loginData.password=window.localStorage["password"];
			loginData.gcmregdid = window.localStorage["gcmregistrationId"];
			
			$.ajax({
				//type : 'POST',
				url:appUrl,
				data : {"action":actionName, "loginData":JSON.stringify(loginData), "mData":mDataJsonString },
				success: successCallbackFn,
			    error: errorCallbackFn
			});
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
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
		navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
		var responseJson = $.parseJSON(data);
		if(responseJson.status==404){
		     navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
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
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');					
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
				commonPageSubjectAllocationForStaffData($parentEleObj, jsonData);
			}
			else if(action=="getStaffAttendanceForStaff"){
				commonPageStaffAttendanceForStaffData($parentEleObj, jsonData);
			}
			
			$.mobile.changePage('#common-page','slide');
		}else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');					
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
		
		pushNotification.unregister(successHandler, errorHandler);
		
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
					
					// Yellow 1 4 5 
					// Green 2 8 9
					// Red 3 6 7
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
			navigator.notification.alert(serverBusyMsg, alertConfirm,'EDIT','Ok');					
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
	// getStaffAttendanceForStaff
	
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
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');					
		}
		hideModal();
		//stan-div-students-page
		$.mobile.changePage('#common-user-list-page', 'slide');
	}
	
	function getStanDivisionMapForStaffDataParse($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=userListsLi;
				var jsonObj=item;
				
				dataEleObj=dataEleObj.replace(/replaceName/g, jsonObj["stanDivName"]);
				dataEleObj=dataEleObj.replace(/replaceUserId/g, jsonObj["ssdmid"]);
				dataEleObj=dataEleObj.replace(/replaceUserData1/g, jsonObj["stanName"]);
				
				var yearString=0;
				var onClickMethod='getSSDListByStanDivIdYear( '+ jsonObj["sdid"] +' , '+ yearString +' )';
				dataEleObj=dataEleObj.replace(/replaceOnClickMethod/g, onClickMethod);
				var hiddenData="";
				hiddenData+="";
				dataEleObj=dataEleObj.replace(/replaceHiddenFields/g, hiddenData);
				// replaceHiddenFields
				
				$parentEleObj.append(dataEleObj);
			});
		
		}else{
			var dataEleObj=tableDivObj;
			$parentEleObj.append(userListsLiNoData);
		}
	}
	
	
	function getSSDListByStanDivIdYear(stanDivId, year){
		mData={};	
		mData.p1 = stanDivId;
		mData.p2 = "";
		mData.p3 = window.localStorage["staffDetailsId"];
		
		getDataByAction("getSSDListByStanDivIdYear", JSON.stringify(mData), getSSDListByStanDivIdYearSuccessCallback, commonErrorCallback);
	}
	
	function getSSDListByStanDivIdYearSuccessCallback(data){
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			var $parentEleObj=$('.stan-div-students-details ul.user_list_detailed');
			$parentEleObj.html("");
			
			var actionHeading=responseJson["actionHeading"];
			$('.stan-div-students-details .page-tab-heading').html(actionHeading);
			
			var action=responseJson["action"];
			var jsonData=responseJson["data"];
		
			sSDListByStanDivIdYearDataParse($parentEleObj, jsonData);
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');					
		}
		hideModal();
		//stan-div-students-page
		$.mobile.changePage('#stan-div-students-page','slide');
	}
	
	function sSDListByStanDivIdYearDataParse($parentEleObj, jsonData){
		$parentEleObj.html("");
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=userListsLi;
				var jsonObj=item;
				
				dataEleObj=dataEleObj.replace(/replaceName/g, jsonObj["name"]);
				dataEleObj=dataEleObj.replace(/replaceUserId/g, jsonObj["ssdid"]);
				dataEleObj=dataEleObj.replace(/replaceUserData1/g, jsonObj["roll_no"]);
				
				var onClickMethod='';
				dataEleObj=dataEleObj.replace(/replaceOnClickMethod/g, onClickMethod);
				var hiddenData='';
				hiddenData+='<input type="hidden" id="ssdid" value="'+ jsonObj["ssdid"] +'">';
				hiddenData+='<input type="hidden" id="studid" value="'+ jsonObj["sid"] +'">';
				dataEleObj=dataEleObj.replace(/replaceHiddenFields/g, hiddenData);
				
				$parentEleObj.append(dataEleObj);
			});
		
		}else{
			var dataEleObj=tableDivObj;
			$parentEleObj.append(userListsLiNoData);
		}
	}
	
	function getSubjectAllocationForStaff(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getTimetable", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function getStaffAttendanceForStaff(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getTimetable", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
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
	
	/* New Design for Edit CSS Starts */
	function studentProfileTitleClick(thiss){
		$(thiss).toggleClass('mini').next().toggle();
		return false;
	}
	/* New Design for Edit CSS Ends */		