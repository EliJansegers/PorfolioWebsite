import React, { useCallback, useMemo } from 'react';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const initEngine = async (engine) => {
  await loadSlim(engine);
};

const ParticlesBackground = () => {
  const particlesLoaded = useCallback(async () => {}, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      background: { color: 'transparent' },
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: ['#778da9', '#e0e1dd', '#415a77'] },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: '#778da9',
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: true,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: true,
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.4 } },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="tsparticles"
        className="fixed inset-0 -z-10"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
