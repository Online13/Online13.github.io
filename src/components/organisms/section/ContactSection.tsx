import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	FloatingActionPanelContent,
	FloatingActionPanelRoot,
	FloatingActionPanelTrigger,
} from "@/components/ui/floating-action-panel";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { usePageUpdateTheme } from "@/stores/page-store";

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
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		amount: 1,
		margin: "20% 0px 20% 0px",
	});
	const updateBg = usePageUpdateTheme();

	useEffect(() => {
		if (isInView) {
			updateBg("dark");
			// update background to black
		} else {
			updateBg("light");
			// update to white
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
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
							onClick={() => {}}
						>
							yourself
						</span>
						,{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {}}
						>
							your project
						</span>
						, or just drop me{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {}}
						>
							a line and say hello
						</span>
						.
					</p>
					<FloatingActionPanelRoot>
						{() => (
							<>
								<FloatingActionPanelTrigger
									title="Talk more about your project"
									mode="actions"
								>
									<span className="font-semibold">Contact me</span>
								</FloatingActionPanelTrigger>
								<FloatingActionPanelContent className="w-[430px]">
									<ContactForm />
								</FloatingActionPanelContent>
							</>
						)}
					</FloatingActionPanelRoot>
				</div>
			</div>
		</div>
	);
}

function ContactForm() {
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
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-2 px-4">
			<div className="max-w-sm">
				<Label htmlFor="name">Name</Label>
				<Input id="name" {...register("name")} />
				{errors.name && (
					<p className="text-red-500 text-sm">{errors.name.message}</p>
				)}
			</div>
			<div className="max-w-sm">
				<Label htmlFor="email">Email</Label>
				<Input id="email" type="email" {...register("email")} />
				{errors.email && (
					<p className="text-red-500 text-sm">{errors.email.message}</p>
				)}
			</div>
			<div className="max-w-sm">
				<Label htmlFor="description">Description</Label>
				<Textarea id="description" {...register("description")} />
				{errors.description && (
					<p className="text-red-500 text-sm">
						{errors.description.message}
					</p>
				)}
			</div>
			<Button type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send Email"}
			</Button>
			{submitResult && (
				<Alert variant={submitResult.success ? "default" : "destructive"}>
					<AlertDescription>{submitResult.message}</AlertDescription>
				</Alert>
			)}
		</form>
	);
}
