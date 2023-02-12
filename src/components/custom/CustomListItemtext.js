import { ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizedListText = styled(ListItemText)`
  color: grey;
  cursor:pointer;


  
   & .MuiListItemText-secondary {
                color: black;
                font-weight: bold;
                
              },
`;
