function exchangeEther(from, to, count) {
    var fromAccount = web3.eth.accounts[from];
    var toAccount = web3.eth.accounts[to];
    console.log("user ", from, " has ether:", web3.fromWei(eth.getBalance(fromAccount), "ether"))
    console.log("user ", to, " has ether:", web3.fromWei(eth.getBalance(toAccount), "ether"))
    personal.unlockAccount(fromAccount, "user"+(from+1), 3600);
    personal.unlockAccount(toAccount, "user"+(to+1), 3600);
    eth.sendTransaction({from: fromAccount, to: toAccount, value: web3.toWei(count, "ether")});

    miner.start(8); 
    admin.sleepBlocks(1); 
    miner.stop();
    console.log("user ", from, " has ether:", web3.fromWei(eth.getBalance(fromAccount), "ether"))
    console.log("user ", to, " has ether:", web3.fromWei(eth.getBalance(toAccount), "ether"))
}

miner.setEtherbase(web3.eth.accounts[0]);
exchangeEther(1, 2, 2);
