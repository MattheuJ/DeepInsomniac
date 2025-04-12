window.onload = function(){
    const downButton = document.getElementById('entry_down_button');
    const upButton = document.getElementById('entry_up_button');
    const entryDisplay = document.getElementById('entry_title_display');
    const entryTitle = document.getElementById('entry_title_text');
    const entry_one = {}
    const entry_two = {}

    entry_one["number"] = 1;
    entry_one["title"] = "First Entry";
    entry_one["content"] = "Hello, and welcome to DeepInsomniac. This is a random website idea that came to my head. So, I thought I'd make it a reality. Also helps me practice my front-end skills.";

    entry_two["number"] = 2;
    entry_two["title"] = "Still Here?";
    entry_two["content"] = "If you're here hoping I really use this as a blog, I'm sorry to disappoint, but I won't. This is more a proof of concept. Check out the other projects I've made on my GitHub. Thanks!";

    let entryCount = 1;
    let currentEntry = "Entry " + entryCount;

    downButton.addEventListener('click', () => {
        console.log("left hit");
    if (entryCount > 1) {
        entryCount--;
        currentEntry = "Entry " + entryCount;
        entryDisplay.textContent = currentEntry;
        entryTitle.textContent = entry_one.title;
        document.getElementById('entry_content').innerHTML = entry_one.content;
    }
    });

    upButton.addEventListener('click', () => {
        console.log("right hit");
        if (entryCount < 2) {
            entryCount++;
            currentEntry = "Entry " + entryCount;
            entryDisplay.textContent = currentEntry;
            entryTitle.textContent = entry_two.title;
            document.getElementById('entry_content').innerHTML = entry_two.content;
        }
    });

}
