var TimerFlag = 0;
var order = 0;
var timecat = 0;
var timerId = 0;
var date = 0000-00-00;
baseGrnUrl="";

function logTimer(obj) {
	//var action = $(obj).data('action');
	var action=$(obj).attr('data-action');
	
	console.log("action..."+action+">>>"+$(obj).attr('data-action'));
    if (!timerId) {
        if (action == 'clock') {
            order = $(obj).attr('data-order');
            timecat = $(obj).attr('data-timeCat');
            startTimer();
        }
    }
	else {
        if (action === 'pause') {
            pauseTimer();
        }else if (action === 'resume') {
            resumeTimer();
        }else if (action === 'logtime') {
            logtimeTimer();
        }else if (action === 'delete') {
            deleteTimer();
        }else  if (action === 'logpauseOption') {
            logpauseOption();
        }else  if (action === 'clock') {
            //$('#log_option_popup').modal();
        	alert('log_option_popup');
        }
    }
}

function startTimer() {
	//var connectionType=checkConnection();
	var connectionType="Unknown connection";//For Testing
	
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
        TimerFlag = 1;
        $('#logging_time').timer('remove');
        $('#logging_time').timer();
        $('#running_tracker').show();
       
        var curr_sp_order_name=$('#sp_order_name_' + order).text();
        curr_sp_order_name=curr_sp_order_name.replace("Report","");
        $('#logging_detail').html(curr_sp_order_name);
        $('#logging_order_color_code').attr('style', $('#sp_order_name_' + order).find(".so-color-box").attr('style'));
        
        //$('[id="'+'timer_' + order + '_' + timecat+'"]').removeClass('clock').addClass('play').attr('data-action', 'logpauseOption');
        //$('[id="'+'timer_img_' + order + '_' + timecat+'"]').addClass('play').attr('data-action', 'logpauseOption');
        
        $('#timer_' + order + '_' + timecat).removeClass('clock').addClass('play').attr('data-action', 'logpauseOption');
        $('#timer_img_' + order + '_' + timecat).addClass('play').attr('data-action', 'logpauseOption');
        
        $('#logging_proc_icon').html('<img src="' + 'img/' + timecat + '.png" width="25px" />');
        
        //timerId = data.timerId;
        //date = data.date;
        timerId=2;
        $('#logging_play').hide();
        $('#logging_pause').show();
    }
	else if(connectionType=="WiFi connection"){
		 $.ajax({
		        type: "POST",
		        url: baseGrnUrl + "timetracker/ajax.php",
		        data: "order_id=" + order + "&timecat=" + timecat + "&timerFlag=" + TimerFlag + "&action=startTimer",
		        dataType: "json",
		        success: function(data) {
		            if (data.status == 'success') {
		                TimerFlag = 1;
		                $('#logging_time').timer('remove');
		                $('#logging_time').timer();
		                $('#running_tracker').show();
		               
		                var curr_sp_order_name=$('#sp_order_name_' + order).text();
		                curr_sp_order_name=curr_sp_order_name.replace("Report","");
		                $('#logging_detail').html(curr_sp_order_name);
		                $('#logging_order_color_code').attr('style', $('#sp_order_name_' + order).find(".so-color-box").attr('style'));
		                $('#timer_' + order + '_' + timecat).removeClass('clock').addClass('play').attr('data-action', 'logpauseOption');
		                $('#timer_img_' + order + '_' + timecat).addClass('play').attr('data-action', 'logpauseOption');
		                $('#logging_proc_icon').html('<img src="' + 'img/' + timecat + '.png" width="25px" />');
		                
		                //timerId = data.timerId;
		                //date = data.date;
		                $('#logging_play').hide();
		                $('#logging_pause').show();
		            }
		            if (data.action == 'fail') {
		                $('#msg.msg').html(data.msg);
		            }
		            //hideNotification('#msg.msg');
		        }
		 });
	}
	
}

function pauseTimer() {
    console.log('Order: ' + order + ' TimeCat: ' + timecat + ' TimerId: ' + timerId);
    
    //var connectionType=checkConnection();
	var connectionType="Unknown connection";//For Testing
	
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
		$('#logging_time').timer('pause');
        //take current time
		
		$('#timer_' + order + '_' + timecat).removeClass('play').addClass('pause').attr('data-action', 'resume');
		$('#timer_img_' + order + '_' + timecat).removeClass('play').addClass('pause').attr('data-action', 'resume');
        
        $('#logging_pause').hide();
        $('#logging_play').show();//.attr('data-action', 'resume');;
	}
	else if(connectionType=="WiFi connection"){
		$.ajax({
	        type: "POST",
	        url: baseGrnUrl + "timetracker/ajax.php",
	        data: "timerId=" + timerId + "&action=pauseTimer",
	        dataType: "json",
	        success: function(data) {
	            if (data.status == 'success') {
	                $('#logging_time').timer('pause');
	                $('#logging_pause').hide();
	                $('#logging_play').show();
	                $('#timer_' + order + '_' + timecat).removeClass('play').addClass('pause');
	                $('#timer_img_' + order + '_' + timecat).removeClass('play').addClass('pause');
	                $('#timer_' + order + '_' + timecat).attr('data-action', 'resume');
	                $('#timer_img_' + order + '_' + timecat).attr('data-action', 'resume');
	            }
	            if (data.action == 'fail') {
	                $('#msg.msg').html(data.msg);
	            }
	            hideNotification('#msg.msg');
	        }
	    });
	}
}

