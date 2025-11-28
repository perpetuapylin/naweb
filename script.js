function search() {
  const keyword = document.getElementById("keyword").value;
  document.getElementById("results").innerHTML =
    "你搜尋了：「" + keyword + "」。之後我會幫你接 Google Sheet API";
}
