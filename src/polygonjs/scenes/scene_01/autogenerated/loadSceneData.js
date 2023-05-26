import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1685072548758",
  root: "1684885578404",
  nodes: {
    geo1: "1685017215080",
    "geo1/MAT": "1684980986564",
    "geo1/MAT/meshStandardBuilder_BLOCKS": "1685009735922",
    "geo1/MAT/meshStandardBuilder_GROUND": "1685009735922",
    "geo1/MAT/meshStandardBuilder_PLAYER": "1685009735922",
    "geo1/cameraControls_PLAYER1": "1684980986564",
    "geo1/physicsPlayer1": "1685072548758",
    "geo1/physicsWorld1": "1685072548758",
    lights: "1684980986564",
    cameras: "1684885578404",
    "cameras/cameraControls1": "1684980986564",
    env: "1684980986564",
    "env/MAT": "1684980986564",
    "env/MAT/meshLambertBuilder_INSTANCES": "1685009735922",
  },
  shaders: {
    "/geo1/MAT/meshStandardBuilder_BLOCKS": {
      vertex: "1684980986564",
      fragment: "1684980986564",
      "customDepthMaterial.vertex": "1684980986564",
      "customDepthMaterial.fragment": "1684980986564",
      "customDistanceMaterial.vertex": "1684980986564",
      "customDistanceMaterial.fragment": "1684980986564",
      "customDepthDOFMaterial.vertex": "1684980986564",
      "customDepthDOFMaterial.fragment": "1684980986564",
    },
    "/geo1/MAT/meshStandardBuilder_GROUND": {
      vertex: "1684980986564",
      fragment: "1684980986564",
      "customDepthMaterial.vertex": "1684980986564",
      "customDepthMaterial.fragment": "1684980986564",
      "customDistanceMaterial.vertex": "1684980986564",
      "customDistanceMaterial.fragment": "1684980986564",
      "customDepthDOFMaterial.vertex": "1684980986564",
      "customDepthDOFMaterial.fragment": "1684980986564",
    },
    "/geo1/MAT/meshStandardBuilder_PLAYER": {
      vertex: "1684980986564",
      fragment: "1684980986564",
      "customDepthMaterial.vertex": "1684980986564",
      "customDepthMaterial.fragment": "1684980986564",
      "customDistanceMaterial.vertex": "1684980986564",
      "customDistanceMaterial.fragment": "1684980986564",
      "customDepthDOFMaterial.vertex": "1684980986564",
      "customDepthDOFMaterial.fragment": "1684980986564",
    },
    "/env/MAT/meshLambertBuilder_INSTANCES": {
      vertex: "1684980986564",
      fragment: "1684980986564",
      "customDepthMaterial.vertex": "1684980986564",
      "customDepthMaterial.fragment": "1684980986564",
      "customDistanceMaterial.vertex": "1684980986564",
      "customDistanceMaterial.fragment": "1684980986564",
      "customDepthDOFMaterial.vertex": "1684980986564",
      "customDepthDOFMaterial.fragment": "1684980986564",
    },
  },
  jsFunctionBodies: {
    "/geo1/physicsPlayer1": "1685072548758",
    "/geo1/physicsWorld1": "1685072548758",
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
