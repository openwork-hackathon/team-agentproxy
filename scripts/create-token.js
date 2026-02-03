// === AgentProxy Token Creation Script ===
// Run: node create-token.js
// Requires: npm install viem @mintclub/sdk

const { createPublicClient, createWalletClient, http, parseEther } = require("viem");
const { base } = require("viem/chains");
const { privateKeyToAccount } = require("viem/accounts");

// ⚠️ Set your private key (the wallet with ETH + OPENWORK on Base)
const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

// Mint Club V2 Bond contract on Base
const BOND_ADDRESS = "0xc5a076cad94176c2996B32d8466Be1cE757FAa27";
const OPENWORK_TOKEN = "0x299c30DD5974BF4D5bFE42C340CA40462816AB07";

// Token parameters
const TOKEN_NAME = "AgentProxy";
const TOKEN_SYMBOL = "APROXY";

const BOND_ABI = [
  {
    name: "createToken",
    type: "function",
    stateMutability: "payable",
    inputs: [
      {
        name: "tokenParams",
        type: "tuple",
        components: [
          { name: "name", type: "string" },
          { name: "symbol", type: "string" },
        ],
      },
      {
        name: "bondParams", 
        type: "tuple",
        components: [
          { name: "mintRoyalty", type: "uint16" },
          { name: "burnRoyalty", type: "uint16" },
          { name: "reserveToken", type: "address" },
          { name: "maxSupply", type: "uint128" },
          { name: "stepRanges", type: "uint128[]" },
          { name: "stepPrices", type: "uint128[]" },
        ],
      },
    ],
    outputs: [{ name: "", type: "address" }],
  },
  {
    name: "creationFee",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
];

async function main() {
  const account = privateKeyToAccount(PRIVATE_KEY);
  
  const publicClient = createPublicClient({
    chain: base,
    transport: http(),
  });

  const walletClient = createWalletClient({
    account,
    chain: base, 
    transport: http(),
  });

  // Check creation fee
  const fee = await publicClient.readContract({
    address: BOND_ADDRESS,
    abi: BOND_ABI,
    functionName: "creationFee",
  });
  console.log("Creation fee:", fee.toString(), "wei");

  // Create token with bonding curve backed by $OPENWORK
  const tokenParams = {
    name: TOKEN_NAME,
    symbol: TOKEN_SYMBOL,
  };

  const bondParams = {
    mintRoyalty: 100,  // 1%
    burnRoyalty: 100,  // 1%
    reserveToken: OPENWORK_TOKEN,
    maxSupply: parseEther("1000000"),
    stepRanges: [
      parseEther("100000"),
      parseEther("500000"),
      parseEther("1000000"),
    ],
    stepPrices: [
      parseEther("0.001"),
      parseEther("0.005"),
      parseEther("0.01"),
    ],
  };

  console.log("Creating token:", TOKEN_SYMBOL);
  
  const hash = await walletClient.writeContract({
    address: BOND_ADDRESS,
    abi: BOND_ABI,
    functionName: "createToken",
    args: [tokenParams, bondParams],
    value: fee,
  });

  console.log("Transaction hash:", hash);
  
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("Token created! Block:", receipt.blockNumber);
  console.log("\nRegister your token URL:");
  console.log(`https://mint.club/token/base/${TOKEN_SYMBOL}`);
  console.log("\nDon't forget to register with Openwork API:");
  console.log(`PATCH /api/hackathon/<team_id> with {"token_url": "https://mint.club/token/base/${TOKEN_SYMBOL}"}`);
}

main().catch(console.error);