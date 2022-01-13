        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
                console.log("metamask is enabled")
            }
        }

        async function loadContract() {
            return await new window.web3.eth.Contract([
            	{
            		"inputs": [
            			{
            				"internalType": "string",
            				"name": "name_",
            				"type": "string"
            			},
            			{
            				"internalType": "string",
            				"name": "symbol_",
            				"type": "string"
            			}
            		],
            		"stateMutability": "nonpayable",
            		"type": "constructor"
            	},
            	{
            		"anonymous": false,
            		"inputs": [
            			{
            				"indexed": true,
            				"internalType": "address",
            				"name": "owner",
            				"type": "address"
            			},
            			{
            				"indexed": true,
            				"internalType": "address",
            				"name": "spender",
            				"type": "address"
            			},
            			{
            				"indexed": false,
            				"internalType": "uint256",
            				"name": "value",
            				"type": "uint256"
            			}
            		],
            		"name": "Approval",
            		"type": "event"
            	},
            	{
            		"anonymous": false,
            		"inputs": [
            			{
            				"indexed": true,
            				"internalType": "address",
            				"name": "from",
            				"type": "address"
            			},
            			{
            				"indexed": true,
            				"internalType": "address",
            				"name": "to",
            				"type": "address"
            			},
            			{
            				"indexed": false,
            				"internalType": "uint256",
            				"name": "value",
            				"type": "uint256"
            			}
            		],
            		"name": "Transfer",
            		"type": "event"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "owner",
            				"type": "address"
            			},
            			{
            				"internalType": "address",
            				"name": "spender",
            				"type": "address"
            			}
            		],
            		"name": "allowance",
            		"outputs": [
            			{
            				"internalType": "uint256",
            				"name": "",
            				"type": "uint256"
            			}
            		],
            		"stateMutability": "view",
            		"type": "function"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "spender",
            				"type": "address"
            			},
            			{
            				"internalType": "uint256",
            				"name": "amount",
            				"type": "uint256"
            			}
            		],
            		"name": "approve",
            		"outputs": [
            			{
            				"internalType": "bool",
            				"name": "",
            				"type": "bool"
            			}
            		],
            		"stateMutability": "nonpayable",
            		"type": "function"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "account",
            				"type": "address"
            			}
            		],
            		"name": "balanceOf",
            		"outputs": [
            			{
            				"internalType": "uint256",
            				"name": "",
            				"type": "uint256"
            			}
            		],
            		"stateMutability": "view",
            		"type": "function"
            	},
            	{
            		"inputs": [],
            		"name": "decimals",
            		"outputs": [
            			{
            				"internalType": "uint8",
            				"name": "",
            				"type": "uint8"
            			}
            		],
            		"stateMutability": "view",
            		"type": "function"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "spender",
            				"type": "address"
            			},
            			{
            				"internalType": "uint256",
            				"name": "subtractedValue",
            				"type": "uint256"
            			}
            		],
            		"name": "decreaseAllowance",
            		"outputs": [
            			{
            				"internalType": "bool",
            				"name": "",
            				"type": "bool"
            			}
            		],
            		"stateMutability": "nonpayable",
            		"type": "function"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "spender",
            				"type": "address"
            			},
            			{
            				"internalType": "uint256",
            				"name": "addedValue",
            				"type": "uint256"
            			}
            		],
            		"name": "increaseAllowance",
            		"outputs": [
            			{
            				"internalType": "bool",
            				"name": "",
            				"type": "bool"
            			}
            		],
            		"stateMutability": "nonpayable",
            		"type": "function"
            	},
            	{
            		"inputs": [],
            		"name": "name",
            		"outputs": [
            			{
            				"internalType": "string",
            				"name": "",
            				"type": "string"
            			}
            		],
            		"stateMutability": "view",
            		"type": "function"
            	},
            	{
            		"inputs": [],
            		"name": "symbol",
            		"outputs": [
            			{
            				"internalType": "string",
            				"name": "",
            				"type": "string"
            			}
            		],
            		"stateMutability": "view",
            		"type": "function"
            	},
            	{
            		"inputs": [],
            		"name": "totalSupply",
            		"outputs": [
            			{
            				"internalType": "uint256",
            				"name": "",
            				"type": "uint256"
            			}
            		],
            		"stateMutability": "view",
            		"type": "function"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "recipient",
            				"type": "address"
            			},
            			{
            				"internalType": "uint256",
            				"name": "amount",
            				"type": "uint256"
            			}
            		],
            		"name": "transfer",
            		"outputs": [
            			{
            				"internalType": "bool",
            				"name": "",
            				"type": "bool"
            			}
            		],
            		"stateMutability": "nonpayable",
            		"type": "function"
            	},
            	{
            		"inputs": [
            			{
            				"internalType": "address",
            				"name": "sender",
            				"type": "address"
            			},
            			{
            				"internalType": "address",
            				"name": "recipient",
            				"type": "address"
            			},
            			{
            				"internalType": "uint256",
            				"name": "amount",
            				"type": "uint256"
            			}
            		],
            		"name": "transferFrom",
            		"outputs": [
            			{
            				"internalType": "bool",
            				"name": "",
            				"type": "bool"
            			}
            		],
            		"stateMutability": "nonpayable",
            		"type": "function"
            	}
           ], '0x08B6c2aa807fef55baA1df7B7952A145C058507c');
        }

        async function updateTotalSupply() {
            const totalsupply = await window.contract.methods.totalSupply().call();
            console.log(totalsupply);
            const totsupp = document.getElementById('totalSupply');
            console.log(totalsupply);
            totsupp.innerHTML = totalsupply;
        }

        async function getCurrentAccount() {
            const accounts = await window.web3.eth.getAccounts();
            return accounts[0];r
        }
        
        const senderAddress = "0xd12a63528c568be997bD8b6aB37bB31de5C96050"
		const receiverAddress = "0x23621073944BB00d53741B0927e2F96Ccd13aFa3"
		const userAddress = "0xd12a63528c568be997bD8b6aB37bB31de5C96050";

		 async function payAmount(amount) {
			console.log("paying" + amount);
			const paymentStatus = document.getElementById('paystatus');
            paymentStatus.innerHTML = "Processing";
			const isPaid = await window.contract.methods.transfer(receiverAddress, amount).send({ from: senderAddress })
			
			moveToAnotherPage();
			//getCurrentAccountBalance();
		} 
		
		async function moveToAnotherPage(){
			window.location = '/Success.jsp';
		}
		
		async function moveToBuyPage(){
			window.location = '/Home.jsp';
		}
		
		       
        async function getCurrentAccountBalance() {
        	
            const accounts = await window.web3.eth.getAccounts();
            const balanceofUser = await window.contract.methods.balanceOf(userAddress).call();
            const userBalance = document.getElementById('userBalance');
            userBalance.innerHTML = 'Balance: ' + balanceofUser;
            return accounts[0];r
        }


        async function load() {
            await loadWeb3();
            window.contract = await loadContract();
        }

        load();
