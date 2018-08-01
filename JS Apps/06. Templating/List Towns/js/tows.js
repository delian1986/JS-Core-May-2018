function attachEvents() {
    $('#btnLoadTowns').on('click',function () {
        let towns=$('#towns').val()
            .split(', ')
            .map(e=>({name:e}));
        console.log(towns);
        renderTowns(towns)
    });

    function renderTowns(towns) {
       let template=$('#towns-template').html();
       let compiled=Handlebars.compile(template);

       let rendered=compiled({
           towns:towns
       });

       $('#root').html(rendered);
    }
}