function AboutSection() {
	return (
		<div className="w-full flex items-center px-44 py-40  border">
			<div className="space-y-14 pl-44">
				<h2 className="text-5xl font-semibold">About Me.</h2>
				<div className="max-w-lg space-y-6 text-xl">
					<p>🎓 I'm currently pursuing my Master's degree in MISA.. </p>
					<p>
						🤵 I am self-taught, proactive and passionate about IT and
						Mathematics. Being able to use mathematics in computer science
						made me learn computer science even more.
					</p>
					<p>
						💡 I’m React Js, Javascript and CSS nerd. I love everything
						about 3D modeling, video games, and artificial intelligence.
					</p>
					<p>
						🏓 My hobbies are drawing, playing chess, playing video games,
						and manga.
					</p>
				</div>
				<div className="flex justify-end">
					<button>My resume</button>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
