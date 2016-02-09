
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

var rightPanelObj = '<div id="rightPanel" class="panel right" data-role="panel" data-position="right" data-display="push" >'+
						'<div id="menu-wrapper">'+
							'<div class="menu-title">'+
						    	'<span>SETTING</span>'+
								'<a href="#" data-rel="close" class="ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right"  title="Close"> </a>'+
						    '</div>'+
						
							'<ul class="menu">'+
							
								'<li class="profile-detail">'+
									'<div class="personal_detail">'+
										'<div class="circular">'+'</div>'+
										'<span class="name">'+window.localStorage["name"]+'</span>'+
										'<a class="edit-link" href="#" onclick="editProfile();"><img src="img/icons/edit.png" class="img-circle" alt="">'+'</a>'+
									'</div>'+
									/*
									'<div class="sub_info">'+
										'<img src="img/icons/address.png" alt="address">'+'</a>'+
										'<span class="name">#124,20th main,6th phase,18th cross J.P.Nagar,Banglore</span>'+
									'</div>'+
									*/
									'<div class="sub_info">'+
										'<img src="img/icons/email118.png" alt="email">'+'</a>'+
										'<span class="name">'+window.localStorage["email"]+'</span>'+
									'</div>'+
									'<div class="sub_info">'+
										'<img src="img/icons/contact1.png" alt="contacts">'+'</a>'+
										'<span class="name">'+window.localStorage["mobile"]+'</span>'+
									'</div>'+
								'</li>'+
								
								/*
								'<li class="icon profile2">'+
									'<a href="#user-profile-page">'+
										'<span class="menu-li-title">Profile</span>'+
									'</a>'+
								'</li>'+
								*/
								'<li class="icon holiday">'+
									'<a href="#" data-rel="close" >'+
										'<span class="menu-li-title">Holidays List</span>'+
									'</a>'+
								'</li>'+
								'<li class="icon master_document">'+
									'<a href="#" data-rel="close" >'+
										'<span class="menu-li-title">Master Documents</span>'+
									'</a>'+
								'</li>'+
								'<li class="icon password">'+
									'<a href="#page-2">'+
										'<span class="menu-li-title">Change Paswword</span>'+
									'</a>'+
								'</li>'+
								'<li class="icon logout">'+
									'<a href="#" onclick="doLogout();">'+
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
var leftPanelObj='<div id="leftPanel" class="panel left" data-role="panel" data-position="left" data-display="push" >'+
					'<div id="menu-wrapper">'+			
						'<div class="menu-title">'+
					    	'<span>MENU</span>'+
							'<a href="#" data-rel="close" class="ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-right"  title="Close"> </a>'+
					    '</div>'+
						'<ul class="menu">'+					
							'<li class="icon home">'+
								'<a href="#" onclick="gotoHome();">'+
									'<span class="menu-li-title">Home</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+					
							'<li class="icon assignment">'+
								'<a href="#" onclick="getAssignments();" >'+
									'<span class="menu-li-title">Assignment & Test</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+	
							'<li class="icon book">'+
								'<a href="#" onclick="getLibraryBooksAllocated();">'+
									'<span class="menu-li-title">Library</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+					
												
							'<li class="icon institute">'+
								'<a href="#" onclick="getPreviousInstitutes();">'+
									'<span class="menu-li-title">Previous Institutes</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+							
							'<li class="icon achievement">'+
								'<a href="#" onclick="getAcademicAcheivements();">'+
									'<span class="menu-li-title">Academic Achievements</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+							
							'<li class="icon external">'+
								'<a href="#" onclick="getExternalActivies();">'+
									'<span class="menu-li-title">External Activity</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+					
							'<li class="icon scholarship">'+
								'<a href="#" onclick="getScholoarships();">'+
									'<span class="menu-li-title">Scholarships</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+							
							'<li class="icon seminar">'+
								'<a href="#" onclick="getSeminars();">'+
									'<span class="menu-li-title">Seminars</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+							
							'<li class="icon desciplines">'+
								'<a href="#" onclick="getDisciplines();">'+
									'<span class="menu-li-title">Disciplines</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+							
							'<li class="icon timetable">'+
								'<a href="#" onclick="getTimetable();">'+
									'<span class="menu-li-title">Time Table</span>'+
									'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="">'+
								'</a>'+
							'</li>'+											
						'</ul>'+					
					'</div>'+					 
				'</div>';

