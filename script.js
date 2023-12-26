const questions = [
    {
        question:"हिमालय भारत के किस भाग में स्थित है ?        ",
        answers: [
            { text: "पूरब            ", correct: false},
            { text: "पश्चिम            ", correct: false},
            { text: "उत्तर            ", correct: true},
            { text: "दक्षिण            ", correct: false},
        ] 
    },
    {
        question:"धरातल के वर्तमान स्वरूप की संरचना तथा परिवर्तन के संदर्भ में, निम्न में से कौन-सी प्रक्रिया अन्य तीन प्रक्रियाओं से भिन्न है?",
        answers: [
            { text: "भूकम्पीय प्रक्रियाएँ            ", correct: true},
            { text: "अपक्ष", correct: false},
            { text: "अपरदन", correct: false},
            { text: "निक्षेपण            ", correct: false},
        ] 
    },
    {
        question:"भारत का अत्याधिक उत्पादक क्षेत्र कौन-सा है ?        ",
        answers: [
            { text: "प्रायद्वीपीय पठार            ", correct: false},
            { text: "भारतीय रेगिस्तान            ", correct: false},
            { text: "तटीय मैदान            ", correct: false},
            { text: "उत्तरी मैदान            ", correct: true},
        ] 
    },
    {
        question:"तीन ओर से समुद्र से घिरे भू-भाग को कहा जाता है        ",
        answers: [
            { text: "तट", correct: false},
            { text: "द्वीप            ", correct: false},
            { text: "प्रायद्वीप            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं            ", correct: false},
        ] 
    },
    {
        question:"बाढ वाले मैदान तथा युवा निक्षेप क्या कहलाते है ?        ",
        answers: [
            { text: "बागंर            ", correct: false},
            { text: "खादर            ", correct: true},
            { text: "भाबर            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },
    {
        question:"भारत में खारे पानी की सबसे बड़ी झील कौन सी है?        ",
        answers: [
            { text: "सांभर झील            ", correct: false},
            { text: "चिल्का झील            ", correct: true},
            { text: "बुलर झील            ", correct: false},
            { text: "उल्लर झील            ", correct: false},
        ] 
    },
    {
        question:"भारत के पूर्वी भाग में म्यांमार के साथ अपनी सीमा बनाने वाली पर्वत श्रृंखलाओं को सामूहिक रूप से कहा जाता है        ",
        answers: [
            { text: "हिमाचल            ", correct: false},
            { text: "उत्तरांचल            ", correct: false},
            { text: "पूर्वांचल            ", correct: true},
            { text: "उपरोक्त में से कोई नहीं।            ", correct: false},
        ] 
    },
    {
        question:"पश्चिमी घाट का सबसे ऊँचा शिखर कौन-सा है ?        ",
        answers: [
            { text: "अनाई मुड़ी            ", correct: true},
            { text: "दोदा बेटा            ", correct: false},
            { text: "महेंद्र गिरी            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },
    {
        question:"मृदा के निर्माण तथा रंग के लिए निम्न में से कौन से तत्व उत्तरदायी है?        ",
        answers: [
            { text: "सिंचाई की सुविधाएँ            ", correct: false},
            { text: "वनस्पति का जलमग्न होना            ", correct: false},
            { text: "चट्टानों के विभिन्न प्रकार            ", correct: true},
            { text: "उर्वरकों का उपयोग            ", correct: false},
        ] 
    },
    {
        question:"गोवा के दक्षिण में पश्चिमी तटीय पट्टी को कहा जाता है        ",
        answers: [
            { text: "कोंकण            ", correct: false},
            { text: "उत्तर सरकार            ", correct: false},
            { text: "कोरोमंडल तट            ", correct: false},
            { text: "मालाबार तट            ", correct: true},
        ] 
    },
    {
        question:"प्रायद्वीपीय पठार की मृदा किस तरह की होती है ?        ",
        answers: [
            { text: "काली            ", correct: true},
            { text: "लाल            ", correct: false},
            { text: "भूरी            ", correct: false},
            { text: "इनमें से कोई नहीं।", correct: false},
        ] 
    },
    {
        question:"प्राचीन समय में हिमालय के स्थान पर कौन सा सागर अवस्थित था?        ",
        answers: [
            { text: "प्रशांत महासागर            ", correct: false},
            { text: "पैंथालासा            ", correct: false},
            { text: "टेथिस सागर            ", correct: true},
            { text: "हिंद महासागर            ", correct: false},
        ] 
    },
    {
        question:"पूर्वी घाट की सबसे ऊँची चोटी है        ",
        answers: [
            { text: "अनाई मुदिक            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "महेंद्रगिरि            ", correct: true},
            { text: "खासी।            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन-सा वक्तव्य प्लेट टैक्टोनिक के विषय में सत्य है?        ",
        answers: [
            { text: "भूपर्पटी विभिन्न कठोर तथा कोमल चट्टानों से बनी है।            ", correct: false},
            { text: "पृथ्वी की भूपर्पटी सात मुख्य तथा अनेक गौण चट्टानों से बनी है।            ", correct: true},
            { text: "पृथ्वी की भूपर्पटी पर अनेक भू-स्थल विद्यमान हैं।            ", correct: false},
            { text: "पृथ्वी की भूपर्पटी अपक्षय की प्रक्रियाओं के फलस्वरूप बदलती रहती है।            ", correct: false},
        ] 
    },
    {
        question:"विश्व की सबसे ऊँची चोटी कौन सी है ?        ",
        answers: [
            { text: "महेंद्रगिरि            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "नंदा देवी            ", correct: false},
            { text: "माउंट एवरेस्ट            ", correct: true},
        ] 
    },
    {
        question:"विश्व की सबसे ऊंची चोटी कौन सी है?        ",
        answers: [
            { text: "धौलागिरी            ", correct: false},
            { text: "कंचनजंगा            ", correct: false},
            { text: "माउंट एवरेस्ट            ", correct: true},
            { text: "K2", correct: false},
        ] 
    },
    {
        question:"माउंट एवरेस्ट किस देश में स्थित है?        ",
        answers: [
            { text: "भारत            ", correct: false},
            { text: "नेपाल            ", correct: true},
            { text: "चीन            ", correct: false},
            { text: "बांग्लादेश            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से किस चट्टान का प्रयोग ताजमहल के निर्माण में किया गया है ?        ",
        answers: [
            { text: "ग्रेनाइट            ", correct: false},
            { text: "मार्बल            ", correct: true},
            { text: "अवसादी            ", correct: false},
            { text: "एग्न्यू            ", correct: false},
        ] 
    },
    {
        question:"मसूरी किस राज्य में स्थित है?        ",
        answers: [
            { text: "उत्तराखंड                ", correct: true},
            { text: "हिमाचल प्रदेश            ", correct: false},
            { text: "सिक्किम            ", correct: false},
            { text: "जम्मू और कश्मीर            ", correct: false},
        ] 
    },
    {
        question:"भारत की सबसे ऊंची चोटी कौन सी है?        ",
        answers: [
            { text: "माउंट एवरेस्ट            ", correct: false},
            { text: "K2", correct: true},
            { text: "नंदादेवी            ", correct: false},
            { text: "उत्तराखंड            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से किसका प्रयोग टैल्कम पाऊडर बनाने में किया जाता है?        ",
        answers: [
            { text: "मार्बल            ", correct: false},
            { text: "ग्रेनाइट            ", correct: false},
            { text: "आग्नेय चट्टानें            ", correct: false},
            { text: "सोप स्टोन            ", correct: true},
        ] 
    },

    {
        question:"सिंधु और सतलुज नदी के बीच स्थित हिमालय को के रूप में जाना जाता है        ",
        answers: [
            { text: "असम हिमालय            ", correct: false},
            { text: "नेपाल हिमालय            ", correct: false},
            { text: "पंजाब हिमालय            ", correct: true},
            { text: "कुमाऊं हिमालय            ", correct: false},
        ] 
    },

    {
        question:"लाकाडिव, मिनिके और एमिनडिव को 1973 से किस नाम से जाना जाता है?        ",
        answers: [
            { text: "अंडमान द्वीप            ", correct: false},
            { text: "निकोबार द्वीप            ", correct: false},
            { text: "लक्षद्वीप            ", correct: true},
            { text: "अंडमान और निकोबार दोनों द्वीप            ", correct: false},
        ] 
    },

    {
        question:"सतलुज और काली नदियों के बीच स्थित हिमालय को कहा जाता है        ",
        answers: [
            { text: "कुमाऊं हिमालय            ", correct: true},
            { text: "नेपाल हिमालय            ", correct: false},
            { text: "पंजाब हिमालय            ", correct: false},
            { text: "असम हिमालय            ", correct: false},
        ] 
    },

    {
        question:"जब प्लेटें एक-दूसरे के समानान्तर चलती है तो निम्न में से किस प्लेट सीमा का निर्माण होता है?        ",
        answers: [
            { text: "अपसारी प्लेट            ", correct: false},
            { text: "ट्रांसफार्म प्लेट            ", correct: true},
            { text: "समानांतर प्लेट            ", correct: false},
            { text: "अभिसारी प्लेट            ", correct: false},
        ] 
    },

    {
        question:"काली और तीस्ता नदी के बीच स्थित हिमालय को के रूप में जाना जाता है        ",
        answers: [
            { text: "कुमाऊं हिमालय            ", correct: false},
            { text: "नेपाल हिमालय            ", correct: true},
            { text: "असम हिमालय            ", correct: false},
            { text: "पंजाब हिमालय            ", correct: false},
        ] 
    },

    {
        question:"लूनी नदी कहां बहती है?        ",
        answers: [
            { text: "थार मरुस्थल में            ", correct: true},
            { text: "उत्तर के मैदान में            ", correct: false},
            { text: "कश्मीर में            ", correct: false},
            { text: "प्रायद्वीप पठार में            ", correct: false},
        ] 
    },

    {
        question:"तीस्ता और दिहांग नदियों के बीच स्थित हिमालय को कहा जाता है        ",
        answers: [
            { text: "नेपाल हिमालय            ", correct: false},
            { text: "कुमाऊं हिमालय            ", correct: false},
            { text: "असम हिमालय            ", correct: true},
            { text: "पंजाब हिमालय            ", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन-सा देश गोंडवाना भू-भाग स्थल का एक भाग है ?        ",
        answers: [
            { text: "पाकिस्तान            ", correct: false},
            { text: "रूस            ", correct: false},
            { text: "दक्षिणी अफ्रीका            ", correct: true},
            { text: "कनाडा            ", correct: false},
        ] 
    },

    {
        question:"माजुली दुनिया का सबसे बड़ा बसा हुआ नदी द्वीप है। यह किस नदी में स्थित है?        ",
        answers: [
            { text: "सिंधु            ", correct: false},
            { text: "सतलजो            ", correct: false},
            { text: "ब्रह्मपुत्र            ", correct: true},
            { text: "गंगा                ", correct: false},
        ] 
    },

    {
        question:"दक्षिण भारत की सबसे ऊंची चोटी इनमें से कौन सी है?        ",
        answers: [
            { text: "डोडा बेटा            ", correct: false},
            { text: "अनाईमुडी            ", correct: true},
            { text: "महेंद्रगिरी            ", correct: false},
            { text: "पारसनाथ            ", correct: false},
        ] 
    },

    {
        question:"भारत का एकमात्र सक्रिय ज्वालामुखी पाया जाता है-        ",
        answers: [
            { text: "अंडमान और निकोबार            ", correct: true},
            { text: "लक्षद्वीप            ", correct: false},
            { text: "हिमाचल प्रदेश            ", correct: false},
            { text: "सिक्किम            ", correct: false},
        ] 
    },
    {
        question:"निम्न में से कौन भारत का प्राचीनतम भू-स्थल है ?        ",
        answers: [
            { text: "हिमालय पर्वत                ", correct: false},
            { text: "अरावली            ", correct: false},
            { text: "प्रायद्वीपीय पठार            ", correct: true},
            { text: "तटीय क्षेत्र            ", correct: false},
        ] 
    },

    {
        question:"प्लेट विवर्तनिक सिद्धांत से पृथ्वी की ऊपरी पर्पटी कैसी बनी है ?        ",
        answers: [
            { text: "पााच बडी प्लेटो से            ", correct: false},
            { text: "छः बडी प्लेटो से            ", correct: false},
            { text: "सात बडी प्लेटो से            ", correct: true},
            { text: "सात बडी तथा कुछ छोटी प्लेटो से            ", correct: false},
        ] 
    },

    {
        question:"हिमालय से निकलने वाली नदियां, जहां विलुप्त हो जाती हैं उसे क्या कहते हैं?        ",
        answers: [
            { text: "सोना            ", correct: false},
            { text: "खादर            ", correct: false},
            { text: "भाबर            ", correct: true},
            { text: "तराई          ", correct: false},
        ] 
    },

    {
        question:"पृथ्वी की प्लेटो के अंदर तथा ऊपर स्थित महाद्वीप शैलो मे दबाव किस के कारण उत्पन्न होता है ?        ",
        answers: [
            { text: "मैदानो की गति के कारण            ", correct: false},
            { text: "प्लेटो की स्थिति के कारण            ", correct: true},
            { text: "भूपर्पटी की गहराई के कारण            ", correct: false},
            { text: "इनमें से कोई नहीं।            ", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन विश्व के सर्वाधिक ज्वालामुखी तथा भूकम्प प्रभावित क्षेत्र है?        ",
        answers: [
            { text: "प्लेटों के किनारे            ", correct: true},
            { text: " सतह के नीचे            ", correct: false},
            { text: "प्लेटों के आन्तरिक भाग            ", correct: false},
            { text: "समुद्री तल            ", correct: false},
        ] 
    },

    {
        question:"महाद्वीपीय शैलो मे दबाव उत्पन्न होने के क्या परिणाम है?        ",
        answers: [
            { text: "वलन क्रिया            ", correct: false},
            { text: "भ्रंशीकरण            ", correct: false},
            { text: "ज्वालामुखीय क्रिया            ", correct: false},
            { text: "उपरोक्त सभी            ", correct: true},
        ] 
    },

    {
        question:"चिल्का झील भारत के किस राज्य में स्थित है?        ",
        answers: [
            { text: "आंध्र प्रदेश            ", correct: false},
            { text: "तमिल नाडू            ", correct: false},
            { text: "उड़ीसा            ", correct: true},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"भूपर्पटी की प्लेटो की गतियों से किसका निर्माण होता है ?        ",
        answers: [
            { text: "अभिसारी परिसीमा का            ", correct: false},
            { text: "अपसारी परिसीमा का            ", correct: false},
            { text: "सुपांतर परिसीमा का            ", correct: false},
            { text: "उपरोक्त सभी            ", correct: true},
        ] 
    },

    {
        question:"भारत का प्रायद्वीपीय पठार निम्न में से किस भूखण्ड का भाग है?        ",
        answers: [
            { text: "अंगारालैंड            ", correct: false},
            { text: "पैन्थालासा            ", correct: false},
            { text: "यूरेशियाई भू-स्थल            ", correct: false},
            { text: "गोंडवाना भू-स्थल            ", correct: true},
        ] 
    },

    {
        question:"भारत में पृथ्वी की सतह का सबसे प्राचीन भाग कौन-सा है ?        ",
        answers: [
            { text: "उत्तरी मैदान            ", correct: false},
            { text: "प्रायद्वीपीय पठार            ", correct: true},
            { text: "हिमालय क्षेत्र            ", correct: false},
            { text: "द्वीप समूह            ", correct: false},
        ] 
    },

    {
        question:"भारत के तमिलनाडु तट पर स्थित मैदान को किस नाम से जाना जाता है?        ",
        answers: [
            { text: "उत्तरी सरकार तट            ", correct: false},
            { text: "कोंकण तट            ", correct: false},
            { text: "मालाबार तट            ", correct: false},
            { text: "कोरोमंडल तट            ", correct: true},
        ] 
    },

    {
        question:"भारत की उत्तरी सीमा पर कौन-सी श्रृंखला है?        ",
        answers: [
            { text: "हिमालय            ", correct: true},
            { text: "अरावली            ", correct: false},
            { text: "सतपुडा            ", correct: false},
            { text: "नीलगिरी            ", correct: false},
        ] 
    },

    {
        question:"पश्चिमी एशिया की पर्वत श्रृंखला तथा हिमालय पर्वत का निर्माण निम्न में से किस कारणवश हुआ?        ",
        answers: [
            { text: "टेथिस सागर में अवसाद के जमाव के कारण।            ", correct: true},
            { text: "अरब सागर में अवसाद के जमाव के कारण।            ", correct: false},
            { text: "पैन्थालासा सागर में अवसाद के जमाव कारण।            ", correct: false},
            { text: "लाल सागर में अवसाद के जमाव के कारण।            ", correct: false},
        ] 
    },

    {
        question:"भारत के पूर्वी भाग में म्यांमार की सीमा का निर्धारण करने वाले पर्वतों का संयुक्त नाम        ",
        answers: [
            { text: "हिमाचल            ", correct: false},
            { text: "पूर्वांचल            ", correct: true},
            { text: "उत्तरांचल            ", correct: false},
            { text: "इनमें कोई नही            ", correct: false},
        ] 
    },

    {
        question:"विश्व की सबसे ऊँची पर्वत श्रेणी कौन-सी है?        ",
        answers: [
            { text: "आल्पस            ", correct: false},
            { text: "हिमालय            ", correct: true},
            { text: "एंडीज            ", correct: false},
            { text: "विंध्याचल            ", correct: false},
        ] 
    },

    {
        question:"जब प्लेटें एक दूसरे के पास आती है तब किस प्रकार की परिसीमा का निर्माण करती है?        ",
        answers: [
            { text: "अभिसारी परिसीमा            ", correct: true},
            { text: "अपसारी परिसीमा            ", correct: false},
            { text: "रूपांतरण परिसीमा            ", correct: false},
            { text: "इनमें से कोई नहीं            ", correct: false},
        ] 
    },

    {
        question:"भारत मे हिमालय का सबसे ऊँचा शिखर कौन-सा है ?        ",
        answers: [
            { text: "नामचा बरुआ            ", correct: false},
            { text: "अरावली पर्वत            ", correct: false},
            { text: "नंदा देवी            ", correct: false},
            { text: "कंचनजंगा            ", correct: true},
        ] 
    },

    {
        question:"भारत को निम्न में से कितने भौगोलिक भागों में बांटा गया है?        ",
        answers: [
            { text: "3            ", correct: false},
            { text: "4            ", correct: false},
            { text: "5            ", correct: false},
            { text: "6            ", correct: true},
        ] 
    },
   


































   
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 