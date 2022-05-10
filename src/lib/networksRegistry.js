export const defaultNetwork = {
  name: 'Hyperchain alpha',
  middlewareUrl: 'https://mainnet.aeternity.io/mdw',
  url: 'https://testnet-hc.aeternity.io',
  compilerUrl: 'https://compiler.aepps.com',
  explorerUrl: 'https://explorer.aeternity.io',
};

export default Object.freeze((process.env.NODE_ENV === 'production' ? [
  defaultNetwork,
] : [
  defaultNetwork,
]).map(Object.freeze));
