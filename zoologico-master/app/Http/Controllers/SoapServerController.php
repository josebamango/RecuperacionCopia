<?php

namespace App\Http\Controllers;

use App\WebServices\WSDLDocument;
use SoapServer;
use App\WebServices\ZoologicoWebService;
use Illuminate\Http\Request;

class SoapServerController extends Controller
{
    private $class = ZoologicoWebService::class;
    private $uri = "http://zoologico.laravel/api";
    private $url = "http://zoologico.laravel/api/wsdl";
    public function getServer()
    {
        $server = new SoapServer($this->url);
        $server->setClass($this->class);
        $server->handle();
        exit();
    }

    public function getWSDL()
    {
        $wsdl = new WSDLDocument($this->class, $this->uri);
        $wsdl->formatOutput = true;
        header("Content-Type: text/xml");
        echo $wsdl->saveXML();
        exit();
    }
}
