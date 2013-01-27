/* 
* 	Janvier 2013 
*   Site de l'Unité Logopédie de la Voix 
*   Réalisé dans le cadre du cours de Projets Web
*   Rahir Justine
*/

(function ($) {
    "use strict";
   
   // --- global vars

   // --- methods

   // SEARCH BOX - Animation du bouton //
   	var animateBouton = function(e){
	   	if ($('.search button').hasClass('active')==true){ // Si le button qui est dans la balise de classe 'search' a la classe 'active'
			$(this).parent('form').animate({ // J'anime son parent qui est le 'form' - 2em vers le haut
				top: '-2em'});
			$(this).removeClass(); // Je supprime la classe 'active' créé plus bas pour qu'il n'y ait pas d'interaction pour la fermeture du form
	   	} else {
	   		$('.search input').focus(); // Donne le focus à l'input du form de recherche
			$(this).parent('form').animate({ // Anime le form - 1em vers le bas
				top: '1em'});
			$(this).addClass('active'); // J'ajoute une classe active au button - Me permettre de faire le if
	   	};
   	};

    // PAGE PORTRAITS - Ouverture du div details //
    var openDetails = function(e){
      $('.equipe').removeClass('active');
      $(this).next('.details').show().animate({ // Affiche les détails de la balise div qui suit le '.more'
        height: '320px'
      }); 
      $(this).parents('#equipe').animate({ // Affiche les détails de la balise div qui suit le '.more'
        height: '670px'
      });
      $('.more').hide();
      $(this).show();
      $(this).parent('.equipe').addClass('active'); // Ajoute une classe 'active' au div de classe 'equipe' qui est active
    };

    // PAGE PORTRAITS - Fermeture du div details //
    var closeDetails = function(e){
      $(this).parent('.details').slideUp("slow");
      $('.equipe').removeClass('active'); // Je delete la classe 'active' attribuée plus haut pour ne pas qu'il y ait conflit
      $('.more').show(); // Affiche le lien de class 'more'
      $(this).parents('#equipe').animate({ // Affiche les détails de la balise div qui suit le '.more'
        height: '320px'
      }, 1000);
    };

    // PAGE RECHERCHE - Affiche le nom de la ville au hover du marqueur
   	var displayCity = function(){
   		$(this).next('span').animate({
  			zIndex: 1,
        opacity: "1"
  		});
   	};

    // PAGE RECHERCHE - Cache le nom de la ville quand on est plus sur le marqueur
   	var displayNotCity = function(){
   		$(this).next('span').animate({
  			zIndex: 0,
        opacity: "0"
  		});	
   	};

    // PAGE RECHERCHE - Affiche les infos liées à la ville cliquée
    var displayInfos = function(e){
      $('.informations').hide(); // La balise de classe 'informations' est cachée
      $(this).parent().next('.informations').show(); // Quand on clique sur le nom de la ville, le div de ses infos apparait
      $('#carte').animate({
        height: "800px" // Anime la div d'id 'carte' - Hauteur de 800px
      });
    };

   	$(function() {
    
    // --- onload routines
    
    // PAGE PORTRAITS 
   	$('.details').hide();
   	$('.more').on('click', openDetails);
   	$('.close').on('click', closeDetails);

  	// CARTE 
    $('.informations').hide();
  	$('.marqueur').on('mouseover', displayCity);
  	$('.marqueur').on('mouseout', displayNotCity);
  	$('.ville').on('click', displayInfos);

  	// SEARCH BOX 
  	$('.search button').on('click', animateBouton); 

	});
})(jQuery);