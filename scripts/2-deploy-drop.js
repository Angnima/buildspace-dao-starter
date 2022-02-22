import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// 0xE9ad9F3BC88f782808B9f92D7FF50abae7C0C03d appid

// Your app address is: 0xE9ad9F3BC88f782808B9f92D7FF50abae7C0C03d
// ✅ Successfully deployed bundleDrop module, address: 0x5ecFd8E6F910D46eD11A3c4dc2bC7a1c0cfe51F4
// ✅ bundleDrop metadata: {
//   metadata: {
//     name: 'BuidlDAO Membership',
//     description: 'A DAO for investing into builders of WEB3 startups.',
//     image: 'https://cloudflare-ipfs.com/ipfs/QmRsCE8ePtQEtafFcvfUrgknWhnjTRiAZqbCryALS5AdaK/0',
//     primary_sale_recipient_address: '0x0000000000000000000000000000000000000000'
//   },
//   address: '0x5ecFd8E6F910D46eD11A3c4dc2bC7a1c0cfe51F4',
//   type: 11
// }

const app = sdk.getAppModule("0xE9ad9F3BC88f782808B9f92D7FF50abae7C0C03d");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "BuidlDAO Membership",
      // A description for the collection.
      description: "A DAO for investing into builders of WEB3 startups.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/build.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()