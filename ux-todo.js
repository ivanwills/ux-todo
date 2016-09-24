import ractive from 'ractive';
import template from './ux-todo.hbs.js';

export default ractive.extend({
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
