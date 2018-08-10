handlers.getSend = async function (ctx) {
    try {

        let users = await userServices.listAllUsers();
        let currentUser = sessionStorage.getItem('username');
        ctx.users = users.filter(e => e.username !== currentUser);
        users.forEach((e) => {
            ctx.name = e.name;
        });
        ctx.isAuth = auth.isAuth();
        ctx.loggedUser = sessionStorage.getItem('name');
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            user: 'templates/messages/user.hbs'
        }).then(function () {
            this.partial('templates/messages/sendMessageView.hbs')
        })
    } catch (e) {
        notify.handleError(e)
    }

};

handlers.sendMessage = function (ctx) {
    let text = ctx.params.text;
    let senderUsername = sessionStorage.getItem('username');
    let senderName = sessionStorage.getItem('name');
    let recipientUsername = ctx.params.recipient;
    if (senderName === '') {
        senderName = null;
    }

    let data = {
        "sender_username": senderUsername,
        "sender_name": senderName,
        "recipient_username": recipientUsername,
        "text": text
    };

    messagesServices.sendMessage(data)
        .then(function () {
            notify.showInfo('Message sent.');
            ctx.redirect('#/sent')
        }).catch(notify.handleError)
};

handlers.getSentArchive = async function (ctx) {
    let sentMessages = await messagesServices.sentArchive();
    ctx.sentMessages = sentMessages;

    sentMessages.forEach((m) => {
        m.recepientUser = m["recipient_username"];
        ctx.text = m.text;
        m.date = formatDate(m._kmd.lmt);
        m.messageId = m._id;
    });

    ctx.isAuth = auth.isAuth();
    ctx.loggedUser = sessionStorage['name'];

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        sentMessage: 'templates/messages/sentMessage.hbs'
    }).then(function () {
        this.partial('templates/messages/sentArchiveView.hbs')
    })
};

handlers.deleteSentMessage = function (ctx) {
    const messageId = ctx.params.messageId;

    messagesServices.deleteMessage(messageId)
        .then(function () {
            notify.showInfo('Message deleted.');
            ctx.redirect('#/sent')
        }).catch(notify.handleError)
};

handlers.viewMyMessages = async function (ctx) {
    let messages = await messagesServices.listMyMessages();
    ctx.isAuth=auth.isAuth();
    ctx.loggedUser=sessionStorage.getItem(['name']);
    ctx.receivedMessages = messages;
    messages.forEach((m) => {
        m.username = m.sender_username;
        m.name=m.sender_name;
        m.date = formatDate(m._kmd.lmt);
    });
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        receivedMessage: 'templates/messages/receivedMessage.hbs'
    }).then(function () {
        this.partial('templates/messages/myMessages.hbs')
    })
};




