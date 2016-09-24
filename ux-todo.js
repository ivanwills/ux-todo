import template from './ux-todo.hbs.js';

export default Ractive.extend({
    template: template,
    isolated: true,
    data: () => {
        return {
            todos: [
                {
                    name : 'Milk',
                    value: 'Get the milk'
                }
            ]
        };
    }
});
