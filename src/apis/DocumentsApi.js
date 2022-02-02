import axios from 'axios';
const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const getDocuments = async () => {
  let response = '';
  try {
    response = [
      {
        documentid: 1,
        documentname: 'PDF Document',
        uploadeddate: '03/21/21',
        mimetype: 'application/pdf',
        isparticipantuploaded: false,
        uploader: 'Sentinel'
      },
      {
        documentid: 2,
        documentname: 'Word File',
        uploadeddate: '03/21/21',
        mimetype: 'application/rtf',
        isparticipantuploaded: true,
        uploader: 'Abdullah Nasir'
      },
      {
        documentid: 3,
        documentname: 'Picture',
        uploadeddate: '03/21/21',
        mimetype: 'application/img',
        isparticipantuploaded: true,
        uploader: 'John Doe'
      },
      {
        documentid: 4,
        documentname: 'Another Word doc',
        uploadeddate: '03/21/21',
        mimetype: 'application/doc',
        isparticipantuploaded: true,
        uploader: 'John Doe'
      },
      {
        documentid: 5,
        documentname: 'Excel document',
        uploadeddate: '03/21/21',
        mimetype: 'application/xlx',
        isparticipantuploaded: true,
        uploader: 'John Doe'
      },
      {
        documentid: 6,
        documentname: 'This is a text document',
        uploadeddate: '03/21/21',
        mimetype: 'application/txt',
        isparticipantuploaded: true,
        uploader: 'Abdullah Nasir'
      },
      {
        documentid: 7,
        documentname: 'Hello6',
        uploadeddate: '03/21/21',
        mimetype: 'application/txt',
        isparticipantuploaded: true,
        uploader: 'Abdullah Nasir'
      },
      {
        documentid: 8,
        documentname: 'Hello6',
        uploadeddate: '03/21/21',
        mimetype: 'application/txt',
        isparticipantuploaded: true,
        uploader: 'Abdullah Nasir'
      }
    ];
  } catch (err) {
    response = '500';
  }
  return response;
};

export const createDocuments = async (userId, ranNum) => {
  let apiRes = null;
  try {
    apiRes = {
      config: {
        url: baseUrl + '/participant/' + userId + '/document'
      },
      data: {
        code: 200,
        documentId: ranNum,
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
