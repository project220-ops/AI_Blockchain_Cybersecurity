pragma solidity ^0.8.0;

contract AuditTrail {
    mapping(string => string) private logs;

    function addLog(string memory key, string memory value) public {
        logs[key] = value;
    }

    function getLog(string memory key) public view returns (string memory) {
        return logs[key];
    }
}
