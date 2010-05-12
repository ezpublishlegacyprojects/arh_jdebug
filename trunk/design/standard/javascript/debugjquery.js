var defaultArray = new Array();
defaultArray['httpVariables']='#httpVariables';
defaultArray['timing']='#timeaccumulators, #timingpoints';
defaultArray['templateusage']='#templateusage';
defaultArray['debug-toolbar']='#debug-toolbar';

$(document).ready(function() {

	if(close == true){
		$("#menuDebug ul").hide('slow');
		$("#linkDebug").find('img').attr('src', '/extension/arh_jdebug/design/standard/images/flecheOuvrir.gif');
	}
	// open / close jdebug
	$("#linkDebug").click(function(){
		if(close == true){
			$(this).find('img').attr('src', '/extension/arh_jdebug/design/standard/images/flecheFermer.gif');
			$("#menuDebug ul").show('slow');
			close = false;
		}else{
			displayNoneAll();
			$("#menuDebug ul").hide('slow');
			$(this).find('img').attr('src', '/extension/arh_jdebug/design/standard/images/flecheOuvrir.gif');
			close = true;
		}
		
		// store value of variable close in ezpreference
		$.ajax({ url: url_ezpreference+'/close/'+close,   data: '',  success: function(){}	});

	});
	
	// event's elements of menu
	$("#menuDebug ul li a").click(function(){
					
				if(!$(this).hasClass('menuDebugSelected')){
					displayNoneAll();
					$('#debug').removeClass('sizeNull');
					$(this).addClass('menuDebugSelected');
					$($(this).attr("rel")).slideDown();
				}else{
					$('#debug').addClass('sizeNull');
					$($(this).attr("rel")).slideUp();
					$(this).removeClass('menuDebugSelected');
				}
	});
	
	displayNoneAll();
	
	// filter on Error list
	$('#filterErrors a').click(function(){
		displayNoneAllErrors();
		if($(this).attr("rel") != ''){
			$("#errorsDebug tbody tr > td > b > span:contains('"+$(this).attr("rel")+"')").parents('tr').show();
			$("#errorsDebug tbody tr > td > b > span:contains('"+$(this).attr("rel")+"')").parents('tr').next('tr').show();
		}else{
			displayBlockAllErrors();
		}
		$('#filterErrors a').css('font-weight', 'normal');
		$(this).css('font-weight', 'bold');
	});
	
	var displayNoneAllErrors = function(){
		$('#errorsDebug tbody tr:gt(1)').hide();
	}
	
	var displayBlockAllErrors = function(){
		$('#errorsDebug tbody tr:gt(1)').show();
	}
	
	// default output
	if(defaultOutput && close != true){
		$('#debug').removeClass('sizeNull');
		$('#menuDebug ul li a[rel='+defaultArray[defaultOutput]+']').addClass('menuDebugSelected');
		$(defaultArray[defaultOutput]).slideDown();
	}
});

//display none elements debug
var displayNoneAll = function(){

	$('#debug').addClass('sizeNull');
	$("#menuDebug ul li a").removeClass('menuDebugSelected');
	
	// display  none : cache settings, errors
	$("#debug > table > tbody > tr > td > table:eq(0) > tbody > tr:eq(0) .debug-toolbar").hide();
	$("#debug > table > tbody > tr > td > table:eq(0) > tbody > tr").not(":eq(0)").appendTo('#errorsDebug tbody');
	$("#httpVariables, #errorsDebug").hide();
	
	// display  none : timingpoints, timeaccumulators, templateusage.
	$("#debug > table > tbody > tr > td > table").not(":eq(0)").hide();
	$("#debug > table > tbody > tr > td > h2").hide();

}