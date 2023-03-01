import {SwapWidget} from "@uniswap/widgets";

const isServer = () => typeof window === `undefined`;

export const ClientComponent = isServer() ? null : () => {
    return <SwapWidget
        tokenList={tokenList}

        convenienceFee={20}
        convenienceFeeRecipient="0xC7b548AD9Cf38721810246C079b2d8083aba8909"
    />
}

const tokenList = [
    {
        name: 'Dai Stablecoin',
        address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        decimals: 18,
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    {
        name: 'ChainLink Token',
        address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
        symbol: 'LINK',
        decimals: 18,
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    {
        chainId: 1,
        address: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
        name: 'Decentraland',
        symbol: 'MANA',
        decimals: 18,
        logoURI:
            'https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745',
    },
    {
        chainId: 1,
        address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
        name: 'Polygon',
        symbol: 'MATIC',
        decimals: 18,
        logoURI:
            'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912',
    },
    {
        name: 'Maker',
        address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
        symbol: 'MKR',
        decimals: 18,
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    },
    {
        name: 'Uniswap',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        chainId: 1,
        logoURI: 'ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg',
    },
    {
        name: 'USDCoin',
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        decimals: 6,
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
        name: 'Wrapped BTC',
        address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        symbol: 'WBTC',
        decimals: 8,
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    {
        name: 'Wrapped Ether',
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        symbol: 'WETH',
        decimals: 18,
        chainId: 1,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    {
        chainId: 1,
        address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
        name: 'yearn finance',
        symbol: 'YFI',
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330',
    },
    {
        address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        chainId: 1,
        name: 'stETH',
        symbol: 'stETH',
        decimals: 18,
        logoURI: 'https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png',
    },
    {
        address: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd',
        chainId: 1,
        name: 'Geminidollar',
        symbol: 'GUSD',
        decimals: 2,
        logoURI: 'https://tokens.1inch.io/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png',
    },
    {
        address: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
        chainId: 1,
        name: 'PaxDollar',
        symbol: 'USDP',
        decimals: 18,
        logoURI: 'https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png',
    },
    {
        address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
        chainId: 1,
        name: 'WrappedliquidstakedEther2.0',
        symbol: 'wstETH',
        decimals: 18,
        logoURI: 'https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png',
    },
    {
        address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
        chainId: 1,
        name: 'renBTC',
        symbol: 'renBTC',
        decimals: 8,
        logoURI: 'https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png',
    },
    {
        name: 'Dai Stablecoin',
        address: '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
        symbol: 'DAI',
        decimals: 18,
        chainId: 3,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xaD6D458402F60fD3Bd25163575031ACDce07538D/logo.png',
    },
    {
        name: 'Uniswap',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        chainId: 3,
        logoURI: 'ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg',
    },
    {
        name: 'Wrapped Ether',
        address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        symbol: 'WETH',
        decimals: 18,
        chainId: 3,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png',
    },
    {
        name: 'Dai Stablecoin',
        address: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
        symbol: 'DAI',
        decimals: 18,
        chainId: 4,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735/logo.png',
    },
    {
        name: 'Maker',
        address: '0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85',
        symbol: 'MKR',
        decimals: 18,
        chainId: 4,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/logo.png',
    },
    {
        name: 'Uniswap',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        chainId: 4,
        logoURI: 'ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg',
    },
    {
        name: 'Wrapped Ether',
        address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        symbol: 'WETH',
        decimals: 18,
        chainId: 4,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png',
    },
    {
        name: 'Uniswap',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        chainId: 5,
        logoURI: 'ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg',
    },
    {
        name: 'Wrapped Ether',
        address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        symbol: 'WETH',
        decimals: 18,
        chainId: 5,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6/logo.png',
    },
    {
        name: 'Dai Stablecoin',
        address: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
        symbol: 'DAI',
        decimals: 18,
        chainId: 42,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa/logo.png',
    },
    {
        name: 'Maker',
        address: '0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD',
        symbol: 'MKR',
        decimals: 18,
        chainId: 42,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD/logo.png',
    },
    {
        name: 'Uniswap',
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        decimals: 18,
        chainId: 42,
        logoURI: 'ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg',
    },
    {
        name: 'Wrapped Ether',
        address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        symbol: 'WETH',
        decimals: 18,
        chainId: 42,
        logoURI:
            'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xd0A1E359811322d97991E03f863a0C30C2cF029C/logo.png',
    },
]