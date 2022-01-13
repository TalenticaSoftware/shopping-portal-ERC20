<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Buy</title>
</head>
<body>
<script src='web3.min.js'></script>
<script src='home.js'></script>
	
	<form action="/next">
	  <label for="demoInput">Commodity (500)</label>
	  <input id=quantity type=number name="quantity" min=1 max=100>
	  
	  <input type="submit" value="Buy">
	</form>
    <br >
    <button onclick="getCurrentAccountBalance();">Update Balance</button>
    
    <br>
<span id="userBalance"></span>
</body>
</html>