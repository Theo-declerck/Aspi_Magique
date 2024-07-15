<?php
// src/Controller/route.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class Contact extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function list(): Response
    {
        return $this->render('Contact.html.twig');
    }
}
?>