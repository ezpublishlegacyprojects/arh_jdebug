{*----------------------------------------
Intégration : Abdelkader RHOUATI	
Date : 22/10/2009
------------------------------------------
Développement : Abdelkader RHOUATI
Date : 22/10/2009
------------------------------------------
Modification : 
Date : 
Description :  
------------------------------------------
Exigence ://
Description : Template for debug width jquery
------------------------------------------
TODO :

-----------------------------------------*}
{* dont work with cache 

{ezcss_require( array( 'debug.css', 'debugjquery.css' ) )}

{ezscript_require( array('jquery-1.3.2.min.js', 'debugjquery.js') )}

*}

<!-- insert css and javascript -->
<style type="text/css">
	@import url({"stylesheets/debugjquery.css"|ezdesign()});
</style>
<script type="text/javascript">
	var close = {cond(ezpreference( 'close' ), ezpreference( 'close' ), 'false')};
	var defaultOutput = '{ezini('DebugJquerySettings', 'DefaultOutput', 'debugjquery.ini'))}';
	var url_ezpreference = {'user/preferences/set'|ezurl()};
</script>
<script src={"javascript/jquery-1.3.2.min.js"|ezdesign()} type="text/javascript" language="JavaScript"></script>
<script src={"javascript/debugjquery.js"|ezdesign()} type="text/javascript" language="JavaScript"></script>

<!-- menu debug -->
<div id="menuDebug">
	<a href="#"><img src={"images/logoEzDebug.jpg"|ezdesign()} alt="logo EZ" /></a>
	<ul>
		<li>
			<a href="Javascript:;" rel=".debug-toolbar">Settings</a>
		</li>
		<li>
			<a href="Javascript:;" rel="#errorsDebug">Errors</a>
		</li>
		<li>
			<a href="Javascript:;" rel="#templateusage">Templates</a>
		</li>
		<li>
			<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
		</li>
		<li>
			<a href="Javascript:;" rel="#timeaccumulators, #timingpoints"><img src={"images/timming.gif"|ezdesign()} alt="Icone Timing"></a>
		</li>
		<li>
			<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
		</li>
		<li>
			<a href="Javascript:;" rel="#httpVariables">HTTP</a>
		</li>
	</ul>
	
	<a href="#" id="linkDebug"><img src={"images/flecheFermer.gif"|ezdesign()} alt="Close" title="Close" /></a>
</div>
<div style="clear:both"></div>

<table id="httpVariables">
	<tbody>
		<tr>
		    <td>
		    	{def $postVariables = fetch('debug', 'getAllParameters', hash('method', 'POST'))}
		    	<h2>Variable En POST</h2>
		    	<table class="list">
		    		<tbody>
		    			{if count($postVariables)}
		    				<tr>
				    			<td>{$postVariables|attribute(show, 5)}</td>
				    		</tr>
			    		{else}
				    		<tr>
				    			<td colspan="2">No variables.</td>
				    		</tr>
				    	{/if}
		    		</tbody>
		    	</table>
		    </td>
		  </tr>
		  <tr>
		  	<td>
		    	{def $getVariables = fetch('debug', 'getAllParameters', hash('method', 'GET'))}
		    	<h2>Variable En GET</h2>
		    	
		    	<table class="list">
		    		<tbody>
		    			{if count($getVariables)}
				    		<tr>
				    			<td colspan="2">{$getVariables|attribute(show, 5)}</td>
				    		</tr>
				    	{else}
				    		<tr>
				    			<td colspan="2">No variables.</td>
				    		</tr>
				    	{/if}
			    	</tbody>
		    	</table>
		    </td>
		</tr>
	</tbody>
</table>

<table cellspacing="0" style="border: 1px dashed black; display: none;" id="errorsDebug">
	<tbody>
		<tr>
	    	<td>
	    		<form action="#">
	    			<input type="text" name="filter" value="filter" 
	    					onfocus="if(this.value=='filter')this.value=''"
	    					onblur="if(this.value=='')this.value='filter'"/>
	    			<input type="submit" value="OK" />
	    		</form>
	    	</th>
	  	</tr>
		<tr>
	    	<td>
	    		<ul id="filterErrors">
	    			<li>
	    				<a href="#" rel="">All</a>
	    			</li>
	    			<li>
						<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
					</li>
	    			<li>
	    				<a href="#" rel="Error:">Errors</a>
	    			</li>
	    			<!-- li>
						<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
					</li>
	    			<li>
	    				<a href="#" rel="Notice: eZMySQLDB">SQL</a>
	    			</li -->
	    			<li>
						<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
					</li>
					<li>
	    				<a href="#" rel="Warning:">Warning</a>
	    			</li>
					<li>
						<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
					</li>
					
	    			<li>
	    				<a href="#" rel="Notice:">Notice</a>
	    			</li>
	    			<li>
						<img src={"images/separateurDebugMenu.jpg"|ezdesign()} alt="Separator" />
					</li>
	    			<li>
	    				<a href="#" rel="Timing:">Timing</a>
	    			</li>
	    		</ul>
	    	</th>
	  	</tr>
	
	</tbody>
</table>



<!--DEBUG_REPORT-->