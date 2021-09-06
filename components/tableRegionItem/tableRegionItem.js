var tableRegionItem = {}

tableRegionItem.render = (options) => {
   options =  $.extend({
      region: "",
      selected: undefined,
   },options)

      let $tpl = tableRegionItem.$tpl(options)
      const $radio = $tpl.find('.region-item__radio-btn')
      $radio.on("click", () => {

         $('.region-item').removeClass('region-item--checked')
         // issues with removing circle-check icon
         $tpl.find('i').remove(".fas")
         // 
         $tpl.find('.region-item').addClass('region-item--checked')
         $tpl.find('.region-item').append(`<i class="fas fa-check-circle"></i>`)

      })
   return $tpl
}

tableRegionItem.$tpl = (options) => {
   return $(`
      <label id="${options.id}" class="table-region__label">
         <div class="region-item">
            <input class="region-item__radio-btn" type="radio" checked=${options.selected} name="region" />
            <div class="region-item__content">
               <span>${options.region}</span>
            </div>
         </div> 
      </label>
   `)
}