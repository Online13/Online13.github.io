import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import SocialNetworkLinks from "@/components/molecules/SocialNetworkLinks";

const contactFormSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().email({ message: "Invalid email address" }),
	description: z
		.string()
		.min(10, { message: "Description must be at least 10 characters long" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Props {
	className?: string;
}

export function ContactSection({ className }: Props) {
	const [focusOn, setFocusOn] = useState<
		"name" | "project" | "description" | null
	>(null);
	const [showForm, setShowForm] = useState(false);
	const handleOpenContactForm = () => {
		setShowForm(true);
	};

	return (
		<div
			className={clsx(
				"relative border-b border-border py-20 w-full",
				className
			)}
		>
			<div className="w-full container">
				<div className="w-full space-y-4">
					<div className="w-full flex flex-col">
						<h2 className="text-2xl lg:text-3xl font-semibold">
							Let's make something <br />
							amazing{" "}
							<span className="text-[hsl(230,100%,50%)]">together</span>.
						</h2>
					</div>
					<p className="text-base max-w-md">
						Want to work together? I probably do, too. Tell me about{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {
								setFocusOn("name");
								setShowForm(true);
							}}
						>
							yourself
						</span>
						,{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {
								setFocusOn("project");
								setShowForm(true);
							}}
						>
							your project
						</span>
						, or just drop me{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {
								setFocusOn("description");
								setShowForm(true);
							}}
						>
							a line and say hello
						</span>
						.
					</p>
					<div className="flex items-center gap-4">
						<Button onClick={handleOpenContactForm}>
							<span>Contact me</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="w-4 h-4"
							>
								<path d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12 3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15" />
							</svg>
						</Button>
						<div className="">
							<SocialNetworkLinks />
						</div>
					</div>
				</div>
			</div>
			<ContactForm
				focusOn={focusOn}
				isVisible={showForm}
				onClose={() => {
					setShowForm(false);
				}}
			/>
		</div>
	);
}

interface ContactFormProps {
	isVisible: boolean;
	onClose: () => void;
	focusOn: "name" | "project" | "description" | null;
}

function ContactForm({ isVisible, focusOn, onClose }: ContactFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitResult, setSubmitResult] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async () => {
		setIsSubmitting(true);
		setSubmitResult(null);

		try {
			const result = { message: "" };
			if ("error" in result) {
				// Handle server-side validation errors
				console.error("Server-side validation failed:", result.error);
			} else {
				setSubmitResult({ success: true, message: result.message });
				reset(); // Clear the form on successful submission
			}
		} catch (error) {
			console.error("Failed to send email:", error);
			setSubmitResult({
				success: false,
				message: "Failed to send email. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div className="w-full max-w-[550px] fixed z-50 bottom-0 right-[10%] p-8">
					<motion.div
						initial={{ backdropFilter: "blur(0px)" }}
						animate={{ backdropFilter: "blur(4px)" }}
						exit={{ backdropFilter: "blur(0px)" }}
						className="fixed inset-0 z-40 bg-black/5"
						onClick={onClose}
					/>
					<motion.div
						initial={{ translateY: "120%" }}
						animate={{ translateY: "0%" }}
						exit={{ translateY: "120%" }}
						transition={{ duration: 0.6 }}
						className="relative z-50"
					>
						<Card className="z-50 relative">
							<CardHeader>
								<CardTitle>Let's Build Something Together</CardTitle>
								<CardDescription className="text-sm">
									Have a project in mind? Share your ideas and let's
									collaborate to turn them into reality. Fill out the
									form below to get started, and I'll get back to you
									as soon as possible!
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<div className="max-w-sm">
										<Label htmlFor="name">Name</Label>
										<Input
											id="name"
											{...register("name")}
											ref={(instance) => {
												if (focusOn === "name" && instance) {
													instance.focus();
												}
											}}
										/>
										{errors.name && (
											<p className="text-red-500 text-xs">
												{errors.name.message}
											</p>
										)}
									</div>
									<div className="max-w-sm">
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											type="email"
											{...register("email")}
										/>
										{errors.email && (
											<p className="text-red-500 text-xs">
												{errors.email.message}
											</p>
										)}
									</div>
									<div className="max-w-sm">
										<Label htmlFor="description">Description</Label>
										<Textarea
											id="description"
											{...register("description")}
											ref={(instance) => {
												if (
													(focusOn === "description" ||
														focusOn === "project") &&
													instance
												) {
													instance.focus();
												}
											}}
										/>
										{errors.description && (
											<p className="text-red-500 text-xs">
												{errors.description.message}
											</p>
										)}
									</div>
									<Button type="submit" disabled={isSubmitting}>
										{isSubmitting ? "Sending..." : "Send Email"}
									</Button>
									{submitResult && (
										<Alert
											variant={
												submitResult.success
													? "default"
													: "destructive"
											}
										>
											<AlertDescription>
												{submitResult.message}
											</AlertDescription>
										</Alert>
									)}
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
