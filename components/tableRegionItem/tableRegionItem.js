var tableRegionItem = {}

tableRegionItem.render = (options) => {
   options =  $.extend({
      region: "",
      selected: false,
   },options)

   let $tpl = tableRegionItem.$tpl(options)
   options.regions.forEach(region => {
      $tpl.find('.region-item__content').text(region)
   });

   return $tpl
}

tableRegionItem.$tpl = (options) => {
   return $(`
      <div class="region-item">
         <input class="region-item__radio-btn" type="radio" checked="${options.selected}" name="region" />
         <div class="region-item__content">Łódź</div>
      </div>   
   `)
}