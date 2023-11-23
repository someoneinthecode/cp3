function googleSearch() {
    var query = document.getElementById("searchBar").value;
    window.location.href = "https://www.google.com/search?q=" + query;
}

function luckySearch() {
    var query = document.getElementById("searchBar").value;
    window.location.href = "https://www.google.com/search?q=" + query + "&btnI";
}
function advancedSearch() {
    const allWords = document.getElementById("allWords").value;
    const exactWord = document.getElementById("exactWord").value;
    const anyWords = document.getElementById("anyWords").value;
    const noneWords = document.getElementById("noneWords").value;

    // You can construct the search query here based on these inputs
    const searchQuery = `https://www.google.com/search?q=allintext:${allWords}+${exactWord}+${anyWords}+-${noneWords}`;
    window.location.href = searchQuery;
}
function imageSearch() {
    const query = document.getElementById("imageSearchBar").value;
    const searchQuery = `https://www.google.com/search?tbm=isch&q=${query}`;
    window.location.href = searchQuery;
}
