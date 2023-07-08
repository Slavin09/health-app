import { config } from "@onflow/fcl";

config({
  "app.detail.title": "to HealthiFly",
  "app.detail.icon": "../public/DOC.png",
 "accessNode.api": "https://rest-testnet.onflow.org", // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Mainnet: "https://fcl-discovery.onflow.org/authn"
  // "accessNode.api": "  http://localhost:8888 ",
  // "discoverNode.api": " http://localhost:8701/fcl/authn ",
  "flow.network": "testnet"
})
