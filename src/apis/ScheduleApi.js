import axios from 'axios';
const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const getDaySchedule = async () => {
  let response = '';
  try {
    response = [
      {
        scheduleid: 100,
        startime: '0200',
        endtime: '0900',
        status: 2,
        daynumber: 4,
        temporperm: 'P',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Office appointment',
        name: '',
        documents: [
          {
            name: '',
            id: 10
          }
        ]
      },
      {
        scheduleid: 101,
        startime: '1000',
        endtime: '1200',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Virtual appointment',
        name: '',
        documents: [
          {
            name: '',
            id: 10
          }
        ],
        address: '201 Technology Drive, Irvine, CA 92604'
      },
      {
        scheduleid: 102,
        startime: '1400',
        endtime: '1600',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'BART Test',
        name: '',
        documents: [
          {
            name: '',
            id: 10
          }
        ],
        address: '201 Technology Drive, Irvine, CA 92604'
      },
      {
        scheduleid: 103,
        startime: '1700',
        endtime: '1800',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Check-in',
        name: '',
        address: '201 Technology Drive, Irvine, CA 92604',
        documents: null
      },
      {
        scheduleid: 104,
        startime: '1900',
        endtime: '1930',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Leave',
        name: '',
        address: '201 Technology Drive, Irvine, CA 92604',
        documents: null
      },
      {
        scheduleid: 105,
        startime: '2000',
        endtime: '2030',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Leave',
        name: '',
        address: '201 Technology Drive, Irvine, CA 92604',
        documents: null
      },
      {
        scheduleid: 106,
        startime: '2100',
        endtime: '2130',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Check-in',
        name: '',
        address: '201 Technology Drive, Irvine, CA 92604',
        documents: null
      },
      {
        scheduleid: 107,
        startime: '2200',
        endtime: '2300',
        status: 2,
        daynumber: 4,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-03-11T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'Virtual appointment',
        name: '',
        address: '201 Technology Drive, Irvine, CA 92604',
        documents: null
      },
      {
        scheduleid: 108,
        startime: '2330',
        endtime: '2400',
        status: 2,
        daynumber: 3,
        temporperm: 'T',
        windowindex: 0,
        startdate: '2021-09-22T08:00:00.000Z',
        reason: '',
        isactive: true,
        overlap: false,
        mandatory: false,
        type: 'BART Test',
        name: '',
        address: '201 Technology Drive, Irvine, CA 92604',
        documents: null
      }
    ];
  } catch (err) {
    console.log('-----err----data--------getDaySchedule-----', err.response.data);
    response = '500';
  }
  return response;
};

export const changeScheduleRequest = async (userId, type, id) => {
  let apiRes = null;
  try {
    apiRes = {
      config: {
        url: baseUrl + '/participant/' + userId + '/schedule/request/type/' + type + '/id/' + id + ''
      },
      data: {
        code: 200,
        type: 'success',
        message: 'Successfully created the request'
      },
      status: 200
    };
    console.log('-----apiRes----', apiRes);
    return apiRes;
  } catch (err) {
    console.error('Error response:', err);
    return err;
  }
};

export const deleteScheduleRequest = async (userId, type, id) => {
  let apiRes = null;
  try {
    apiRes = {
      config: {
        url: baseUrl + '/participant/' + userId + '/schedule/request/type/' + type + '/id/' + id + ''
      },
      data: {
        code: 200,
        type: 'success',
        message: 'Successfully created the request'
      },
      status: 200
    };
    return apiRes;
  } catch (err) {
    console.error('Error response:', err);
    return err;
  }
};

export const getConciseMonthlySchedule = async () => {
  let response = '';
  try {
    response = [
      {
        day: '03-01-2021',
        type: 'OVBCL'
      },
      {
        day: '03-02-2021',
        type: 'O'
      },
      {
        day: '03-03-2021',
        type: 'V'
      },
      {
        day: '03-04-2021',
        type: 'B'
      },
      {
        day: '03-09-2021',
        type: 'BOV'
      },
      {
        day: '07-09-2021',
        type: 'BOV'
      }
    ];
  } catch (err) {
    response = '500';
  }
  return response;
};

export const createNewAppointmentRequest = async (userId) => {
  let apiRes = null;
  try {
    apiRes = {
      config: {
        url: baseUrl + '/participant/' + userId + '/schedule/request'
      },
      data: {
        code: 200,
        type: 'success',
        message: 'Successfully created the request'
      },
      status: 200
    };
    return apiRes;
  } catch (err) {
    console.error('Error response:', err);
    return err;
  }
};

export const addDocumentToAScheduleRequest = async (userId, type, id) => {
  let apiRes = null;
  try {
    apiRes = {
      config: {
        url: baseUrl + '/participant/' + userId + '/schedule/request/document/type/' + type + '/id/' + id + ''
      },
      data: {
        code: 200,
        type: 'success',
        message: 'Successfully created the request'
      },
      status: 200
    };
    return apiRes;
  } catch (err) {
    console.error('Error response:', err);
    return err;
  }
};
