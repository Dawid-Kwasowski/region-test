var tableRegions = {}

tableRegions.$table = undefined

tableRegions.render = options => {
   options = $.extend({
      id: "",
      name: "",
      regions: []
   },options)
   return tableRegions.$tpl(options)
}

tableRegions.$tpl = options => {
   return $(`
      <div class="table-region">
         <div class="table-region__name">${options.name}</div>
         <label id="${options.id}" class="table-region__label">
         </label>
      </div>
   `) 
}

setTimeout(() => {
   tableRegions.$table = $('.modal-body').find(`#TIR1`).append(
      tableRegionItem.render({
         region: ""
      })
   )  
},1000)