'use strict';

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

var boxArr = document.querySelectorAll('.container__box');
var headerArr = document.querySelectorAll('.container__header');
var contentArr = document.querySelectorAll('p');

for (var i = 0; i < boxArr.length; i++) {
	boxArr[i].setAttribute('id',data[i].id);
  headerArr[i].innerHTML = data[i].title;
  contentArr[i].innerHTML = data[i].content;
	
	(function() {
		var categoryArr = data[i].categories;
		for (var j = 0; j < categoryArr.length; j++) {
			if (categoryArr[j].length > 0 && categoryArr[j] != 'special-header') {
				boxArr[i].classList.add(categoryArr[j]);
			} else if (categoryArr[j] == 'special-header') {
				headerArr[i].classList.add(categoryArr[j]);
			}
		};
	})();
};


