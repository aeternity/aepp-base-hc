export const defaultNetwork = {
  name: 'Hyperchain alpha',
  url: 'https://testnet-hc.aeternity.io',
  middlewareUrl: 'https://mainnet.aeternity.io/mdw',
  explorerUrl: 'https://explorer.aeternity.io',
  compilerUrl: 'https://compiler.aepps.com',
};

export default Object.freeze((process.env.NODE_ENV === 'production' ? [
  defaultNetwork,
] : [
  defaultNetwork,
]).map(Object.freeze));
