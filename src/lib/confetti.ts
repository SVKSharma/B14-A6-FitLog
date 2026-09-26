import confetti from 'canvas-confetti';

export const triggerSuccessConfetti = () => {
  const burst = () => {
    confetti({
      particleCount: 22,
      angle: 45,
      spread: 55,
      startVelocity: 65,
      origin: { x: 0, y: 0.65 },
      colors: ['#a6e22e', '#ffffff', '#eab308'],
      disableForReducedMotion: true,
    });

    confetti({
      particleCount: 22,
      angle: 135,
      spread: 55,
      startVelocity: 65,
      origin: { x: 1, y: 0.65 },
      colors: ['#a6e22e', '#ffffff', '#eab308'],
      disableForReducedMotion: true,
    });
  };

  burst();
  const burstInterval = window.setInterval(burst, 100);
  window.setTimeout(() => window.clearInterval(burstInterval), 1000);
};
