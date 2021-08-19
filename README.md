# FundRaiser

FundRaiser is a decentralized crowdfunding platform built to reduce the scams and frauds that have been happening on traditional crowdfunding platforms like Kickstarter. 

# Problems with the current system

A big issue with the current crowdfunding platforms is that after the contributions have been made, there is no transparency for the contributors and they have no control over the flow of money. There is no assurance that people who post projects on Kickstarter will actually deliver them or use the funds to implement their projects.
This has led to a lot of malicious activities and scams on Kickstarter. 

# Proposed Solution

FundRaiser uses blockchain to keep track of the funds collected using the application, and storing it under the control of a smart contract written in solidity to remove almost every possibility of it getting misused. People can create campaigns and collect funds for their projects. Anyone interested in the campaign can contribute funds more than a minimum contribution amount. The collected Funds are not directly sent to the creator. Rather, the contributors send the money to the ethereum contract. For accessing these funds, the creator needs to create a spending request to withdraw money from the contract and send it to an external address. All the contributors vote on this spending request and if it receives more than 50% votes, only then it gets approved otherwise it is not processed further.  
