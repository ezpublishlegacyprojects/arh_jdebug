<?php

/*! \file function_definition.php
*/

$FunctionList = array();

$FunctionList['getAllParameters'] = array( 'name' => 'getAllParameters',
                                 		   'operation_types' => 'read',
                                 			'call_method' => array( 'class' => 'ezDebugFunctionCollection',
                                                        			'include_file' => 'extension/arh_jdebug/classes/ezdebugfunctioncollection.php',
                                                         			'method' => 'getAllParameters' ),
                                 			'parameter_type' => 'standard',
                                 			'parameters' => array( array( 'name' => 'method',
                                                               			  'type' => 'string',
                                                               			  'required' => false,
                                                               			  'default' => 'Post' ) ) );

?>
