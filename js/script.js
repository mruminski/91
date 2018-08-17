'use strict';

var boxArr = document.querySelectorAll('.container__box');
var headerArr = document.querySelectorAll('.container__header');
var contentArr = document.querySelectorAll('p');
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

var getData = function(scr, box, header, content, iterator) {
	box[iterator].setAttribute('id',scr[iterator].id);
	header[iterator].innerHTML = scr[iterator].title;
	content[iterator].innerHTML = scr[iterator].content;
}

var checkCategory = function(array, iterator, className) {
	for (var key in array) {
		if (array[key].length > 0 && array[key] !== className) {
			boxArr[iterator].classList.add(array[key]);
		} else if (array[key] === className) {
			headerArr[iterator].classList.add(array[key]);
		}
	}	
};

for (var i = 0; i < boxArr.length; i++) {
	var categoryArr = data[i].categories;
	getData(data, boxArr, headerArr, contentArr, i);
	checkCategory(categoryArr, i, 'special-header');
};


