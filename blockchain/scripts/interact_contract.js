const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Configuration
const CONTRACT_ADDRESS = 'YOUR_DEPLOYED_CONTRACT_ADDRESS'; // Replace with the actual deployed contract address
const ABI_PATH = path.resolve(__dirname, '../build/AuditTrail.json'); // Path to ABI file
const RPC_URL = 'http://localhost:8545'; // URL of your Ethereum node

const web3 = new Web3(RPC_URL);
const abi = JSON.parse(fs.readFileSync(ABI_PATH)).abi;

const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

// Add a log to the blockchain
async function addLog(key, value) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addLog(key, value).send({ from: accounts[0], gas: 300000 });
    console.log(`Log added: { key: ${key}, value: ${value} }`);
}

// Fetch a log from the blockchain
async function getLog(key) {
    const value = await contract.methods.getLog(key).call();
    console.log(`Log retrieved: { key: ${key}, value: ${value} }`);
    return value;
}

// Example usage
(async () => {
    try {
        // Add a log
        await addLog('example_key', 'example_value');

        // Retrieve the log
        const retrievedValue = await getLog('example_key');
        console.log(`Retrieved Value: ${retrievedValue}`);
    } catch (err) {
        console.error('Error interacting with contract:', err);
    }
})();
