'use strict';

(function() {
  var mapProcessor = function($replace, options) {
    var config,
        ext = '.jpg',
        getCounty,
        $img = jQuery('<img />'),
        initialize,
        self = {},
        urlBase = 'https://raw.githubusercontent.com/hungerfreevermont/countymap/master/images/';

    config = [
      {
        title: 'Grand Isle County',
        coords: '339,91,332,79,340,64,318,65,312,102,318,141,313,158,320,166,332,154'
      }, {
        title: 'Franklin County',
        coords: '406,130,414,112,439,106,444,109,450,101,446,62,420,61,344,63,336,79,344,87,339,130,386,147,399,130'
      }, {
        title: 'Orleans County',
        coords: '452,104,450,61,555,56,550,77,557,88,536,126,523,118,516,128,495,163,465,145,474,127,448,110'
      }, {
        title: 'Essex County',
        coords: '615,53,619,76,599,119,618,151,610,160,612,171,606,175,602,177,596,189,573,205,558,185,568,173,560,162,567,146,561,139,569,124,548,109,560,86,554,76,559,57'
      }, {
        title: 'Chittenden County',
        coords: '329,233,372,228,375,222,385,226,388,246,397,216,408,205,404,200,410,190,406,188,409,179,406,174,407,169,390,150,380,150,339,134,336,156,330,163,322,169,330,195,326,212,326,224'
      }, {
        title: 'Lamoille County',
        coords: '391,147,410,169,409,173,414,178,410,187,435,197,444,182,462,189,479,157,463,147,470,128,439,110,417,115,410,133,403,133'
      }, {
        title: 'Caledonia County',
        coords: '474,176,500,188,509,197,488,244,496,248,514,245,523,245,536,251,538,237,536,231,545,213,568,208,554,187,565,173,557,164,564,147,558,140,565,126,549,112,539,130,524,123,527,132,514,132,500,166,482,161'
      }, {
        title: 'Addison County',
        coords: '320,352,317,335,321,326,311,313,313,294,306,283,312,275,311,268,317,257,316,248,328,236,373,231,377,225,384,232,385,247,390,261,393,277,423,288,414,306,405,323,400,318,384,326,387,333,381,338,376,329,345,332,346,349'
      }, {
        title: 'Washington County',
        coords: '430,287,396,275,394,260,391,252,400,218,412,207,408,200,413,191,437,201,445,186,462,193,471,179,497,189,506,199,486,242,480,240,473,246,471,258,456,254,446,257'
      }, {
        title: 'Orange County',
        coords: '515,343,425,312,418,307,427,289,434,291,449,261,454,257,473,261,477,247,481,243,494,252,518,248,538,255,538,269,530,292,529,302,520,321'
      }, {
        title: 'Rutland County',
        coords: '343,454,345,407,336,394,336,386,331,383,324,383,319,392,313,384,315,374,322,364,321,355,350,352,348,335,374,333,379,343,401,331,418,337,413,352,415,362,432,368,417,402,418,411,429,420,426,437,419,439,410,439,407,454,393,454,390,458,372,453'
      }, {
        title: 'Windsor County',
        coords: '418,464,434,470,480,466,484,447,482,432,487,414,483,403,496,380,497,358,513,346,415,311,407,327,400,323,388,328,390,333,400,328,422,335,416,353,420,359,436,369,421,404,425,412,433,417,432,433,424,442,412,442,409,455,416,457'
      }, {
        title: 'Bennington County',
        coords: '400,585,344,584,340,576,343,561,342,540,343,458,371,457,389,462,394,457,407,458,414,459,413,464,407,498,386,496,385,544,400,544,398,576'
      }, {
        title: 'Windham County',
        coords: '403,585,482,584,464,564,467,540,478,526,477,507,480,495,475,486,480,469,453,472,436,473,415,467,410,489,413,500,390,500,388,541,404,542,401,570'
      }
    ];

    initialize = function($) {
      var i,
          $map = $('<map></map>'),
          $wrapper = $('<div></div>');

      $img.attr('src', urlBase + '0' + ext)
          .attr('usemap', options.mapname)
          .attr('alt', 'Vermont');

      $map.attr('name', options.mapname);

      for(i = 0; i < config.length; i += 1) {
        var $area = $('<area></area>');

        $area.attr('href', '#')
             .attr('coords', config[i].coords)
             .attr('shape', 'poly')
             .attr('alt', config[i].title)
             .attr('data-county', (i+1));

        $map.append($area);
      }

      $map.find('area').hover(self.hoverIn, self.hoverOut)
                       .click(self.handleClick);

      $wrapper.append($img)
              .append($map);

      $replace.replaceWith($wrapper);
    };

    self.handleClick = function() {
      var $el = jQuery(this),
          county = config[(parseInt($el.attr('data-county'))-1)];

      alert('clicked '+county.title);

      return false;
    };

    self.hoverIn = function() {
      var $el = jQuery(this),
          county = getCounty($el);

      $img.attr('src', urlBase + $el.attr('data-county') + ext);
    };

    self.hoverOut = function() {
      $img.attr('src', urlBase + '0' + ext);
    };

    // private

    getCounty = function($el) {
      return config[(parseInt($el.attr('data-county'))-1)];
    };

    initialize(jQuery);
  };

  new mapProcessor(jQuery('img[alt=vermont_map]'), {
    mapname: 'hfvcounties'
  });
})();
