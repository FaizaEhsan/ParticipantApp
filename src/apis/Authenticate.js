import axios from 'axios';
const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

// export const userApplicationStatus = async () => {
//   console.log('inside userApplicationStatus------------------------------------');
//   let response = '';
//   try {
//     await axios.get(baseUrl + '/user/ID9000101/status/application/papp')
//       .then(res => {
//         console.log(res.data);
//         response = res.data;
//       });
//   } catch (err) {
//     console.log('-----err----data-------------', err.response.data);
//     response = '500';
//   }
//   return response;
// };

export const userApplicationStatus = async (email) => {
  let response = '';
  try {
    response = {
      oid: '{{userid}} ',
      email: email,
      accountfirstname: 'Mock',
      accountlastname: 'User',
      permissions: {
        CHAT: true,
        VIDEO_CALL: true,
        VOICE_CALL: true,
        CHECK_IN_VOICE: true,
        CHECK_IN_FACE: true
      },
      actions: {
        eula: {
          show: true,
          eulaid: '1'
        }
      }
    };
  } catch (err) {
    console.log('-----err----data-------------', err.response.data);
    response = '500';
  }
  return response;
};

export const registerUser = async (data) => {
  console.log('inside registerUser api------------------------------------', data);
  let apiRes = null;
  let response = '';
  try {
    apiRes = await axios.post(baseUrl + '/user/register', { data })
      .then(res => {
        console.log(res.data);
        response = res.data;
      });
    console.log('-----res----data-------------', apiRes);
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

export const validatePasscode = async (data) => {
  console.log('inside ValidatePasscode--------------------------------data----', data);
  let response = '';
  try {
    await axios.post(baseUrl + '/user/passcode/validate', { data })
      .then(res => {
        console.log(res.data);
        response = res.data;
      });
  } catch (err) {
    console.log('Error response:');
    console.log('---------data-------------', err.response.data);
    response = {
      code: 404,
      type: 'error',
      message: 'Server not found'
    };
  }
  return response;
};

export const updateEulaResponse = async () => {
  console.log('inside updateEulaResponse------------------------------------');
  const userId = 'ID9000101';
  // const eulaId = 1;
  // const eulaResponse = 1;
  let response = '';
  try {
    await axios.post(baseUrl + '/user/' + userId + '/eula/' + 1 + '/response/' + 1 + '')
      .then(res => {
        console.log(res.data);
        response = res.data;
      });
  } catch (err) {
    console.log('Error response:');
    console.log('---------data-------------', err.response.data);
    response = {
      code: 404,
      type: 'error',
      message: 'Server not found'
    };
  }
  return response;
};

export const enrollApp = async (username, deviceToken) => {
  // console.log('inside enrollApp username------------------------------------', username);
  // console.log('inside enrollApp deviceToken------------------------------------', deviceToken);
  const data =
  {
    appname: 'papp',
    username: username,
    appplatform: 'Android',
    ondevice: '1',
    appversion: '0.1.0',
    devicename: 'Samsung Galaxy',
    deviceyear: '2020',
    additionalinfo: '',
    deviceToken: deviceToken
  };

  let response = '';
  try {
    await axios.post(baseUrl + '/user/enroll/app', { data })
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
