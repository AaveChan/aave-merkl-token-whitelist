import { AaveV3Ethereum } from "@bgd-labs/aave-address-book";

type ReserveIncentiveAdditionalData = {
  customClaimMessage?: string;
  customMessage?: string;
  customForumLink?: string;
};

export const additionalIncentiveInfo: Record<
  string,
  ReserveIncentiveAdditionalData
> = {
  [AaveV3Ethereum.ASSETS.USDe.A_TOKEN]: {
    customMessage:
      "You must supply USDe and hold an equal or greater amount of sUSDe (by USD value) to receive the incentives. To be eligible, your assets supplied must be at least 2x your account equity, and you must not be borrowing any USDe. The rate provided to eligible users will change week by week, but will be roughly in line with the sUSDe rate for the forseeable future.",
  },
  [AaveV3Ethereum.ASSETS.USDtb.A_TOKEN]: {
    customMessage:
      "You must supply USDtb to receive incentives. To be eligible, you must not be borrowing any USDtb.",
    customClaimMessage: "Rewards will be claimable starting in early August.",
    customForumLink: "https://x.com/ethena_labs/status/1950194502192550149",
  },
};