$(document).one('pagebeforecreate', function () {
	
	var panelDOM = $("[data-role=panel]").length;
    if (panelDOM === 0) {
        /* add panel */
    	$.mobile.pageContainer.prepend(rightPanelObj);
    	$.mobile.pageContainer.prepend(leftPanelObj);
    	$("#rightPanel").panel();
    	$("#leftPanel").panel();
    	
    } else {
        /* nothing */
    }
  
});

//var appUrl='http://192.168.1.11:8080/Edit/appEntry.do';
var appUrl='http://122.166.218.28:8080/Edit/appEntry.do';

var appRequiresWiFi='This action requires internet.';
var serverBusyMsg='Server is busy, please try again later.';
var mData={};
var db;

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
        //console.log("device ready, start making you custom calls!");
        document.addEventListener("backbutton", onBackKeyDown, false);
        // Start adding your code here....
		//app.receivedEvent('deviceready');
		
		//db = window.sqlitePlugin.openDatabase({name: "stims.db", location: 2});
		//db.transaction(initializeDB, errorCB, successCB);
        
        //checkPreAuth();
		//$("#loginForm").on("submit",handleLogin);
		
    },
	// Update DOM on a Received Event
    /*
    receivedEvent: function(id) {
		
    }
    */
};

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
		window.history.back();
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
	$("[data-role=panel]").panel("close");
	$.mobile.changePage('#home-page','slide');
}

