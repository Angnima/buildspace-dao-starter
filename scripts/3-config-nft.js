import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5ecFd8E6F910D46eD11A3c4dc2bC7a1c0cfe51F4",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Safe BUIDL",
        description: "This NFT will give you access to BuidlDAO!",
        image: readFileSync("scripts/assets/helmet.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()