import {postData} from "/data.js";

const articles = document.getElementById("article-listing");

document.getElementById("hero-post").addEventListener('click', function() {
    console.log("sdojspj");
    window.open("post.html","_self")
})

function renderArticles() {
    let articlesHtml = "";
    let hidden;
    for (let i = 0; i < postData.length; i++) {
        if (postData[i].hidden) {
            hidden = "class='hidden'";
        } else {
            hidden = "";
        }
        articlesHtml += `
        <article ${hidden}>
                <img src="images/${postData[i].img}" alt="Blog image">
                <h3 class="article-date">${postData[i].date}</h3>
                <h2 class="article-title">
                    ${postData[i].title}
                </h2>
                <p class="article-preview">
                    ${postData[i].previewText}
                </p>
            </article>
        `;
    }
    articlesHtml += "<a class=\"view-more\" id=\"view-more\">View more</a>";
    articles.innerHTML = articlesHtml;
}

renderArticles();

document.getElementById("view-more").addEventListener("click", function() {
    let hiddenPosts = document.querySelectorAll(".hidden");
    if (hiddenPosts.length > 0) {
        hiddenPosts.forEach(function(post) {
            post.classList.remove("hidden");
        })
        document.getElementById("view-more").remove();
    }
})