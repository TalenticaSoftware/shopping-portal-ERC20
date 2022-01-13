<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pay</title>
</head>
<body>
<script src='web3.min.js'></script>
<script src='home.js'></script>
<script>
window.onload = function() {
	getCurrentAccountBalance();
	};
</script>

 Amount to be paid : ${amount}
 <br>
<button onclick="payAmount(${amount});">Pay</button>
     <br>
     Payment Status: <span id="paystatus">Not paid</span><br>
<span id="userBalance"></span>
</body>
</html>