import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';
import showGroupColumns from '../../utils/ShowGroupColumnNames';
import { getDummyGroups } from '../../utils/Utils';


const ShowGroupScreen =()=>{

    const [rows,setRows] = useState(getDummyGroups()) 
    return(
        <div style={{alignItems:'center',display:'flex', justifyContent:"center"}}>
           <div style={{ height: 650, width: '80%',alignSelf:'center',marginTop:'25px'}}>
          <DataGrid
            rows={rows}
            columns ={showGroupColumns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
          />
            </div>
            </div>
    )
}

export default ShowGroupScreen;
