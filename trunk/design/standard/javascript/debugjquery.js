$(document).ready(function() {

	$("#linkDebug").toggle(
		function(){
			displayNoneAll();
			$("#menuDebug ul").hide('slow');
			$(this).find('img').attr('src', '/extension/arh_jdebug/design/standard/images/flecheOuvrir.gif');
		},
		function(){
			$(this).find('img').attr('src', '/extension/arh_jdebug/design/standard/images/flecheFermer.gif');
			$("#menuDebug ul").show('slow');
		}
	);
	
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
	
	// display none elements debug
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
	});
	
	var displayNoneAllErrors = function(){
		$('#errorsDebug tbody tr:gt(1)').hide();
	}
	
	var displayBlockAllErrors = function(){
		$('#errorsDebug tbody tr:gt(1)').show();
	}
})