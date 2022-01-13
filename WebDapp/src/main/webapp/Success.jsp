<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Payment Success</title>
</head>
<body>
<script src='web3.min.js'></script>
<script src='home.js'></script>
Payment successful
<br>
Balance: <span id="userBalance">0</span>
<br>
<button onclick="moveToBuyPage()">Go back to buy page</button>
<script>
window.onload = function() {
	getCurrentAccountBalance();
	};
</script>
</body>
</html>