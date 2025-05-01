let audioContext: AudioContext | null = null;

const getAudioContext = () => {
	if (typeof window === "undefined") return null;

	if (!audioContext) {
		audioContext = new (window.AudioContext ||
			(window as any).webkitAudioContext)();
	}

	return audioContext;
};

export const playAnimationSound = (number: number) => {
	const context = getAudioContext();
	if (!context) return;

	const oscillator = context.createOscillator();
	const gainNode = context.createGain();

	oscillator.connect(gainNode);
	gainNode.connect(context.destination);

	oscillator.type = "triangle";

	const minFreq = 300;
	const maxFreq = 800;
	const frequency = minFreq + number * (maxFreq - minFreq);

	oscillator.frequency.setValueAtTime(frequency, context.currentTime);

	const duration = 0.05;

	gainNode.gain.setValueAtTime(0.05, context.currentTime);
	gainNode.gain.exponentialRampToValueAtTime(
		0.0001,
		context.currentTime + duration
	);

	oscillator.start(context.currentTime);
	oscillator.stop(context.currentTime + duration);
};
