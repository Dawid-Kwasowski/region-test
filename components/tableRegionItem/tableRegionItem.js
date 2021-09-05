var tableRegionItem = {}

tableRegionItem.render = (options) => {
   options =  $.extend({
      region: "",
      selected: undefined,
   },options)

   let $tpl = tableRegionItem.$tpl(options)
   
   if(options.selected) {
      $tpl.addClass('region-item--checked')
      $tpl.append(`<i class="fas fa-check-circle"></i>`)
   }
   return $tpl
}

tableRegionItem.$tpl = (options) => {
   return $(`
      <div class="region-item">
         <input class="region-item__radio-btn" type="radio" name="region" />
         <div class="region-item__content">
            <span>${options.region}</span>
         </div>
      </div>   
   `)
}