"use client";

import { useEffect, useRef } from "react";
import type { BufferGeometry, Material, Mesh, Object3D } from "three";

type Three = typeof import("three");

const INK = 0xedeae3;
const ACCENT = 0xff8a3d;

const SOURCE: [string, string][] = [
  ["// hello.js", "#8A867F"],
  ["function greet() {", "#EDEAE3"],
  ['  console.log("Hello, World!");', "#FF8A3D"],
  ["}", "#EDEAE3"],
  ["greet();", "#EDEAE3"],
];

// Wireframe desktop computer typing "Hello, World!" — drag to rotate.
function buildScene(THREE: Three, el: HTMLDivElement) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const monoFont =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--font-geist-mono")
      .trim() || "ui-monospace, monospace";

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.display = "block";
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  cam.position.z = 6.4;

  const lineMat = (color: number, opacity: number) =>
    new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  const edges = (geo: BufferGeometry, color: number, opacity: number) =>
    new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      lineMat(color, opacity),
    );

  const pc = new THREE.Group();

  // Monitor
  const mon = new THREE.Group();
  mon.position.set(0, 0.55, -0.3);
  pc.add(mon);
  mon.add(edges(new THREE.BoxGeometry(2.7, 1.7, 0.12), INK, 0.55));
  mon.add(edges(new THREE.PlaneGeometry(2.45, 1.45), ACCENT, 0.5));
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.45, 1.45),
    new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.05,
    }),
  );
  glow.position.z = 0.061;
  mon.add(glow);

  // Screen contents drawn to a canvas texture
  const screen = document.createElement("canvas");
  screen.width = 1024;
  screen.height = 606;
  const ctx = screen.getContext("2d");
  const screenTex = new THREE.CanvasTexture(screen);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  const screenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2.45, 1.45),
    new THREE.MeshBasicMaterial({ map: screenTex, transparent: true }),
  );
  screenMesh.position.z = 0.063;
  mon.add(screenMesh);

  const total = SOURCE.reduce((n, [line]) => n + line.length, 0);
  let lastDraw = -1;
  const drawScreen = (chars: number, blink: boolean, done: boolean) => {
    if (!ctx) return;
    const key = chars * 2 + (blink ? 1 : 0) + (done ? 10000 : 0);
    if (key === lastDraw) return;
    lastDraw = key;
    ctx.clearRect(0, 0, 1024, 606);
    ctx.font = `500 40px ${monoFont}`;
    ctx.textBaseline = "top";
    let left = chars;
    let x = 56;
    let y = 52;
    for (const [text, color] of SOURCE) {
      const typed = text.slice(0, Math.max(0, left));
      left -= text.length;
      ctx.fillStyle = color;
      ctx.fillText(typed, 56, y);
      if (left < 0 || (left === 0 && !done)) {
        x = 56 + ctx.measureText(typed).width;
        break;
      }
      y += 60;
    }
    if (done) {
      ctx.fillStyle = "#8A867F";
      ctx.fillText("$ node hello.js", 56, 380);
      ctx.font = `500 64px ${monoFont}`;
      ctx.fillStyle = "#FF8A3D";
      ctx.fillText("Hello, World!", 56, 450);
      x = 56 + ctx.measureText("Hello, World!").width + 10;
      y = 456;
    }
    if (blink) {
      ctx.fillStyle = "#FF8A3D";
      ctx.fillRect(x + 4, y, done ? 30 : 22, done ? 60 : 42);
    }
    screenTex.needsUpdate = true;
  };

  // Stand
  const neck = edges(new THREE.BoxGeometry(0.14, 0.5, 0.14), INK, 0.4);
  neck.position.set(0, -0.55, -0.3);
  pc.add(neck);
  const base = edges(new THREE.BoxGeometry(0.9, 0.04, 0.5), INK, 0.4);
  base.position.set(0, -0.8, -0.3);
  pc.add(base);

  // Keyboard with keys that light up while typing
  const kb = new THREE.Group();
  kb.position.set(-0.25, -0.8, 0.85);
  pc.add(kb);
  kb.add(edges(new THREE.BoxGeometry(2.3, 0.07, 0.78), INK, 0.5));
  const keyPts: number[] = [];
  const keys: Mesh<BufferGeometry, Material & { opacity: number }>[] = [];
  const cols = 13;
  const rows = 4;
  const kw = 0.15;
  const gap = 0.023;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 3 && c > 3 && c < 10) continue;
      const w = r === 3 && c === 3 ? kw * 7 + gap * 6 : kw;
      const x0 = -1.08 + c * (kw + gap);
      const z0 = -0.3 + r * (kw + gap);
      const y = 0.05;
      keyPts.push(
        x0,
        y,
        z0,
        x0 + w,
        y,
        z0,
        x0 + w,
        y,
        z0,
        x0 + w,
        y,
        z0 + kw,
        x0 + w,
        y,
        z0 + kw,
        x0,
        y,
        z0 + kw,
        x0,
        y,
        z0 + kw,
        x0,
        y,
        z0,
      );
      const key = new THREE.Mesh(
        new THREE.PlaneGeometry(w, kw),
        new THREE.MeshBasicMaterial({
          color: ACCENT,
          transparent: true,
          opacity: 0,
        }),
      );
      key.rotation.x = -Math.PI / 2;
      key.position.set(x0 + w / 2, y + 0.002, z0 + kw / 2);
      kb.add(key);
      keys.push(key);
    }
  }
  const keyGeo = new THREE.BufferGeometry();
  keyGeo.setAttribute("position", new THREE.Float32BufferAttribute(keyPts, 3));
  kb.add(new THREE.LineSegments(keyGeo, lineMat(INK, 0.35)));

  // Mouse
  const mouse = new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.CapsuleGeometry(0.15, 0.2, 3, 10)),
    lineMat(ACCENT, 0.55),
  );
  mouse.rotation.x = Math.PI / 2;
  mouse.scale.set(1, 1, 0.45);
  mouse.position.set(1.35, -0.77, 0.9);
  pc.add(mouse);

  pc.scale.setScalar(1.05);
  scene.add(pc);

  const resize = () => {
    const w = el.clientWidth;
    const h = el.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
    renderer.render(scene, cam);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(el);

  // Pointer: parallax on move, drag to spin with inertia
  let mx = 0;
  let my = 0;
  let tx = 0;
  let ty = 0;
  let spinX = 0;
  let spinY = 0;
  let vel = 0;
  let drag: { x: number; y: number } | null = null;
  const onMove = (e: PointerEvent) => {
    mx = e.clientX / window.innerWidth - 0.5;
    my = e.clientY / window.innerHeight - 0.5;
    if (!drag) return;
    vel = (e.clientX - drag.x) * 0.005;
    spinY += vel;
    spinX += (e.clientY - drag.y) * 0.004;
    drag = { x: e.clientX, y: e.clientY };
  };
  const onDown = (e: PointerEvent) => {
    drag = { x: e.clientX, y: e.clientY };
    el.style.cursor = "grabbing";
  };
  const onUp = () => {
    drag = null;
    el.style.cursor = "grab";
  };
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
  el.addEventListener("pointerdown", onDown);

  const t0 = performance.now();
  let raf = 0;
  let running = false;
  const tick = () => {
    const t = (performance.now() - t0) / 1000;
    if (!drag) {
      vel *= 0.95;
      spinY += vel;
    }
    tx += (my * 0.5 - tx) * 0.05;
    ty += (mx * 0.6 - ty) * 0.05;
    pc.rotation.y = spinY + ty - 0.35 + Math.sin(t * 0.35) * 0.35;
    pc.rotation.x = spinX * 0.5 + tx + 0.28;

    const rate = 14;
    const ct = (t % (total / rate + 4)) * rate;
    const typing = ct < total;
    drawScreen(
      Math.min(total, Math.floor(ct)),
      typing || Math.floor(t * 2.5) % 2 === 0,
      ct > total + rate * 0.6,
    );
    for (const key of keys) key.material.opacity *= 0.88;
    if (typing && Math.random() < 0.45) {
      keys[Math.floor(Math.random() * keys.length)].material.opacity = 0.7;
    }
    mouse.position.x = 1.35 + Math.sin(t * 0.9) * 0.08;
    mouse.position.z = 0.9 + Math.cos(t * 0.7) * 0.06;

    renderer.render(scene, cam);
    if (running) raf = requestAnimationFrame(tick);
  };

  // Only animate while on screen; reduced motion gets a single still frame.
  const io = new IntersectionObserver(([entry]) => {
    const visible = entry.isIntersecting && !reduceMotion;
    if (visible && !running) {
      running = true;
      raf = requestAnimationFrame(tick);
    } else if (!visible) {
      running = false;
      cancelAnimationFrame(raf);
    }
  });
  io.observe(el);

  pc.rotation.set(0.28, -0.35, 0);
  drawScreen(total, true, true);
  resize();

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    io.disconnect();
    ro.disconnect();
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    window.removeEventListener("pointercancel", onUp);
    el.removeEventListener("pointerdown", onDown);
    scene.traverse((obj: Object3D) => {
      const node = obj as Partial<Mesh>;
      node.geometry?.dispose();
      const mat = node.material;
      if (Array.isArray(mat)) for (const m of mat) m.dispose();
      else mat?.dispose();
    });
    screenTex.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    let cancelled = false;
    let cleanup = () => {};

    // Defer three.js until the browser is idle so it never competes with LCP.
    const start = () =>
      Promise.all([import("three"), document.fonts.ready]).then(([THREE]) => {
        if (!cancelled) cleanup = buildScene(THREE, el);
      });
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 2000 })
      : window.setTimeout(start, 600);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 cursor-grab touch-pan-y"
    />
  );
}
