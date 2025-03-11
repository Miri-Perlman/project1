import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
 
const DisplayChild=({child})=>{
    return(
<div>
<Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Hi {child.Name} !</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3> you are {child.Age} years old, and you live in {child.City}</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
</div>
    );
};
export default DisplayChild;