import React, { useState } from 'react'
import './app.css'

function ap () {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [personCount, setPersonCount] = useState(1);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [editingTaskId, setEditingTaskId] = useState(null);

}
