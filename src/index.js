import { loadPage } from "./load-page";
import { renderInbox} from './inbox';
import { renderToday } from './today';
import './style.css';


function clearContent(){
    const content = document.getElementById('content');
    while (content.firstChild) content.removeChild(content.firstChild);
}

function inbox(){
    clearContent();
    loadPage();
    renderInbox();
}

function today(){
    clearContent();
    loadPage();
    renderToday();
}

// initial load
loadPage();
inbox();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "Inbox")inbox();
    if (target === "Today")today();
});

const inboxTaskList = [];
const todayTaskList = [];
const upcomingTaskList = [];

const addTododButton = document.querySelector('#add-button');
const modal = document.querySelector('.modal');
addTododButton.addEventListener('click', () => {
    modal.showModal();
});


const form = document.querySelector('.modal-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    //const dueDate = document.querySelector('#due-date').value;
    //const priority = document.querySelector('#priority').value;
    //const project = document.querySelector('#project').value;

    const task = new Task(title, description);
    addTaskToList(task);
    addListToDOM();
    modal.close();
});

function Task(title, description){
    this.title = title;
    this.description = description;
}

function addTaskToList(task){
    inboxTaskList.push(task);
}

function addListToDOM(){
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = "";

    inboxTaskList.forEach((task) => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        const title = document.createElement("h3");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove";
        remove.addEventListener("click", () => {
        inboxTaskList.splice(inboxTaskList.indexOf(task), 1);
        addListToDOM();
        });

        taskCard.appendChild(title);
        taskCard.appendChild(description);
        taskCard.appendChild(remove);
        mainContent.appendChild(taskCard);
    });
}