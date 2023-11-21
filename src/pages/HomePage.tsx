import SocialNetworkLinks from "src/components/molecules/SocialNetworkLinks";
import Header from "src/components/organisms/Header";
import AboutSection from "src/components/organisms/home/AboutSection";
import ExpSection from "src/components/organisms/home/ExpSection";

function HomePage() {
	return (
		<div className="w-full h-full overflow-auto scroll-smooth">
			<section className="w-full h-full flex justify-center items-center relative">
				<div className="absolute left-0 top-0 px-40 py-14 w-full">
					<Header />
				</div>
				<div className="_col-center space-y-14">
					<div className="_col-center space-y-7">
						<div className="w-24 aspect-square rounded-full bg-[#0E0F12]"></div>
						<div className="_col-center space-y-6">
							<div className="text-6xl font-semibold text-center">
								Hi, I’m <span className="text-[#002AFF]">Rayane</span>{" "}
								and I’m <br /> a <span>software engineer</span>.
							</div>
							<p className="max-w-md text-center text-xl">
								I find true satisfaction in crafting captivating user
								interfaces and software solutions, seamlessly blending
								aesthetics and functionality.
							</p>
						</div>
					</div>
					<SocialNetworkLinks />
				</div>
			</section>
			<section className="w-full" id="about">
				<AboutSection />
			</section>
			<section className="w-full" id="experiences">
				<ExpSection />
			</section>
			<section className="w-full h-full">ProjectSection</section>
			<section className="w-full h-full">contactsection</section>
			<footer className="px-40 py-4 bg-[#0E0F12] text-slate-100 flex items-center justify-between">
				<p>
					Designed & Built by <span className="font-medium">@Rayane</span>
				</p>
				<SocialNetworkLinks />
			</footer>
		</div>
	);
}

export default HomePage;
