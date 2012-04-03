<?php

class ezDebugFunctionCollection
{

    public function getAllParameters( $method = 'get' )
    {
        switch( strtolower( $method ) )
        {
            case 'get':
                return array( 'result' => $_GET );
            case 'post':
                return array( 'result' => $_POST );
        }
    }
}