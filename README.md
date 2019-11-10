# Blockchain-Brute-Forcer
Node js Script which scans for open ports in network, establish connection with blockchain node and attempts to brute force user accounts. <br />
There is no question on the security of underlying crypto in blockchain frameworks, but will crypto alone make blockchain systems secure?
The DAO and Parity freeze hacks can be considered as two of the most famous hacks were attackers could abuse the logic of smart contracts in Ethereum. **Blockchain_Brute_forcer.js is a demonstration that how Ethereum nodes with user accounts having weak passwords can be breached.**  I hope that people will feel motivated to contribute their own ideas and improvements. <br />

# Requirements
**Tested In** <br />
Node js v12.10.0 <br />
npm 6.10.3 <br />
**npm packages** <br />
Web3 ^1.2.1 <br />
colors ^1.4.0 <br />
ethereumjs-testrpc ^6.0.3 <br />
evilscan ^1.7.5
**Brute Forcing Requirments** <br />
For brute forcing accounts, it is necessary to have a txt file which contains all the possible password candidates. <br />
Example: rockyou.txt https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt <br />
For genetrating dynamic wordlist of passwords, tools such as crunch https://tools.kali.org/password-attacks/crunch can be leveraged <br/>
# Usage
1. Install node js and npm <br />
2. Install required npm packages. Example: npm install package name <br />
3. **Change IP address, port and path to file in script** <br />
4. Finally it's time to brute force blockchain ... ! **node Blockchain_Brute_Forcer.js**  <br />

![alt text](https://github.com/alexdevassy/Blockchain-Brurte-Forcer/blob/master/Blockchain%20Brute%20Forcer.PNG)
