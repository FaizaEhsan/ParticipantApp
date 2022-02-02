export const actionTypes = {
  REGISTER_USER_DATA: 'REGISTER_USER_DATA',
  GET_DASHBOARD_DATA: 'GET_DASHBOARD_DATA',
  GET_DASHBOARD_WIDGET_DATA: 'GET_DASHBOARD_WIDGET_DATA',
  GET_USER_APPLICATION_STATUS: 'GET_USER_APPLICATION_STATUS',
  SET_USER_INFO: 'SET_USER_INFO',
  GET_DAY_SCHEDULE_DATA: 'GET_DAY_SCHEDULE_DATA',
  SET_DAY_SCHEDULE_DATA_EVENT: 'SET_DAY_SCHEDULE_DATA_EVENT',
  SET_TIMELINE_DATA: 'SET_TIMELINE_DATA',
  SET_USERDATA: 'SET_USERDATA',
  GET_CONCISE_MONTHLY_SCHEDULE_DATA: 'GET_CONCISE_MONTHLY_SCHEDULE_DATA',
  GET_NOTIFICATIONS: 'GET_NOTIFICATIONS',
  GET_NOTIFICATIONS_DATA: 'GET_NOTIFICATIONS_DATA',
  GET_RESOURCES_DATA: 'GET_RESOURCES_DATA',
  GET_DOCUMENTS_DATA: 'GET_DOCUMENTS_DATA',
  SET_DOCUMENTS_DATA: 'SET_DOCUMENTS_DATA',
  GET_PAYMENT_STATUS: 'GET_PAYMENT_STATUS',
  GET_PAYMENT_HISTORY: 'GET_PAYMENT_HISTORY',
  GET_FILE_NAMES: 'GET_FILE_NAMES',
  DEVICE_TOKEN: 'DEVICE_TOKEN',
  BILLING_INFO_DATA: 'BILLING_INFO_DATA',
  GET_CHECK_IN_QUESTION_DATA: 'GET_CHECK_IN_QUESTION_DATA',
  GET_CURRENT_CHECK_INS_DATA: 'GET_CURRENT_CHECK_INS_DATA',
  OPEN_DOCUMENT_INFO: 'OPEN_DOCUMENT_INFO',
  OPEN_RESOURCE_INFO: 'OPEN_RESOURCE_INFO',
  DELETE_DOCUMENT_ID_STATUS: 'DELETE_DOCUMENT_ID_STATUS',
  SET_DASHBOARD_HEADER: 'SET_DASHBOARD_HEADER',
  SET_DOCUMENT_HEADER: 'SET_DOCUMENT_HEADER',
  SET_RESOURCE_HEADER: 'SET_RESOURCE_HEADER',
  SET_NOTIFICATION_HEADER: 'SET_NOTIFICATION_HEADER',
  ADD_EVENT_DETAILS: 'ADD_EVENT_DETAILS',
  EMPTY_EVENT_DETAILS: 'EMPTY_EVENT_DETAILS',
  OPEN_MODEL_NEWEVENTS: 'OPEN_MODEL_NEWEVENTS',
  OPEN_MODEL_NEWEVENTS_STATE: 'OPEN_MODEL_NEWEVENTS_STATE',
  ADD_ATTACHMENT_PRESS_STATE: 'ADD_ATTACHMENT_PRESS_STATE',
  NEW_EVENT_DATA: 'NEW_EVENT_DATA',
  SCHEDULE_REQUEST_DATA: 'SCHEDULE_REQUEST_DATA',
  ADD_SCHEDULE_REQUEST_ATTACHMENT: 'ADD_SCHEDULE_REQUEST_ATTACHMENT',
  EMPTY_SCHEDULE_REQUEST_ATTACHMENT: 'EMPTY_SCHEDULE_REQUEST_ATTACHMENT',
  RNSCHEDULE: 'RNSCHEDULE',
  DATE_CHANGE_FROM_MONTHLY: 'DATE_CHANGE_FROM_MONTHLY',
  DATE_CHANGE_FROM_WEEKLY: 'DATE_CHANGE_FROM_WEEKLY',
  SELECTED_EVENT_TYPE: 'SELECTED_EVENT_TYPE',
  PAYMENT_STATUS_URL: 'PAYMENT_STATUS_URL'
};

export const registerUserData = result => ({
  type: actionTypes.REGISTER_USER_DATA,
  payload: { result }
});

export const getDashboardData = result => ({
  type: actionTypes.GET_DASHBOARD_DATA,
  payload: { result }
});

export const getDashboardWidgetData = result => ({
  type: actionTypes.GET_DASHBOARD_WIDGET_DATA,
  payload: { result }
});

export const getUserApplicationStatus = result => ({
  type: actionTypes.GET_USER_APPLICATION_STATUS,
  payload: { result }
});

export const setUserInfo = result => ({
  type: actionTypes.SET_USER_INFO,
  payload: { result }
});

export const getDayScheduleData = result => ({
  type: actionTypes.GET_DAY_SCHEDULE_DATA,
  payload: { result }
});

