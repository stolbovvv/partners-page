/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import('stylelint').Config}
 * */
export default {
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order'],

	rules: {
		'order/order': ['custom-properties', 'declarations'],
		'order/properties-order': [
			{
				groupName: 'Positioning',
				properties: [
					'all',
					'position',
					'top',
					'right',
					'bottom',
					'left',
					'inset',
					'inset-block',
					'inset-block-start',
					'inset-block-end',
					'inset-inline',
					'inset-inline-start',
					'inset-inline-end',
					'z-index',
				],
			},
			{
				groupName: 'Layout',
				properties: [
					'display',
					'grid-template',
					'grid-template-rows',
					'grid-template-columns',
					'grid-template-areas',
					'grid-auto-rows',
					'grid-auto-columns',
					'grid-auto-flow',
					'grid-area',
					'grid-row',
					'grid-row-start',
					'grid-row-end',
					'grid-column',
					'grid-column-start',
					'grid-column-end',
					'flex',
					'flex-grow',
					'flex-shrink',
					'flex-basis',
					'flex-flow',
					'flex-direction',
					'flex-wrap',
					'place-content',
					'place-items',
					'place-self',
					'justify-content',
					'justify-items',
					'justify-self',
					'align-content',
					'align-items',
					'align-self',
					'gap',
					'row-gap',
					'column-gap',
				],
			},
			{
				groupName: 'Columns and Layouts',
				properties: [
					'columns',
					'column-count',
					'column-fill',
					'column-gap',
					'column-rule',
					'column-rule-color',
					'column-rule-style',
					'column-rule-width',
					'column-span',
					'column-width',
					'order',
					'float',
					'clear',
				],
			},
			{
				groupName: 'Spacing',
				properties: [
					'margin',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'margin-block',
					'margin-block-start',
					'margin-block-end',
					'margin-inline',
					'margin-inline-start',
					'margin-inline-end',
					'padding',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
					'padding-block',
					'padding-block-start',
					'padding-block-end',
					'padding-inline',
					'padding-inline-start',
					'padding-inline-end',
				],
			},
			{
				groupName: 'Box Model',
				properties: [
					'box-sizing',
					'aspect-ratio',
					'width',
					'min-width',
					'max-width',
					'inline-size',
					'min-inline-size',
					'max-inline-size',
					'height',
					'min-height',
					'max-height',
					'block-size',
					'min-block-size',
					'max-block-size',
					'overflow',
					'overflow-x',
					'overflow-y',
					'clip',
					'clip-path',
					'clip-rule',
				],
			},
			{
				groupName: 'Visual',
				properties: [
					'appearance',
					'box-shadow',
					'outline',
					'outline-width',
					'outline-style',
					'outline-offset',
					'border',
					'border-width',
					'border-style',
					'border-color',
					'border-top',
					'border-top-width',
					'border-top-style',
					'border-top-color',
					'border-bottom',
					'border-bottom-width',
					'border-bottom-style',
					'border-bottom-color',
					'border-left',
					'border-left-width',
					'border-left-style',
					'border-left-color',
					'border-right',
					'border-right-width',
					'border-right-style',
					'border-right-color',
					'border-radius',
					'border-collapse',
					'border-spacing',
					'background',
					'background-color',
					'background-image',
					'background-position',
					'background-repeat',
					'background-size',
					'background-clip',
					'background-origin',
					'background-attachment',
					'opacity',
					'visibility',
					'filter',
					'backdrop-filter',
					'mix-blend-mode',
					'isolation',
				],
			},
			{
				groupName: 'Typography',
				properties: [
					'color',
					'list-style',
					'list-style-position',
					'list-style-type',
					'list-style-image',
					'font',
					'font-family',
					'font-size',
					'font-size-adjust',
					'font-style',
					'font-weight',
					'font-variant',
					'font-stretch',
					'line-height',
					'text-align',
					'text-align-last',
					'text-indent',
					'text-transform',
					'text-decoration',
					'text-decoration-color',
					'text-decoration-line',
					'text-decoration-style',
					'text-decoration-thickness',
					'text-emphasis',
					'text-emphasis-color',
					'text-emphasis-position',
					'text-emphasis-style',
					'letter-spacing',
					'word-spacing',
					'white-space',
					'direction',
					'writing-mode',
				],
			},
			{
				groupName: 'Transforms',
				properties: ['transform', 'transform-box', 'transform-origin', 'transform-style'],
			},
			{
				groupName: 'Animations',
				properties: [
					'transition',
					'transition-delay',
					'transition-duration',
					'transition-property',
					'transition-timing-function',
					'animation',
					'animation-delay',
					'animation-direction',
					'animation-duration',
					'animation-fill-mode',
					'animation-iteration-count',
					'animation-name',
					'animation-play-state',
					'animation-timing-function',
				],
			},
			{
				groupName: 'Interaction',
				properties: [
					'cursor',
					'pointer-events',
					'user-select',
					'resize',
					'touch-action',
					'will-change',
					'caret-color',
					'tab-size',
					'scroll-behavior',
					'scroll-margin',
					'scroll-margin-top',
					'scroll-margin-right',
					'scroll-margin-bottom',
					'scroll-margin-left',
					'scroll-padding',
					'scroll-padding-top',
					'scroll-padding-right',
					'scroll-padding-bottom',
					'scroll-padding-left',
					'scroll-snap-align',
					'scroll-snap-stop',
					'scroll-snap-type',
				],
			},
		],
		'color-named': 'never',
		'color-hex-length': 'long',
		'color-no-invalid-hex': true,
		'color-function-notation': 'legacy',
		'alpha-value-notation': 'number',
		'value-keyword-case': null,
		'custom-property-empty-line-before': null,
		'hue-degree-notation': 'number',
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'font-family-name-quotes': null,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'numeric',
		'declaration-no-important': [
			true,
			{
				severity: 'warning',
			},
		],
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-syntaxes'],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 1,
		'property-no-unknown': true,
		'unit-no-unknown': true,
		'string-no-newline': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'selector-class-pattern': [
			'^[a-z]([-|:]?[a-z0-9]+)*(__[a-z0-9]([-|:]?[a-z0-9]+)*)?(--[a-z0-9]([-|:]?[a-z0-9]+)*)?$',
			{
				resolveNestedSelectors: true,
			},
		],
		'length-zero-no-unit': true,
		'media-feature-range-notation': 'context',
	},
};
