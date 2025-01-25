import { SoftwareEngSidebarContent } from "../organisms/sidebar-content/SoftwareEngSidebarContent";
import { ModelingSidebarContent } from "../organisms/sidebar-content/ModelingSidebarContent";
import { DesignSidebarContent } from "../organisms/sidebar-content/DesignSidebarContent";
import { SidebarContentType } from "@/type";
import { useSidebarContent } from "@/stores/sidebar-content.store";

export function Sidebar() {
	const { content } = useSidebarContent();

	return (
		<div className="w-full h-full border-l border-l-border px-8 py-8">
			<SidebarContent content={content} />
		</div>
	);
}

interface SidebarContentProps {
	content?: SidebarContentType | null;
}

function SidebarContent({ content = null }: SidebarContentProps) {
	if (!content) {
		return;
	}

	if (content === "design") {
		return <SoftwareEngSidebarContent />;
	}

	if (content === "modeling") {
		return <ModelingSidebarContent />;
	}

	return <DesignSidebarContent />;
}
