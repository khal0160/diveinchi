let app = {
    //-------------------------------
    //TOP LEVEL INFO
    pages: [],
    show: new Event('show'),
    simulations: [
        {
            albumId: "one",
            albumName: "Testing",
            albumTrackCount: 11, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_FrontCover.jpg",
            albumBackCover: "",
        },
        {
            albumId: "two",
            albumName: "Good Deeds And Synth",
            albumTrackCount: 6, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
        },
        {
            albumId: "three",
            albumName: "Instant Gratification",
            albumTrackCount: 27, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_BackCover.jpg",
        },
        {
            albumId: "four",
            albumName: "Micro dosing Fear",
            albumTrackCount: 9, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_BackCover.jpg",
        },
        {
            albumId: "five",
            albumName: "Alternate Immersion",
            albumTrackCount: 6, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_BackCover.jpg",
        },
        {
            albumId: "six",
            albumName: "Logical Eternity",
            albumTrackCount: 3, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_BackCover.jpg",
        },
        {
            albumId: "seven",
            albumName: "HitClips",
            albumTrackCount: 7, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_BackCover.jpg",
        },
        {
            albumId: "eight",
            albumName: "Lasouf",
            albumTrackCount: 0, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s8_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s8_BackCover.jpg",
        },
        {
            albumId: "nine",
            albumName: "Lorem Ipsum",
            albumTrackCount: 8, 
            albumDescription: "Blah Blah Blah",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_FrontCover.jpg",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_BackCover.jpg",
        },
        {
            albumId: "ten",
            albumFrontCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_FrontCover.png",
            albumBackCover: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_BackCover.png",
            albumName: "Plastic 604",
            albumTrackCount: 10, 
            albumDescription: "Blah Blah Blah",
        },
    ],
    trackList:[
        {
            trackName: "Achievement Unlocked: New Level Of Abstraction",
            albumId: "one",
            trackPosition: 1,
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_1.mp3",
            trackLength: 1.29,
        },
        {
            trackName: "Dont Fight It And You Wont Get Hurt",
            albumId: "one",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_2.mp3",
            trackLength: 1.02,
        },
        {
            trackName: "Just A Few More",
            albumId: "one",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_3.mp3",
            trackLength: 0.55,
        },
        {
            trackName: "Dont Act Like You Dont See Me",
            albumId: "one",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_4.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Oh So You Bboy Huh, Ok Lets Go",
            albumId: "one",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_5.mp3",
            trackLength: 1.52,
        },
        {
            trackName: "There You Are",
            albumId: "one",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_6.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Pretty People Malevolent Thoughts",
            albumId: "one",
            trackPosition: 7, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_7.mp3",
            trackLength: 1.20,
        },
        {
            trackName: "Balance",
            albumId: "one",
            trackPosition: 8, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_8.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Electric",
            albumId: "one",
            trackPosition: 9, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_9.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_9.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Locked In Memory And In Heart",
            albumId: "one",
            trackPosition: 10, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_10.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_10.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Road Ends Ahead",
            albumId: "one",
            trackPosition: 11, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s1_11.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s1_11.mp3",
            trackLength: 0.54,
        },
        {
            trackName: "Intro",
            albumId: "two",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_1.mp3",
        },
        {
            trackName: "1",
            albumId: "two",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_2.mp3",
        },
        {
            trackName: "2",
            albumId: "two",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_3.mp3",
        },
        {
            trackName: "3",
            albumId: "two",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_4.mp3",
        },
        {
            trackName: "4",
            albumId: "two",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_5.mp3",
        },
        {
            trackName: "5",
            albumId: "two",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s2_BackCover.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s2_6.mp3",
        },
        {
            trackName: "Achievement Unlocked New Level Of Production",
            albumId: "three",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_1.mp3",
        },
        {
            trackName: "I",
            albumId: "three",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_2.mp3",
        },
        {
            trackName: "Oh My",
            albumId: "three",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_3.mp3",
        },
        {
            trackName: "Montreal Scene",
            albumId: "three",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_5.mp3",
        },
        {
            trackName: "Blue Dream",
            albumId: "three",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_4.mp3",
        },
        {
            trackName: "Prince Of Darkness",
            albumId: "three",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_5.mp3",
        },
        {
            trackName: "Jocker Tantrum",
            albumId: "three",
            trackPosition: 7, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_6.mp3",
        },
        {
            trackName: "I Never Got Why Youd Do That",
            albumId: "three",
            trackPosition: 8, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_7.mp3",
        },
        {
            trackName: "Rabbit Hole",
            albumId: "three",
            trackPosition: 9, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_8.mp3",
        },
        {
            trackName: "Conquering Vibe",
            albumId: "three",
            trackPosition: 10, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_10.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_10.mp3",
        },
        {
            trackName: "Raised By The Internet",
            albumId: "three",
            trackPosition: 11, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_11.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_11.mp3",
        },
        {
            trackName: "Past Present Future",
            albumId: "three",
            trackPosition: 12, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_12.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_12.mp3",
        },
        {
            trackName: "Cathartic",
            albumId: "three",
            trackPosition: 13, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_13.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_13.mp3",
        },
        {
            trackName: "Catacomb Vision",
            albumId: "three",
            trackPosition: 14, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_14.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_14.mp3",
        },
        {
            trackName: "Wounded Hearts With Damaged Souls",
            albumId: "three",
            trackPosition: 15, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_15.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_15.mp3",
        },
        {
            trackName: "Rhythm In The Beat",
            albumId: "three",
            trackPosition: 16, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_16.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_16.mp3",
        },
        {
            trackName: "Time Travel Race Car",
            albumId: "three",
            trackPosition: 17, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_17.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_17.mp3",
        },
        {
            trackName: "Truth To Passion",
            albumId: "three",
            trackPosition: 18, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_18.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_18.mp3",
        },
        {
            trackName: "Fight Or Flight Which Do You Choose",
            albumId: "three",
            trackPosition: 19, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_19.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_19.mp3",
        },
        {
            trackName: "Dummy Trap",
            albumId: "three",
            trackPosition: 20, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_20.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_20.mp3",
        },
        {
            trackName: "Please Try Again Later",
            albumId: "three",
            trackPosition: 21, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_21.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_21.mp3",
        },
        {
            trackName: "Dethroned",
            albumId: "three",
            trackPosition: 21, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_21.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_21.mp3",
        },
        {
            trackName: "Where Is Earl",
            albumId: "three",
            trackPosition: 23, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_23.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_23.mp3",
        },
        {
            trackName: "Good Morning",
            albumId: "three",
            trackPosition: 24, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_24.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_24.mp3",
        },
        {
            trackName: "Soul Room",
            albumId: "three",
            trackPosition: 25, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_25.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_25.mp3",
        },
        {
            trackName: "Demetreus Mathew Thomson",
            albumId: "three",
            trackPosition: 26, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s3_26.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s3_26.mp3",
        },
        {
            trackName: "Why Are You Terrified",
            albumId: "four",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_1.mp3",
        },
        {
            trackName: "I Cant Feel Enough",
            albumId: "four",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_2.mp3",
        },
        {
            trackName: "Lord Forgive Me For I Have Sinned",
            albumId: "four",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_3.mp3",
        },
        {
            trackName: "Lost In The Desert, Microdosing Fear",
            albumId: "four",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_4.mp3",
        },
        {
            trackName: "Dancing Moral Trails",
            albumId: "four",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_5.mp3",
        },
        {
            trackName: "Lost In The Amazon, Micro dosing Fear",
            albumId: "four",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_6.mp3",
        },
        {
            trackName: "Clearing Clouds",
            albumId: "four",
            trackPosition: 7, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_7.mp3",
        },
        {
            trackName: "Merry Go Round",
            albumId: "four",
            trackPosition: 8, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_8.mp3",
        },
        {
            trackName: "Young Dive In Chi",
            albumId: "four",
            trackPosition: 9, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s4_9.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s4_9.mp3",
        },
        {
            trackName: "Shopping In The Early 2000s",
            albumId: "five",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_1.mp3",
        },
        {
            trackName: "Walking To My Tesla To Swim With Whales",
            albumId: "five",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_2.mp3",
        },
        {
            trackName: "Seen It Before",
            albumId: "five",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_3.mp3",
        },
        {
            trackName: "97 To Billings Bridge",
            albumId: "five",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_4.mp3",
        },
        {
            trackName: "You Pass Butter",
            albumId: "five",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_5.mp3",
        },
        {
            trackName: "Burn Out",
            albumId: "five",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s5_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s5_6.mp3",
        },
        {
            trackName: "Imminent Onus",
            albumId: "six",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s6_1.mp3",
        },
        {
            trackName: "Ancient Philosophy",
            albumId: "six",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s6_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s6_2.mp3",
        },
        {
            trackName: "DreamScape",
            albumId: "seven",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_1.mp3",
        },
        {
            trackName: "Felicia",
            albumId: "seven",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_2.mp3",
        },
        {
            trackName: "Nirvana",
            albumId: "seven",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_3.mp3",
        },
        {
            trackName: "NeverKnown",
            albumId: "seven",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_4.mp3",
        },
        {
            trackName: "Unknown",
            albumId: "seven",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_5.mp3",
        },
        {
            trackName: "Laughter",
            albumId: "seven",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_6.mp3",
        },
        {
            trackName: "Glitch",
            albumId: "seven",
            trackPosition: 7, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s7_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s7_7.mp3",
        },
        {
            trackName: "What I Gotta Do To Play",
            albumId: "nine",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_1.mp3",
        },
        {
            trackName: "Bicycle For The Mind",
            albumId: "nine",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_2.mp3",
        },
        {
            trackName: "SoundCloud Gaara",
            albumId: "nine",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_3.mp3",
        },
        {
            trackName: "Defeat Your Own Mind",
            albumId: "nine",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_4.mp3",
        },
        {
            trackName: "Everydays Journey",
            albumId: "nine",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_5.mp3",
        },
        {
            trackName: "I Still Love You",
            albumId: "nine",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_6.mp3",
        },
        {
            trackName: "Selflish",
            albumId: "nine",
            trackPosition: 7, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_7.mp3",
        },
        {
            trackName: "Jacuzzi On A Balcony",
            albumId: "nine",
            trackPosition: 8, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s9_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s9_8.mp3",
        },
        {
            trackName: "Front Street Boys",
            albumId: "ten",
            trackPosition: 1, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_1.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_1.wav",
        },
        {
            trackName: "All Rise",
            albumId: "ten",
            trackPosition: 2, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_2.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_2.wav",
        },
        {
            trackName: "Step Up",
            albumId: "ten",
            trackPosition: 3, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_3.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_3.wav",
        },
        {
            trackName: "No You Never Thought",
            albumId: "ten",
            trackPosition: 4, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_4.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_4.wav",
        },
        {
            trackName: "Sunday Night Train Freestyle",
            albumId: "ten",
            trackPosition: 5, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_5.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_5.wav",
        },
        {
            trackName: "Lets Drive Away",
            albumId: "ten",
            trackPosition: 6, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_6.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_6.wav",
        },
        {
            trackName: "Ostracized From Normality",
            albumId: "ten",
            trackPosition: 7, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_7.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_7.wav",
        },
        {
            trackName: "Counterfeit Baby",
            albumId: "ten",
            trackPosition: 8, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_8.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_8.wav",
        },
        {
            trackName: "Save Your Apologies",
            albumId: "ten",
            trackPosition: 9, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_9.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_9.wav",
        },
        {
            trackName: "Youthful Apathy",
            albumId: "ten",
            trackPosition: 10, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_10.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_10.wav",
        },
        {
            trackName: "Hit The Ground Hard",
            albumId: "ten",
            trackPosition: 11, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_11.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_11.wav",
        },
        {
            trackName: "Encore That",
            albumId: "ten",
            trackPosition: 12, 
            trackDescription: "Blah Blah Blah",
            trackArt: "https://diveinchi-art.s3.us-east-2.amazonaws.com/s10_12.jpg",
            trackAudio: "https://diveinchi-tracks.s3.us-east-2.amazonaws.com/s10_12.wav",
        },

        

    ],
    audioPlayer: undefined, 
    currentTrack: "",
    //TOP LEVEL INFO
    //-------------------------------
    //FUNCTIONS
    init: ()=>{
        console.log("after init")
        app.loading();
        
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.simButton').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        app.addListeners();
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
          });
    },
    addListeners: ()=>{
        console.log("after addListeners")
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, []);
            document.getElementById("playButton").addEventListener("click", app.playPause);
    },
    nav: ev=>{
        console.log("after nav")
        ev.preventDefault();
        let btn = ev.target;
        let target = btn.getAttribute("data-target");
        console.log("Navigate to", target);
        document.querySelector(".page.active").classList.remove("active");
        document.getElementById(target).classList.add("active");
        app.buildSimulation(ev.target);
    },
    buildSimulation: tar =>{
        console.log('After buildSimulation');
        let target= tar.getAttribute('data-target');
        let find = app.simulations.find(element=>element.albumId === target);
        let temp = document.getElementById('albumRow');
        let content = temp.content;
        let clone = content.cloneNode(true); 
        document.getElementById(target).appendChild(clone);
        document.querySelector('.albumArt').setAttribute("src",find.albumFrontCover)
        //BUILD TRACKLIST
        for(i=1; i < find.albumTrackCount;i++){
            let temp = document.getElementById('trackRow');
            let content = temp.content;
            let clone = content.cloneNode(true);
            document.getElementById(target).appendChild(clone);
            let allRows = document.getElementById(target).getElementsByClassName("row");
            let lastRow = allRows[allRows.length - 1];
            let track = app.trackList.find(element=>element.albumId === target && element.trackPosition === i);
            if (track !== undefined) {
                artSrc = track.trackArt;
                trackSrc = track.trackAudio;
                lastRow.querySelector('.trackArt').src = artSrc;
                lastRow.querySelector('.trackAudioSource').src = trackSrc;
                lastRow.querySelector('.trackTitle').textContent=track.trackName;
                lastRow.querySelector('.playTrackButton').addEventListener('click', app.playPause);
                lastRow.querySelector('.playTrackButton').setAttribute('dataTrackName', track.trackName);
            }
        }
    },
    playPause: ev=> {
        console.log("after playPause")
        // DEFINE EVENT TRACK NAME
        let name = ev.target.getAttribute("dataTrackName")
        let oldTrackName = app.currentTrack.name
        // IF NAME EXISTS
        if (name != null && name != undefined){
            // IF CURRENTTRACK IS NOT EMPTY
            if (app.currentTrack.name != name ) {
                console.log("currentTrack is different than target")
                // UPDATE CURRENT TRACK
                app.updateCurrentTrack(name);
                // CHECK CURRENT TRACK STATE
                app.checkCurrentTrackState(ev, oldTrackName);
            } 
            // IF CURRENTTRACK IS EMPTY
            else {
                console.log("currentTrack is the same as target")
                // CHECK CURRENT TRACK STATE
                app.checkCurrentTrackState(ev, oldTrackName);          
            }
        }
        else{
            console.log("No track name found")
        }
    },
    // progress bar keeps playing on the first clicked track
    trackTime: ev=> {
        //Start Time Tracking
        console.log("trackTime" + ev.target)
        currentPercent=app.audioPlayer.currentTime / app.audioPlayer.duration * 100;
        //HOW DO I GET THE TARGET TO LAND ON THE SPECIFIC TRACK BEING PLAYED
        //INSTEAD OF FINDING THE FIRST .trackProgress 
        document.querySelector(".trackProgress").style.width=currentPercent+ "%";
        currentMinute= Math.floor(app.audioPlayer.currentTime/60);
        currentSeconds= Math.floor(app.audioPlayer.currentTime-currentMinute*60);
        if(currentMinute<10){currentMinute = "0"+ currentMinute};
        if(currentSeconds<10){currentSeconds = "0"+ currentSeconds};
        document.querySelector(".trackCurrentTime").textContent= currentMinute +":"+ currentSeconds;
        document.getElementById("footCurrentTime").textContent= currentMinute +":"+ currentSeconds;
        //End Time Tracking
        currentEndMinute= Math.floor(app.audioPlayer.duration/60)-currentMinute;
        currentEndSeconds= 60-currentSeconds;
        if(currentEndMinute<10){currentEndMinute = "0"+ currentEndMinute};
        if(currentEndSeconds<10){currentEndSeconds = "0"+ currentEndSeconds};
        if(app.currentTrack.state==="playing"){
            document.querySelector(".trackEndTime").textContent= currentEndMinute +":"+ currentEndSeconds;
            //document.querySelector("currentTrackEndTime").textContent= currentEndMinute +":"+ currentEndSeconds;
            //document.getElementById("footCurrentTime").textContent=a
            document.getElementById("footEndTime").textContent= currentEndMinute +":"+ currentEndSeconds;
        }
    },
    updateCurrentTrack(trackName){
        console.log("after checkCurrentTrack");
        // Find the track from the trackList array
        let findTrack = app.trackList.find(element=>element.trackName === trackName);
        // Create a new object
        app.currentTrack = new Object();
        // Define object's variables
        app.currentTrack.name=findTrack.trackName;
        app.currentTrack.albumId=findTrack.albumId;
        app.currentTrack.albumPosition=findTrack.trackPosition;
        app.currentTrack.art=findTrack.trackArt;
        app.currentTrack.audio=findTrack.trackAudio;
        app.currentTrack.length=findTrack.trackLength;
        app.currentTrack.state="paused";
        app.currentTrack.currentTime="";
        app.currentTrack.endTime="";
        
    },
    checkCurrentTrackState(ev, oldTrackName){
        console.log("after checkCurrentTrackState");
        //IF CurrentTrack is PAUSED 
        if(app.currentTrack.state === "paused") {
            // IF audioPlayer is UNDEFINED
            console.log("playing");
            if (app.audioPlayer === undefined) {
                // audioPlayer gets defined
                app.audioPlayer = new Audio(app.currentTrack.audio);
            }
            if (app.currentTrack.name !== oldTrackName) {
                console.log("pausing current track because track has changed")
                app.audioPlayer.pause();
                console.log("changing audio source because track has changed")
                app.audioPlayer = new Audio(app.currentTrack.audio);
                console.log("changing all play button to play_arrow")
                let playButtons = document.querySelectorAll('.playTrackButton');
                for (i = 0; i < playButtons.length; i++) {
                    playButtons[i].textContent = "play_arrow";
                }
            }
            console.log("playing " + app.currentTrack.name)
            // IF DEFINED
            app.audioPlayer.play();
            app.audioPlayer.addEventListener('timeupdate', app.trackTime)
            // CHANGE STATE TO PLAYING
            app.currentTrack.state = "playing";
            ev.target.textContent="pause";
            document.getElementById("playButton").textContent="pause";
            document.getElementById("footTrackName").textContent= app.currentTrack.name;
            document.getElementById("currentTrackArt").src=app.currentTrack.art;
            
        } 
        //IF CurrentTrack is PLAYING
        else if (app.currentTrack.state === "playing") {
            console.log("paused");
            app.audioPlayer.pause();
            app.audioPlayer.addEventListener('timeupdate', app.trackTime)
            // CHANGE STATE TO PAUSED
            app.currentTrack.state = "paused";
            ev.target.textContent="play_arrow";
            document.getElementById("playButton").textContent="play_arrow";
            document.getElementById("footTrackName").textContent= app.currentTrack.name;
        }
    },
    loading: ()=>{
        document.getElementById('loading').classList.remove("hidden")
        setTimeout(function() {
            document.getElementById('loading').classList.add("hidden")
          }, 1000);

    },
    //FUNCTIONS
}
const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init);
