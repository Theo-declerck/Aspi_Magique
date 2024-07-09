<?php
// src/Controller/route.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class Devis extends AbstractController
{
    #[Route('/devis', name: 'devis')]
    public function list(): Response
    {
        return $this->render('Devis.html.twig');
    }
}
?>