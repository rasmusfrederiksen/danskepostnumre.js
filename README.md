# danskepostnumre.js

This is a very small js module for the browser that will download an up-to-date list of postal codes in Denmark via JSON-P from the Danish Geodata Agency (Geodatastyrelsen) and provide a global object named `danskepostnumre`, which has two simple functions for interacting with the data:

1. `link(postcodefield, namefield)`
2. `convert(postcode)`

The `link` function deals with the most common scenario when dealing with postcodes – a user provides the postal code in one `<input>` field – and you want to automatically fill in the postal area name field. This is what the `link` function does. See `test.html` for an example.

The `convert` function is what it says on the tin – you give it a postal code and it returns the postal area name.

The data from the Danish Geodata Agency is about 7.5 Kb over the wire. I'll leave it to you to minify the script if you must – it's less than a kilobyte uncompressed.
