$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template= $('#cat-template').html();
        let compiled= Handlebars.compile(template);
        let render=compiled({
            cats:window.cats
        });
        $('#allCats').html(render);

        $('.btn-primary').on('click',function () {
            let clickedBtn=$(this);
            
            if (clickedBtn.text()==='Show status code'){
                clickedBtn.text('Hide status code')
            }else{
                clickedBtn.text('Show status code')
            }
            clickedBtn.next('div').toggle()
        })
    }

});
