<?php
class ezDebugFunctionCollection
{
    /**
     * Constructor
     */
    function ezDebugFunctionCollection()
    {
    }
    
    public function getAllParameters($method = 'get'){
    	
    	switch(strtolower($method)){
    		case 'get':
    			return array( 'result' => $_GET );
    			break;
    		case 'post':
    			return array( 'result' => $_POST );
    			break;
    	}
    }
}