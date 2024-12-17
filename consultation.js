document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const chartContainer = document.getElementById('chart-container');

    window.showForm = function () {
        form.classList.toggle('active');
    };

    // --- Three.js Configuration ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, chartContainer.offsetWidth / chartContainer.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({alpha: true});

    renderer.setSize(chartContainer.offsetWidth, chartContainer.offsetHeight);
    chartContainer.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x3498db, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 50;

    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
    window.addEventListener('resize', () => {
        camera.aspect = chartContainer.offsetWidth / chartContainer.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(chartContainer.offsetWidth, chartContainer.offsetHeight);
    });
});