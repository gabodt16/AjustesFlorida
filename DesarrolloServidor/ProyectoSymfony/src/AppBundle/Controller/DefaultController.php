<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/inicio", name="inicio")
     */
    public function inicioAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('html/inicio.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/pagina2", name="pagina2")
     */
    public function pagina2Action(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('html/pagina2.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }
}
