// import axios from 'axios';
// const baseUrl = 'https://4dc4985b-9feb-4374-a60b-d2c7a603c7dc.mock.pstmn.io';

export const getResources = async () => {
  let response = '';
  try {
    response = [
      {
        resourceid: 1,
        resourcename: 'Device Information',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/pdf',
        uploader: 'John Doe',
        resourcetype: 'document'
      },
      {
        resourceid: 2,
        resourcename: 'Curfew Details',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/txt',
        uploader: 'Abdullah Nasir',
        resourcetype: 'picture'
      },
      {
        resourceid: 3,
        resourcename: 'Officer Guidelines',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/rtf',
        uploader: 'Doe John',
        resourcetype: 'money'
      },
      {
        resourceid: 4,
        resourcename: 'Signed Agreement',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/doc',
        uploader: 'Abdullah Nasir',
        resourcetype: 'participant'
      },
      {
        resourceid: 5,
        resourcename: 'Office Visit Guidelines',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/xlx',
        uploader: 'John Doe',
        resourcetype: 'help'
      },
      {
        resourceid: 6,
        resourcename: 'Device Picture',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/img',
        uploader: 'Abdullah Nasir',
        resourcetype: 'info'
      },
      {
        resourceid: 7,
        resourcename: 'Hello',
        uploadeddate: '03/21/21',
        description: 'Lorem ipsum dolor lorem ipsum',
        mimetype: 'application/img',
        uploader: 'Abdullah',
        resourcetype: 'participant'
      }
    ];
  } catch (err) {
    response = '500';
  }
  return response;
};
