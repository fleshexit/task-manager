
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

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('button');
    addTodoButton.id = 'add-button';
    addTodoButton.textContent = 'Add +';
    header.appendChild(addTodoButton);


    // create main
    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);

    // create sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    main.appendChild(sidebar);

    // populate sidebar
    const inbox = document.createElement('button');
    inbox.classList.add('tab');
    inbox.id = 'inbox';
    inbox.textContent = 'Inbox';
    sidebar.appendChild(inbox);

    const today = document.createElement('button');
    today.classList.add('tab');
    today.id = 'today';
    today.textContent = 'Today';
    sidebar.appendChild(today);

    const upcoming = document.createElement('button');
    upcoming.classList.add('tab');
    upcoming.id = 'upcoming';
    upcoming.textContent = 'Upcoming';
    sidebar.appendChild(upcoming);


    // create main content
    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('main-content-container');
    main.appendChild(mainContentContainer);

    const mainContentHeader = document.createElement('div');
    mainContentHeader.classList.add('main-content-header');
    mainContentContainer.appendChild(mainContentHeader);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContentContainer.appendChild(mainContent);

    // create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'chrlie-w';
    content.appendChild(footer);

    const addTodoDialog = document.createElement('dialog');
    addTodoDialog.classList.add('modal');
    addTodoDialog.innerHTML = `
    <div class="modal-content">
    <h2>Add New Task</h2>
        <form class="modal-form" action="#" method="dialog">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Title" maxlength="50" required>
            <label for="description">Description</label>
            <input type="text" name="description" id="description" placeholder="Description" maxlength="250" required>
            <input id="submit" type="submit" value="Submit">
        </form>
    </div>
    `;
    content.appendChild(addTodoDialog);

    
}