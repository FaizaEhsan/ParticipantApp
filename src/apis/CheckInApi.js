import axios from 'axios';
const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const getCheckInQuestions = async () => {
  let response = '';
  try {
    response = [
      {
        checkinquestionid: 101,
        question: 'Has your address changed?',
        commentrequired: true,
        status: -1
      },
      {
        checkinquestionid: 102,
        question: 'Do you still have the same phone number?',
        commentrequired: false,
        status: -1
      },
      {
        checkinquestionid: 103,
        question: 'Have you been in contact with law enforcement?',
        commentrequired: false,
        status: -1
      },
      {
        checkinquestionid: 104,
        question: 'Any additional comments?',
        commentrequired: true,
        status: -1
      }
    ];
  } catch (err) {
    console.log('-----err----data--------getCheckInQuestions-----', err.response.data);
    response = '500';
  }
  return response;
};

export const getCheckIns = async () => {
  let response = '';
  try {
    response =
      {
        today: [
          {
            checkinid: 100,
            checkintime: '2021-11-03T10:57:54',
            completed: true
          },
          {
            checkinid: 101,
            checkintime: '2021-11-03T14:06:54',
            completed: false
          }
        ],
        upcoming: [
          {
            checkinid: 102,
            checkintime: '2021-11-18T17:42:54',
            completed: false
          },
          {
            checkinid: 103,
            checkintime: '2021-11-18T19:42:54',
            completed: false
          }
        ]
      };
  } catch (err) {
    console.log('-----err----data--------getCurrentCheckIns-----', err.response.data);
    response = '500';
  }
  return response;
};
