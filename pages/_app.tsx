import '../styles/input.css'
import { AppProps } from "next/app";
import { configureChains, mainnet, WagmiConfig, createConfig } from "wagmi";
import { SessionProvider } from "next-auth/react";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient
});

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <WagmiConfig config={client}>
        <Component {...pageProps} />
    </WagmiConfig>
  );
};

export default App;
