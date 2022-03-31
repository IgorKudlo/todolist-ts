import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Task} from "../Task";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/TaskCheckbox',
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = () => {
  const [task, setTask] = useState({ id: '111', isDone: true, title: 'JS' });
  const changeTaskStatus = () => setTask({ id: '111', isDone: !task.isDone, title: 'JS' })

  return <Task
    changeTaskStatus={changeTaskStatus}
    changeTaskTitle={action('changeTaskTitle')}
    removeTask={action('removeTask')}
    task={task}
    todolistId={'1'}
  />;
};

export const TaskStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskStory.args = {};