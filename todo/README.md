We have Created a To-Do list app which takes particuar tasks from the user and there are some functionality in it like we can delete the task if not needed and we can also mark it as done.

Working of To-do list app

There are different components in our app like TodoInput.js, ToDoList.js, App.js, Footer.js. 1. TodoInput.js component contains a input box with a submit button is used to get the task from the user. However, we have used the props to pass the data from parent component to child component in it and also function reference for passing the data from child component to parent component.

    2. ToDoList.js component is used to display the data which is added by the user and also it shows the updated list when some task is deleted. However, we have used the props to pass the data from parent component to child component in it and also function reference for passing the data from child component to parent component.

    3. App.js is the parent component where both the components are called. Their logic is also managed there.

    4. Footer.js is a component used to display the footer

Our app is fully responsive that is we can use our app in differnt mobile devices.
I have also make use of local storge to store the data locally. However, Some of the functionaliy was not applied in it.
