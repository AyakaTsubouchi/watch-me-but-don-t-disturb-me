const initState = {
  projects: [
    {
      id: 1,
      task: 'take a walk',
      date: 'March.29th',
      startTime: '10:00',
      endTime: '11:00'
    },
    {
      id: 2,
      task: 'watch TV',
      date: 'March.29th',
      startTime: '11:00',
      endTime: '12:00'
    },
    {
      id: 3,
      task: 'Shoping',
      date: 'March.29th',
      sstartTime: '13:00',
      endTime: '14:00'
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
