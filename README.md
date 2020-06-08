# Return Of The String

### Setup

1. Navigate to this directory in your terminal.
2. Run `npm install` to install the testing library.
3. Preferably in a full-screen terminal, run `npm test` to start testing.


### Workflow

* You'll be working in **`main.js`**!
* You'll be creating functions according to the specifications given in the tests. Check your terminal for feedback on which aspect of the problem you have yet to complete, and read the specifications' actual code implementation for extra help; it makes explicit exactly what outputs are expected given the test inputs.
* You will NOT need to call your own functions, except for testing purposes.
* But now that we're out of the dark dark realm where global variables slither, we won't need to worry about messing things up by testing, either! Call your own functions as often as you find it helpful, and feel free to leave those tests in there if you find that helpful as well. Testing don't cost a thing.


### Functions to Write:

* `exclaim` - it takes in a parameter of type String and returns a version where an exclamation point has been added to the end.
* `firstCharacter` - it takes in a parameter of type String and returns only the first character from it. Hint: use an index!
* `lastCharacter` - it takes in a parameter of type String and returns only the last character from it. Hint: use a property of strings that can tell you how long the string is!
* `oneCharacter` - it takes in a parameter of type String and a parameter of type Number and returns the character in the string that's at the index number of the second parameter. Hint: you can put any JavaScript code in the square brackets, and whatever it resolves to will be the index JS will retrieve.
* `twoCharacters` - it takes in a parameter of type String, a parameter of type Number, and a parameter of type Number, and returns *one* string made up of the character at the first number's index in the string followed by the character at the second number's index in the string.
* `capitalize` - it takes in a parameter of type String and returns a modified version of that string where every character has been capitalized. Hint: there's a method for that! A little research should turn it up for you.
* `yeller` - it takes in a parameter of type String and returns a string where each character in the original has been capitalized and there are three exclamation points at the end.
* `initials` - it takes in a parameter of type String representing a name and returns one string with the initials, each followed by a period. See the test for examples. Hint: the first name's initials are always in the same place, but the second name is harder. But! There's a method that will return to you the index at which a character is in a string, and the second initial always comes near another character... Good luck on this one, it's a bit tough!
