import { cn } from "@/utils";
import profileImage from "@/assets/images/profile.jpg";
import myCatImage from "@/assets/images/minou.jpg";
import usImage from "@/assets/images/us.jpg";
import nearHomeImage from "@/assets/images/near-home.jpg";
import subSetImage from "@/assets/images/sunset.jpg";

export function PresentationSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-8">
				<div className="w-full">
					<div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-4">
						<div className="w-full h-full aspect-[0.56]">
							<img
								src={profileImage}
								className="w-full h-full object-cover rounded-md"
								alt=""
							/>
						</div>
						<div className="space-y-8 pt-8 text-stone-700 col-span-2">
							<div className="">
								<h2 className="text-lg lg:text-xl font-semibold">
									About.
								</h2>
								<p className="text-base">
									Hi, I'm <b>software engineer</b> passionate about
									creating solutions by designing interfaces and
									leveraging mathematics. I enjoy contributing to
									projects that tackle specific problems and turning
									ideas into impactful results.
								</p>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="">
									<img
										src={myCatImage}
										alt=""
										className="aspect-video object-cover rounded-md"
									/>
								</div>
								<div className="">
									<img
										src={usImage}
										alt=""
										className="aspect-video object-cover rounded-md"
									/>
								</div>
								<div className="">
									<img
										src={nearHomeImage}
										alt=""
										className="aspect-video object-cover rounded-md"
									/>
								</div>
								<div className="">
									<img
										src={subSetImage}
										alt=""
										className="aspect-video object-top object-cover rounded-md"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<p className="text-base">
						🏓 I enjoy drawing, playing chess, exploring video games, and
						diving into manga and anime.
					</p>
				</div>
			</div>
		</div>
	);
}
