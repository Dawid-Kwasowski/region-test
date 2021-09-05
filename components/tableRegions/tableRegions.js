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
   tableRegions.$table = $('.table-region').find(`#TIR1`).append(
      tableRegionItem.render({
         region: "Łódź",
         selected: true
      })
   )
   tableRegions.$table = $('.table-region').find(`#TIR1`).append(
      tableRegionItem.render({
         region: "Kujawy",
         selected: false
      })
   )
   tableRegions.$table = $('.table-region').find(`#TIR2`).append(
      tableRegionItem.render({
         region: "Warszawa",
         selected: false
      })
   )
   tableRegions.$table = $('.table-region').find(`#TIR2`).append(
      tableRegionItem.render({
         region: "Nowy Dwór Mazowiecki",
         selected: true
      })
   )
},1000)