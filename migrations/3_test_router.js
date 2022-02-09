const WETH = artifacts.require("Testing/WETH");
const BUSD = artifacts.require("Testing/BUSD");
const Factory = artifacts.require("Testing/PancakeFactory");
const Router = artifacts.require("Testing/PancakeRouter");

module.exports = async function (deployer, network, accounts) {
  //spr = await SpaceRidersToken.deployed();
  const factory = await Factory.deployed();
  const initHashCode = await factory.INIT_CODE_PAIR_HASH();
  const weth = await WETH.deployed();
  
  await deployer.deploy(Router, factory.address, weth.address, initHashCode);
  const router = await Router.deployed();

  busd = await BUSD.deployed();
  busd.mint(accounts[1], "500000000000000000000");
  busd.increaseAllowance(router.address, "500000000000000000000", {from: accounts[1]})
  await router.addLiquidityETH(busd.address, "500000000000000000000", 0,0, accounts[1], Date.now()+10, {value: web3.utils.toWei("1", "ether"), from: accounts[1]});
};
