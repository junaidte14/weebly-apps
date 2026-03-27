{{! template for the Multi Column Blog.}}
<div class="multicolumnsblog">
	<p>This section will not be visible in live published website. Below are your current settings: 
		</br><hr>Current Number Of Columns are = <span style="color: green;">{{blogcolumns}}</span>
		</br><hr>Expand Posts Area = <span style="color: green;">{{expand-posts-area}}</span>
		</br><hr>Gap/Space Between Posts = <span style="color: green;">{{cardGap}}px</span>
		</br><hr>Blog Post Style = <span style="color: green;">{{postStyle}}</span>
		</br><hr>Use of custom card colors instead of default colors = <span style="color: green;">{{custom-card-colors}}</span>
		</br><hr>Blog Post Card Background Color = <span style="background-color: {{cardBgColor}}; width: 50px; height: 20px;">current color</span>
		</br><hr>Blog Post Card Shadow Color = <span style="background-color: {{cardShadowColor}}; width: 50px; height: 20px;">current color</span>
		</br><hr>Blog Post Card Border Color = <span style="background-color: {{cardBorderColor}}; width: 50px; height: 20px;">current color</span>
		</br><hr><span>Publish the website and visit your blog page to see the results</span>
	</p>
</div>
<script>
 var blogColumns = "blog-columns-{{blogcolumns}}";
 var expandPostsArea = "expand-posts-area-{{expand-posts-area}}";
 var postStyle = "post-style-{{postStyle}}";
 var customCardColors = "custom-card-colors-{{custom-card-colors}}";
 var cardBgColor = "{{cardBgColor}}";
 var cardShadowColor = "{{cardShadowColor}}";
 var cardBorderColor = "{{cardBorderColor}}";
</script>