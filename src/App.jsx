import { createLocalStore } from 'krestianstvo'
import * as THREE from 'three'

import {loadScene} from './main'
let scene;
let player;

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

    loadScene().then((sceneAndPlayer)=>{
      scene = sceneAndPlayer.scene;
      player = sceneAndPlayer.player;
      // window.player = player;
    })

  const handleClick = (data) => {
    console.log({handleClick: data});
  }
  const moveBallInCurrentTab = ()=>{
    if(!player){
      console.warn('player object not initialized yet')
      return
    }
    player.position.y+=0.1;
    player.updateMatrix();
    sendExtMsg('moveBall')
  }
  const moveBall = (data) => {
    console.log('moveBall', data)
    console.log(data[3].x + '-' + data[3].y + '-' + data[3].z);

    if(!player){
      console.warn('player object not initialized yet')
      return
    }
    const newPosition = data[3];
    player.position.set(newPosition.x, newPosition.y, newPosition.z);
    player.updateMatrix();

    //polygonjs scene
    //const pscene = window.loadedData.scene
    //threejs scene
    //const tscene = pscene.threejsScene()

    //const player = tscene.getObjectByName('physicsPlayer1')
    //pscene.node('/geo1/physicsWorld1').flags.bypass.set(true)
    //pscene.node('/geo1/physicsPlayer1').p.physicsActivated.set(0)
    // player.matrixAutoUpdate=true
    // player.position.set(data[3].x,data[3].y,data[3].z)    
    // player.updateMatrix()
    // player.matrixAutoUpdate=false
    //pscene.node('/geo1/physicsWorld1').flags.bypass.set(false)
    //pscene.node('/geo1/physicsPlayer1').p.physicsActivated.set(1)
  }

  props.selo.createAction(props.nodeID, 'handleClick', handleClick)
  props.selo.createAction(props.nodeID, 'moveBall', moveBall)  

  const sendExtMsg = (operation) =>{
    console.log({operation});
    props.selo.sendExtMsg({
      id: props.nodeID,      
      params: [props.nodeID,props.selo.clientSeloID,operation,player.position],
      msg: operation
    });
  }


  
  return (
    // the app gui goes below
    <>    
     <button onClick={[sendExtMsg, 'handleClick']}>handleClick</button> 
     <button onClick={moveBallInCurrentTab}>moveBallInCurrentTab</button> 
     <button onClick={[sendExtMsg, 'moveBall']}>moveBall</button> 
    </>
  );
}