const pageWrapper = document.querySelector('.page-wrapper');
const intro = pageWrapper.querySelector('.intro');
const main = pageWrapper.querySelector('.main');
const sidebar = pageWrapper.querySelector('.sidebar');

const data = "http://127.0.0.1:5500/data.json";

fetch(data)
    .then(response => {
        return response.json()
    })

    .then(data => {
        handeleIntro(data);
        hendeleMain(data);
        handleSidebar(data);
    })

function handeleIntro(data) {

    intro.innerHTML = /*html*/
    `
    <header role="banner">
		<h1>${data.intro.header.h1}</h1>
		<h2>${data.intro.header.h2}</h2>
	</header>

    <div class="summary" id="zen-summary" role="article">
		${data.intro.summary.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
	</div>

    <div class="preamble" id="zen-preamble" role="article">
		<h3>${data.intro.preamble.title}</h3>
        ${data.intro.preamble.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
	</div>
    `
}

function hendeleMain(data) {
    main.innerHTML = /*html*/
    `
    <div class="explanation" id="zen-explanation" role="article">
		<h3>${data.main.explanation.title}</h3>
        ${data.main.explanation.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}		
	</div>

    <div class="participation" id="zen-participation" role="article">
		<h3>${data.main.participation.title}</h3>
        ${data.main.participation.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
	</div>

    <div class="benefits" id="zen-benefits" role="article">
		<h3>${data.main.benefits.title}</h3>
		<p>${data.main.benefits.paragraphs}</p>
	</div>

    <div class="requirements" id="zen-requirements" role="article">
		<h3>${data.main.requirements.title}</h3>
		${data.main.requirements.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
	</div>
    <footer>
        ${data.main.footer.links.map(link => `<a href="${link.href}" title="${link.title}" class="${link.class}">${link.text}</a>`).join(" | ")}	
    </footer>

    `
}

function handleSidebar(data) {
    sidebar.innerHTML = /*html*/
    `
    <div class="wrapper">
        <div class="design-selection" id="design-selection">
            <h3>${data.sidebar.designSelection.title}</h3>
            <nav role="navigation">
                <ul>
                    ${data.sidebar.designSelection.items.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </nav>
        </div>
        <div class="design-archives" id="design-archives">
            <h3>${data.sidebar.designArchives.title}</h3>
            <nav role="navigation">
                <ul>
                    ${data.sidebar.designArchives.items.map(item => item).join("")}
                </ul>
            </nav>
        </div>
        <div class="zen-resources" id="zen-resources">
            <h3>${data.sidebar.zenResources.title}</h3>
            <nav role="navigation">
                <ul>
                    ${data.sidebar.zenResources.items.map(item => item).join("")}
                </ul>
            </nav>
    </div>
    `
}