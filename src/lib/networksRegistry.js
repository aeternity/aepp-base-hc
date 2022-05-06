export const defaultNetwork = {
  name: 'Hyperchain alpha',
  url: 'https://testnet-hc.aeternity.io',
  middlewareUrl: 'https://mainnet.aeternity.io/mdw',
  compilerUrl: 'https://compiler.aepps.com',
  explorerUrl: 'https://explorer.aeternity.io',
};

export default Object.freeze((process.env.NODE_ENV === 'production' ? [
  defaultNetwork,
] : [
  defaultNetwork,
]).map(Object.freeze));
