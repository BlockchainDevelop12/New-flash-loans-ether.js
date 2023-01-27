const { ethers } = require("ethers");

const INFURA_ID = 'fb2684de08104b589071c7746c4a4232'
const provider = new ethers.providers.JsonRpcProvider(`https://celo-mainnet.infura.io/v3/${INFURA_ID}`)

const addressB = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract address
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'//chek the balances

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const main = async() => {

    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

const mainb = async() => {

    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    const balanceOf = await contract.balanceOf()
}

mainb()

console.log(`\nReading from ${addressB}\n`) 
console.log(`Name: ${name}`)
console.log(`Symbol: ${symbol}`)
console.log(`Total Supply: ${totalSupply}\n`)
console.log('totalSupply: ${totalSupply}')

const mainc = async() => {

    const balances = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')

    console.log(`Balance Returned: ${balances}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

mainc()
