async function run() {
  const length = parseFloat(document.getElementById('length').value);
  const height = parseFloat(document.getElementById('height').value);

  const res = await fetch('data/rules/wall-framing.default.json');
  const rules = await res.json();

  const studSpacing = rules.studSpacingInches / 12;
  const studs = Math.ceil(length / studSpacing) + 1;

  const drywallSheets = Math.ceil((length * height) / (rules.drywallSheetWidth * rules.drywallSheetHeight));

  const screws = studs * rules.screwsPerStud + drywallSheets * rules.screwsPerSheet;

  const output = {
    studs,
    drywallSheets,
    screws
  };

  document.getElementById('output').textContent = JSON.stringify(output, null, 2);

  render2D(length, height, studs);
  render3D(length, height);
}

function render2D(length, height, studs) {
  const svg = document.getElementById('plan');
  svg.innerHTML = '';

  const widthPx = 380;
  const heightPx = 280;

  for (let i = 0; i < studs; i++) {
    const x = (i / (studs - 1)) * widthPx;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x);
    line.setAttribute('y1', 0);
    line.setAttribute('x2', x);
    line.setAttribute('y2', heightPx);
    line.setAttribute('stroke', 'black');
    svg.appendChild(line);
  }
}

function render3D(length, height) {
  const canvas = document.getElementById('three');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 400/300, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(400, 300);

  const geometry = new THREE.BoxGeometry(length, height, 0.2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 20;
  renderer.render(scene, camera);
}
