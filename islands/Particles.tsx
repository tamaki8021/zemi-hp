/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Particles from "particles";
import { loadFull } from "https://esm.sh/v89/tsparticles@2.1.4";
import { Engine } from "https://esm.sh/v89/tsparticles-engine@2.1.4/types/engine.d.ts";

export default function Particle() {
  return (
    <Particles
      id="tsparticles"
      init={async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
      }}
      options={{
        // fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        retina_detect: true,
      }}
    />
  );
}
