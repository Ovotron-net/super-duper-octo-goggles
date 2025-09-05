import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import {
    coinbaseWallet,
    injected,
    walletConnect,
} from "wagmi/connectors";

const metadata = {
    name: "MBLK",
    url: "https://mblk.bezogia.com/",
    description: "MBLK",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = createConfig({
    chains: [mainnet],
    connectors: [
        injected(),
        coinbaseWallet({ appName: "Create Wagmi" }),
        walletConnect({
            metadata,
            showQrModal: false,
            // projectId: import.meta.env.VITE_WC_PROJECT_ID,
            projectId: `${process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID}`,
        }),
    ],
    transports: {
        [mainnet.id]: http(),
    },
});
