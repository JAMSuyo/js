// creating the scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 30;

// box geometry
const boxGeometry = new THREE.BoxGeometry( 5, 5, 5 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0xffa38e } );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( cube );

cube.position.x = 20;
cube.position.y = 10;


// cone geometry
const coneGeometry = new THREE.ConeGeometry( 5, 10, 32 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0xc6ffde} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial ); 
scene.add( cone );

cone.position.x = -20;
cone.position.y = -10;


// cylinder geometry
const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 8, 8 ); 
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffc6e5} ); 
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial ); 
scene.add( cylinder );

cylinder.position.x = 20;
cylinder.position.y = -10;


// sphere geometry
const sphereGeometry = new THREE.SphereGeometry( 6 , 18, 18 ); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xc4cff2 } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); 
scene.add( sphere );

sphere.position.x = -20;
sphere.position.y = 10;

// torus geometry
const torusGeometry = new THREE.TorusGeometry( 5, 1, 12, 48 ); 
const torusMaterial = new THREE.MeshBasicMaterial( { color: 0x678947 } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial ); 
scene.add( torus );



// animating
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cone.rotation.x += 0.02;
    cone.rotation.y += 0.02;
    cone.rotation.z += 0.02;

    cylinder.rotation.x += 0.03;
    cylinder.rotation.z += 0.03;

    sphere.rotation.x += 0.04;
    sphere.rotation.y += 0.04;

    torus.rotation.x += 0.05;
    torus.rotation.y += 0.05;
    torus.rotation.z += 0.05;
    

}
animate();