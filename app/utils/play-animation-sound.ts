let audioContext: AudioContext | null = null;

const getAudioContext = () => {
	if (typeof window === "undefined") return null;

	if (!audioContext) {
		audioContext = new (window.AudioContext ||
			(window as any).webkitAudioContext)();
	}

	return audioContext;
};

/* export const playAnimationSound = (number: number) => {
	const context = getAudioContext();
	if (!context) return;

	const oscillator = context.createOscillator();
	const gainNode = context.createGain();

	oscillator.connect(gainNode);
	gainNode.connect(context.destination);

	oscillator.type = "sine";

	const minFreq = 400;
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
}; */

export const playAnimationSound = (number: number) => {
	const context = getAudioContext();
	if (!context) return;

	const duration = 0.1;
	const oscilation = context.createOscillator();
	const frequency = 200 + number * 500;

	oscilation.type = "triangle";
	oscilation.frequency.value = frequency;
	oscilation.start();
	oscilation.stop(context.currentTime + duration);

	const node = context.createGain();
	node.gain.value = 0.05;
	node.gain.linearRampToValueAtTime(0, context.currentTime + duration);
	oscilation.connect(node);
	node.connect(context.destination);
};
