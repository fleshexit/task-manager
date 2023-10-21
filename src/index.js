import { loadPage } from "./load-page";
import { renderTodoList } from './todo-list';
import './style.css';

function clearContent(){
    const content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

function TodoList(){
    clearContent();
    loadPage();
}



TodoList();