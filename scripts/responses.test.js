const getBotResponse = require('./responses');

// Expected responses arrays (copied from responses.js for verification)
const hiResponses = ["Hello there", "Hi there", "Hey"];
const introResponses = ["I am Roby who is your chatbot", "I am Roby. I can help you to find educational information", "I am Roby. I like to helping you and talking long walks on the beach"];
const myNameResponses = ["My name is Roby", "I am Roby"];
const greetingsResponses = ["I am fine, what about you", "Fine, how about you?", "I am good. how about you?"];
const fineResponses = ["How may I assist you?", "How can I help you?", "What I can do for you?"];
const whatCanResponses = ["I can help you to find learning resources"];
const purposeResponses = ["The main purpose of the edication is to provide for the fullest possible development of each learner for living morally, creatively, and productively in a democratic society."];
const onlineEduResponses = ["Transitioning to online studies can be a hard move, especially if you are completely new to online or cloud-based learning."];
const hobbiesResponses = ["I love to talk with humans", "I like to make friends like you", "I love to learn human languages"];
const thankResponses = ["Most welcome", "Not an issue", "My pleasure", "Mention not"];
const chatEndResponses = ['Ok! bye', 'See you later', 'Bye, see you soon'];
const webDesignResponses = ['Want learn web design or want to advice to become a Web Designer?', 'Do you want to learn web design or are you want to guidence for enter to web design career?'];
const webDesignLearnResponses = ['Here is some usefull tips to learn web design faster. <br><br> 01. First of all learn HTML, CSS & JavaScript <br><br> 02. Play with Code at Codeacademy <br><br> 03.Pay Attention to Websites You Love <br><br> 04. Learn about CSS frameworks (Bootstrap, TailWind) <br><br> 05. Learn about JS frameworks (Angular, ReactJS, VeuJS) <br><br>06.Get Comfortable with Responsive web design <br><br> 07.Get Comfortable with SEO <br><br> Refer this link also <br> <a href="https://w3schools.com" target="_blank">Learn web design from W3 Schools</a>', 'Follow these usefull tips to learn web design within short time period. <br><br> 01. First of all learn HTML, CSS & JavaScript <br><br> 02. Play with Code at Codeacademy <br><br> 03.Pay Attention to Websites You Love <br><br> 04. Learn about CSS frameworks (Bootstrap, TailWind) <br><br> 05. Learn about JS frameworks (Angular, ReactJS, VeuJS) <br><br> 06.Get Comfortable with Responsive web design <br><br> 07.Get Comfortable with SEO <br><br> Refer this link also <br> <a href="https://w3schools.com" target="_blank">Learn web design from W3 Schools</a>'];
const webDesignCourseResponses = ['Follow these links to learn web design online. <br> <a href="https://w3schools.com" target="_blank">Learn zero to hero from W3 Schools<a> <br> <a href="https://cutt.ly/jnewRJ5" target="_blank">Alison free web design course<a> <br> <a href="https://cutt.ly/bnewmNC" target="_blank"> Webflow University <a> <br> <a href="https://cutt.ly/0newuek" target="_blank"> LearnCode.academy YouTube playlist <a> <br> <a href="https://cutt.ly/kned4KU" target="_blank"> Web Design for Beginners - Udemy.com<a>', 'Use these online resourses to learn web design. <br> <a href="https://w3schools.com" target="_blank">Learn zero to hero from W3 Schools<a> <br> <a href="https://cutt.ly/jnewRJ5" target="_blank">Alison free web design course<a> <br> <a href="https://cutt.ly/bnewmNC" target="_blank"> Webflow University <a> <br> <a href="https://cutt.ly/0newuek" target="_blank"> LearnCode.academy YouTube playlist <a> <br> <a href="https://cutt.ly/kned4KU" target="_blank"> Web Design for Beginners - Udemy.com <a>'];
const webDesignBecomeResponses = ['Here is some tips about how to become a web designer <br> 01. Understand the role <br> 02. Determine if web design is the right career for you <br> 03. Learn the skills and tools you need on the job <br> 04.Learn the business skills and tools you need for freelancing <br> 05. Find inspiration and connections in the community <br> 06. Take your first step toward becoming a web designer <br><br> Use these links to learn more about how to beacome a web designer <br> <a href="https://cutt.ly/kne5oU4">How to become a web designer in 2020</a> <br> <a href="https://cutt.ly/Jne5vAg">10 Best Steps Guide on How to Become a Web Designer</a>'];
const webDesignMoneyResponses = ['You can earn money as a web designer from following ways <br> 01. Work for a Design Agency <br> 02. Work as an In-House Designer <br> 03. Freelance <br> 04.Start Your Own Agency <br> 05. Start a Design Blog <br> 06. Create a Course <br><br> Use this links to learn more about how to earn money as a web designer <br> <a href="https://cutt.ly/Sne6VyL">9 Ways to Make Money as a Web Designer</a>'];
const webDevelopResponses = ['Want learn web development or want to advice to become a web developer?', 'Do you want to learn web development or are you want to guidence for enter to web development career?'];
const webDevelopLearnResponses = ['Here is some usefull tips to learn web design faster. <br><br> 01. Learn the Basics of HTML, CSS, and Javascript <br><br> 02. Get to Know UI and UX <br><br> 03.Learn SQL and PHP <br><br> 04. Learn the Basics of SEO <br><br> 05. Make sure the site is responsive <br><br> Use this link to learn web development free <br> <a href="https://cutt.ly/znrucrI" target="_blank">Free Web Development Courses by Udemy<a>', 'Follow these usefull tips to learn web design within short time period. <br><br> 01. Learn the Basics of HTML, CSS, and Javascript <br><br> 02. Get to Know UI and UX <br><br> 03.Learn SQL and PHP <br><br> 04. Learn the Basics of SEO <br><br> 05. Make sure the site is responsive <br><br> Use this link to learn web development free <br> <a href="https://cutt.ly/znrucrI" target="_blank">Free Web Development Courses by Udemy<a>'];
const webDevelopCourseResponses = ['Follow these links to learn web development online. <br> <a href="https://cutt.ly/8nrupJE" target="_blank">Web Development Courses by Coursera<a> <br> <a href="https://cutt.ly/znrucrI" target="_blank">Free Web Development Courses by Udemy<a> <br> <a href="https://cutt.ly/cnruDgO" target="_blank"> Learn web development by Mozilla Developer Network <a>', 'Use these online resourses to learn web development. <br> <a href="https://cutt.ly/8nrupJE" target="_blank">Web Development Courses by Coursera<a> <br> <a href="https://cutt.ly/znrucrI" target="_blank">Free Web Development Courses by Udemy<a> <br> <a href="https://cutt.ly/cnruDgO" target="_blank"> Learn web development by Mozilla Developer Network <a>'];
const webDevelopBecomeResponses = ['Here is some tips about how to become a web developer <br> 01. Build a Portfolio Site <br> 02. Do Freelance Projects <br> 03. Put Your Code on GitHub <br> 04.Network with Other Web Developers <br> 05. Participate in a Hackathon'];
const webDevelopMoneyResponses = ['You can earn money as a web designer from following ways <br> 01. Reach Out to Local Small Businesses <br> 02. build a SAAS (Software as a Service) <br> 03. Freelance <br> 04.Create a blog and monetize it <br> 05. create a web development YouTube channel <br> 06. participate in paid coding challenges'];
const fallbackResponse = "Sorry! Did not get it. Still I am learning humans' languages. But I provide a Google search related to your question.";


