<style>
/* ════════════════════════════════════════
   KEYFRAMES — all 20 animations
   ════════════════════════════════════════ */
 
/* Fade */
@keyframes codo_fadeInUp        { from { opacity:0; transform:translateY( 100px); }  to { opacity:1; transform:translateY(0); } }
@keyframes codo_fadeInDown      { from { opacity:0; transform:translateY(-100px); }  to { opacity:1; transform:translateY(0); } }
@keyframes codo_fadeInLeft      { from { opacity:0; transform:translateX( 100px); }  to { opacity:1; transform:translateX(0); } }
@keyframes codo_fadeInRight     { from { opacity:0; transform:translateX(-100px); }  to { opacity:1; transform:translateX(0); } }
 
/* Slide (no fade) */
@keyframes codo_slideInUp       { from { transform:translateY( 100px); } to { transform:translateY(0); } }
@keyframes codo_slideInDown     { from { transform:translateY(-100px); } to { transform:translateY(0); } }
@keyframes codo_slideInLeft     { from { transform:translateX( 100px); } to { transform:translateX(0); } }
@keyframes codo_slideInRight    { from { transform:translateX(-100px); } to { transform:translateX(0); } }
 
/* Zoom */
@keyframes codo_zoomIn          { from { opacity:0; transform:scale(0.6); }   to { opacity:1; transform:scale(1); } }
@keyframes codo_zoomInUp        { from { opacity:0; transform:scale(0.6) translateY( 100px); } to { opacity:1; transform:scale(1) translateY(0); } }
@keyframes codo_zoomOut         { from { opacity:0; transform:scale(1.3); }   to { opacity:1; transform:scale(1); } }
 
/* Bounce */
@keyframes codo_bounceIn {
    0%   { opacity:0; transform:scale(0.4); }
    55%  { opacity:1; transform:scale(1.1); }
    75%  { transform:scale(0.95); }
    90%  { transform:scale(1.03); }
    100% { transform:scale(1); }
}
@keyframes codo_bounceInUp {
    0%   { opacity:0; transform:translateY(80px); }
    55%  { opacity:1; transform:translateY(-18px); }
    75%  { transform:translateY(8px); }
    90%  { transform:translateY(-4px); }
    100% { transform:translateY(0); }
}
@keyframes codo_bounceInLeft {
    0%   { opacity:0; transform:translateX(80px); }
    55%  { opacity:1; transform:translateX(-18px); }
    75%  { transform:translateX(8px); }
    100% { transform:translateX(0); }
}
 
/* Flip */
@keyframes codo_flipInX {
    from { opacity:0; transform:perspective(600px) rotateX(-80deg); }
    to   { opacity:1; transform:perspective(600px) rotateX(0deg); }
}
@keyframes codo_flipInY {
    from { opacity:0; transform:perspective(600px) rotateY(-80deg); }
    to   { opacity:1; transform:perspective(600px) rotateY(0deg); }
}
 
/* Rotate */
@keyframes codo_rotateIn {
    from { opacity:0; transform:rotate(-180deg) scale(0.6); }
    to   { opacity:1; transform:rotate(0deg) scale(1); }
}
 
/* Attention */
@keyframes codo_pulse {
    0%,100% { transform:scale(1); }
    50%      { transform:scale(1.06); }
}
@keyframes codo_shake {
    0%,100% { transform:translateX(0); }
    15%     { transform:translateX(-8px); }
    30%     { transform:translateX(8px); }
    45%     { transform:translateX(-6px); }
    60%     { transform:translateX(6px); }
    75%     { transform:translateX(-3px); }
    90%     { transform:translateX(3px); }
}
@keyframes codo_swing {
    0%,100% { transform:rotate(0deg); }
    20%     { transform:rotate(12deg); }
    40%     { transform:rotate(-8deg); }
    60%     { transform:rotate(5deg); }
    80%     { transform:rotate(-3deg); }
}
@keyframes codo_rubberBand {
    0%,100% { transform:scale(1,1); }
    30%     { transform:scale(1.2,0.8); }
    50%     { transform:scale(0.9,1.1); }
    65%     { transform:scale(1.05,0.95); }
    75%     { transform:scale(0.97,1.02); }
}
@keyframes codo_jello {
    0%,11%,100% { transform:skewX(0) skewY(0); }
    22%         { transform:skewX(-12deg) skewY(-12deg); }
    33%         { transform:skewX(9deg) skewY(9deg); }
    44%         { transform:skewX(-6deg) skewY(-6deg); }
    55%         { transform:skewX(4deg) skewY(4deg); }
    67%         { transform:skewX(-2deg) skewY(-2deg); }
    78%         { transform:skewX(1deg) skewY(1deg); }
}
</style>

<div class="codo-anim-container"
     data-anim="{{animation}}"
     data-trigger="{{trigger}}"
     data-duration="{{duration}}s"
     data-delay="{{delay}}s"
     data-color-style="{{colorStyle}}"
     data-fill-color="{{fillColor}}"
     data-grad-from="{{gradientFrom}}"
     data-grad-to="{{gradientTo}}">
    
    {codo_anim_content:content default="Animate this content!"}
    
</div>