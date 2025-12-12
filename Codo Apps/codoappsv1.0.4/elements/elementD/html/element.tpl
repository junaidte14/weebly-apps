{{! template for the SEOHeadlines.}}
<div class="seoheadlines use-bg-color-{{useBgColor}} use-font-family-{{useFontFamily}}">
	{{#useFontSize}}
	<{{selectHeadline}} style="border: {{borderThickness}}px {{borderStyle}} {{borderColor}}; border-radius: {{borderRadius}}px; font-size: {{customFontSize}}px;">
	{{/useFontSize}}
	{{^useFontSize}}
	<{{selectHeadline}} style="border: {{borderThickness}}px {{borderStyle}} {{borderColor}}; border-radius: {{borderRadius}}px;">
	{{/useFontSize}}
		{{headingText}}
	</{{selectHeadline}}>
</div>

