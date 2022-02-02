import { actionTypes } from '../Actions/index';

const initialState = {
  registerUserData: [],
  getDashboardData: [],
  getDashboardWidgetData: [],
  getUserApplicationStatus: [],
  setUserInfo: [],
  getDayScheduleData: [],
  setDayScheduleDataEvent: [],
  setTimelineData: [],
  setUserData: [],
  getConciseMonthlyScheduleData: [],
  getNotifications: [],
  getNotificationsData: [],
  getResourcesData: [],
  getDocumentsData: [],
  setDocumentsData: [],
  getPaymentStatus: [],
  getPaymentHistory: [],
  getFileNames: [],
  deviceToken: [],
  billingInfoData: [],
  getCheckInQuestionData: [],
  getCurrentCheckInsData: [],
  openDocumentInfo: [],
  openResourceInfo: [],
  deleteDocumentIdStatus: [],
  setDashboardHeader: [],
  setDocumentHeader: [],
  setResourceHeader: [],
  setNotificationHeader: [],
  addEventDetails: [],
  emptyEventDetails: [],
  openModelNewEvents: [],
  openModelNewEventsState: [],
  addAttachmentPressState: [],
  newEventData: [],
  addScheduleRequestAttachment: [],
  emptyScheduleRequestAttachment: [],
  rnSchedule: [],
  dateChangeFromMonthly: [],
  dateChangeFromWeekly: [],
  selectedEventType: [],
  paymentStatusUrl: []
};

const rootReducer = (state = initialState, { payload, type } = {}) => {
  switch (type) {
    case actionTypes.REGISTER_USER_DATA:
      return { ...state, registerUserData: payload.result };
    case actionTypes.GET_DASHBOARD_DATA:
      return { ...state, getDashboardData: payload.result.data };
    case actionTypes.GET_DASHBOARD_WIDGET_DATA:
      return { ...state, getDashboardWidgetData: payload.result };
    case actionTypes.GET_USER_APPLICATION_STATUS:
      return { ...state, getUserApplicationStatus: payload.result };
    case actionTypes.SET_USER_INFO:
      return { ...state, setUserInfo: payload };
    case actionTypes.GET_DAY_SCHEDULE_DATA:
      return { ...state, getDayScheduleData: payload.result };
    case actionTypes.SET_DAY_SCHEDULE_DATA_EVENT:
      return { ...state, setDayScheduleDataEvent: payload.result };
    case actionTypes.TIMELINE_DATA:
      return { ...state, timelineData: [...state.timelineData, payload] };
    case actionTypes.SET_USERDATA:
      return { ...state, userData: payload.result };
    case actionTypes.GET_CONCISE_MONTHLY_SCHEDULE_DATA:
      return { ...state, getConciseMonthlyScheduleData: payload.result };
    case actionTypes.GET_NOTIFICATIONS:
      return { ...state, getNotifications: payload.result };
    case actionTypes.GET_NOTIFICATIONS_DATA:
      return { ...state, getNotificationsData: payload.result };
    case actionTypes.GET_RESOURCES_DATA:
      return { ...state, getResourcesData: payload.result };
    case actionTypes.GET_DOCUMENTS_DATA:
      return { ...state, getDocumentsData: payload.result };
    case actionTypes.SET_DOCUMENTS_DATA:
      return { ...state, setDocumentsData: [...state.setDocumentsData, payload] };
    case actionTypes.GET_PAYMENT_STATUS:
      return { ...state, getPaymentStatus: payload.result };
    case actionTypes.GET_PAYMENT_HISTORY:
      return { ...state, getPaymentHistory: payload.result };
    case actionTypes.GET_FILE_NAMES:
      return { ...state, getFileNames: payload.result };
    case actionTypes.DEVICE_TOKEN:
      return { ...state, deviceToken: payload };
    case actionTypes.BILLING_INFO_DATA:
      return { ...state, billingInfoData: payload.result };
    case actionTypes.GET_CHECK_IN_QUESTION_DATA:
      return { ...state, getCheckInQuestionData: payload.result };
    case actionTypes.GET_CURRENT_CHECK_INS_DATA:
      return { ...state, getCurrentCheckInsData: payload.result };
    case actionTypes.OPEN_DOCUMENT_INFO:
      return { ...state, openDocumentInfo: payload.result };
    case actionTypes.OPEN_RESOURCE_INFO:
      return { ...state, openResourceInfo: payload.result };
    case actionTypes.DELETE_DOCUMENT_ID_STATUS:
      return { ...state, deleteDocumentIdStatus: payload.result };
    case actionTypes.SET_DASHBOARD_HEADER:
      return { ...state, setDashboardHeader: payload.result };
    case actionTypes.SET_DOCUMENT_HEADER:
      return { ...state, setDocumentHeader: payload.result };
    case actionTypes.SET_RESOURCE_HEADER:
      return { ...state, setResourceHeader: payload.result };
    case actionTypes.SET_NOTIFICATION_HEADER:
      return { ...state, setNotificationHeader: payload.result };
    case actionTypes.ADD_EVENT_DETAILS:
      return { ...state, addEventDetails: [...state.addEventDetails, payload.result] };
    case actionTypes.EMPTY_EVENT_DETAILS:
      return { ...state, addEventDetails: [] };
    case actionTypes.OPEN_MODEL_NEWEVENTS:
      return { ...state, openModelNewEvents: payload.result };
    case actionTypes.OPEN_MODEL_NEWEVENTS_STATE:
      return { ...state, openModelNewEventsState: payload.result };
    case actionTypes.ADD_ATTACHMENT_PRESS_STATE:
      return { ...state, addAttachmentPressState: payload.result };
    case actionTypes.NEW_EVENT_DATA:
      return { ...state, newEventData: payload.result };
    case actionTypes.SCHEDULE_REQUEST_DATA:
      return { ...state, scheduleRequestData: payload.result };
    case actionTypes.ADD_SCHEDULE_REQUEST_ATTACHMENT:
      return { ...state, addScheduleRequestAttachment: [...state.addScheduleRequestAttachment, payload.result] };
    case actionTypes.EMPTY_SCHEDULE_REQUEST_ATTACHMENT:
      return { ...state, addScheduleRequestAttachment: [] };
    case actionTypes.RNSCHEDULE:
      return { ...state, rnSchedule: payload.result };
    case actionTypes.DATE_CHANGE_FROM_MONTHLY:
      return { ...state, dateChangeFromMonthly: payload.result };
    case actionTypes.DATE_CHANGE_FROM_WEEKLY:
      return { ...state, dateChangeFromWeekly: payload.result };
    case actionTypes.SELECTED_EVENT_TYPE:
      return { ...state, selectedEventType: payload.result };
    case actionTypes.PAYMENT_STATUS_URL:
      return { ...state, paymentStatusUrl: payload.result };
    default: return state;
  }
};

export default rootReducer;