function handleLogin() {
	//checkConnection();
	//alert('handle login called');
	var form = $("#loginForm");
	//disable the button so we can't resubmit while we wait
	//$("#submitButton",form).attr("disabled","disabled");
	var u = $("#username", form).val();
	var p = $("#password", form).val();
	u='hcsvenkatesh@g.com';
	//u='sanjithhcs@g.com';
	p='admin';
	
	if(u != '' && p!= '') {
		
		//var connectionType=checkConnection();
		var connectionType="WiFi connection";//For Testing
		
		var loginData={};
		
		
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			
			if(window.localStorage["user_logged_in"] ==1) {
				//checkingUserAssignedRoles();
				$.mobile.changePage('#home-page',{ transition: "slideup"});
			}
			else{
				navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
			}	
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			
			showModal();
			loginData.username=u;
			loginData.password=p;
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
					
					var allData=responseJson["allData"];
					if(loginDataResponse["userRoleId"]==4){ // Parent Role
						
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
						if(gender){
							gender='Male';
						}else{
							gender='Female';
						}
						
						var addressOne=studData["addressOne"];
						var addressTwo=studData["addressTwo"];
						var studContactNo=studData["studContactNo"];
						
						var studImage=studData["image"];
						
						var parentsName=studData["parentsName"];
						var parentEmail=studData["email"];
						window.localStorage["email"]=parentEmail;
						
						var parentsMobileNo=studContactNo;
						window.localStorage["mobile"]=parentsMobileNo;
						
						window.localStorage["studDetailsId"] = studentDetailsId;
						window.localStorage["studStandardDivisionId"] = studentStandardDivisionId;
						
						var $profileInfoTableObj=$('table.profile-info');
						$profileInfoTableObj.find("p.name").html(studName);
						$profileInfoTableObj.find("td.admission-number span").html(admissionNo);
						$profileInfoTableObj.find("td.gender span").html(gender);
						$profileInfoTableObj.find("td.age span").html(age);
						$profileInfoTableObj.find("td.email span").html(studentEmail);
						$profileInfoTableObj.find("td.address-data span").html(addressOne+addressTwo);
						$profileInfoTableObj.find("td.contact span").html(parentsMobileNo);
						
						var $parentInfo=$(".parent-info");
						$parentInfo.find("p.parent-name").html(parentsName);
						$parentInfo.find("p.parent-mobile").html(parentsMobileNo);
						$parentInfo.find("p.parent-email").html(parentEmail);
						
						// Student Acheivements
						var jsonObjAcheivements = allData["jsonObjAcheivements"];
						var jsonArrAcheivements=jsonObjAcheivements["jsonArrAcheivements"];
						
						var $achievementDetailsUlObj=$('#achievementDetailsUl');
						$achievementDetailsUlObj.find('li').remove();
						if(jsonArrAcheivements.length>0){
							jQuery.each(jsonArrAcheivements, function(index, item) {
								var jsonObj=item;
								
								var dataEleObj='<li>'+
													'<p>'+jsonObj["studentAcademicAchievementDetails"]+'</p>'+
												'</li>';
								$achievementDetailsUlObj.append(dataEleObj);
							});
						}
						else{
							var dataEleObj='<li><p>No Awards Gained Yet.</p></li>'+
										   '<li><p>Just Belive You Can.</p></li>';
							$achievementDetailsUlObj.append(dataEleObj);
						}
						
						if (jsonArrAcheivements.length > 2) {
							$achievementDetailsUlObj.find('li').hide().filter(':lt(1)').show();
							$achievementDetailsUlObj.append('<li style="cursor:pointer">Expand>></li>');
							$achievementDetailsUlObj.find('li:last').click(function() {
								$(this).siblings(':gt(0)').toggle();
								if ($(this).text() == "Expand>>") {
									$(this).text("<<Collapse");
								} else if ($(this).text() == "<<Collapse") {
									$(this).text("Expand>>");
								}
							});
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
							$leaveDescriptionTableObj.find('tbody').append(trObj);
						});
						
						var mDataGetStudentAttendance={};
						mDataGetStudentAttendance.p1=studentStandardDivisionId;
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
					else if(loginDataResponse["userRoleId"]==9){ // Student Role
						
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
					
					//navigator.notification.alert("Invalid Credentials, please try again", function() {});
					navigator.notification.alert(
						'Invalid Credentials, please try again.',
					    alertConfirm,
					    'EDIT',            // title
					    'Ok'                  // buttonName
					);
				}
				hideModal();
				//$('#userFullName').html(window.localStorage.getItem("full_name"));
			   },
			   error:function(data,t,f){
				   //alert(' ajax error--'+JSON.stringify(data));
				   hideModal();
				   alert(data+' '+t+' '+f);
				   //navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
				 /*
				   var responseJson = $.parseJSON(data);
				 
				 if(responseJson.status==404){
					 navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
				 }
				 */
			   }
			});
		}
		else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
		}
		$("#submitButton").removeAttr("disabled");
	}
	else{
		//navigator.notification.alert("You must enter a username and password", function() {});
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
	alert("doLogout");
	var connectionType=checkConnection();
	alert(connectionType);
	//var connectionType="Unknown connection";//For Testing
	
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
		//navigator.notification.alert("Logout requires active internet connection.", function() {});
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
		//var connectionType=checkConnection();
		var connectionType="WiFi connection";//For Testing
		
		if(connectionType=="Unknown connection" || connectionType=="No network connection"){
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');
		}
		else if(connectionType=="WiFi connection" || connectionType=="Cell 4G connection" || connectionType=="Cell 3G connection" || connectionType=="Cell 2G connection"){
			showModal();
			var loginData={};
			loginData.username=window.localStorage["username"];
			loginData.password=window.localStorage["password"];
			
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
			var $parentEleObj=$('.common-page-tab1 .table-main-div');
			$parentEleObj.html("");
			
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
			
			$("[data-role=panel]").panel("close");
			$.mobile.changePage('#common-page','slide');
		}else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');					
		}
		hideModal();
	}
	
	function commonPageNoDataMsg($parentEleObj){
		var dataEleObj=tableDivObjEmpty;
		var msg="No Data Found.";
		dataEleObj=dataEleObj.replace(/replaceName/g,msg);
		$parentEleObj.append(dataEleObj);
	}
	
	function getLibraryBooksAllocated(){
		mData={};
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getLibraryBooksAllocated", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageLibraryData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g,jsonObj["bookIssuedDate"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g,jsonObj["bookReturnDate"]);
				dataEleObj=dataEleObj.replace(/replaceName/g,jsonObj["book"]);
				var otherDetails='Standard Division:'+jsonObj["stanDiv"];
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}
	
	function getLibraryDataSuccessCallback(data){
		var responseJson=jQuery.parseJSON(data);
		
		if(responseJson.statusCode == "0" ){
			var actionResponse=responseJson["actionResponse"];
			var $parentEleObj=$('.common-page-tab1 .table-main-div');
			$parentEleObj.html("");
			if(actionResponse.length > 0){
				jQuery.each(actionResponse, function(index, item) {
					var dataEleObj=tableDivObj;
					var jsonObj=item;
					dataEleObj=dataEleObj.replace(/replaceDate/g,jsonObj["bookIssuedDate"]);
					dataEleObj=dataEleObj.replace(/replaceTime/g,jsonObj["bookReturnDate"]);
					dataEleObj=dataEleObj.replace(/replaceName/g,jsonObj["book"]);
					var otherDetails='Standard Division:'+jsonObj["stanDiv"];
					dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
					
					$parentEleObj.append(dataEleObj);
				});
			
			}else{
				var dataEleObj=tableDivObjEmpty;
				var msg="No Data Found.";
				dataEleObj=dataEleObj.replace(/replaceName/g,msg);
				$parentEleObj.append(dataEleObj);
			}
			$("[data-role=panel]").panel("close");
			$.mobile.changePage('#common-page','slide');
		}else{
			navigator.notification.alert(appRequiresWiFi,alertConfirm,'EDIT','Ok');					
		}
		hideModal();
	}
	
	//getAssignments
	//getAcademicAcheivements
	//getSeminars
	//getExternalActivies
	//getDisciplines
	//getScholoarships
	//getPreviousInstitutes
	//getTimetable
	
	function getAssignments(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getAssignments", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageAssignmentData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				
				dataEleObj=dataEleObj.replace(/replaceDate/g, jsonObj["submissionDate"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g,"");
				dataEleObj=dataEleObj.replace(/replaceName/g,jsonObj["assignmentName"]);
				var otherDetails='Comment :'+jsonObj["comment"]+'<br/><p>Description: '+jsonObj["assignmentDescription"]+'</p>';
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}
	
	function getAcademicAcheivements(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getAcademicAcheivements", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageAcademicAcheivementsData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g,jsonObj["year"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g,"");
				dataEleObj=dataEleObj.replace(/replaceName/g,jsonObj["studentAcadimicAchievementsDetails"]);
				var otherDetails="";
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}
	
	function getSeminars(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getSeminars", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageSeminarsData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g,jsonObj["year"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g,"");
				dataEleObj=dataEleObj.replace(/replaceName/g,jsonObj["scholarshipType"]);
				var otherDetails="";
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}
	
	function getExternalActivies(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getExternalActivies", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageExternalActiviesData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g,jsonObj["year"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g,"");
				dataEleObj=dataEleObj.replace(/replaceName/g,jsonObj["studentExternalActivityName"]);
				var otherDetails="Details: "+jsonObj["studentExternalActivityAchievement"];
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}
	
	
	function getDisciplines(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getDisciplines", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageDisciplinesData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g, jsonObj["date"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g, jsonObj["year"]);
				dataEleObj=dataEleObj.replace(/replaceName/g, jsonObj["warningLevel"]);
				var otherDetails="Comment: "+jsonObj["comment"];
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}
	
	function getScholoarships(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getScholoarships", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageScholoarshipsData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g, jsonObj["year"]);
				dataEleObj=dataEleObj.replace(/replaceTime/g, jsonObj["studentSchlorshipAmount"]);
				dataEleObj=dataEleObj.replace(/replaceName/g, jsonObj["scholarshipType"]);
				var otherDetails="";
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}	
	
	function getPreviousInstitutes(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getPreviousInstitutes", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPagePreviousInstitutesData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g, "");
				dataEleObj=dataEleObj.replace(/replaceTime/g, "");
				dataEleObj=dataEleObj.replace(/replaceName/g, "");
				var otherDetails="";
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
	}	
	
	function getTimetable(){
		mData={};	
		mData.p1=window.localStorage["studDetailsId"];
		mData.p2=window.localStorage["studStandardDivisionId"];
		getDataByAction("getTimetable", JSON.stringify(mData), commonPageSuccessCallback, commonErrorCallback);
	}
	
	function commonPageTimetableData($parentEleObj, jsonData){
		if(jsonData.length > 0){
			jQuery.each(jsonData, function(index, item) {
				var dataEleObj=tableDivObj;
				var jsonObj=item;
				dataEleObj=dataEleObj.replace(/replaceDate/g, "");
				dataEleObj=dataEleObj.replace(/replaceTime/g, "");
				dataEleObj=dataEleObj.replace(/replaceName/g, "");
				var otherDetails="";
				dataEleObj=dataEleObj.replace(/replaceOtherDetails/g,otherDetails);
				
				$parentEleObj.append(dataEleObj);
			});
		}else{
			commonPageNoDataMsg($parentEleObj);
		}
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