export const setDayScheduleDataEvent = result => ({
  type: actionTypes.SET_DAY_SCHEDULE_DATA_EVENT,
  payload: { result }
});

export const setTimelineData = result => ({
  type: actionTypes.SET_TIMELINE_DATA,
  payload: { result }
});

export const setUserData = result => ({
  type: actionTypes.SET_USERDATA,
  payload: { result }
});

export const getConciseMonthlyScheduleData = result => ({
  type: actionTypes.GET_CONCISE_MONTHLY_SCHEDULE_DATA,
  payload: { result }
});

export const getNotifications = result => ({
  type: actionTypes.GET_NOTIFICATIONS,
  payload: { result }
});

export const getNotificationsData = result => ({
  type: actionTypes.GET_NOTIFICATIONS_DATA,
  payload: { result }
});

export const getResourcesData = result => ({
  type: actionTypes.GET_RESOURCES_DATA,
  payload: { result }
});

export const getDocumentsData = result => ({
  type: actionTypes.GET_DOCUMENTS_DATA,
  payload: { result }
});

export const setDocumentsData = result => ({
  type: actionTypes.SET_DOCUMENTS_DATA,
  payload: { result }
});

export const getPaymentStatus = result => ({
  type: actionTypes.GET_PAYMENT_STATUS,
  payload: { result }
});

export const getPaymentHistory = result => ({
  type: actionTypes.GET_PAYMENT_HISTORY,
  payload: { result }
});

export const getFileNames = result => ({
  type: actionTypes.GET_FILE_NAMES,
  payload: { result }
});

export const deviceToken = result => ({
  type: actionTypes.DEVICE_TOKEN,
  payload: { result }
});

export const billingInfoData = result => ({
  type: actionTypes.BILLING_INFO_DATA,
  payload: { result }
});

export const getCheckInQuestionData = result => ({
  type: actionTypes.GET_CHECK_IN_QUESTION_DATA,
  payload: { result }
});

export const getCurrentCheckInsData = result => ({
  type: actionTypes.GET_CURRENT_CHECK_INS_DATA,
  payload: { result }
});

export const openDocumentInfo = result => ({
  type: actionTypes.OPEN_DOCUMENT_INFO,
  payload: { result }
});

export const openResourceInfo = result => ({
  type: actionTypes.OPEN_RESOURCE_INFO,
  payload: { result }
});

export const deleteDocumentIdStatus = result => ({
  type: actionTypes.DELETE_DOCUMENT_ID_STATUS,
  payload: { result }
});

export const setDashboardHeader = result => ({
  type: actionTypes.SET_DASHBOARD_HEADER,
  payload: { result }
});

export const setDocumentHeader = result => ({
  type: actionTypes.SET_DOCUMENT_HEADER,
  payload: { result }
});

export const setResourceHeader = result => ({
  type: actionTypes.SET_RESOURCE_HEADER,
  payload: { result }
});

export const setNotificationHeader = result => ({
  type: actionTypes.SET_NOTIFICATION_HEADER,
  payload: { result }
});

export const addEventDetails = result => ({
  type: actionTypes.ADD_EVENT_DETAILS,
  payload: { result }
});

export const emptyEventDetails = result => ({
  type: actionTypes.EMPTY_EVENT_DETAILS,
  payload: { result }
});

export const openModelNewEvents = result => ({
  type: actionTypes.OPEN_MODEL_NEWEVENTS,
  payload: { result }
});

export const openModelNewEventsState = result => ({
  type: actionTypes.OPEN_MODEL_NEWEVENTS_STATE,
  payload: { result }
});

export const addAttachmentPressState = result => ({
  type: actionTypes.ADD_ATTACHMENT_PRESS_STATE,
  payload: { result }
});

export const newEventData = result => ({
  type: actionTypes.NEW_EVENT_DATA,
  payload: { result }
});

export const scheduleRequestData = result => ({
  type: actionTypes.SCHEDULE_REQUEST_DATA,
  payload: { result }
});

export const addScheduleRequestAttachment = result => ({
  type: actionTypes.ADD_SCHEDULE_REQUEST_ATTACHMENT,
  payload: { result }
});

export const emptyScheduleRequestAttachment = result => ({
  type: actionTypes.EMPTY_SCHEDULE_REQUEST_ATTACHMENT,
  payload: { result }
});

export const rnSchedule = result => ({
  type: actionTypes.RNSCHEDULE,
  payload: { result }
});

export const dateChangeFromMonthly = result => ({
  type: actionTypes.DATE_CHANGE_FROM_MONTHLY,
  payload: { result }
});

export const dateChangeFromWeekly = result => ({
  type: actionTypes.DATE_CHANGE_FROM_WEEKLY,
  payload: { result }
});

export const selectedEventType = result => ({
  type: actionTypes.SELECTED_EVENT_TYPE,
  payload: { result }
});

export const paymentStatusUrl = result => ({
  type: actionTypes.PAYMENT_STATUS_URL,
  payload: { result }
});
