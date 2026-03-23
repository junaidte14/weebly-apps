<div class="codo_slider_wrapper">
    <div class="codo_slider_viewport">
        <div class="codo_slider_track">
            {{#numberOfSlides_each}}
            <div class="codo_slider_slide" data-slide-num="{{numberOfSlides_index}}">
                {slider_content_{{numberOfSlides_index}}:content default="Add your slide content here — text, images, buttons, anything."}
            </div>
            {{/numberOfSlides_each}}
        </div>
    </div>

    {{#showArrows}}
    <button class="codo_slider_prev" aria-label="Previous slide">&#8592;</button>
    <button class="codo_slider_next" aria-label="Next slide">&#8594;</button>
    {{/showArrows}}

    {{#showDots}}
    <div class="codo_slider_dots"></div>
    {{/showDots}}

    {{#autoplay}}
    <div class="codo_slider_progress">
        <div class="codo_slider_progress_bar"></div>
    </div>
    {{/autoplay}}
</div>