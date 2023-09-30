const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});

// Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    list.append(li);
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    setChapterList();
}