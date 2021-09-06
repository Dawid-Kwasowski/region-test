var tableRegions = {}

tableRegions.$table = undefined

tableRegions.render = options => {
   options = $.extend({
      id: "",
      name: "",
   },options)
   return tableRegions.$tpl(options)
}

tableRegions.$tpl = options => {
   return $(`
      <div id="${options.id}" class="table-region">
         <div class="table-region__name">${options.name}</div>
      </div>
   `)
}
// append tableRegionsItem to group by id

setTimeout(() => {
   tableRegions.$table = $('#TIR1').append(
      tableRegionItem.render({
         region: "Łódź",
         selected: true
      })
   )
   tableRegions.$table = $('#TIR1').append(
      tableRegionItem.render({
         region: "Kujawy",
         selected: false
      })
   )
   tableRegions.$table = $(`#TIR2`).append(
      tableRegionItem.render({
         region: "Warszawa",
         selected: false
      })
   )
   tableRegions.$table = $(`#TIR2`).append(
      tableRegionItem.render({
         region: "Nowy Dwór Mazowiecki",
         selected: false
      })
   )
},1000)