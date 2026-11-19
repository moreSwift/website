export type DesktopPreview = {
	id: 'macos' | 'windows' | 'linux';
	kind: 'desktop';
	label: string;
	src: string;
	alt: string;
};

export type MobilePreview = {
	id: 'ios' | 'android';
	kind: 'mobile';
	phoneKind: 'ios' | 'android';
	label: string;
	src: string;
	alt: string;
};

export const desktopPreviews: DesktopPreview[] = [
	{
		id: 'macos',
		kind: 'desktop',
		label: 'macOS',
		src: '/images/showcase/macos.webp',
		alt: 'MusicPlayerExample running on macOS'
	},
	{
		id: 'windows',
		kind: 'desktop',
		label: 'Windows',
		src: '/images/showcase/windows.webp',
		alt: 'MusicPlayerExample running on Windows'
	},
	{
		id: 'linux',
		kind: 'desktop',
		label: 'Linux',
		src: '/images/showcase/linux.webp',
		alt: 'MusicPlayerExample running on Linux'
	}
];

export const mobilePreviews: MobilePreview[] = [
	{
		id: 'ios',
		kind: 'mobile',
		phoneKind: 'ios',
		label: 'iOS',
		src: '/images/showcase/ios.webp',
		alt: 'MusicPlayerExample running on an iPhone'
	},
	{
		id: 'android',
		kind: 'mobile',
		phoneKind: 'android',
		label: 'Android',
		src: '/images/showcase/android.webp',
		alt: 'MusicPlayerExample running on a Google Pixel'
	}
];

export const platformPreviews = [...desktopPreviews, ...mobilePreviews];
