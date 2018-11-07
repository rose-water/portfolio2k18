// -----------------------------------------------------
// adapted from https://codepen.io/farisk/pen/vrbzwL?editors=0010
// -----------------------------------------------------
var container;
var camera, scene, renderer;
var cube;

init();
animate();

// -----------------------------------------------------
function init() {
  setupRenderer();
  setupCamera();
  setupScene();

  window.addEventListener('resize', onWindowResize, false);
}

// -----------------------------------------------------
function setupCamera() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
}

// -----------------------------------------------------
function setupScene() {
  scene = new THREE.Scene();

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x2980b9, wireframe: true } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
}

// -----------------------------------------------------
function setupRenderer() {
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas'),
    antialias: true,
    alpha: true
  });
  // renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// -----------------------------------------------------
function update() {
  cube.rotation.y += 0.005;
	cube.rotation.x += 0.001;
}

// -----------------------------------------------------
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// -----------------------------------------------------
function animate() {
  update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

// -----------------------------------------------------