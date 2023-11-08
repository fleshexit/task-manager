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
    //if (target === "About") about();
});