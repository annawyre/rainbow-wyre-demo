import '@rainbow-me/rainbowkit/styles.css';
import {
  apiProvider,
  configureChains,
  ConnectButton,
  getDefaultWallets,
  // midnightTheme,
  darkTheme,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';
import './App.css';

function App() {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.kovan, chain.polygon, chain.polygonMumbai],
    [apiProvider.fallback()]
  );

  const { connectors } = getDefaultWallets({
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });

  return<WagmiProvider client={wagmiClient}>
    <RainbowKitProvider 
      theme=
        // {midnightTheme()}
        {darkTheme()}
      coolMode 
      chains={chains}
    >
        <ConnectButton/>          
    </RainbowKitProvider>
  </WagmiProvider>
}

export default App;
