import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xE9ad9F3BC88f782808B9f92D7FF50abae7C0C03d");

// 0xaB959c4b8e42aFE3f3F4a250DFe2D50165383e55 BUIDL Token Address

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "BuidlDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BUIDL",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();