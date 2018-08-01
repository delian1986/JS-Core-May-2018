$(() => {
    const templates = {};

    const context = {
        contacts: []
    };

    const listContent = $('#list').find('.content');
    const detailsContent = $('#details').find('.content');

    getData();
    loadTemplates();

    async function getData() {
        context.contacts = await $.get('data.json');
    }

    async function loadTemplates() {
        const [contactSource, listSource, detailSource] = await Promise.all([
            $.get('templates/contact.hbs'),
            $.get('templates/contactList.hbs'),
            $.get('templates/details.hbs')
        ]);
        Handlebars.registerPartial('contact', contactSource);
        templates.list = Handlebars.compile(listSource);
        templates.details = Handlebars.compile(detailSource);
        renderList();
    }

    function renderList() {
        listContent.html(templates.list(context));

        //handle click event
        $('#list').find('.content').on('click', function (e) {
            //remove all highlights
            $('#list').find('.contact').removeClass('selected');

            //add highlighting to clicked contact
            $(e.target).closest('.contact').addClass('selected');

            let index = $(e.target).closest('.contact').attr('data-index');
            renderDetails(index);
        })
    }

    function renderDetails(index) {
        detailsContent.html(templates.details(context.contacts[index]))
    }
});