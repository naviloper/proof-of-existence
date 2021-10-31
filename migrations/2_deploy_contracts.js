const ProofOfExistence1 = artifacts.require("ProofOfExistence1");
const ProofOfExistence2 = artifacts.require("ProofOfExistence2");
const ProofOfExistence3 = artifacts.require("ProofOfExistence3");

module.exports = function (deployer) {
  deployer.deploy(ProofOfExistence1);
  deployer.deploy(ProofOfExistence2);
  deployer.deploy(ProofOfExistence3);
};
