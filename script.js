// Load accounts from local storage
let accounts = JSON.parse(localStorage.getItem("accounts")) || []


// Save data to local storage
function saveData(){

localStorage.setItem("accounts",JSON.stringify(accounts))

}


// Display accounts in table
function displayAccounts(){

let table=""

accounts.forEach((acc,index)=>{

table+=`

<tr>

<td>${acc.name}</td>
<td>${acc.accountNumber}</td>
<td>₹ ${acc.balance}</td>

<td>

<button class="btn btn-danger btn-sm"
onclick="deleteAccount(${index})">

Delete

</button>

</td>

</tr>

`

})

document.getElementById("accountTable").innerHTML=table

}

displayAccounts()



// Create account
function createAccount(){

let name=document.getElementById("name").value
let accNumber=document.getElementById("accountNumber").value
let balance=parseFloat(document.getElementById("balance").value)

if(name=="" || accNumber=="" || balance==""){

alert("Please fill all fields")

return

}

let account={

name:name,
accountNumber:accNumber,
balance:balance,
transactions:[]

}

accounts.push(account)

saveData()

displayAccounts()

alert("Account Created Successfully")

}



// Deposit money
function depositMoney(){

let accNum=document.getElementById("accNum").value
let amount=parseFloat(document.getElementById("amount").value)

accounts.forEach(acc=>{

if(acc.accountNumber===accNum){

acc.balance+=amount

acc.transactions.push("Deposited ₹"+amount)

}

})

saveData()

displayAccounts()

alert("Money Deposited")

}



// Withdraw money
function withdrawMoney(){

let accNum=document.getElementById("accNum").value
let amount=parseFloat(document.getElementById("amount").value)

accounts.forEach(acc=>{

if(acc.accountNumber===accNum){

if(acc.balance>=amount){

acc.balance-=amount

acc.transactions.push("Withdrawn ₹"+amount)

}else{

alert("Insufficient Balance")

}

}

})

saveData()

displayAccounts()

alert("Money Withdrawn")

}



// Check balance
function checkBalance(){

let accNum=document.getElementById("checkAcc").value

accounts.forEach(acc=>{

if(acc.accountNumber===accNum){

document.getElementById("balanceResult").innerText=
"Current Balance: ₹ "+acc.balance

}

})

}



// Delete account
function deleteAccount(index){

if(confirm("Are you sure?")){

accounts.splice(index,1)

saveData()

displayAccounts()

}

}