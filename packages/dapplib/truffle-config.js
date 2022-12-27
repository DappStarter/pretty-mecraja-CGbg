require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name repeat night hour gesture fantasy equal gift'; 
let testAccounts = [
"0x66e5e300e3f1561b80eff329f81a187ecb9a7f3440897129f7761e97e6ff3933",
"0x2b212550e56869a66ffcbab39f52e3a7523ac6aeff2b43ffa46e269b62042351",
"0xe827c4cb730e485faab798578234f43749bcf0b8852ca9c1e11a6cc1905e7464",
"0xcae2f73ca32a052dd8480b0c23b360f69e870226d869801bce7bcd9ed84c44fa",
"0x922ddb8a9b15854fc9f71af9e18a246a6ac2a138ecd8c1d1bfc1d1d1c01cc2ac",
"0x427d5012c2e599f68494a5d1fb59fd74e48bd3657854d251c9d15dc138dba5a0",
"0x582287cca4867905305019f4cc7a40ae3d7f1c54e8002fe535d93de1f30cbc72",
"0x234ee25f1a4de098e20ad0ebea6a16ce5aeac6917f11087bed7d97d862300339",
"0x34727b3a43b30bf902d58a9d355b6bd13d4b76ab79f688b583f77fd05f4aa175",
"0x416d494c553e1db1463067c473551fd1b2b803948cae2bb22bc728aac0c05b87"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

