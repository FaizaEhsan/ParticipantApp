import axios from 'axios';
const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

// export const getDashboard = async () => {
//   let response = ''
//   try {
//     await axios.get(baseUrl + '/dashboard/participant/ID9000101')
//       .then(res => {
//         console.log('data---getDashboard-----', res.data)
//         response = res.data
//       })
//   } catch (err) {
//     console.log('-----err----data------getDashboard-------', err.response.data)
//     response = '500'
//   }
//   return response
// }

// export const getDashboardWidget = async () => {
//   let response = ''
//   try {
//     await axios.get(baseUrl + '/dashboard/participant/ID9000101/widget/all')
//       .then(res => {
//         console.log('res-----------getDashboardWidget-----------------', res.data)
//         response = res.data
//       })
//   } catch (err) {
//     console.log('-----err----data--------getDashboardWidget-----', err.response.data)
//     response = '500'
//   }
//   return response
// }

export const getDashboard = async (userId) => {
  let apiRes = null;
  try {
    // apiRes = await axios.get(baseUrl + '/dashboard/participant/' + userId + '');
    // console.log('------------apiRes', apiRes);
    apiRes = {
      config: {
        url: baseUrl + '/dashboard/participant/' + userId + ''
      },
      data: {
        firstname: 'John',
        lastname: 'Doe',
        oid: 'ID9000101',
        address: {
          street1: '201 Technology Drive',
          street2: '',
          city: 'Irvine',
          state: 'CA',
          zip: '92618'
        },
        monitoring: {
          type: 'GPS'
        },
        widgets: {
          program_completion: true,
          days_compliant: true,
          curfew: true,
          todays_checkinstatus: true,
          appt_attendance: true,
          checkins_complete: true,
          checkin_streak: true
        }
      },
      status: 200
    };
    return apiRes;
  } catch (err) {
    console.error('Error response:', err);
    return err;
  }
};

export const getDashboardWidget = async () => {
  let response = '';
  try {
    response = {
      program_completion: {
        startdate: '01/01/2020',
        enddate: '05/01/2020',
        completed: '32'
      },
      days_compliant: {
        days: 3
      },
      curfew: {
        ontime: 3,
        late: 2,
        buffer: 1
      },
      todayscheckinstatus: {
        streak: [
          2,
          2,
          1,
          0
        ]
      },
      checkins_complete: {
        complete: 3,
        total: 10
      },
      checkin_streak: {
        days: 3
      },
      appt_attendance: {
        attendancepercent: '88'
      }
    };
  } catch (err) {
    console.log('-----err----data--------getDashboardWidget-----', err.response.data);
    response = '500';
  }
  return response;
};

export const getUserStatus = async (userId, appID) => {
  let apiRes = null;
  // console.log('-------userId', userId);
  try {
    // apiRes = await axios.get(baseUrl + '/user/' + userId + '/status/application/' + appID + '');
    // console.log('------------apiRes', apiRes);
    apiRes = {
      config: {
        url: baseUrl + '/user/' + userId + '/status/application/' + appID + ''
      },
      data: {
        oid: 'ID9000101',
        email: 'user@usermail.com',
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
      },
      status: 200
    };
    return apiRes;
  } catch (err) {
    console.error('Error response:', err);
    return err;
  }
};