function resumeTimer() {
	//var connectionType=checkConnection();
	var connectionType="Unknown connection";//For Testing
	
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
		$('#logging_time').timer('remove');
        $('#logging_time').timer({
            seconds: 200
        });
        // $('[id="a"]');
        $('#timer_' + order + '_' + timecat).removeClass('pause').addClass('play').attr('data-action', 'logpauseOption');
        $('#timer_img_' + order + '_' + timecat).removeClass('pause').addClass('play').attr('data-action', 'logpauseOption');
        
        $('#logging_pause').show();
        $('#logging_play').hide();
	}
	else if(connectionType=="WiFi connection"){
		 $.ajax({
		        type: "POST",
		        url: baseGrnUrl + "timetracker/ajax.php",
		        data: "timerId=" + timerId + "&action=resumeTimer",
		        dataType: "json",
		        success: function(data) {
		            if (data.status == 'success') {
		                $('#logging_time').timer('remove');
		                $('#logging_time').timer({
		                    seconds: data.time
		                });
		                $('#logging_pause').show();
		                $('#logging_play').hide();
		                $('#timer_' + order + '_' + timecat).removeClass('pause').addClass('play');
		                $('#timer_img_' + order + '_' + timecat).removeClass('pause').addClass('play');
		                $('#timer_' + order + '_' + timecat).attr('data-action', 'logpauseOption');
		                $('#timer_img_' + order + '_' + timecat).attr('data-action', 'logpauseOption');
		            }
		            if (data.action == 'fail') {
		                $('#msg.msg').html(data.msg);
		            }
		            hideNotification('#msg.msg');
		        }
		    });
	}
}

function logtimeTimer() {
    //$('#logtime_popup #so_process_name').html(timecat + '&nbsp;&nbsp;<img src="img/' + timecat + '.png" width="25px" />');
   
    var order_name = $('#sp_order_name_' + order).text();
    //$('#logtime_popup #so_name').parent().attr('style', $('#sp_order_name_' + order).find('.so-color-box').attr('style'));
    //$('#logtime_popup #so_name').html(order_name);
    
    var currDataHexcolor = $('#sp_order_name_' + order).find('.so-color-box').css('background-color')
    
    console.log("timecat..."+timecat+"....currDataHexcolor---"+currDataHexcolor);
    
	var $so_name_box = $('#addLogTimeContent').find('.so-details-box');
	$so_name_box.css('border-color',currDataHexcolor);
	$so_name_box.find('.so-color-box').css('background-color',currDataHexcolor);
	$so_name_box.find(".so-name-box").html(order_name);
	
	var id="";
	//$('#is_revision').attr('data-timecat', timecat);
	var soTimeId=order;// done
	var date=date;// done
	var time = $('#logging_time').text()// done
	
	if (time.indexOf("sec") >= 0){
		var timeTemp=time.split(" ");
		time=timeTemp[0];
		if(time<10){
			time="00:0"+time;
		}else{
			time="00:"+time;
		}
	}else if (time.indexOf("min") >= 0){
		var timeTemp=time.split(" ");
		time=timeTemp[0];
	}
	
	var crewSize=1;// done
	// $('#grn_staffTime_id').val(timerId);
	var grnStaffTimeId=timerId;
	
	var category=timecat;
	var comment="";// done
	
	var $addUpdateLogTimeForm = $('form#addLogTimeForm');
	$addUpdateLogTimeForm.find('#logDate').val(date);
	$addUpdateLogTimeForm.find('#logTime').val(time);
	$addUpdateLogTimeForm.find('#totalCrewTime').html('');
	$addUpdateLogTimeForm.find('#logComment').val(comment);
	refreshSelect($addUpdateLogTimeForm.find('#timeCat'),category);
	refreshSelect($addUpdateLogTimeForm.find('#crewSize'),crewSize);
	calcTotalCrewTime(crewSize,time);
	
	$.mobile.changePage('#add-log-time','slide');
}


