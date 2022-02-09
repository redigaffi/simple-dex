const WETH = artifacts.require("Testing/WETH");
const BUSD = artifacts.require("Testing/BUSD");

const Factory = artifacts.require("Testing/PancakeFactory");

module.exports = async function (deployer, network, accounts) {
  //spr = await SpaceRidersToken.deployed();
  
    await deployer.deploy(BUSD);    
    const busd = await BUSD.deployed();    
    await deployer.deploy(WETH);
    await deployer.deploy(Factory, accounts[0]);

    const f = await Factory.deployed();
    console.log(`FACTORY HASH: ${await f.INIT_CODE_PAIR_HASH()}`);
    console.log(`BUSD ADDRS: ${busd.address}`);
};

