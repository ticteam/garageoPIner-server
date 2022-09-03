
$( document ).ready(function(){
	initialize();
});

function initialize(){
	//Initialize global vaiables
	button1 = $( "#btnopenclose1" );
	buttonTime1 = $( "#btntime1" );
	
	button2 = $( "#btnopenclose2" );
	buttonTime2 = $( "#btntime2" );

	button3 = $( "#btnopenclose3" );
	buttonTime3 = $( "#btntime3" );
	
	button4 = $( "#btnopenclose4" );
	buttonTime4 = $( "#btntime4" );
	
	myswitch = $("#tgltime");

	toggleTime = $('#tgltime');

	var timeControlEnabled = myswitch[0].selectedIndex == 1 ? true:false;
	showTimeProperties(timeControlEnabled);

	toggleTime.change(function(event) {
	    event.stopPropagation();
	    var timeControlEnabled= myswitch[0].selectedIndex == 1 ? true:false;
	    showTimeProperties(timeControlEnabled);
	});
	
	button1.click(toggleIN1);
	buttonTime1.click(timeControlIN1);

	button2.click(toggleIN2);
	buttonTime2.click(timeControlIN2);
	
	button3.click(toggleIN3);
	buttonTime3.click(timeControlIN3);

	button4.click(toggleIN4);
	buttonTime4.click(timeControlIN4);
	

}

function toggleIN1(){
	$.get(document.location.href + "toggleIN1");
}

function toggleIN2(){
	$.get(document.location.href + "toggleIN2");
}
function toggleIN3(){
	$.get(document.location.href + "toggleIN3");
}
function toggleIN4(){
	$.get(document.location.href + "toggleIN4");
}

function timeControlIN1(){
	$.get(document.location.href + "timeControlIN1?seconds=240");
}

function timeControlIN2(){
	$.get(document.location.href + "timeControlIN2?seconds=240");
}

function timeControlIN3(){
	$.get(document.location.href + "timeControlIN3?seconds=240");
}

function timeControlIN4(){
	$.get(document.location.href + "timeControlIN4?seconds=240");
}

function stopTimeControlIN1(){
	$.get(document.location.href + "stopTimeControlIN1");
}

function stopTimeControlIN2(){
	$.get(document.location.href + "stopTimeControlIN2");
}

function stopTimeControlIN3(){
	$.get(document.location.href + "stopTimeControlIN3");
}

function stopTimeControlIN4(){
	$.get(document.location.href + "stopTimeControlIN4");
}


function showTimeProperties(show){
    if(show) {            
        buttonTime1.fadeIn('slow').next().fadeIn('slow');
        buttonTime2.fadeIn('slow').next().fadeIn('slow');
        buttonTime3.fadeIn('slow').next().fadeIn('slow');
        buttonTime4.fadeIn('slow').next().fadeIn('slow');
    } else {            
        buttonTime1.hide();
        buttonTime2.hide();
        buttonTime3.hide();
        buttonTime4.hide();
    }
}
