import template from './ux-todo.hbs';
import uxCheckbox from './node_modules/ux-checkbox/ux-checkbox.js';

export default Ractive.extend({
    template: template,
    isolated: true,
    components: {
        'ux-checkbox': uxCheckbox
    },
    data: () => {
        var todos = localStorage.getItem('todos');
        if (todos) {
            todos = JSON.parse(todos);
        }

        return {
            todos: todos || [
                {
                    checked: false,
                    text: 'Get the milk'
                }
            ]
        };
    },
    oninit: function () {
        this.observe('todos', this.saveTodos.bind(this));
        this.on('addTodo', this.addTodo.bind(this));
    },
    saveTodos : (newValue) => {
        if (newValue) {
            localStorage.setItem('todos', JSON.stringify(newValue));
        }
    },
    addTodo : function () {
        var newTodo = this.get('newTodo');
        var todos   = this.get('todos') || [];
        todos.push({
            checked: false,
            text: newTodo
        });
        this.set({
            todos: todos,
            newTodo: ''
        });
    }
});
