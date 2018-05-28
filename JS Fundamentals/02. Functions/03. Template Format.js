function templateFormat(questions) {
    let xml = "";
    xml += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<quiz>\n";
    xml += fillingQuestion(questions);
    xml+="</quiz>\n";

    console.log(xml);

    function fillingQuestion(questions) {
        let text='';
        for (let i = 0; i < questions.length; i += 2) {
            text+="  <question>\n";
            text+=`    ${questions[i]}\n`;
            text+="  </question>\n";

            text+="  <answer>\n";
            text+=`    ${questions[i+1]}\n`;
            text+="  </answer>\n";
        }

        return text;
    }



}


templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);

