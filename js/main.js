// Items in our shopping cart
var shoppingCart = [];

// Cereal items
var origItems = [
	{
		img: 'images/h1.jpg',
		name: 'Beats Original'
	},
	{
		img: 'images/h2.jpg',
		name: 'Beats Original'
	},
	{
		img: 'images/h3.jpg',
		name: 'Beats Original'
	},
	{
		img: 'images/h4.jpg',
		name: 'Beats Original'
	}
];

// Juice items
var wirelessItems = [
	{
		img: 'images/h1.jpg',
		name: 'Wireless 3'
	},
	{
		img: 'images/h2.jpg',
		name: 'Wireless 3'
	},
	{
		img: 'images/h3.jpg',
		name: 'Wireless 3'
	},
	{
		img: 'images/h4.jpg',
		name: 'Wireless 3'
	}
];

// Candy items
var proItems = [
	{
		img: 'images/h1.jpg',
		name: 'Beats Pro'
	},
	{
		img: 'images/h2.jpg',
		name: 'Beats Pro'
	},
	{
		img: 'images/h3.jpg',
		name: 'Beats Pro'
	},
	{
		img: 'images/h4.jpg',
		name: 'Beats Pro'
	}
];


// Add click handlers to our category buttons
$('#original').click(function() {
	addShoppingItems('original');
});

$('#wireless').click(function() {
	addShoppingItems('wireless');
});

$('#pro').click(function() {
	addShoppingItems('pro');
});

// Add click handlers to each shopping item
$('#shopping-items').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});

// Add shopping items to our page
function addShoppingItems(category) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myItems;
	switch(category) {
		case 'original':
			myItems = origItems;
			break;
		case 'wireless':
			myItems = wirelessItems;
			break;
		case 'pro':
			myItems = proItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`);
	}

	$('#shopping-items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
	$('#shopping-items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}