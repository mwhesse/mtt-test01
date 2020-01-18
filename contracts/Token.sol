pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Metadata.sol";

contract Token is ERC721Full, Ownable {
    Metadata metadata;
    constructor(string memory name, string memory symbol, Metadata _metadata) public ERC721Full(name, symbol) {
        metadata = _metadata;
    }

    function updateMetadata(Metadata _metadata) public onlyOwner {
        metadata = _metadata;
    }

    function mint(address recepient) public onlyOwner {
        _mint(recepient, totalSupply() + 1);
    }

    function tokenURI(uint _tokenId) external view returns (string memory _infoUrl) {
        return metadata.tokenURI(_tokenId);
    }
}
