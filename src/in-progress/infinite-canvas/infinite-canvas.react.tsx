import { useRef, useState } from 'react';
import css from './infinite-canvas.module.css';


const MINIMAP_SIZE = 200;
const WORLD_EXTENT = 5000;
const GRID_CELL_SIZE = 100;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 8;

type TCameraState = {
    zoom: number;
    panX: number;
    panY: number;
}

const scale = (state: TCameraState) => ({
    transform: `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`
})

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

const mod = (n: number, m: number) => ((n % m) + m) % m;

export const InfiniteCanvas = () => {
    const [camera, setCamera] = useState<TCameraState>(() => ({
        zoom: 1,
        panX: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
        panY: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    }));
    const containerRef = useRef<HTMLDivElement>(null);

    const lastX = useRef(0);
    const lastY = useRef(0);
    const isDragging = useRef(false);

    const onPointerDown = (e: React.PointerEvent) => {
        e.preventDefault();
        lastX.current = e.clientX;
        lastY.current = e.clientY;
        isDragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;

        const dx = e.clientX - lastX.current;
        const dy = e.clientY - lastY.current;

        setCamera((c) => ({
            ...c,
            panX: c.panX + dx,
            panY: c.panY + dy,
        }));

        lastX.current = e.clientX;
        lastY.current = e.clientY;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        isDragging.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const onWheel = (e: React.WheelEvent) => {
        e.preventDefault();

        const worldX = (e.clientX - camera.panX) / camera.zoom;
        const worldY = (e.clientY - camera.panY) / camera.zoom;

        const zoomFactor = Math.exp(-e.deltaY * 0.001);
        const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, camera.zoom * zoomFactor));

        setCamera({
            zoom,
            panX: e.clientX - worldX * zoom,
            panY: e.clientY - worldY * zoom,
        });
    };

    const worldLeft = -camera.panX / camera.zoom;
    const worldTop = -camera.panY / camera.zoom;
    const worldRight =
        ((containerRef.current?.clientWidth ?? 0) - camera.panX) / camera.zoom;

    const worldBottom =
        ((containerRef.current?.clientHeight ?? 0) - camera.panY) / camera.zoom;
    const gridSize = Math.max(1, GRID_CELL_SIZE * camera.zoom);
    const minimapScale = MINIMAP_SIZE / (WORLD_EXTENT * 2);

    let miniX = (worldLeft + WORLD_EXTENT) * minimapScale;
    let miniY = (worldTop + WORLD_EXTENT) * minimapScale;
    let miniW = (worldRight - worldLeft) * minimapScale;
    let miniH = (worldBottom - worldTop) * minimapScale;

    miniX = clamp(miniX, 0, MINIMAP_SIZE);
    miniY = clamp(miniY, 0, MINIMAP_SIZE);
    miniW = clamp(miniW, 0, MINIMAP_SIZE - miniX);
    miniH = clamp(miniH, 0, MINIMAP_SIZE - miniY);

    return (
        <section
            ref={containerRef}
            className={css.container}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onWheel={onWheel}
            style={{
                '--grid-size': `${gridSize}px`,
                '--grid-offset-x': `${mod(camera.panX, gridSize)}px`,
                '--grid-offset-y': `${mod(camera.panY, gridSize)}px`,
            } as React.CSSProperties}
        >
            <div className={css.world} style={scale(camera)}>
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: 10,
                        height: 10,
                        background: 'red',
                    }}
                />
            </div>
            <div className={css.map}>
                <div
                    style={{
                        position: 'absolute',
                        left: `${miniX}px`,
                        top: `${miniY}px`,
                        width: `${miniW}px`,
                        height: `${miniH}px`,
                        border: '1px solid rgba(12, 86, 223, 0.5)',
                        background: 'transparent'
                    }}
                />
            </div>
        </section>
    );
};


export const InfiniteCanvasExample = () => {
    return <InfiniteCanvas />;
};
