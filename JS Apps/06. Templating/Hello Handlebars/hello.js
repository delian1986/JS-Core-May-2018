let data={
    title:'I am cool title',
    body:'I am cool body'
};

(async function getTemplate() {
   let temp=await $.get('template.hbs');

    let list=Handlebars.compile(temp);
    $('#content').html(list(data))
})();


