document.getElementById("year").textContent = new Date().getFullYear();

const contract = document.getElementById("contract");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
  if (contract.dataset.address) {
    await navigator.clipboard.writeText(contract.dataset.address);
    copyBtn.textContent = "Copied";
    setTimeout(() => copyBtn.textContent = "Copy", 1200);
  }
});

/*
  AFTER LAUNCH:
  Replace the placeholder contract in index.html with the official HOPAA
  Solana mint address and enable the Copy button, e.g.:

  <code id="contract" data-address="YOUR_OFFICIAL_MINT_ADDRESS">
    YOUR_OFFICIAL_MINT_ADDRESS
  </code>

  Then set the real Pump.fun, X and Telegram URLs.
*/
