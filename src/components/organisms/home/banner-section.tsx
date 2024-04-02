import Square from "src/components/atoms/presentations/square";
import { ParallaxBanner } from "react-scroll-parallax";
import { SQUARE_DATA_LEFT, SQUARE_DATA_RIGHT } from "src/data/square-data";
import Header from "../layout/Header";
import SocialNetworkLinks from "@/components/molecules/SocialNetworkLinks";
import { AppearBox } from "@/components/atoms/presentations/appear-box";

export function BannerSection() {
	return (
		<div className="w-full h-[530px] relative bg-[whitesmoke] flex flex-col">
			<div className="w-full px-8 md:px-12 lg:px-32 xl:px-72 pt-12">
				<Header />
			</div>
			<ParallaxBanner
				className="w-full h-full"
				layers={[
					{
						expanded: false,
						translateY: [0, -100, "easeIn"],
						shouldAlwaysCompleteAnimation: true,
						children: <Square.List data={SQUARE_DATA_LEFT} />,
					},
					{
						expanded: false,
						translateY: [0, 100, "easeIn"],
						shouldAlwaysCompleteAnimation: true,
						children: <Square.List data={SQUARE_DATA_RIGHT} />,
					},
					{
						translateY: [0, 50],
						opacity: [1, 0],
						shouldAlwaysCompleteAnimation: true,
						expanded: false,
						children: (
							<div className="absolute inset-0 flex flex-col justify-end space-y-14">
								<div className="px-8 md:px-12 lg:px-32 xl:px-72 space-y-4 pb-16">
									<div className="space-y-2">
										<div className="">
											<AppearBox>
												<h1 className="space-x-2 md:space-x-4 text-4xl md:text-5xl lg:text-7xl font-semibold text-left">
													Hi, I’m{" "}
													<span className="text-[#002AFF]">
														Rayane
													</span>{" "}
													and
												</h1>
											</AppearBox>
											<AppearBox delay={0.3}>
												<h1 className="space-x-2 md:space-x-4 text-4xl md:text-5xl lg:text-7xl font-semibold text-left">
													<span className="">I’m a</span>
													<span>software engineer.</span>
												</h1>
											</AppearBox>
										</div>
										<p className="max-w-xl text-left text-xl lg:text-2xl text-slate-900">
											I find true satisfaction in crafting
											captivating user interfaces and software
											solutions, seamlessly blending aesthetics and
											functionality.
										</p>
									</div>
									<div className="inline-block">
										<SocialNetworkLinks />
									</div>
								</div>
							</div>
						),
					},
				]}
			/>
		</div>
	);
}
