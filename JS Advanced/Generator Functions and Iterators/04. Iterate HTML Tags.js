function* iterateHTMLtags (html) {
    let regex=/<[^>]+>/g;
    let m;

    while (m=regex.exec(html)){
        let tag=m[0];
        yield tag
    }
}

let html = `<html><body>
<p align='center'><span lang='en'>Hello</span>, HTML
</p> Bye, bye</body></html>`;

for (let tag of iterateHTMLtags(html)) {
    console.log(tag);
}
