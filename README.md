# blockchain-example
It's an easy implementation of Blockchain with JavaScript

We have the file `block.js` which is a class form Block that is going to be the object inside our blockchain, and also we have the file `blockchain` which is actually our chain of blocks.

### block.js
- Each Block has a `index` it's because a sequence of Blocks cannot be changed, they must be in the same order of insertions
- The Block also have a `hash` and a `previousHash` the hash is a sha256 format and it's a unique id for the block, 
the point is that each block points to the previous block using the previous block hash. 
The hash is generated using all of the parameters including the data, 
it means that if the block is changed by an malicious attack whe would be able to check if it did suffer some changes by the `generateHash()` function again.
- The timestamp is quite common, it is simply the date of insertion of that certain block.
- Difficulty and Nonce (number of attempts, it's included on hash generation because it will make the hash be different every attempt) are for the 'Proof to work' system, it's basically minning, for the user insert a new block into 
the chain he has to generate many hashes until the hash has the certain number of 0 at the beggining, for example: if my difficulty
is 10, the user is going to have to figure out a hash that starts with 10 zeros, it requires processing.

### blockchain.js
- It's basically the chain itself, we have the `blocks` property and the method to add blocks into the chain.
- We also have the validation, it means:
  1 - The hash of the block has to be the same, that is, if the data or any one of the properties of the Block got changed
  the hash provided by `generationHash` function will be different meaning that the Block is corrupted.
  2 - The Blocks have to be in order, is some Block is in a different order it means that the chain is corrupted.
  3 - The Hash Blocks have to be linked, if one of the Blocks are not linking the previous Block correctly it means that the
  chain is corrupted.