function deleteTimer() {
	console.log('Order: ' + order + ' TimeCat: ' + timecat + ' TimerId: ' + timerId);
	
	//var connectionType=checkConnection();
	var connectionType="Unknown connection";//For Testing
	
	if(connectionType=="Unknown connection" || connectionType=="No network connection"){
		showDeleteTrackerDialog();
	}
	else if(connectionType=="Unknown connection"){
		type = '<i class="fa fa-exclamation-triangle fa-5x text-danger"></i><br><br>';
	    bootbox.confirm({
	        size: 'small', closeButton: false,
	        message: type + "Confirm delete?",
	        buttons: {
	            'cancel': {label: 'Cancel', className: 'btn-default pull-left'},
	            'confirm': {label: 'Delete', className: 'btn-warning pull-right'}
	        },
	        callback: function(result) {
	            if (result) {
	                $.ajax({
	                    type: "POST",
	                    url: baseGrnUrl + "timetracker/ajax.php",
	                    data: "timerId=" + timerId + "&action=deleteLogTime",
	                    dataType: "json",
	                    success: function(data) {
	                        if (data.status == 'success') {
	                            $('#msg.msg').html('<div class="alert alert-success span6"><button data-dismiss="alert" class="close" type="button">×</button>' + data.msg + '</div>');
	                            resetTracker();
	                        }
	                        if (data.action == 'already') {
	                            $('#msg.msg').html(data.msg);
	                        }
	                        hideNotification('#msg.msg');
	                    }
	                });

	            }
	        }
	    });
	}
}

function showDeleteTrackerDialog() {
    navigator.notification.confirm(
            ("Are you sure to delete this time ?"), // message
            deleteTrackerAction, // callback
            'BP METRICS - Time Tracker ', // title
            'Cancel,Delete' // buttonName
    );
}

//Call exit function
function deleteTrackerAction(button){
    if(button=="1" || button==1){
    	alert("1 pressed");
    }
    else if(button=="2" || button==2){
    	alert("2 pressed");
    }
}


function logpauseOption() {
    //$('#logpause_option_popup').modal();
	showLogPauseOptionsDialog();
}

function showLogPauseOptionsDialog() {
    navigator.notification.confirm(
            ("What to do with the running timer ?"), // message
            logPauseAction, // callback
            'BP METRICS - Time Tracker ', // title
            'Cancel,Log Time,Pause' // buttonName
    );
}

//Call exit function
function logPauseAction(button){
    if(button=="1" || button==1){
    	alert("1 pressed");
    }
    else if(button=="2" || button==2){
    	alert("2 pressed");
    }
    else if(button=="3" || button==3){
    	alert("3 pressed");
    }
}


function resetTracker() {
    $('#logging_time').timer('remove');
    $('#logging_time').timer({
        seconds: 0
    });
    $('#timer_' + order + '_' + timecat).removeClass('pause').removeClass('play').addClass('clock');
    $('#timer_img_' + order + '_' + timecat).removeClass('pause').removeClass('play');
    $('#timer_' + order + '_' + timecat).attr('data-action', 'clock');
    $('#timer_img_' + order + '_' + timecat).attr('data-action', 'clock');
    $('#logtime_popup').modal('hide');
    $('#running_tracker').hide();

    TimerFlag = 0;
    order = 0;
    timecat = 0;
    timerId = 0;
    $('#logging_pause').show();
}

/* ---------------------Posted -------------------------- */

function logtimePost() {    
    if (timeValidation('#logTimeForm') == 0) {
        return false;
    }
    var formData = $('#logTimeForm').serialize();   
    $.ajax({
        type: "POST",
        url: baseGrnUrl + "timetracker/ajax.php",
        data: formData + "&action=addLogTime",
        dataType: "json",
        success: function(data) {
            if (data.status == 'success') {
                $('#msg.msg').html('<div class="alert alert-success span6"><button data-dismiss="alert" class="close" type="button">×</button>' + data.msg + '</div>');
                resetTracker();
            }
            if (data.action == 'already') {
                $('#msg.msg').html(data.msg);
            }
            getSaleOrders();
            hideNotification('#msg.msg');
        }
    });
    return false;
}

function changeTimeCat(timeCat) {
    $('#grn_timeCat').val(timeCat.value);
}

function totaltimeCal(){
    var crew_size = $('#crew_size').val();
    var time_h = $('#hours').val();
    var time_m = $('#minutes').val();
    
    var total_h = time_h * crew_size;
    var total_m = time_m * crew_size;
    if(total_m > 59) {
        var time_hours = Math.floor(total_m / 60);
        total_h += time_hours;
        total_m = total_m - (time_hours * 60);
    }
    
    total_h = (total_h < 10) ? ("0" + total_h) : total_h;
    total_m = (total_m < 10) ? ("0" + total_m) : total_m ;
    $('#total_time_cal').html(total_h + ':' + total_m);
}

