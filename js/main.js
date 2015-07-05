$(function(){
	'use strict';

	// Define helper functions
	//

	// Choose what color to show in header
	// strip based on current category
	 var chooseColor = function(){
	 	// Create array from URL and pull the category
		var pathArray = window.location.pathname.split('/'),
			category = pathArray[1],
			colorHex = '';
		// Based on category - assign color
		if(category === 'blog'){
			console.log(category);
			colorHex = '#f1c40f';
		}
		else if(category === 'work'){
			console.log(category);
			colorHex = '#2ecc71';

		} else {
			colorHex = '#34495e';
		}
		return colorHex;
	};

	$('.strip').css('background-color', chooseColor());

	// Get my repos from github API
	$.get('https://api.github.com/users/omrimor/repos')
	  .done(function(data) {
	  	buildList(data);
	 });

	// Build the projects list
	 var buildList = function(obj){
		var ul = $('#code ul'),
	 		docfrag = document.createDocumentFragment();

	 	if(obj){
		 	$.each(obj, function(inx, item){
			 	var li = document.createElement('li');
			 	var linkTitle = document.createElement('a');

				// If one of the following repos
				// don't include in the final list
			 	if(item.name === 'omrimor.github.io' || item.name === 'ui-person' ||
			 		item.name === 'exercises'){
			 		return;
			 	} else {
			 		linkTitle.innerHTML = item.name;
			 		linkTitle.setAttribute('target', 'blank');

					// If the repo is blogapp - go to the Heruko project
			 		if(item.name === 'blogapp'){
			 			linkTitle.href = 'http://omrimor-blogapp.herokuapp.com/';
			 		} else {
				 		linkTitle.href = 'http://omrimor.github.io/' + item.name;
			 		}

			 		li.appendChild(linkTitle);
			 		docfrag.appendChild(li);
			 	}

		 	});
		 	ul.append(docfrag);
	 	}
	 };


});
