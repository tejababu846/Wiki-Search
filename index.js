let SearchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let SpinnerEl = document.getElementById("spinner");

function createandAppendofresult(result) {
    let {
        title,
        link,
        description
    } = result
    // result Item div 
    let ResultItem = document.createElement("div");
    ResultItem.classList.add("result-item")
    searchResultsEl.appendChild(ResultItem)
    // titile anchor 
    let resultTitle = document.createElement("a");
    resultTitle.classList.add("result-title");
    resultTitle.textContent = title;
    resultTitle.href = link;
    resultTitle.target = "_blank";
    ResultItem.appendChild(resultTitle)
    // br 
    let breakElemnt = document.createElement("br");
    ResultItem.appendChild(breakElemnt)
    // url 
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url")
    urlEl.textContent = link;
    urlEl.href = link;
    urlEl.target = "_blank"
    ResultItem.appendChild(urlEl);
    // br 
    let breakElemnt2 = document.createElement("br");
    ResultItem.appendChild(breakElemnt2)
    // descrioption 
    let Description = document.createElement("p");
    Description.classList.add("link-description");
    Description.textContent = description;
    ResultItem.appendChild(Description);
}

function displyResults(SearchResults) {
    SpinnerEl.classList.toggle("d-none")
    for (let result of SearchResults) {

        createandAppendofresult(result)

    }
}

function wikiSearchapp(event) {

    if (event.key === "Enter") {
        searchResultsEl.textContent = ""
        SpinnerEl.classList.toggle("d-none");
        let searchInput = SearchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let Options = {
            method: "GET"
        }
        fetch(url, Options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displyResults(search_results)
            })
    }

}







SearchInputEl.addEventListener("keydown", wikiSearchapp)
