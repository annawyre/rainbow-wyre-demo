import '@rainbow-me/rainbowkit/styles.css';
import {
  wallet,
  apiProvider,
  configureChains,
  ConnectButton,
  getDefaultWallets,
  // midnightTheme,
  darkTheme,
  connectorsForWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';
import './App.css';

function App() {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.kovan, chain.polygon, chain.polygonMumbai],
    [apiProvider.fallback()]
  );

  const connectors = connectorsForWallets([
    {
      groupName: 'Recommended',
      wallets: [
        wallet.rainbow({ chains }),
        wallet.coinbase({ chains }),
        wallet.walletConnect({ chains }),
        wallet.metaMask({ chains }),
        wallet.argent({ chains }),
        wallet.ledger({ chains }),
        wallet.trust({ chains }),
        wallet.steak({ chains }),
        wallet.imToken({ chains }),
      ],
    },
  ]);

  // Default Wallets
  // const { connectors } = getDefaultWallets({
  //   chains
  // }); 

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
