"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useTheme } from "next-themes";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
type ParticlesBgProps = {
  onReady?: () => void;
};
const ParticlesBg = ({ onReady }: ParticlesBgProps) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    onReady?.();
  };
  const lightOptions = useMemo<ISourceOptions>(
    () => ({
      background: {
        color: {
          value: "#DDD0C8",
        },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },

      particles: {
        particles: {
          shape: {
            type: "square", // starting from v2, this require the square shape script
          },
        },
        preset: "bubbles",
        color: {
          value: "#000000",
        },
        links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },

        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  const darkOptions = useMemo<ISourceOptions>(
    () => ({
      background: {
        color: {
          value: "#0c0a09",
        },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
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
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },

        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={theme === "dark" ? darkOptions : lightOptions}
        className="absolute -z-10"
      />
    );
  }

  return <></>;
};
export default ParticlesBg;
