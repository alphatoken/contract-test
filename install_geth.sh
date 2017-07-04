sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install -y solc

sudo apt-get install -y libudev-dev

git clone https://github.com/ethereum/go-ethereum.git
cd go-ethereum
git checkout release/1.5
sudo apt-get install -y build-essential 
make all