function manualTimePost() {    
    if (timeValidation('#manual_logTimeForm') == 0) {
        return false;
    }
    var formData = $('#manual_logTimeForm').serialize();
    $.ajax({
        type: "POST",
        url: baseGrnUrl + "timetracker/ajax.php",
        data: formData + "&action=addLogTime",
        dataType: "json",
        success: function(data) {
            if (data.status == 'success') {
                $('#msg.msg').html('<div class="alert alert-success span6"><button data-dismiss="alert" class="close" type="button">×</button>' + data.msg + '</div>');
                resetTracker();
                $('#commonModal').modal('hide');
                $('#commonModalWide').modal('hide');
            }
            if (data.action == 'already') {
                $('#msg.msg').html(data.msg);
            }
            getSaleOrders();
            hideNotification('#msg.msg');
        }
    });
    return false;
}

function timeValidation(section) {
    $(section + ' .required').parent('div').removeClass('has-error');
    $(section + ' .required').parent('td').removeClass('has-error');
    $(section + ' .required').removeClass('error');
    $(section + ' .required').each(function() {
        if ($.trim($(this).val()) == "") {
            $(this).addClass('error');
            $(this).parent('td').addClass('has-error');
             $(section + ' .required').parent('div').addClass('has-error');
        }
        if ($("#minutes").val() > 59) {
            $(this).addClass('error');
            $(this).parent('td').addClass('has-error');
        }

    });
    if ($(section + ' .error').length) {
        return 0;
    }
}

function checkTimeTracker() {
    $.ajax({
        type: "POST",
        url: baseGrnUrl + "timetracker/ajax.php",
        data: "action=checkTimeTracker",
        dataType: "json",
        success: function(data) {
            if (data.status == 'success') {
                timerId = data.timerTrack.timerId;
                order = data.timerTrack.order;
                timecat = data.timerTrack.timecat;
                date = data.timerTrack.date;

                if (data.timerTrack.state == 'running') {
                    $('#logging_time').timer({
                        seconds: data.timerTrack.time
                    });
                    $('#running_tracker').show();
                    $('#logging_pause').show();
                    $('#logging_play').hide();
                    $('#timer_' + order + '_' + timecat).removeClass('clock').addClass('play');
                    $('#timer_img_' + order + '_' + timecat).removeClass('clock').addClass('play');
                    $('#timer_' + order + '_' + timecat).attr('data-action', 'logpauseOption');
                    $('#timer_img_' + order + '_' + timecat).attr('data-action', 'logpauseOption');
                }
				else if (data.timerTrack.state == 'pause') {

                    $('#logging_time').timer({
                        seconds: data.timerTrack.time
                    });
                    $('#logging_time').timer('pause');
                    $('#running_tracker').show();
                    $('#logging_pause').hide();
                    $('#logging_play').show();
                    $('#timer_' + order + '_' + timecat).removeClass('clock').addClass('pause');
                    $('#timer_img_' + order + '_' + timecat).removeClass('clock').addClass('pause');
                    $('#timer_' + order + '_' + timecat).attr('data-action', 'resume');
                    $('#timer_img_' + order + '_' + timecat).attr('data-action', 'resume');
                }
                $('#logging_proc_icon').html('<img src="img/' + timecat + '.png" width="25px" />');
                
                $('#logging_detail').html($('#sp_order_name_' + order).text());
                $('#logging_detail').attr('style', $('#sp_order_name_' + order).attr('style'));
            }
            if (data.action == 'fail') {
            }
        }
    });
}

function logtimeasRevision() {
    $('#grn_timeCat').val(timecat + '_revision');
    logtimePost();
}
function manualTimeasRevision() {
    $('#grn_timeCat').val($('#timeCat').val() + '_revision');
    manualTimePost();
}

function getLogTimeListOfOrder(order) {
	var orderId = $(order).attr('data-order');
	$.ajax({
		type: "POST",
		url: baseGrnUrl + "timetracker/ajax.php",
		data: "orderId=" + orderId + "&action=getLogTimeListOfOrder",
		dataType: "json",
		success: function(data) {
			if (data.status == 'success') {
				$('#commonModalWide .modal-content').html(data.html);
                                $('#commonModalWide').modal();
			}
			if (data.action == 'already') {
				$('#msg.msg').html(data.msg);
			}
                        hideNotification('#msg.msg');
		}
	});
}

//$(document).ready(function() {
    //checkTimeTracker(); 
//});


/*
$(".attachment").on("click", function(event){
	  event.stopPropagation();
	  console.log( "I was clicked, but my parent will not be." );
	});

	This prevents the event from bubbling up the DOM to the parent node.

	Also part of the event object is the target member. This will tell you which element triggered the event to begin with. However, in this instance, stopPropagation appears to be the best solution.

	$(".outerElement").on("click", function(event){
	  console.log( event.target );
	});*/