{{! Enhanced template for the ColoredLines v1.0.2 }}
<div class="coloredlines decoration-{{decorativeStyle}}">
	<div class="color_divider_line" style="width: 100%; padding: 0 {{rightPadding}}px 0 {{leftPadding}}px; margin-top: {{topMargin}}px; margin-bottom: {{bottomMargin}}px; text-align: {{lineAlignment}}; position: relative;">
		
		{{! Center decorations: diamond, circle, star, heart }}
		<div class="decoration-center" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2;">
			<span class="decoration-element {{decorativeStyle}}" style="display: inline-block; width: {{decorationSize}}px; height: {{decorationSize}}px; background-color: {{decorationColor}}; vertical-align: middle;"></span>
		</div>
		
		{{! Main line element }}
		<span class="line-element" 
			  {{#enableGradient}}data-gradient="true"{{/enableGradient}}
			  {{#enableGlow}}data-glow="true"{{/enableGlow}}
			  data-style="{{lineStyle}}"
			  data-line-color="{{lineColor}}"
			  data-gradient-color="{{gradientColor}}"
			  data-gradient-dir="{{gradientDirection}}"
			  data-glow-color="{{glowColor}}"
			  data-glow-intensity="{{glowIntensity}}"
			  style="display: inline-block; 
			  		 position: relative;
					 width: {{lineWidth}}%; 
					 height: {{lineHeight}}px;
					 background-color: {{lineColor}};
					 border-radius: {{borderRadius}}px;">
			
			{{! End decorations: dots and arrows }}
			<span class="decoration-left" style="position: absolute; left: -{{decorationSize}}px; top: 50%; transform: translateY(-50%); width: {{decorationSize}}px; height: {{decorationSize}}px; background-color: {{decorationColor}}; color: {{decorationColor}};"></span>
			<span class="decoration-right" style="position: absolute; right: -{{decorationSize}}px; top: 50%; transform: translateY(-50%); width: {{decorationSize}}px; height: {{decorationSize}}px; background-color: {{decorationColor}}; color: {{decorationColor}};"></span>
		</span>
	</div>
</div>