var regionList = {}
// Region list is a modal
regionList.$modal = undefined
   // append grouped list to modal body 
regionList.init = () => {
   regionList.$modal = $('.modal-body').append(
      tableRegions.render({
         id: "TIR1",
         name: "TIR #1",
      })
   )
   regionList.$modal = $('.modal-body').append(
      tableRegions.render({
         id: "TIR2",
         name: "TIR #2",
      })
   )
   $('.modal').show()
}