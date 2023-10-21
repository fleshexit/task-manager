import { loadPage } from "./load-page";
import './style.css';

function clearContent(){
    const content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

loadPage();