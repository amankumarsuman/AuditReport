import { AUDIT_REPORT_TYPES } from "./type";


const init={
    auditData:{},
    logo:null,
    isNew:false,
    isLoading:false,
    isEdit:false,
    individualPublisherData:{},
    totalPublisher:0
}


export const auditReportReducer = (state = init, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case AUDIT_REPORT_TYPES.SET_AUDIT_REPORT:
     const{data,logo}=payload
  
        return{
          ...state,
          auditData:data,
          logo:logo
          
        }
    
  
      
  
      default:
        return state;
    }
  };
  