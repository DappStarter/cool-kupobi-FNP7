require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food resemble return rural essay coral light army gentle'; 
let testAccounts = [
"0xb68970485d20b3c755a468fcf4853c0830dba8a906257acea18e83d347169ead",
"0x9963ecf30a8e5392e7dcef0a11aa9ca66f48fa69681b84d7a281d0812da3b0a6",
"0xf48867ecece231eedd8a9f10f9ee272604a9610a9cb80d136263f2b1dc1a4ca9",
"0xb0ee42f5c9b10d8ae8f94edb9068dddbab4d50acd57604c7909d729417e138f8",
"0xc6926cae59a093c93e232ab0af3e6d73463d063f5bda9c856d902de6c0d7456c",
"0x89a37f49289df8909b847bd47405e018736e32d777f1628f6774a08995c34dc4",
"0x808af042c96d0fb8bb0009e1d171c8ef0365e001432fcedc1b530a055e2ea081",
"0x031e6b874fbb65070728891614761f8bc7a3177c71c890052a24350f25d7e439",
"0xacb93f043b130ff1375525a8b2a58e428b9d0f3e5dd409dec2e0f53868275df4",
"0xfb2c3720c6c1d9e9ab9df23606993e2afaddced08ee2c03e3ecfa965eedfc9e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

