const abi = require("./abi.json");
const { ethers } = require('ethers') 



	const iface = new ethers.utils.Interface(abi)

	const fragment = iface.getFunction("burn")

	const args = [ethers.utils.parseUnits("1000")]


	const calldata = iface.encodeFunctionData(fragment, args)

	console.log(calldata)
	
