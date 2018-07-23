module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
	networks: {
		development: {
			host: "127.0.0.1",
			port: "7545",
			network_id: "*", // match any network id
			gasPrice: 1000000000
		},
		rinkeby: {
			host: "localhost",
			port: 8545,
			network_id: 4,
			gas: 2000000,
			gasPrice: 5000000000 // 5 Gwei
		}
	}
};
