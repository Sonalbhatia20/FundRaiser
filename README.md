# FundRaiser

FundRaiser is a decentralized crowdfunding platform built to reduce the scams and frauds that have been happening on traditional crowdfunding platforms like Kickstarter. 

# Problems with the existing platforms

A big issue with the current crowdfunding platforms is that after the contributions have been made, there is no transparency for the contributors and they have no control over the flow of money. There is no assurance that people who post projects on Kickstarter will actually deliver them or use the funds to implement their projects.
This has led to a lot of malicious activities and scams on Kickstarter. 

# Proposed Solution

FundRaiser uses blockchain to keep track of the funds collected using the application, and storing it under the control of a smart contract written in solidity to remove almost every possibility of it getting misused. People can create campaigns and collect funds for their projects. Anyone interested in the campaign can contribute funds more than a minimum contribution amount. The collected Funds are not directly sent to the creator. Rather, the contributors send the money to the ethereum contract. For accessing these funds, the creator needs to create a spending request to withdraw money from the contract and send it to an external address. All the contributors vote on this spending request and if it receives more than 50% votes, only then it gets approved otherwise it is not processed further.  

# Demo Screenshots

Home Page

![2021-08-19 (1)](https://user-images.githubusercontent.com/56190913/130085451-f2d5ecb9-2be4-442e-9cae-3f1d0f6cc7dd.png)

Campaign Details Page

![2021-08-19 (3)](https://user-images.githubusercontent.com/56190913/130085855-734e00da-a6ce-4997-b464-6b5c00dfe7d6.png)

Create Campaign Page

![2021-08-19 (2)](https://user-images.githubusercontent.com/56190913/130085955-f9bc7246-4475-4822-a234-254b7d083274.png)

Create Request Page

![2021-08-19 (5)](https://user-images.githubusercontent.com/56190913/130086028-b2b0b700-5d09-4f8e-ac91-b838867293fe.png)

Requests Page

![2021-08-19 (4)](https://user-images.githubusercontent.com/56190913/130086105-92781d95-49dd-4690-aade-cdac31e310d3.png)

