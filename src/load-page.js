
export function loadPage(){
    // render content
    const content = document.getElementById('content');

    // create header 
    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);

    const headerText = document.createElement('div');
    headerText.textContent = 'Todo List';
    header.appendChild(headerText);

    // create main
    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);

    // create sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    main.appendChild(sidebar);

    // create main content
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    main.appendChild(mainContent);

    // create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'chrlie-w';
    content.appendChild(footer);
    
}