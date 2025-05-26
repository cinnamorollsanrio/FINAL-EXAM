// empty array to store grocery items (like a stack)
let groceryStack = [];

// check if stack is empty or not, and return last item
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null;
    } else {
        console.log("Top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1];
    }
}

// check if input is valid (letters and spaces only)
function isWord(str) {
    return /^[A-Za-z ]+$/.test(str.trim());
}

// add item to the stack
function push(item) {
    if (!isWord(item)) {
        console.log("Invalid item. Please enter words only.");
        return;
    }
    groceryStack.push(item);
    peek(); // call peek after push
    console.log("Stack:", groceryStack);
}

// remove last item from the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("Nothing to remove. Stack is empty.");
    } else {
        let removed = groceryStack.pop();
        console.log("Removed:", removed);
        peek(); // call peek after pop
        console.log("Stack:", groceryStack);
    }
}

// ask user 5 times for grocery item
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1} (items only):`);
    push(item);
}

// EXAMPLE OUTPUT 
// Enter a grocery item (1/5):hotdog
// Top item: hotdog
// Stack: [ 'hotdog' ]
// Enter a grocery item (2/5):200
// Invalid input. Words only. Try again.
// Enter a grocery item (2/5):coca cola
// Top item: coca cola
// Stack: [ 'hotdog', 'coca cola' ]
// Enter a grocery item (3/5):pepsi
// Top item: pepsi
// Stack: [ 'hotdog', 'coca cola', 'pepsi' ]
// Enter a grocery item (4/5):paloma
// Top item: paloma
// Stack: [ 'hotdog', 'coca cola', 'pepsi', 'paloma' ]
// Enter a grocery item (5/5):vic sotto
// Top item: vic sotto
// Stack: [ 'hotdog', 'coca cola', 'pepsi', 'paloma', 'vic sotto' ]

