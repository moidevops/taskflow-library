const Task = require('../src/task');


describe('Task', () => {
    test('should create task with correct properties', () => {
        const task = new Task('Test', 'Description');
        expect(task.title).toBe('Test');
        expect(task.status).toBe('todo');
    });
});


describe('Task Priority', () => {
    test('should set valid priority', () => {
        const task = new Task('Test', 'Description');
        expect(task.setPriority('high')).toBe(true);
        expect(task.priority).toBe('high');
    });
});
