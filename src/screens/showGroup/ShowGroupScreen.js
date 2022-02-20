import { Card } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';
import showGroupColumns from '../../utils/ShowGroupColumnNames';
import { getDummyGroups } from '../../utils/Utils';
import styles from './ShowGroupScreenStyles'

const ShowGroupScreen =()=>{

    const [rows,setRows] = useState(getDummyGroups()) 
    return(
        <div style={styles.parentView}>
           <Card style={styles.gridView}>
          <DataGrid
          
            rows={rows}
            columns ={showGroupColumns}
            pageSize={10}
            checkboxSelection
            disableColumnMenu
            disableSelectionOnClick
          />
            </Card>
            </div>
    )
}

export default ShowGroupScreen;
