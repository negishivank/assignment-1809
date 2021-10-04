// grabbing the element
let newsToDisplay = document.getElementById('newsData');

// Making a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:5001/TimesStories", true);

// when the response is ready
xhr.onload = async function () {
    if (this.status === 200) {
        try {
            var json = await JSON.parse(this.responseText);
            console.log(json);
        } catch (e) {
            console.warn("Error encountered!!");
        }
        let title = json.title;
        let link = json.link;
        // console.log("I have stored the values now");
        let newsHtml = "";
        json.forEach(function (item, index) {
            let news = `<section class="news-sec">
                <div class="div-news">
                <div class="wrapper-news">
                    <ul>
                       <li> <p><b>${index + 1}</b></p> <a class="title-class" href="${item['link']}" target="_blank">
                       <p>${item["title"]}</p></b>
                   </a> </li>
                    </ul>
                </div>
                </div>

            </section> `;
            newsHtml += news;
        });
        newsToDisplay.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send()


