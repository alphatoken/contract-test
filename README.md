# contract-test
this project includes several shell scripts to install go-geth1.5, solc, and help the beginner to interact with geth node

## prepare stage
install golang environment
run install_geth.sh to install solc and geth

## interact with geth
* execute run_geth.sh to lanuch geth node
* use ./run_js.sh js/init_geth.js to create several accounts, and mine ether for each account
* use ./run_js.sh js/exchange_ehter.js to exchange ehter between account
* use ./run_js.sh js/install_contract.js to install greeter contract and call const method
* use ./run_js.sh js/show_blocks.js to debug all the blocks
