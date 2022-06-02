import './styles/style.css'; //

const descriptions = [
  {
    id: 1,
    description: 'pray',
    completed: true,
  },
  {
    id: 2,
    description: 'Read historybook',
    completed: true,
  },
  {
    id: 3,
    description: 'Morning Walk',
    completed: false,
  },
  {
    id: 4,
    description: '30 Squats',
    completed: false,
  },
];

const toDo = document.getElementById('todo-list');

function TaskObject() {
  let workout = '';
  descriptions.forEach((job) => {
    workout += `
              <div class="list">
                  <input type="checkbox">
                  <p>${job.description}</p>
             
         <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                  </a>
              </div>`;
  });
  toDo.innerHTML = workout;
}
TaskObject();
