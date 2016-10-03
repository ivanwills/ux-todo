import template from './ux-todo.hbs.js';
import uxCheckbox from './node_modules/ux-checkbox/ux-checkbox.js';

export default Ractive.extend({
    template: template,
    isolated: true,
    components: {
        'ux-checkbox': uxCheckbox
    },
    data: () => {
        return {
            todos: [
                {
                    name : 'Milk',
                    value: 'Get the milk'
                }
            ]
        };
    },
    oninit: function () {
        this.observe('todos', (newValue) => {
            console.log(newValue);
        });
    }
});
