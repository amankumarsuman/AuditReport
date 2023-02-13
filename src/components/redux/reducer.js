import { AUDIT_REPORT_TYPES } from "./type";

const init = {
  auditData: {},
  logo: null,
  socialMediaLogo: null,
  inheritancePic: null,
  isNew: false,
  isLoading: false,
  isEdit: false,
  individualPublisherData: {},
  totalPublisher: 0,
};

export const auditReportReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUDIT_REPORT_TYPES.SET_AUDIT_REPORT:
      const { data, logo, socialMediaPic, inheritancePic } = payload;
console.log(socialMediaPic)
      return {
        ...state,
        auditData: data,
        logo: logo,
        socialMediaLogo: socialMediaPic,
        inheritancePic: inheritancePic,
      };
    case AUDIT_REPORT_TYPES.SET_AUDIT_REPORT_INDIVIDUAL_DATA:
      //  const{data,logo,socialMediaPic,inheritancePic}=payload

      return {
        ...state,
        individualPublisherData: payload,
        isEdit: true,
      };

    default:
      return state;
  }
};
