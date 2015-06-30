$(function(){
	'use strict';

	// var ul = $('#code ul');
	// ul.html('this is new');
	// console.log(ul);

	// var docfrag = document.createDocumentFragment();
	// var li = document.createElement('li');

	$.get('https://api.github.com/users/omrimor/repos')
	  .done(function(data) {
	  	// console.log(data.length);
	  	console.log(data);

	  	buildList(data);

	  	// $.each(data, function(inx, item){
	  	// 	// console.log(inx, item);
	  	// 	console.log(item.name, item.html_url);

	  	// });

	 });


	 var buildList = function(obj){
		var ul = $('#code ul'),
	 		docfrag = document.createDocumentFragment();


	 	if(obj){
		 	$.each(obj, function(inx, item){
			 	var li = document.createElement('li');
			 	// var link = document.createElement('a');
			 	var linkTitle = document.createElement('a');
			 	// var title = document.createElement('h3');

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

			 		console.log(linkTitle);
			 	}

		 	});
		 	ul.append(docfrag);


	 	}




	 };


});
