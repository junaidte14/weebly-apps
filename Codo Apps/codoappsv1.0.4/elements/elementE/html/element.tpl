<div class="video-lightbox text-align-{{textAlignment}} video-type-{{videoType}}">
	<div class="youtube-lightbox">

		<div class="youtube-auto-link-{{autoThumb}}">
			<a class="youtube-auto-thumb" href="#youtubevid{{uniqueId}}" onclick="document.getElementById('ytiframe{{uniqueId}}').src = 'https://www.youtube.com/embed/{{videoId}}?autoplay=0&autohide=1&rel=0&showinfo=0';">
				<img src="http://img.youtube.com/vi/{{videoId}}/0.jpg" style="width: 100%;"/>
			</a>
			<a class="youtube-manual-thumb" href="#youtubevid{{uniqueId}}" onclick="document.getElementById('ytiframe{{uniqueId}}').src = 'https://www.youtube.com/embed/{{videoId}}?autoplay=0&autohide=1&rel=0&showinfo=0';">
				<img src="{{youtubeThumbnail}}" style="width: 100%;"/>
			</a>
		</div>
		<div id="youtubevid{{uniqueId}}" class="lbox">
		   <div class="vid">
		   		<iframe id="ytiframe{{uniqueId}}" src="https://www.youtube.com/embed/{{videoId}}?autoplay=0&autohide=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
		   </div>
		   <a href="#_" onclick="document.getElementById('ytiframe{{uniqueId}}').src = '';"><label class="lightboxclose"><span></span></label></a>
		</div>

	</div>

	<div class="vimeo-lightbox">

		<a href="#vimeovid{{uniqueId}}"  onclick="document.getElementById('vmiframe{{uniqueId}}').src = 'https://player.vimeo.com/video/{{videoId}}?title=0&byline=0&portrait=0';">
			<img src="{{vimeoThumbnail}}" style="width: 100%;"/>
		</a>
		<div id="vimeovid{{uniqueId}}" class="lbox">
		   	<div class="vid">
		   		<iframe id="vmiframe{{uniqueId}}" src="https://player.vimeo.com/video/{{videoId}}?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
		   	</div>
		   	<a href="#_" onclick="document.getElementById('vmiframe{{uniqueId}}').src = '';"><label class="lightboxclose"><span></span></label></a>
		</div>
	</div>
</div>

<script>
var ytiframeid = {{uniqueId}};
</script>