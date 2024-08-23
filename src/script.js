import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// canvas
const canvas = document.getElementById('canvas')


// scene
const scene = new THREE.Scene()


// axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


// 3D objects
const mesh = new THREE.Mesh(
	// new THREE.BoxGeometry(),
	new THREE.SphereGeometry(),
	new THREE.MeshBasicMaterial({
		color: 'red',
		wireframe: true
	})
)
scene.add(mesh)
mesh.position.x = -1


// camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)
// camera.lookAt(mesh.position)
camera.lookAt(new THREE.Vector3(0,0,0))


// mouse controls
const controls = new OrbitControls(camera, canvas)
controls.update()

// render 
const renderer = new THREE.WebGLRenderer({ canvas: canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)


// resize event
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// animation loop
const loop = () => {
	renderer.render(scene, camera)
	window.requestAnimationFrame(loop)
}
loop()