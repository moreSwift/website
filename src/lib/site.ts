export const site = {
	name: 'moreSwift',
	tagline: 'Native Swift apps, everywhere.',
	description:
		'moreSwift builds open-source tools that let you write one Swift codebase and ship it natively to macOS, Windows, Linux, iOS and Android.',
	github: 'https://github.com/moreSwift',
	discord: '/discord',
	sponsor: 'https://opencollective.com/moreswift',
	youtube: 'https://www.youtube.com/@moreSwift/videos',
	swiftCrossUI: 'https://swiftcrossui.dev',
	swiftBundler: 'https://swiftbundler.dev',
	docsCrossUI: 'https://docs.swiftcrossui.dev',
	docsBundler: 'https://swiftbundler.dev/documentation/swift-bundler',
	quickStart: 'https://docs.swiftcrossui.dev/tutorials/swiftcrossui/quick-start',
	bundlerRelease: 'https://github.com/moreSwift/swift-bundler/releases/tag/v3.0.0'
} as const;

export const nav = [
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Principles', href: '/#principles' },
	{ label: 'Videos', href: '/#videos' },
	{ label: 'Community', href: '/#community' },
	{ label: 'Sponsor', href: site.sponsor }
] as const;
