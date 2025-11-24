export interface Service {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	highlights: string[];
	deliverables: string[];
	ctaLabel?: string;
}

export const services: Service[] = [
	{
		slug: "study-materials",
		title: "Study Materials",
		tagline: "Exam-ready notes tailored to your syllabus",
		description:
			"As per student demand, we create concise study material for every semester that follows your university pattern, making revision quick and stress-free.",
		highlights: [
			"Structured per subject, per module",
			"References and suggested readings included",
			"Editable formats for quick updates",
		],
		deliverables: ["Semester-wise notes", "Topic summaries", "Solved examples & Q/A banks"],
	},
	{
		slug: "assignment-writing",
		title: "Assignment Writing Service",
		tagline: "On-time, plagiarism-free assignments across subjects",
		description:
			"Detailed and original assignments crafted by experienced academic writers who understand university rubrics and grading patterns.",
		highlights: [
			"Research-backed content with citations",
			"Formatting as per university or journal style",
			"Unlimited minor revisions before submission",
		],
		deliverables: ["Assignments", "Case studies", "Book reviews", "Reflection papers"],
	},
	{
		slug: "hand-writing",
		title: "Hand-Writing Service",
		tagline: "Neat handwritten copies that meet exam standards",
		description:
			"Perfect for practical submissions or viva-ready notebooks, our handwriting experts deliver clean, legible pages that look like your own voice.",
		highlights: [
			"Custom handwriting styles available",
			"High-quality scanned PDFs or courier delivery",
			"Includes diagrams, charts, and labeling",
		],
		deliverables: ["Lab records", "Project journals", "Assignment notebooks"],
	},
	{
		slug: "search-engine-optimization",
		title: "Search Engine Optimization",
		tagline: "SEO support for marketing and management courses",
		description:
			"Complete SEO project files—from keyword research to reporting—crafted for BBA, MBA, and professional certification requirements.",
		highlights: [
			"Real tools and screenshots for authenticity",
			"Explained strategy and ROI breakdown",
			"Editable PPT and DOC formats",
		],
		deliverables: ["SEO audit reports", "Keyword research decks", "Execution roadmaps"],
	},
	{
		slug: "essay-writing",
		title: "Essay Writing",
		tagline: "Persuasive essays with strong arguments and structure",
		description:
			"From admission SOPs to literature critiques, get essays that reflect original thinking, impeccable grammar, and cohesive flow.",
		highlights: [
			"Multiple tone options (formal, reflective, storytelling)",
			"Proofread by language specialists",
			"Turnaround options from 6 hours to 3 days",
		],
		deliverables: ["Admission essays", "Literary analysis", "Reflective journals", "Opinion pieces"],
	},
	{
		slug: "web-content-writing",
		title: "Web Content Writing",
		tagline: "Professional content for academic marketing projects",
		description:
			"Engaging, SEO-aware copy for websites, campaigns, and portfolios—ideal for marketing, communication, and media studies students.",
		highlights: [
			"Keyword integration with readability focus",
			"Tone matching (corporate, conversational, academic)",
			"Includes meta data suggestions",
		],
		deliverables: ["Landing pages", "Emailers", "Campaign copy", "Brand stories"],
	},
	{
		slug: "dissertation-writing-service-2025",
		title: "Dissertation Writing Service 2025",
		tagline: "End-to-end dissertation and thesis mentoring",
		description:
			"Support for topic selection, proposal drafting, research, analysis, and final presentation—customized for 2025 academic guidelines.",
		highlights: [
			"Chapter-wise delivery and approvals",
			"Plagiarism reports with each milestone",
			"Data collection and analysis support",
		],
		deliverables: ["Proposal", "Literature review", "Data analysis", "Presentation deck"],
	},
	{
		slug: "phd-thesis-writing-service",
		title: "PHD Thesis Writing Service",
		tagline: "Scholarly research support for doctoral aspirants",
		description:
			"Collaborate with subject experts for drafting, editing, and formatting your PhD thesis while maintaining confidentiality.",
		highlights: [
			"Methodology refinement and tool selection",
			"Peer-review style editing",
			"Viva and defense preparation kits",
		],
		deliverables: ["Full thesis draft", "Publication support", "Defense-ready presentation"],
	},
	{
		slug: "synopsis-service",
		title: "Synopsis Service",
		tagline: "Crisp synopsis for approvals and project kick-offs",
		description:
			"We craft concise synopses that communicate objectives, methodology, and expected outcomes—helping you secure quick approvals.",
		highlights: [
			"Aligned with university templates",
			"Includes gantt charts / timelines",
			"Delivered in both DOC and PDF formats",
		],
		deliverables: ["Synopsis document", "Timeline plan", "Keyword list"],
	},
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);

