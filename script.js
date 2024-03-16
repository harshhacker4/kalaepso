const testimonials = {"Khanak Gupta":"She is the best❤️ nd her choreography is just amazing",
                        "Abhishek Singh":"We hire them for our sangeet function, no doubt their work is amazing, highly recommend.",
                    "Pratiksha Panwar": "Had a wonderful experience with her . No doubt she is very talented . The best thing is she is very professional yet creates the feeling of belongingness. Her work was amazing and got many compliments for her choreography. ",
                "Sam mum":"She is a fabulous dancer. She knows how to teach a person according to their level. In short who don't know how to dance she make them dance gracefully.😊👌",
            "Tanishka Khandelwal":"had kanak as our choreographer for a wedding function and it was really fun and nice to learn dances from her. it was really nice to have her as our choreographer ",
            "Akshay Malhotra":"It was wonderful working with Kanak. The best part was her ability to understand the different levels that people were at and create steps accordingly. It allowed everyone in the family to participate wholeheartedly ",
            "Shilpa Khandelwal":"We were really grateful to have kanak as our wedding choreographer. She is very friendly and taught everyone very nicely from the little one to eldest one of our family.",
            "Priya Chaudhary":"I had good experience with the team. Kanak is a great choreographer and helped us deliver our 5 performances in a well-executed manner. She is friendly too so, makes you very comfortable. Sessions are only 2 hours, so you are able to learn the steps but definitely need further practice. Please book them few weeks before your event so that you get time for rehearsals too.",
            "Palak":"I had an amazing experience with Kanak as our wedding choreographer. Her sessions were not only affordable but also exceptionally well-executed. I just wish there had been more time for each performance to ensure perfection as only a limited time was allocated. However, I highly recommend Kanak for her expertise and pocket-friendly services; she truly made our wedding dance memorable.",
            "Vikas Gupta":"She’s a brilliant choreographer. She made the experience a lot of fun and thanks to her, I could dance onstage for the first time. 10/10 would recommend.",
            "Riya Malhotra":"Had an absolutely joyful experience dancing with Kanak! She was so patient with all of us and all the steps she taught were so up to the mark! Wanna thank her and the entire team for all the efforts in putting up our performances together! ✨",
            "Akansha asodia":"Had the best time learning from Kanak. She is truly amazing and professional.",
            "Diksha":"Kanak was amazing!! She handled our madness and made the guys in the group dance and have fun at the same time.They made the performances very easy to execute and adjusted the sound tracks as per our requirements.",
            "Maninder Singh":"She’s excellent! Really enoyed working with her. Would recommend 5/5.",
            "Palak":"Very nice experience and very nicely managed. Will definitely recommend. Took responsibility ",
            "Pushpa Singh":"We are really happy to have Kalaepso team for our function. Because they quote really genuine price and the choreography is very top notch. They teach with patients and in very familiar manner. They greet groom or bride with a beautiful planter 🥰😍that sweet gesture just make them like alot.Thank you kalaepso Team.",
        "Brijesh Kumar":"Recently we hire Kalaepso team for our daughter's Sangeet function. They are really professional but at the same time very familiar. They teach choreography with alot of patients.Also the prices are really affordable comparatively to others and quality of work is amazing. So without any doubt just go for it😍. Must recommend. Thank you kalaepso",
        "Pratik Solanki":"kanak is very professional and passionate with her work. Learning with her i realized that being a professional she is also able to understand the emotional importance of the performance for me, which really touched me🌸 Must recommend!!⭐⭐⭐⭐⭐",
        "Shweta Thakur":"We choreographed our sangeet function from Kalaepso Dance company, they are really good and provided best choreographies, also choreographies were acc. To our comfort level. Kanak kushwah is really nice choreographer from their team.",
        "Sheetal Lohia":"Kanak kushwah was absolutely amazing in terms of both professionalism and choreography. She listened to our exact needs about what sort of vibe and ability we wanted for the dances and she delivered in a prompt and timely fashion. Would highly recommend to anyone! She's the best 🤝💫😇👍",
        "Aman":"They are really good at their work, we enjoyed their choreography 😍",
        "Priyanka":"She is very fabulous nd amazing dancer....and one of the best choreographer...",
        "Akshita Vats":"She's an absolute dancer with precise moves. Love the way she choreographs with immense positivity around.",
        "Aastha Singh":"She is a fabulous dancer ❤❤ just love her dance choreography ",
        "Veenus Yadav":"She is tremendous in her job like how she choreographs every moves make my mind blow up Enjoyed every moment spent with her and her dance moves Recommended 100% Grab her before the wedding season!!!!!",
        "Sagar Yadav":"They made us dance very well, really loved their choreography!",
        "Shimpi Malhotra":"She is wonderful artist. Her choreography is amazing. She is very innovative. She is superb.",
        "Komal Kumari":"She is one of the best choreographer... amazing work",    };

        const names = [
            "Khanak Gupta",
            "Abhishek Singh",
            "Pratiksha Panwar",
            "Sam mum",
            "Tanishka Khandelwal",
            "Akshay Malhotra",
            "Shilpa Khandelwal",
            "Priya Chaudhary",
            "Palak",
            "Vikas Gupta",
            "Riya Malhotra",
            "Akansha asodia",
            "Diksha",
            "Maninder Singh",
            "Pushpa Singh",
            "Brijesh Kumar",
            "Pratik Solanki",
            "Shweta Thakur",
            "Sheetal Lohia",
            "Aman",
            "Priyanka",
            "Akshita Vats",
            "Aastha Singh",
            "Veenus Yadav",
            "Sagar Yadav",
            "Shimpi Malhotra",
            "Komal Kumari"
          ];

          let lastCallTime = 0;
const tick = () => {
    const currentTime = Date.now();
    
    if (currentTime - lastCallTime >= 5000) {
        let index = Math.round(Math.random()*(names.length));
        let testimonial = document.getElementById("revi")
        console.log(testimonial);
        let name = document.getElementById("reviName");
        testimonial.innerHTML = testimonials[names[index]];
        name.innerHTML = names[index];
        console.log();
        lastCallTime = currentTime;
    };
    window.requestAnimationFrame(tick);
    
}

window.requestAnimationFrame(tick);
