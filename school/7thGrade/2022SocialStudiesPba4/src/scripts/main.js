/**
 * @copyright
 * Copyright (c) 2022 Ehan Ahamed, All Rights Reserved.
 */

/**
 * @author
 * Programmed by Ehan Ahamed
 */

/**
 * @credits
 * Created using the ThreeJS Rendering Library by MrDoob and contributors
 * Planet and Background Textures taken from NASA
 * Project site hosted on Netlify
 * Project site SSL certificate issued by Let's Encrypt
 * Project source code hosted on GitHub
 * Site domain bought from Google Domains
 */

import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@0.141.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#viewport");
const renderer = new THREE.WebGLRenderer({ canvas });

const camera = new THREE.PerspectiveCamera(
  45,
  canvas.clientWidth / canvas.clientHeight,
  0.05,
  1000
);
camera.position.set(150, 0, 150);
camera.up.set(0, 1, 0);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 250;

controls.update();

scene.background = new THREE.Color(0xffffff);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  "/src/assets/textures/stars.jpg",
  "/src/assets/textures/stars.jpg",
  "/src/assets/textures/stars.jpg",
  "/src/assets/textures/stars.jpg",
  "/src/assets/textures/stars.jpg",
  "/src/assets/textures/stars.jpg",
]);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 5, 0, 0);
pointLight.power = 10;
scene.add(pointLight);

const textureLoader = new THREE.TextureLoader();
const sunGeometry = new THREE.SphereGeometry(15, 32, 16);
const sunMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load("/src/assets/textures/sun.jpg"),
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.rotation.set(0, 0, 0);
sun.position.set(0, 0, 0);
scene.add(sun);

const mercuryGeometry = new THREE.SphereGeometry(0.75, 32, 16);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/mercury.jpg"),
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.rotation.set(0, 0, 0);
mercury.position.set(0, 0, 30);
scene.add(mercury);

const venusGeometry = new THREE.SphereGeometry(2.25, 32, 16);
const venusMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/venus.jpg"),
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.rotation.set(0, 0, 0);
venus.position.set(0, 0, 40);
scene.add(venus);

const earthGeometry = new THREE.SphereGeometry(2.5, 32, 16);
const earthMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/earth.jpg"),
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.rotation.set(0, 0, 0);
earth.position.set(0, 0, 55);
scene.add(earth);

const marsGeometry = new THREE.SphereGeometry(1.5, 32, 16);
const marsMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/mars.jpg"),
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.rotation.set(0, 0, 0);
mars.position.set(0, 0, 75);
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(6, 32, 16);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/jupiter.jpg"),
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.rotation.set(0, 0, 0);
jupiter.position.set(0, 0, 100);
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(3.5, 32, 16);
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/saturn.jpg"),
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.rotation.set(0, 0, 0);
saturn.position.set(0, 0, 125);
scene.add(saturn);

const saturnRingGeometry = new THREE.RingGeometry(4.5, 7, 32, 1);
const saturnRingMaterial = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/src/assets/textures/saturnRing.png"),
  side: THREE.DoubleSide,
});
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRing.rotation.set(-90, 0, 0);
saturnRing.position.set(0, 0, 125);
scene.add(saturnRing);

function render(time) {
  let orbitTime = time * 0.0001;

  mercury.position.set(
    Math.sin(orbitTime * 2) * 30,
    0,
    Math.cos(orbitTime * 2) * 30
  );
  mercury.rotation.set(0, orbitTime * 15, 0);

  venus.position.set(
    Math.sin(200 + orbitTime * 0.5) * 40,
    0,
    Math.cos(200 + orbitTime * 0.5) * 40
  );
  venus.rotation.set(0, orbitTime * 25, 0);

  earth.position.set(
    Math.sin(orbitTime * 0.5) * 55,
    0,
    Math.cos(orbitTime * 0.5) * 55
  );
  earth.rotation.set(0, orbitTime * 25, 0);

  mars.position.set(
    Math.sin(orbitTime * 0.25) * 75,
    0,
    Math.cos(orbitTime * 0.25) * 75
  );
  mars.rotation.set(0, orbitTime * 25, 0);

  jupiter.position.set(
    Math.sin(150 + orbitTime * 0.05) * 100,
    0,
    Math.cos(150 + orbitTime * 0.05) * 100
  );
  jupiter.rotation.set(0, orbitTime * 35, 0);

  saturn.position.set(
    Math.sin(orbitTime * 0.05) * 125,
    0,
    Math.cos(orbitTime * 0.05) * 125
  );
  saturn.rotation.set(0, orbitTime * 35, 0);
  saturnRing.position.set(
    Math.sin(orbitTime * 0.05) * 125,
    0,
    Math.cos(orbitTime * 0.05) * 125
  );

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  controls.update();

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

requestAnimationFrame(render);
