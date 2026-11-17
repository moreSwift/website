export type Platform = {
	id: string;
	name: string;
	icon: 'apple' | 'windows' | 'linux' | 'android';
};

export const platforms: Platform[] = [
	{ id: 'macos', name: 'macOS', icon: 'apple' },
	{ id: 'ios', name: 'iOS', icon: 'apple' },
	{ id: 'tvos', name: 'tvOS', icon: 'apple' },
	{ id: 'windows', name: 'Windows', icon: 'windows' },
	{ id: 'linux', name: 'Linux', icon: 'linux' },
	{ id: 'android', name: 'Android', icon: 'android' }
];
