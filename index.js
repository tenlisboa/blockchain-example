const Blockchain = require("./blockchain");

const blockchain = new Blockchain();
blockchain.addBlock({ amount: 4 });
blockchain.addBlock({ amount: 50 });

console.log("Check if blockchain is valid", blockchain.isValid());
console.log(blockchain.blocks[1].hash);
blockchain.blocks[1].data.amount = 1000;
console.log("Check if blockchain is valid", blockchain.isValid());
console.log(blockchain.blocks[1].hash);
