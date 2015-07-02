$(function(){
	'use strict';

	 var chooseColor = function(){
		var pathArray = window.location.pathname.split('/'),
			category = pathArray[1],
			colorHex = '';
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

	$.get('https://api.github.com/users/omrimor/repos')
	  .done(function(data) {
	  	buildList(data);
	 });


	 var buildList = function(obj){
		var ul = $('#code ul'),
	 		docfrag = document.createDocumentFragment();

	 	if(obj){
		 	$.each(obj, function(inx, item){
			 	var li = document.createElement('li');
			 	var linkTitle = document.createElement('a');

			 	if(item.name === 'omrimor.github.io' || item.name === 'ui-person' ||
			 		item.name === 'exercises'){
			 		return;
			 	} else {
			 		linkTitle.innerHTML = item.name;
			 		linkTitle.setAttribute('target', 'blank');

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
