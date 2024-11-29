const Web3 = require('web3');
const fs = require('fs');
const contractData = require('./build/AuditTrail.json');

const deploy = async () => {
    const web3 = new Web3('http://localhost:8545'); // Blockchain Node
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(contractData.abi)
        .deploy({ data: contractData.bytecode })
        .send({ from: accounts[0], gas: '1000000' });
    console.log('Contract deployed to:', result.options.address);
};

deploy();
