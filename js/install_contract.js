function compileContract(name, source) {
    return web3.eth.compile.solidity(source)["<stdin>:"+name];
}

function publishContract(compiled, accountIndex, args) {
    var account = web3.eth.accounts[accountIndex];
    console.log("user ", accountIndex, " has ether:", web3.fromWei(eth.getBalance(account), "ether"))
    personal.unlockAccount(account, "user"+(accountIndex+1), 3600);
    contract = web3.eth.contract(compiled.info.abiDefinition);
    contract.new.apply(contract, args.concat([{from: account, data: compiled.code, gas: 1000000}]));

    miner.start(8); 
    admin.sleepBlocks(1); 
    miner.stop();
}

function getContractAddress(startBlock) {
    for (var i = startBlock; i <=eth.blockNumber; i++) {
        var block = eth.getBlock(i);
        if (block.transactions.length > 0) {
            var contractAddress = eth.getTransactionReceipt(block.transactions[0]).contractAddress;
            if (contractAddress !== null) {
                return contractAddress
            }
        }
    } 
}


var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) suicide(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; } }'

var compiled = compileContract("greeter", greeterSource);
var lastBlock = eth.blockNumber;
publishContract(compiled, 2, ["hello-atk"]);
var contractAddress = getContractAddress(lastBlock+1);
console.log("contract address is:", contractAddress);
var contract = web3.eth.contract(compiled.info.abiDefinition);
for (var i = 0; i < 5; i++) {
    console.log("greeter call return:", contract.at(contractAddress).greet.call());
}
