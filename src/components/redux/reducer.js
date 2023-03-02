import { AUDIT_REPORT_TYPES } from "./type";

const init = {
  auditData: {},
  logo: null,
  socialMediaLogo: null,
  inheritancePic: null,
  criticalImage1: null,
  criticalImage2: null,
  criticalImage3: null,
  criticalImage4: null,
  criticalImage5: null,
  criticalImage6: null,
  criticalImage7: null,
  criticalImage8: null,
  isNew: false,
  isLoading: false,
  isEdit: false,
  individualPublisherData: {},
  totalPublisher: 0,
  userLoginStatus:false
};

export const auditReportReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUDIT_REPORT_TYPES.SET_AUDIT_REPORT:
      const { data, logo, socialMediaPic, inheritancePic,
        criticalImage1,
        criticalImage2,
        criticalImage3,
        criticalImage4,
        criticalImage5,
        criticalImage6,
        criticalImage7,
        criticalImage8,
      } = payload;
console.log(socialMediaPic)
      return {
        ...state,
        auditData: data,
        logo: logo,
        socialMediaLogo: socialMediaPic,
        inheritancePic: inheritancePic,
        criticalImage1:criticalImage1,
        criticalImage2:criticalImage2,
        criticalImage3:criticalImage3,
        criticalImage4:criticalImage4,
        criticalImage5:criticalImage5,
        criticalImage6:criticalImage6,
        criticalImage7:criticalImage7,
        criticalImage8:criticalImage8
              };
    case AUDIT_REPORT_TYPES.SET_AUDIT_REPORT_INDIVIDUAL_DATA:
      //  const{data,logo,socialMediaPic,inheritancePic}=payload

      return {
        ...state,
        individualPublisherData: payload,
        isEdit: true,
      };


      case AUDIT_REPORT_TYPES.USER_LOGIN_STATUS:
      return{
...state,
userLoginStatus:payload.status
      };
    default:
      return state;
  }
};
