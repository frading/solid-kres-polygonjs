import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1685184817231",
  root: "1685184817231",
  nodes: {
    geo1: "1685184835409",
    "geo1/MAT": "1685184817231",
    ground: "1685184835409",
    COP: "1685184817231",
    lights: "1685184817231",
    cameras: "1685184817231",
    "cameras/cameraControls1": "1685184817231",
  },
  shaders: {},
  jsFunctionBodies: {},
};

export const loadSceneData_simple_sphere = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "simple_sphere",
    urlPrefix: sceneDataRoot + "/simple_sphere",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
