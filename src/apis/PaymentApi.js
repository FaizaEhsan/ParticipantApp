// import axios from 'axios';
// const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const paymentStatus = async () => {
  let response = '';
  try {
    response = {
      balance: 100,
      maxpayment: 300,
      fees: 4,
      minimumpayment: 5
    };
  } catch (err) {
    console.log('-----err----data--------paymentStatus-----', err.response.data);
    response = '500';
  }
  return response;
};

export const paymentHistory = async () => {
  let response = '';
  try {
    response = [
      {
        id: 1,
        paymentdate: 'August 5,2020',
        confnumber: '2323ad',
        paymenttype: 'Credit Card',
        paymentamount: 30,
        iscancelled: true
      },
      {
        id: 2,
        paymentdate: 'August 4,2020',
        confnumber: '2323ad',
        paymenttype: 'Credit Card',
        paymentamount: 40,
        iscancelled: false
      },
      {
        id: 3,
        paymentdate: 'August 7,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      },
      {
        id: 4,
        paymentdate: 'August 6,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      },
      {
        id: 5,
        paymentdate: 'August 6,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      },
      {
        id: 6,
        paymentdate: 'August 6,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      },
      {
        id: 7,
        paymentdate: 'August 6,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      },
      {
        id: 8,
        paymentdate: 'August 6,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      },
      {
        id: 9,
        paymentdate: 'August 6,2020',
        confnumber: '2323bd',
        paymenttype: 'Credit Card',
        paymentamount: 50,
        iscancelled: false
      }
    ];
  } catch (err) {
    console.log('-----err----data--------paymentHistory-----', err.response.data);
    response = '500';
  }
  return response;
};
