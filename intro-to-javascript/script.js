var wonders = [
	{name:'Great Pyramid of Giza', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1280px-Kheops-Pyramid.jpg'},
	{name:'Hanging Gardens of Babylon', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1280px-Kheops-Pyramid.jpg'},
	{name:'Temple of Artemis', img: 'http://upload.wikimedia.org/wikipedia/commons/1/1d/Miniaturk_009.jpg'},
	{name:'Statue of Zeus at Olympia', img: 'http://upload.wikimedia.org/wikipedia/commons/c/c6/Statue_of_Zeus.jpg'},
	{name:'Mausoleum at Halicarnassus', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mausoleum_of_Halicarnassus_2009.jpg/1280px-Mausoleum_of_Halicarnassus_2009.jpg'},
	{name:'Colossus of Rhodes', img: 'http://upload.wikimedia.org/wikipedia/commons/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg'},
	{name:'Lighthouse of Alexandria', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lighthouse_-_Thiersch.gif/1024px-Lighthouse_-_Thiersch.gif'},
];

wonders.forEach(function(wonder) {
	document.body.innerHTML += '<h2>' + wonder.name + '</h2>' + '<img src="' + wonder.img + '">';
	+= 
});


