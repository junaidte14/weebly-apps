<!--/*Credits: https://www.w3schools.com/howto/howto_css_image_overlay.asp*/-->
{{! template for the ImageOverlay.}}
<div class="codo_imgoverlay_container codo-imgoverlay-{{overlayEffect}} codo-img-full-{{img-full-width}} img-over-img-{{img-over-img}}" style="min-height:{{overlayHeight}}px;">
    <div class="codo_imgoverlay_image">{codo_imgoverlay_image:image max-width="350" max-height="350"}</div>
    <div class="codo_imgoverlay_overlay" style="min-height:{{overlayHeight}}px;">
        <div class="codo_imgoverlay_text">{codo_imgoverlay_content:content}</div>
    </div>
</div>