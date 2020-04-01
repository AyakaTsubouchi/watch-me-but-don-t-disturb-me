export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const authorid = getState().firebase.auth.uid;
    console.log('profile', profile);
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorid
        // createdAt: new Date(),

        // startTImeH: profile.startTImeH,
        // startTImeM: profile.endTime
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  };
};
