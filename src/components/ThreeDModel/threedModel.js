import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Asset } from "expo-asset";
import { Renderer, TextureLoader } from "expo-three";
import * as React from "react";
import {
  AmbientLight,
  Fog,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from "three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";

const textures = {
  "dummy.obj": require("./testdummy1.obj"),
  // 'r2-d2.mtl': require('./textures/'),
  "brown_eye.png": require("./textures/brown_eye.png"),
  "female_casualsuit01_diffuse.png": require("./textures/female_casualsuit01_diffuse.png"),
  "female_casualsuit01_normal.png": require("./textures/female_casualsuit01_normal.png"),
  "male_casualsuit01_diffuse.png": require("./textures/male_casualsuit01_diffuse.png"),
  "male_casualsuit01_normal.png": require("./textures/male_casualsuit01_normal.png"),
  "male_casualsuit02_diffuse.png": require("./textures/male_casualsuit02_diffuse.png"),
  "male_casualsuit02_normal.png": require("./textures/male_casualsuit02_normal.png"),
};
export default function ThreeDTwo() {
  let timeout;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const degreesToradians = (degrees) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={async (gl) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        const sceneColor = 668096;

        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);
        renderer.setClearColor(0x668096);

        const camera = new PerspectiveCamera(20, width / height, 0.01, 1000);
        camera.position.set(0, 6, 5);

        const scene = new Scene();
        scene.fog = new Fog(sceneColor, 1, 10000);

        const ambientLight = new AmbientLight(0x101010);
        scene.add(ambientLight);

        const pointLight = new PointLight(0xffffff, 2, 1000, 1);
        pointLight.position.set(0, 200, 200);
        scene.add(pointLight);

        const spotLight = new SpotLight(0xffffff, 0.5);
        spotLight.position.set(0, 500, 100);
        spotLight.lookAt(scene.position);
        scene.add(spotLight);

        // LOAD OBJ FILE
        const asset = Asset.fromModule(require("./testdummy1.obj"));
        await asset.downloadAsync();

        // LOAD TEXTURS
        // Create an Asset from a resource
        const textureImages = Asset.fromModule(textures["female_casualsuit01_diffuse.png"]);

        await textureImages.downloadAsync();
        // This texture will be immediately ready but it'll load asynchronously
        const texture = new TextureLoader().load(textureImages.localUri);
        // await Asset.loadAsync([
        //   textures["brown_eye.png"],
        //   textures["female_casualsuit01_diffuse.png"],
        //   textures["female_casualsuit01_normal.png"],
        //   textures["male_casualsuit01_diffuse.png"],
        //   textures["male_casualsuit01_normal.png"],
        //   textures["male_casualsuit02_diffuse.png"],
        //   textures["male_casualsuit02_normal.png"],
        // ]);

        // instantiate a loader
        const loader = new OBJLoader();

        // load a resource
        loader.load(
          // resource URL
          asset.localUri,
          // called when resource is loaded
          function (object) {
            object.scale.set(0.065, 0.065, 0.065);
            scene.add(object);
            camera.lookAt(object.position);
            //rotate my obj file
            function rotateObject(
              object,
              degreeX = 0,
              degreeY = 0,
              degreeZ = 0
            ) {
              object.rotateX(degreesToradians(degreeX));
              object.rotateY(degreesToradians(degreeY));
              object.rotateZ(degreesToradians(degreeZ));
              // object.rotateX(THREE.Math.degToRad(degreeX));
              // object.rotateY(THREE.Math.degToRad(degreeY));
              // object.rotateZ(THREE.Math.degToRad(degreeZ));
            }

            // object.rotateZ(150)
            // usage:
            // rotateObject(object, 0, 0, 0);

            //animate rotation
            function update() {
              object.rotation.y += 0.008;
            }
            const render = () => {
              timeout = requestAnimationFrame(render);
              update();
              renderer.render(scene, camera);
              gl.endFrameEXP();
            };
            render();
          },

          // called when loading is in progresses
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          // called when loading has errors
          function (error) {
            console.log(error);
          }
        );
      }}
    />
  );
}
