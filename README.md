# FundRaiser

FundRaiser is a decentralized crowdfunding platform built to reduce the scams and frauds that have been happening on traditional crowdfunding platforms like Kickstarter. 

# Problems with the existing platforms

A big issue with the current crowdfunding platforms is that after the contributions have been made, there is no transparency for the contributors and they have no control over the flow of money. There is no assurance that people who post projects on Kickstarter will actually deliver them or use the funds to implement their projects.
This has led to a lot of malicious activities and scams on Kickstarter. 

# Proposed Solution

FundRaiser uses blockchain to keep track of the funds collected using the application, and storing it under the control of a smart contract written in solidity to remove almost every possibility of it getting misused. People can create campaigns and collect funds for their projects. Anyone interested in the campaign can contribute funds more than a minimum contribution amount. The collected Funds are not directly sent to the creator. Rather, the contributors send the money to the ethereum contract. For accessing these funds, the creator needs to create a spending request to withdraw money from the contract and send it to an external address. All the contributors vote on this spending request and if it receives more than 50% votes, only then it gets approved otherwise it is not processed further.  

# Demo Screenshots

Home Page

![allCampaigns](https://user-images.githubusercontent.com/56190913/130351577-be98d77b-d36f-424b-8740-fa2d16b94917.png)


Campaign Details Page

![Campaign](https://user-images.githubusercontent.com/56190913/130351581-6df013cf-c706-4c6b-94ae-d8c47fed0f2b.png)


Create Campaign Page

![createCampaign](https://user-images.githubusercontent.com/56190913/130351584-20d00ef0-b2f3-46d7-8319-1baedf4ff2d5.png)


Create Request Page

![createRequest](https://user-images.githubusercontent.com/56190913/130351589-b9304a77-72e9-4de7-86ec-60271cd37f9a.png)


Requests Page

![Requests](https://user-images.githubusercontent.com/56190913/130351592-a5b4eb87-c134-4fa9-b35e-87976139f799.png)


