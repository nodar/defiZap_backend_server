const zaps = [
    {
        name: 'sETH Unipool',
        ensAddress: 'sETHUnipool.DeFiZap.eth',
        address: '0xd3eba712988df0f8a7e5073719a40ce4cbf60b33',
        image: '/images/unipool_sETH_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap'],
        accessTo: ['Pooling Rewards', 'Staking Rewards'],
        description: [
            '50% converted to sETH',
            '50% leftover input + acquired tokens are added to the sETH/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ],
    },
    {
        name: 'DAI Unipool',
        ensAddress: 'DAIUnipool.DeFiZap.eth',
        address: '0x929A10EfDA7099865dAD8286Aee8715078902d51',
        // image: '/images/unipool_dai_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap'],
        accessTo: ['Pooling Rewards'],
        description: [
            '50% converted to DAI',
            '50% leftover input + acquired tokens are added to the DAI/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'SNX Unipool',
        ensAddress: 'SNXUnipool.DeFiZap.eth',
        address: '0xe3385df5b47687405A02Fc24322DeDb7df381852',
        image: '/images/unipool_snx_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap'],
        accessTo: ['Pooling Rewards'],
        description: [
            '50% converted to SNX',
            '50% leftover input + acquired tokens are added to the SNX/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'MKR Unipool',
        ensAddress: 'MKRUnipool.DeFiZap.eth',
        address: '0x13240b97c40D7E306cEDf3adc9cB057CeC74c361',
        image: '/images/unipool_mkr_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap'],
        accessTo: ['Pooling Rewards'],
        description: [
            '50% converted to MKR',
            '50% leftover input + acquired tokens are added to the MKR/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },

    {
        name: 'CHAI Unipool',
        ensAddress: 'CHAIUnipool.DeFiZap.eth',
        address: '0xd17cda470bd0237fae82ef254c84d06d0e4cc02f',
        image: '/images/unipool_chai_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap', 'Kyber', 'Maker'],
        accessTo: ['Pooling Rewards', 'DSR Rewards'],
        description: [
            '50% of your ETH input is first converted to DAI on Kyber to avoid ETH->CHAI slippage',
            'Converted DAI is then wrapped into CHAI. Learn more on chai.money',
            'CHAI + other 50% ETH input are added to the ETH/CHAI Liquidity Pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'cDAI Unipool',
        ensAddress: 'cDAIPool.DeFiZap.eth',
        address: '0x52fc6455F258760705e70F70160b06619BFe0ADb',
        image: '/images/unipool_cdai_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap', 'Kyber', 'Compound'],
        accessTo: ['Pooling Rewards', 'Lending Rewards'],
        description: [
            '50% of your ETH input is first converted to DAI on Kyber to avoid ETH<>cDAI slippage',
            'Converted DAI is then supplied on Compound to mint cDAI',
            'cDAI + other 50% ETH input are added to the ETH/cDAI Liquidity Pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'LINK Unipool',
        ensAddress: 'LINKUnipool.DeFiZap.eth',
        address: '0x8e8b9CF6d411b6c8Dacc63c306f2691ED195D91d',
        image: '/images/unipool_link_illustration.svg',
        gasLimitRequirement: '1500000',
        platformsUsed: ['Uniswap'],
        accessTo: ['Pooling Rewards'],
        description: [
            '50% converted to LINK',
            '50% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'DAI LLP',
        ensAddress: 'DaiLLP.DeFiZap.eth',
        address: '0x8dfcB49766c0296E4373A0300b52C3637614Db59',
        image: '/images/llp_dai_illustration.svg',
        gasLimitRequirement: '5000000',
        platformsUsed: ['Uniswap', 'Kyber', 'Fulcrum'],
        accessTo: ['Pooling Rewards', 'Long ETH with 2X Leverage'],
        description: [
            '34% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
            '33% converted to DAI',
            '33% leftover input + acquired tokens are added to the DAI/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'LINK LLP',
        ensAddress: 'linkllp.defizap.eth',
        address: '0x20eF0c900F8E7EC3a1A89a761f0670Ae9E3dD709',
        image: '/images/llp_link_illustration.svg',
        gasLimitRequirement: '5000000',
        platformsUsed: ['Uniswap', 'Kyber', 'Fulcrum'],
        accessTo: ['Pooling Rewards', 'Long ETH with 2X Leverage'],
        description: [
            '34% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
            '33% converted to LINK',
            '33% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: '2x LINK LLP',
        ensAddress: '2xLINKLLP.defizap.eth',
        address: '0x408609F5aCaB253d41cB5Dfce913ff367937313B',
        image: '/images/llp_2x_link_illustration.svg',
        gasLimitRequirement: '5000000',
        platformsUsed: ['Uniswap', 'Kyber', 'Fulcrum'],
        accessTo: ['Pooling Rewards', 'Long LINK with 2X Leverage'],
        description: [
            '34% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
            '33% converted to LINK',
            '33% leftover input + acquired tokens are added to the LINK/ETH Liquidity pool on Uniswap. Receive minted liquidity tracking tokens back to your wallet.'
        ]
    },
    {
        name: 'Lender',
        ensAddress: 'Lender.DeFiZap.eth',
        address: '0xEbD5E23927891FBfDa10487cCC9A1a1a7b9a4210',
        gasLimitRequirement: '7000000',
        platformsUsed: ['Kyber', 'Fulcrum', 'Compound'],
        accessTo: ['Lending Rewards', 'Long ETH with 2X Leveragee'],
        description: [
            '90% auto-converted into DAI + supplied to Compound to mint cDAI',
            '10% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)'
        ]
    },
    {
        name: 'ETH Bull',
        ensAddress: 'EthBull.DeFiZap.eth',
        address: '0x04b35eF193e2357328aE79914569721a7fFd6146',
        gasLimitRequirement: '7000000',
        platformsUsed: ['Fulcrum'],
        accessTo: ['Lending  Short BTC', 'Long ETH with 2X Leveragee'],
        description: [
            '50% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
            '50% used to open BTC Short position on Fulcrum (dsWBTC2x)'
        ]
    },
    {
        name: 'Moderate Bull',
        ensAddress: 'ModerateBull.DeFiZap.eth',
        address: '0x3b122c376E472AE6ae7a4739bEBF7b68E045b285',
        gasLimitRequirement: '2000000',
        platformsUsed: ['Synthetix'],
        accessTo: ['Synthetic Assets'],
        description: [
            '50% used to acquire sBTC on Synthetix exchange.',
            '50% used to acquire sETH on Synthetix exchange.'
        ]
    },
    {
        name: 'Double Bull',
        ensAddress: 'DoubleBull.DeFiZap.eth',
        address: '0x1eE8C303f5AB9b36Bc30b9345dEC7e9a748fa693',

        gasLimitRequirement: '7000000',
        platformsUsed: ['Fulcrum'],
        accessTo: ['Long BTC with 2X Leverage', 'Long ETH with 2X Leverage'],
        description: [
            '50% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
            '50% used to open BTC Long position with 2X leverage on Fulcrum (dLWBTC2x)'
        ]
    },
]
const getZaps = () => {
    return zaps
}

module.exports = getZaps





