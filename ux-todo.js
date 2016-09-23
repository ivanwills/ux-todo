import ractive from 'ractive';
import template from './ux-todo.hbs';

export default ractive.extend({
    template: template,
    isolated: true;
});
