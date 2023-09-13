document.querySelector('#add').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
<div class="task">
    <label class="taskCheck">
        <input type="checkbox" class="taskCheckbox">
        
            ${document.querySelector('#newtask input').value}
        </span>
    </label>
    <button class="delete">
    <i class="material-icons">🗑️</i>
    </button>
</div>
`;
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}
