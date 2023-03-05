import { useState } from 'react'
import {Switch, Popconfirm} from 'antd'
import './App.css'

function App() {
  const [switchChecked, setSwitchChecked] = useState(false)

  return (
    <div className="App">
      <Popconfirm 
        title= 'Are you sure to change the switch state?' 
        onConfirm={()=>{
          setSwitchChecked((pre) => !pre);
      }}>
        <Switch checked={switchChecked}>

        </Switch>
      </Popconfirm>
    </div>
  )
}

export default App
