// import axios from 'axios';
// const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const getNotifications = async () => {
  let response = '';
  try {
    response = {
      today:
                        [
                          {
                            reminderid: 1,
                            title: 'Low Battery',
                            description: 'Charge your device',
                            tag: '',
                            tagtype: '',
                            time: '10:10pm',
                            type: 'battery', // battery, schedule, zone, checkin, curfew,
                            seen: 'false'
                          },
                          {
                            reminderid: 2,
                            title: 'Return home by 10:30pm',
                            description: '',
                            tag: '',
                            tagtype: '',
                            time: '10:00pm',
                            type: 'curfew', // battery, schedule, zone, checkin, curfew,
                            seen: 'true'
                          }
                        ],
      yesterday:
                        [
                          {
                            reminderid: 3,
                            title: 'Virtual Check In at 4:30pm',
                            description: '',
                            tag: '',
                            tagtype: '',
                            time: '04:30pm',
                            type: 'checkin', // battery, schedule, zone, checkin, curfew,
                            seen: 'true'
                          }
                        ],
      thisweek:
                        [
                          {
                            reminderid: 4,
                            title: 'Meet with officer',
                            description: '',
                            tag: 'Pending',
                            tagtype: 'warning',
                            time: 'June 24 - 04:30pm',
                            type: 'schedule', // battery, schedule, zone, checkin, curfew,
                            seen: 'true'
                          },
                          {
                            reminderid: 5,
                            title: 'Meet with officer',
                            description: '',
                            tag: 'Denied',
                            tagtype: 'danger',
                            time: 'June 23 - 04:30pm',
                            type: 'schedule', // battery, schedule, zone, checkin, curfew,
                            seen: 'false'
                          },
                          {
                            reminderid: 6,
                            title: 'Meet with officer',
                            description: '',
                            tag: 'Approved',
                            tagtype: 'success',
                            time: 'June 24 - 04:30pm',
                            type: 'schedule', // battery, schedule, zone, checkin, curfew,
                            seen: 'true'
                          }
                        ],
      lastweek:
                        [
                          {
                            reminderid: 7,
                            title: 'Virtual Check in at 2:30pm',
                            description: '',
                            tag: '',
                            tagtype: '',
                            time: 'June 20',
                            type: 'checkin', // battery, schedule, zone, checkin, curfew,
                            seen: 'true'
                          },
                          {
                            reminderid: 8,
                            title: 'Return home at 2:30pm',
                            description: '',
                            tag: '',
                            tagtype: '',
                            time: 'June 19',
                            type: 'curfew', // battery, schedule, zone, checkin, curfew,
                            seen: 'true'
                          }
                        ]

    };
  } catch (err) {
    console.log('-----err----data--------getNotifications-----', err.response.data);
    response = '500';
  }
  return response;
};
