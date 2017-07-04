function printBlock(number) {
    var block = eth.getBlock(i, true);
    console.log("block ", block.number);
    console.log(" hash", block.hash);
    console.log(" parent", block.parentHash);
    console.log(" nonce", block.nonce);
    console.log(" extra", block.extraData);
    console.log(" size", block.size);
    console.log(" gaslimit", block.gasLimit);
    console.log(" gasUsed", block.gasUsed);
    console.log(" timestamp", block.timestamp);
    console.log(" transactions", block.transactions.length);
    block.transactions.forEach(function(tx) {
        console.log("  transaction", tx.transactionIndex);
        console.log("    nonce", tx.nonce);
        console.log("    from", tx.from);
        console.log("    to", tx.to);
        console.log("    value", tx.value);
        console.log("    gasPrice", tx.gasPrice);
        console.log("    gas", tx.gas);
        console.log("    input", tx.input);
        var receipt = web3.eth.getTransactionReceipt(tx.hash);
        if (receipt !== null) {
            console.log("    gasUsed", receipt.gasUsed);
            console.log("    contractAddress", receipt.contractAddress);
            //console.log("    logs", receipt.logs.length);
        }

    });
    console.log("----------------------------------\n");
}

console.log("current block number:", eth.blockNumber);
for (var i = 0; i <=eth.blockNumber; i++) {
    printBlock(i);
}

