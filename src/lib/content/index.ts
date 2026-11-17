export type Project = {
	id: 'swift-bundler' | 'swiftcrossui';
	name: string;
	kicker: string;
	tagline: string;
	description: string;
	href: string;
	cta: string;
	github: string;
	badge?: string;
	features?: string[];
	tags?: string[];
	mark: string;
	markAlt: string;
};

export const projects: Project[] = [
	{
		id: 'swift-bundler',
		name: 'Swift Bundler',
		kicker: 'Build & distribution',
		tagline: 'Ship Swift apps. Anywhere.',
		description:
			'An Xcodeproj-less tool that turns Swift Package Manager executables into signed, distributable apps and native installers for every platform you care about.',
		href: 'https://swiftbundler.dev',
		cta: 'Explore Swift Bundler',
		github: 'https://github.com/moreSwift/swift-bundler',
		features: [
			'Windows, Linux and Android support',
			'Hot reload on macOS and Linux',
			'One Bundler.toml with platform overlays'
		],
		mark: '/images/showcase/swift-bundler-crate.webp',
		markAlt: 'The Swift Bundler crate logo'
	},
	{
		id: 'swiftcrossui',
		name: 'SwiftCrossUI',
		kicker: 'UI framework',
		tagline: 'SwiftUI, everywhere.',
		description:
			'A cross-platform declarative UI framework inspired by SwiftUI. Write your interface once and run it natively on six platforms, with controls that feel at home on each one.',
		href: 'https://swiftcrossui.dev',
		cta: 'Explore SwiftCrossUI',
		github: 'https://github.com/moreSwift/swift-cross-ui',
		badge: 'MIT · Open source',
		features: [
			'Declarative SwiftUI-style API',
			'Native backends, no web views',
			'Six platforms, one codebase'
		],
		mark: '/images/showcase/music-player-macos.webp',
		markAlt: 'The MusicPlayerExample app running on macOS'
	}
];

export type Video = {
	id: string;
	title: string;
	description: string;
	href: string;
	tag: string;
	period: string;
	thumbnail: string;
	alt: string;
};

export const videos: Video[] = [
	{
		id: 'feb-march-2026',
		title: 'Development update (February & March 2026)',
		description:
			'Feature parity with SwiftUI took a big step forward. A look at the new features, plus exciting community projects.',
		href: 'https://www.youtube.com/watch?v=RzT7_priAE8',
		tag: 'Dev update',
		period: 'Feb – Mar 2026',
		thumbnail: '/images/video-thumbnails/feb-march-2026.webp',
		alt: 'The community showcase segment of the February and March 2026 development update'
	},
	{
		id: 'mia-fosdem-2026',
		title: 'SwiftCrossUI: Swift apps, everywhere',
		description:
			'Mia Koring talks through SwiftCrossUI and Swift Bundler at the 2026 pre-FOSDEM Swift meetup.',
		href: 'https://www.youtube.com/watch?v=EC9qVCYBVyk',
		tag: 'Talk',
		period: 'pre-FOSDEM 2026',
		thumbnail: '/images/video-thumbnails/mia-koring-pre-fosdem-2026.webp',
		alt: 'A frame from the recording of Mia Koring’s pre-FOSDEM talk'
	},
	{
		id: 'dec-2025-jan-2026',
		title: 'Development update (December 2025 & January 2026)',
		description:
			'The first SwiftCrossUI development update, covering two months of contributions and community showcases.',
		href: 'https://www.youtube.com/watch?v=HgRO7eIHkyE',
		tag: 'Dev update',
		period: 'Dec 2025 – Jan 2026',
		thumbnail: '/images/video-thumbnails/dec-2025-jan-2026.webp',
		alt: 'The community showcase segment of the December 2025 and January 2026 development update'
	}
];

export type Value = {
	icon: 'devices' | 'code' | 'heart';
	title: string;
	description: string;
};

export const values: Value[] = [
	{
		icon: 'devices',
		title: 'Native by default',
		description:
			'No web views or lookalike widgets. Every backend uses the platform’s real UI toolkit, so apps feel like they belong.'
	},
	{
		icon: 'code',
		title: 'One ecosystem',
		description:
			'SwiftCrossUI for the interface, Swift Bundler for the build. Two tools designed to work together from day one.'
	},
	{
		icon: 'heart',
		title: 'Open, and openly funded',
		description:
			'MIT licensed and built in public. Sponsorships fund maintenance, documentation and new platform support.'
	}
];

export type CommunityLink = {
	icon: 'github' | 'discord' | 'sponsor';
	title: string;
	description: string;
	href: string;
	handle: string;
	cta: string;
};

export const communityLinks: CommunityLink[] = [
	{
		icon: 'github',
		title: 'GitHub',
		description: 'Follow the work, file issues and contribute to both projects.',
		href: 'https://github.com/moreSwift',
		handle: 'github.com/moreSwift',
		cta: 'Browse the source'
	},
	{
		icon: 'discord',
		title: 'Discord',
		description: 'Ask questions, share what you’re building and shape the roadmap.',
		href: '/discord',
		handle: 'discord.gg/moreSwift',
		cta: 'Join the community'
	},
	{
		icon: 'sponsor',
		title: 'Open Collective',
		description: 'Fund maintenance and help bring Swift to the next platform.',
		href: 'https://opencollective.com/moreswift',
		handle: 'opencollective.com/moreswift',
		cta: 'Sponsor moreSwift'
	}
];
