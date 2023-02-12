import { AUDIT_REPORT_TYPES } from "./type";

export const setAuditForm = (payload) => {
    return {
      type: AUDIT_REPORT_TYPES.SET_AUDIT_REPORT,
      payload: payload,
    };
  };