export default function Docs() {
	return (
		<div className="min-h-screen flex flex-col md:flex-row">
			<aside className="w-full md:w-64 bg-gray-100 p-6 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
				<h2 className="text-xl font-bold mb-4">Summary</h2>
				<ul className="space-y-2">
					<li>
						<a href="#typography" className="text-primary hover:underline">
							Typography
						</a>
					</li>
					<li>
						<a href="#color-palette" className="text-primary hover:underline">
							Color Palette
						</a>
					</li>
				</ul>
			</aside>
			<div className="flex-grow">
				<section
					id="typography"
					className="min-h-screen flex flex-col px-4 py-8 sm:py-12 md:py-16"
				>
					<h2 className="text-3xl font-bold mb-8 text-primary">Typography</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<TypographySample weight="50" size="xs" name="Nexa Text Thin" />
						<TypographySample
							weight="100"
							size="sm"
							name="Nexa Text Extra Light"
						/>
						<TypographySample weight="200" size="base" name="Nexa Text Light" />
						<TypographySample weight="300" size="lg" name="Nexa Text Book" />
						<TypographySample weight="400" size="xl" name="Nexa Text Regular" />
						<TypographySample
							weight="800"
							size="2xl"
							name="Nexa Text Extra Bold"
						/>
						<TypographySample weight="900" size="3xl" name="Nexa Text Heavy" />
						<TypographySample weight="950" size="4xl" name="Nexa Text Black" />
					</div>
				</section>

				<section
					id="color-palette"
					className="min-h-screen flex flex-col px-4 py-8 sm:py-12 md:py-16"
				>
					<h2 className="text-2xl font-bold mb-8">Color Palette</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						<ColorSwatch name="Text" bgClass="bg-text" />
						<ColorSwatch name="Background" bgClass="bg-background" />
						<ColorSwatch name="Primary" bgClass="bg-primary" />
						<ColorSwatch name="Secondary" bgClass="bg-secondary" />
						<ColorSwatch name="Accent" bgClass="bg-accent" />
					</div>
				</section>
			</div>
		</div>
	);
}

function ColorSwatch({ name, bgClass }: { name: string; bgClass: string }) {
	return (
		<div className="flex flex-col items-center">
			<div className={`w-24 h-24 ${bgClass} rounded-lg shadow-md`} />
			<p className="mt-4 text-sm font-medium">{name} Color</p>
		</div>
	);
}

function TypographySample({
	weight,
	size,
	name,
}: { weight: string; size: string; name: string }) {
	return (
		<div className="bg-gray-50 p-6 rounded-lg shadow-sm">
			<p className={`text-${size} font-[${weight}] mb-2`}>{name}</p>
			<p className={`text-${size} font-[${weight}] text-gray-600`}>
				The quick brown fox jumps over the lazy dog.
			</p>
			<p className="text-xs text-gray-400 mt-2">
				Weight: {weight}, Size: {size}
			</p>
		</div>
	);
}
