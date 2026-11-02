// Common naming conventions in JavaScript

// camelCase: first word starts lowercase; each following word starts uppercase.
const firstName = "Ava";
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

// PascalCase: every word starts uppercase; commonly used for classes.
class ShoppingCart {
  constructor(itemCount) {
    this.itemCount = itemCount;
  }
}

// snake_case: words are lowercase and separated by underscores.
const user_email = "ava@example.com";
const total_item_count = 3;

// SCREAMING_SNAKE_CASE: uppercase words separated by underscores;
// commonly used by convention for constants.
const MAX_LOGIN_ATTEMPTS = 5;
const DEFAULT_TIMEOUT_MS = 3000;

// Prefixes can add meaning to a name. For example, is/has/can prefixes
// are often used for boolean values, and get/calculate prefixes for functions.
const isLoggedIn = true;
const hasPermission = false;
const canEdit = true;
function getUserName() {
  return firstName;
}

// Boolean names often read like a yes/no question.
const isAvailable = true;
const hasItems = new ShoppingCart(total_item_count).itemCount > 0;

// kebab-case: lowercase words separated by hyphens. It is not valid for
// ordinary variable or function identifiers; it is common in filenames,
// URLs, and string keys.
const fileName = "user-profile.js";
const routeName = "/user-settings";
const labels = { "user-profile": "User profile" };

console.log(firstName, calculateTotal(10, 0.1));
console.log(new ShoppingCart(total_item_count).itemCount);
console.log(user_email, MAX_LOGIN_ATTEMPTS, DEFAULT_TIMEOUT_MS);
console.log(isLoggedIn, hasPermission, canEdit, isAvailable, hasItems);
console.log(getUserName(), fileName, routeName, labels["user-profile"]);