import "./style.css";

import { fetchSceneAndMount_scene_01 } from "./polygonjs/scenes/scene_01/autogenerated/fetchSceneAndMount";
window.loadedData = await fetchSceneAndMount_scene_01({
	domElement: "app",
});

console.log('-------------')
//console.log(window.loadedData.scene.threejsScene().getObjectByName('physicsPlayer1'))
console.log('-------------')