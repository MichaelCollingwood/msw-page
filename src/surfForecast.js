const SurfForecastWidget = () => {
  return (
    <div>
      <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
      <div class="wf-width-cont surf-fc-widget">
        <div class="widget-container">
          <div class="external-cont">
            <iframe class="surf-fc-i" title="Surf Forecast" allowtransparency="true" src="//www.surf-forecast.com/breaks/Newquay-Town-Beach/forecasts/widget/m" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" />
            <div class="footer">
              <a class="logo" href="//www.surf-forecast.com/">
                <img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width="1" height="1" />
              </a>
              <div class="about" id="cmt">
                View detailed surf forecast for <a href="//www.surf-forecast.com/breaks/Newquay-Town-Beach">Newquay Town Beach</a>. Visit <a href="//www.surf-forecast.com/breaks/Newquay-Town-Beach">surf-forecast.com</a> for more details, long range forecasts, surf reports, swell and weather maps.
              </div>
            </div>
          </div>
        </div>
      </div>
      <link href="//www.surf-forecast.com/stylesheets/feed.css" media="screen" rel="stylesheet" type="text/css" /><div id="wf-weatherfeed"><iframe allowtransparency="true" height="272" width="469" src="//www.surf-forecast.com/breaks/Newquay-Town-Beach/forecasts/feed/a" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"><p>Your browser does not support iframes.</p></iframe><div id="wf-link"><a href="https://www.surf-forecast.com/"><img alt="Surf Forecast" src="//www.surf-forecast.com/images/feed/surflogo-150.jpg"/></a><p id="cmt">More <a href="//www.surf-forecast.com/breaks/Newquay-Town-Beach">Detailed Surf Conditions &amp; Webcams for&nbsp;Newquay Town Beach</a> <nobr>at&nbsp;<a href="//www.surf-forecast.com/">surf-forecast.com</a></nobr>.</p><div></div></div></div>
    </div>
  )
}

export default SurfForecastWidget;