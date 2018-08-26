function formatHelper(str) {
    let text=str[0];
    text=text.replace(/[.,!?:;]\s*/g,(match)=>match.trim()+" ");
    text=text.replace(/\s*[.,!?:;]/g,(match)=>match.trim());
    text=text.replace(/\.\s*\.\s*\.\s*!/g,"...!");
    text=text.replace(/(\.\s+)(\d)/g,(match,grp1,grp2)=>grp1.trim()+grp2);
    text=text.replace(/"([^"]+)"/g,(match,grp1)=>`"${grp1.trim()}"`);

    console.log(text);
}

formatHelper(['Terribly . . . !formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);