import controller from "./controller";
import { Wallet } from "@herajs/wallet";

const setupController = async () => {
  chrome.runtime.onInstalled.addListener(() => {
    console.log("[crx3] background.js is running...");
    controller();
  });
};

if (!chrome.runtime.id) {
  console.error("Script needs run in extension context. Aborting");
} else {
  const wallet = new Wallet();
  console.log(wallet);
  setupController();
}

console.log(chrome, "chrome on background");
