import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';

const modelUrl = './assets3D/star_wars_-_logo/scene.gltf';

let gltf; // Déclarer la variable gltf en dehors de la fonction loader.load()

init();

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    //const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/3, window.innerHeight/3);
    document.body.appendChild(renderer.domElement);

    // Ajouter des lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const dlLight1 = new THREE.DirectionalLight(0x0000FF, 0.7);
    dlLight1.position.set( 45, 45, 45 );
    const dLightHelper = new THREE.DirectionalLightHelper( dlLight1, 5 );

    const dlLight2 = new THREE.DirectionalLight(0xFF0000, 0.5);
    dlLight2.position.set( -45, 45, 45 );
    const dLightHelper2 = new THREE.DirectionalLightHelper( dlLight2, 5 );

    scene.add(ambientLight, dlLight1, dlLight2);

    
    const loader = new GLTFLoader();
    loader.load(modelUrl, function (gltfObject) { // Utiliser une autre variable (gltfObject) pour stocker l'objet gltf chargé
        
        gltf = gltfObject;
        const mesh = new THREE.Mesh(gltf.scene.children[0].geometry);
        const material = new THREE.MeshStandardMaterial({
            metalness: 1,
            roughness: 0.5,
        });
        mesh.material = material;
        scene.add(mesh, gltf.scene);

        dlLight1.lookAt(mesh.position);
        dlLight2.lookAt(mesh.position);
    });


    camera.position.z = 4;
    camera.position.y = 1;
    camera.position.x = -1;
    
    const animate = function () {
        requestAnimationFrame(animate);
        // Mettre à jour la position ou la rotation du modèle en fonction de la position actuelle de défilement
        const scrollPosition = window.scrollY;
        if (gltf) { // Vérifier si gltf est défini avant de l'utiliser
            gltf.scene.rotation.y = scrollPosition * 0.001;
        }
        renderer.render(scene, camera);
    };
    
    animate();
    
    // Ajouter un écouteur d'événements de défilement
    window.addEventListener('scroll', function () {
        requestAnimationFrame(animate);
    });
}
