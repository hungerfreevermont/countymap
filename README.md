# Hunger Free Vermont - County Map

NOTE: This script is built to allow use on other pages, but is currently tailored
to http://www.hungerfreevt.org/learn/statistics

In the < head > section of the page, include this line:

```html
<script type="text/javascript" src="https://raw.githubusercontent.com/hungerfreevermont/countymap/master/map_processor.js"></script>
```

Directly below the markup for the county map, place the following:

```html
<script>
  jQuery(function() {
    new mapProcessor(jQuery('img[alt=vermont_map]'), {
      mapname: 'hfvcounties',
      filepath: 'http://www.hungerfreevt.org/images/stories/pdfs/countysheets/',
      size: 'small'
    });
  });
</script>
```
