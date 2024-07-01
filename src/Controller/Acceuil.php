<?php
// src/Controller/route.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class Acceuil extends AbstractController
{
    #[Route('/', name: 'acceuil')]
    public function list(): Response
    {
        return $this->render('Acceuil.html.twig');
    }
}
?>