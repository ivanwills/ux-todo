//import babel from 'rollup-plugin-babel';

export default {
    entry: 'ux-todo.js',
    //plugins: [ babel() ],
    moduleName: 'uxToDo',
    targets: [
        { dest: 'index.js', format: 'es' },
        { dest: 'index.umd.js', format: 'umd' },
        { dest: 'index.iife.js', format: 'iife' },
    ]
};
