// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenFactory {
    address[] public deployedTokens;
    mapping(address => address[]) public userTokens; // Tracks tokens deployed by each user

    event TokenCreated(address indexed tokenAddress, string name, string symbol, uint256 supply, address owner);

    function createToken(string memory name, string memory symbol, uint256 supply) external returns (address) {
        ERC20Token newToken = new ERC20Token(name, symbol, supply, msg.sender);
        deployedTokens.push(address(newToken));
        userTokens[msg.sender].push(address(newToken)); // Store token under user's address
        emit TokenCreated(address(newToken), name, symbol, supply, msg.sender);
        return address(newToken);
    }

    function getDeployedTokens() external view returns (address[] memory) {
        return deployedTokens;
    }

    function getUserTokens(address user) external view returns (address[] memory) {
        return userTokens[user]; // Returns all tokens deployed by a specific user
    }
}

contract ERC20Token is ERC20 {
    constructor(string memory name, string memory symbol, uint256 supply, address owner) ERC20(name, symbol) {
        _mint(owner, supply * (10 ** decimals()));
    }
}
