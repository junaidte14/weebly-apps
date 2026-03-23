{{! Pricing Table }}
<div class="codo_pricing_container">
    {{#numberOfCards_each}}
    <div class="codo_pricing_card" data-index="{{numberOfCards_index}}">
        {{! Badge — only visible when JS adds codo_pricing_highlighted to this card }}
        <div class="codo_pricing_badge">
            {pricing_badge_{{numberOfCards_index}}:text default="Most Popular"}
        </div>
        {{! Features — rich content area so user can add styled list, icons etc. }}
        <div class="codo_pricing_features">
            {pricing_features_{{numberOfCards_index}}:content default="Feature One&#10;Feature Two&#10;Feature Three"}
        </div>
    </div>
    {{/numberOfCards_each}}
</div>
