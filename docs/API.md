# TaskFlow API Documentation

## Task Class
Main class for managing individual tasks.

### Constructor
- `new Task(title, description)`

### Methods
- `updateStatus(status)` - Update task status

## Board Class
Manages collections of tasks.


## Task Methods


### setPriority(priority)
Sets task priority. Valid values: 'low', 'medium', 'high', 'urgent'
Returns: boolean - true if priority was set