describe('getBotResponse', () => {
    // Mock window.open
    global.open = jest.fn();

    test('should return a hi response for "hi"', () => {
        expect(hiResponses).toContain(getBotResponse('hi'));
    });

    test('should return a hi response for "hello"', () => {
        expect(hiResponses).toContain(getBotResponse('hello'));
    });

    test('should return an intro response for "who are you"', () => {
        expect(introResponses).toContain(getBotResponse('who are you'));
    });

    test('should return a name response for "what is your name?"', () => {
        expect(myNameResponses).toContain(getBotResponse('what is your name?'));
    });

    test('should return a greetings response for "how are you"', () => {
        expect(greetingsResponses).toContain(getBotResponse('how are you'));
    });

    test('should return a fine response for "i am good"', () => {
        expect(fineResponses).toContain(getBotResponse('i am good'));
    });

    test('should return a WhatCan response for "what can you do"', () => {
        expect(whatCanResponses).toContain(getBotResponse('what can you do'));
    });

    test('should return a purpose response for "purpose of education"', () => {
        expect(purposeResponses).toContain(getBotResponse('purpose of education'));
    });

    test('should return an OnlineEdu response for "online learn"', () => {
        expect(onlineEduResponses).toContain(getBotResponse('online learn'));
    });

    test('should return a hobbies response for "what is your hobby"', () => {
        expect(hobbiesResponses).toContain(getBotResponse('what is your hobby'));
    });

    test('should return a thank response for "thank you"', () => {
        expect(thankResponses).toContain(getBotResponse('thank you'));
    });

    test('should return a ChatEnd response for "bye"', () => {
        expect(chatEndResponses).toContain(getBotResponse('bye'));
    });

    // WebDesign Intents
    test('should return a WebDesign response for "web design"', () => {
        expect(webDesignResponses).toContain(getBotResponse('web design'));
    });

    test('should return a WebDesignLearn response for "learn web design"', () => {
        expect(webDesignLearnResponses).toContain(getBotResponse('learn web design'));
    });

    test('should return a WebDesignCourse response for "web design course"', () => {
        expect(webDesignCourseResponses).toContain(getBotResponse('web design course'));
    });

    test('should return a WebDesignBecome response for "become web designer"', () => {
        expect(webDesignBecomeResponses).toContain(getBotResponse('become web designer'));
    });
     test('should return a WebDesignBecome response for "web design career"', () => {
        expect(webDesignBecomeResponses).toContain(getBotResponse('web design career'));
    });

    test('should return a WebDesignMoney response for "earn money web design"', () => {
        expect(webDesignMoneyResponses).toContain(getBotResponse('earn money web design'));
    });
     test('should return a WebDesignMoney response for "make money web design"', () => {
        expect(webDesignMoneyResponses).toContain(getBotResponse('make money web design'));
    });

    // WebDevelop Intents
    test('should return a WebDevelop response for "web develop"', () => {
        expect(webDevelopResponses).toContain(getBotResponse('web develop'));
    });

    test('should return a WebDevelopLearn response for "learn web develop"', () => {
        expect(webDevelopLearnResponses).toContain(getBotResponse('learn web develop'));
    });

    test('should return a WebDevelopCourse response for "web develop course"', () => {
        expect(webDevelopCourseResponses).toContain(getBotResponse('web develop course'));
    });

    test('should return a WebDevelopBecome response for "become web developer"', () => {
        expect(webDevelopBecomeResponses).toContain(getBotResponse('become web developer'));
    });
    test('should return a WebDevelopBecome response for "web develop career"', () => {
        expect(webDevelopBecomeResponses).toContain(getBotResponse('web develop career'));
    });

    test('should return a WebDevelopMoney response for "earn money web develop"', () => {
        expect(webDevelopMoneyResponses).toContain(getBotResponse('earn money web develop'));
    });
    test('should return a WebDevelopMoney response for "make money web develop"', () => {
        expect(webDevelopMoneyResponses).toContain(getBotResponse('make money web develop'));
    });
    
    // Case-insensitivity
    test('should return a hi response for "HI" (case-insensitive)', () => {
        expect(hiResponses).toContain(getBotResponse('HI'));
    });

    // Fallback response
    test('should return fallback response for unrecognized input', () => {
        const response = getBotResponse('unrecognized input');
        expect(response).toBe(fallbackResponse);
        // expect(global.open).toHaveBeenCalledWith('https://www.google.com/search?q=unrecognized input'); // Temporarily commented out
    });
});
