"use client";

import { useEffect, useRef, useState } from "react";
import Matter, { Engine, Render, Runner, World, Bodies, Composite, Events, Mouse, MouseConstraint, Vector, Body } from "matter-js";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export function GravityHero() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    // To sync the static body with the DOM button
    const buttonRef = useRef<HTMLButtonElement>(null);
    const buttonBodyRef = useRef<Matter.Body | null>(null);

    // Initial setup
    useEffect(() => {
        if (!sceneRef.current) return;

        // 1. Setup Matter.js
        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;

        // Zero gravity initially (we'll add custom forces)
        engine.gravity.y = 0.2; // Very low gravity for "floating" feel (not zero, so they slowly drift down)
        engine.gravity.x = 0;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: '#0A0A0A', // Deep Dark
                wireframes: false,
                pixelRatio: window.devicePixelRatio, // Sharp rendering
            }
        });
        renderRef.current = render;

        // 2. Create Floating Bodies
        const shapes: Matter.Body[] = [];
        const wallOptions = { isStatic: true, render: { visible: false } };

        // Walls to keep objects in view (optional, or let them fall through and recycle?)
        // Let's add floor and walls for now so they don't disappear forever
        const wallThickness = 100;
        const width = window.innerWidth;
        const height = window.innerHeight;

        World.add(world, [
            Bodies.rectangle(width / 2, -wallThickness, width, wallThickness, wallOptions), // User reported objects falling from top, so top wall might block them? No, we spawn inside.
            Bodies.rectangle(width / 2, height + wallThickness * 2, width, wallThickness, wallOptions), // Floor (far down)
            Bodies.rectangle(-wallThickness, height / 2, wallThickness, height * 2, wallOptions), // Left
            Bodies.rectangle(width + wallThickness, height / 2, wallThickness, height * 2, wallOptions) // Right
        ]);

        // Spawn items
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = (Math.random() * height) - height; // Start above or spread out
            const size = 30 + Math.random() * 60;
            const color = `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`; // Very faint white

            let body;
            const type = Math.random();
            const commonOptions = {
                frictionAir: 0.02, // High friction for "underwater" or "space" float feel
                restitution: 0.8, // Bouncy
                render: {
                    fillStyle: color,
                    strokeStyle: 'rgba(255,255,255,0.1)',
                    lineWidth: 1
                }
            };

            if (type < 0.33) {
                body = Bodies.rectangle(x, y, size, size, { ...commonOptions, chamfer: { radius: 10 } });
            } else if (type < 0.66) {
                body = Bodies.circle(x, y, size / 2, commonOptions);
            } else {
                body = Bodies.polygon(x, y, 3 + Math.floor(Math.random() * 3), size / 2, commonOptions);
            }

            shapes.push(body);
        }
        World.add(world, shapes);

        // 3. Anchor (Static Button Placeholder)
        // We will update its position in the 'afterUpdate' event to match the DOM element or vice-versa.
        // Easier approach: The DOM element determines the position. We place a static body there once.
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            // Matter.js coordinates are center-based
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const anchorBody = Bodies.rectangle(centerX, centerY, rect.width + 20, rect.height + 20, {
                isStatic: true,
                render: {
                    fillStyle: "transparent", // Invisible, just for collision
                    visible: false // Actually hide it
                }
            });
            buttonBodyRef.current = anchorBody;
            World.add(world, anchorBody);
        }

        // 4. Mouse Interaction (Repulsion)
        const mouse = Mouse.create(render.canvas);

        // Remove default mouse constraint (dragging) if we only want hover/repel
        // But maybe dragging is fun? Let's keep repulsion main.

        Events.on(engine, 'beforeUpdate', function () {
            const mousePosition = mouse.position;
            const repulsionRange = 200;
            const forceMagnitude = 0.05;

            shapes.forEach(body => {
                const dx = body.position.x - mousePosition.x;
                const dy = body.position.y - mousePosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < repulsionRange && distance > 0) {
                    const force = Vector.normalise({ x: dx, y: dy });
                    // Apply force away from mouse
                    Body.applyForce(body, body.position, Vector.mult(force, forceMagnitude * body.mass * (1 - distance / repulsionRange)));
                }
            });
        });


        // 5. Run the engine
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);
        Render.run(render);

        // Window resize handling
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;

            // Reposition walls... (Simple reload might be easier or just update bounds)
            // For now, simple resize
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            World.clear(world, false);
            Engine.clear(engine);
        };
    }, []);

    // Sync Button Body Position on Window Resize
    useEffect(() => {
        const handleResize = () => {
            if (buttonRef.current && buttonBodyRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                Body.setPosition(buttonBodyRef.current, { x: centerX, y: centerY });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A]">
            {/* Physics Canvas */}
            <div ref={sceneRef} className="absolute inset-0 z-0" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <Container className="text-center">
                    <div className="space-y-8 max-w-4xl mx-auto pointer-events-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            VITAOS Life Strategy Assessment
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.3] md:leading-[1.1] break-keep">
                            길 잃은 풍요의 시대,<br className="hidden md:block" />
                            <span className="text-gold italic">새로운 삶의 중력</span>을 세우다.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed break-keep">
                            AI가 모든 것을 대체해버린 세상, 우리는 길을 잃고 목적 없이 부유하고 있습니다.<br className="hidden md:block" />
                            흔들리지 않는 삶의 절대 좌표를 찾으세요. 당신을 위한 새로운 중력, VITAOS.
                        </p>

                        <div className="pt-8 flex flex-col items-center">
                            {/* The Anchor Button */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-gold to-white rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                                <Link href="/start">
                                    <Button
                                        ref={buttonRef}
                                        size="lg"
                                        className="relative w-full sm:w-auto text-lg px-12 h-16 bg-white text-black hover:bg-gray-100 border-none shadow-2xl font-bold tracking-wide"
                                    >
                                        내 삶의 중력 찾기 (검사 시작)
                                    </Button>
                                </Link>
                            </div>

                            <p className="mt-4 text-xs text-gray-600 font-mono">
                                * PUSH TO START *
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500/50 animate-bounce pointer-events-none z-20">
                <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            </div>
        </section>
    );
}
