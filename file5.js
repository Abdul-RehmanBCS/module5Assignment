// Define an array of random category short names
var categories = ['Lunch', 'Dinner', 'Sushi', 'Breakfast', 'Beverages'];

function loadRandomCategory() {
  // Generate a random index to select a category from the array
  var randomIndex = Math.floor(Math.random() * categories.length);
  
  // Get the random category short name
  var randomCategoryShortName = categories[randomIndex];
  
  // Call the loadMenuItems function with the random category short name
  $dc.loadMenuItems(randomCategoryShortName);
}
