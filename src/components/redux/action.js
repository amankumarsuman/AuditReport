import { AUDIT_REPORT_TYPES } from "./type";

export const setAuditForm = (payload) => {
  return {
    type: AUDIT_REPORT_TYPES.SET_AUDIT_REPORT,
    payload: payload,
  };
};
export const individualPublisherData = (payload) => {
  return {
    type: AUDIT_REPORT_TYPES.SET_AUDIT_REPORT_INDIVIDUAL_DATA,
    payload: payload,
  };
};
export const individualPublisherDataEditedSuccessfully = (payload) => {
  return {
    type: AUDIT_REPORT_TYPES.INDIVIDUAL_PUBLISHER_DATA_EDITED_STATUS,
    payload: payload,
  };
};
export const renderAddPublisherForm = (payload) => {
  return {
    type: AUDIT_REPORT_TYPES.RENDER_ADD_PUBLISHER_FORM,
    payload: payload,
  };
};
export const userLoggedIn = (payload) => {
  return {
    type: AUDIT_REPORT_TYPES.USER_LOGIN_STATUS,
    payload: payload,
  };
};

export const addImages = (images) => ({
  type: AUDIT_REPORT_TYPES.ADD_IMAGES,

  payload: images,
});
