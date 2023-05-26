import { createLocalStore } from 'krestianstvo'
import * as THREE from 'three'

import './main'

export default function App(props) {
  const [local, setLocal] = createLocalStore(
    {
      data: {
        type: 'Node',
        properties: {
          ticking: false,
          initialize: false
        },
      },
    },
    props
  );



  const handleClick = (data) => {
    console.log(data);
  }
  const moveBall = (data) => {
    console.log(data[3].x + '-' + data[3].y + '-' + data[3].z);
    //polygonjs scene
    const pscene = window.loadedData.scene
    //threejs scene
    const tscene = pscene.threejsScene()

    const player = tscene.getObjectByName('physicsPlayer1')
    //pscene.node('/geo1/physicsWorld1').flags.bypass.set(true)
    //pscene.node('/geo1/physicsPlayer1').p.physicsActivated.set(0)
    player.matrixAutoUpdate=true
    player.position.set(data[3].x,data[3].y,data[3].z)    
    player.updateMatrix()
    player.matrixAutoUpdate=false
    //pscene.node('/geo1/physicsWorld1').flags.bypass.set(false)
    //pscene.node('/geo1/physicsPlayer1').p.physicsActivated.set(1)
  }

  props.selo.createAction(props.nodeID, 'handleClick', handleClick)
  props.selo.createAction(props.nodeID, 'moveBall', moveBall)  

  window.sendExtMsg = (operation) =>{
    props.selo.sendExtMsg({
      id: props.nodeID,      
      params: [props.nodeID,props.selo.clientSeloID,operation,window.loadedData.scene.threejsScene().getObjectByName('physicsPlayer1').position],
      msg: operation
    });
  }


  
  return (
    // the app gui goes below
    <>    
     <button onClick={[window.sendExtMsg, 'handleClick']}>handleClick</button> 
    </>
  );
}