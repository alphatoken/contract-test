function initCompiler() {
    admin.setSolc("/usr/bin/solc");
}

function initUser() {
    var userCount = 4;
    for (var i = 0; i < userCount; i++) {
        personal.newAccount("user" + (i + 1));
    }

    for (var i = 0; i < userCount; i++) {
        miner.setEtherbase(web3.eth.accounts[i]);
        miner.start(8);
        admin.sleepBlocks(2);
        miner.stop();
    }

    for (var i = 0; i < userCount; i++) {
        console.log("user ", (i + 1), "has ether:", web3.fromWei(eth.getBalance(web3.eth.accounts[i]), "ether"));
    }
}

initCompiler();
initUser();
