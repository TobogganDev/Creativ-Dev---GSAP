import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';

const modelUrl = './assets3D/star_wars_-_logo/scene.gltf';

let gltf; // Déclarer la variable gltf en dehors de la fonction loader.load()

init();

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth/3, window.innerHeight/3);
    document.body.appendChild(renderer.domElement);
    
    const loader = new GLTFLoader();
    loader.load(modelUrl, function (gltfObject) { // Utiliser une autre variable (gltfObject) pour stocker l'objet gltf chargé
        gltf = gltfObject; // Affecter l'objet gltf chargé à la variable gltf globale
        scene.add(gltf.scene);
    });
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 4;
    camera.position.y = 1;
    
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
