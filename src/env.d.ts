/// <reference types="@rsbuild/core/types" />

// SVG
declare module '*.svg' {
	const content: string;
	export default content as string;
}

// SVGR
declare module '*.svg?react' {
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
