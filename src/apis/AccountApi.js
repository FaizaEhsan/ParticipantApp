import axios from 'axios';
const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const PostAccountSettings = async (isEnabled) => {
  console.log('isEnabled------------------------------------', isEnabled);
  console.log('inside PostAccountSettings------------------------------------');
  const data =
    {
      pushnotifications: isEnabled,
      calendareventsapp: 'true'
    };
  const userId = 'ID9000101';
  let response = '';
  try {
    await axios.post(baseUrl + '/participant/' + userId + '/account/settings')
      .then(res => {
        console.log(res.data);
        response = res.data;
      });
  } catch (err) {
    console.log('Error response:');
    console.log('---------data-------------', err.response.data);
    console.log('----------status------------', err.response.status);
    response = {
      code: 404,
      type: 'error',
      message: 'Server not found'
    };
  }
  return response;
};
