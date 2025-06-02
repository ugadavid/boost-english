const families = {
    'everyday': 
    {
        'label': 'Everyday Communication', 
        'categories': 
        {
            'numbers': 
            {
                'label': 'Numbers', 
                'bricks': 
                [
                    {'title': 'Numbers', 'page': 'numbers.html'}, 
                    {'title': 'Telling the time', 'page': 'telling-time.html'}
                ]
            }, 
            'wayfinding': 
            {
                'label': 'Way Finding', 
                'bricks': 
                [
                    {'title': 'Way finding 1', 'page': 'wayfinding1.html'}, 
                    {'title': 'Way finding 2', 'page': 'wayfinding2.html'}
                ]
            }, 
            'conversations': 
            {
                'label': 'Conversations', 
                'bricks': 
                [
                    {'title': 'Greetings', 'page': 'greetings.html'}, 
                    {'title': 'Question words', 'page': 'question-words.html'}, 
                    {'title': 'Basic questions', 'page': 'basic-questions.html'}, 
                    {'title': 'Socialising / Small talk', 'page': 'small-talk.html'}
                ]
            }, 'personal': 
            {
                'label': 'Personal Information', 
                'bricks': 
                [
                    {'title': 'Hobbies', 'page': 'hobbies.html'}, 
                    {'title': 'Personality', 'page': 'personality.html'}, 
                    {'title': 'Filling in a form', 'page': 'filling-form.html'}
                ]
            }
        }
    }, 'professional': 
    {
        'label': 'Professional Communication', 
        'categories': 
        {
            'jobhunting': 
            {
                'label': 'Job hunting', 
                'bricks': 
                [
                    {'title': 'CV', 'page': 'cv.html'}, 
                    {'title': 'Cover letters', 'page': 'cover-letters.html'}
                ]
            }, 
            'presentations': 
            {
                'label': 'Presentations', 
                'bricks': 
                [
                    {'title': 'Structuring a presentation', 'page': 'structuring.html'}, 
                    {'title': 'Interaction', 'page': 'interaction.html'}, 
                    {'title': 'Body language', 'page': 'body-language.html'}
                ]
            }, 
            'emailing': 
            {
                'label': 'Emailing', 
                'bricks': 
                [
                    {'title': 'Emailing', 'page': 'emailing.html'}
                ]
            }, 
            'essays': 
            {
                'label': 'Essays', 
                'bricks': 
                [
                    {'title': 'Paragraphing', 'page': 'paragraphing.html'}
                ]
            }
        }
    }, 
    'specialist': 
    {
        'label': 'Specialist Communication', 
        'categories': 
        {
            'scientific': 
            {
                'label': 'Scientific vocabulary', 
                'bricks': 
                [
                    {'title': 'Everyday Science: In the lab', 'page': 'in-the-lab.html'}, 
                    {'title': 'Biomedical Engineering', 'page': 'biomedical.html'}, 
                    {'title': 'Physics & Materials Science', 'page': 'physics.html'}, 
                    {'title': 'Basic I.T. vocabulary', 'page': 'basic-it.html'}, 
                    {'title': 'Green Engineering', 'page': 'green-eng.html'}, 
                    {'title': 'Electronics & Embedded Systems', 'page': 'electronics.html'}
                ]
            }, 
            'description': 
            {
                'label': 'Object / Device description', 
                'bricks': 
                [
                    {'title': 'Shapes', 'page': 'shapes.html'}, 
                    {'title': 'Object description', 'page': 'object-desc.html'}, 
                    {'title': 'Object specifications', 'page': 'object-specs.html'}, 
                    {'title': 'Position and movement', 'page': 'position.html'}, 
                    {'title': 'Object function', 'page': 'object-function.html'}
                ]
            }
            , 'data': 
            {
                'label': 'Data and descriptions', 
                'bricks': 
                [
                    {'title': 'Comparison', 'page': 'comparison.html'}, 
                    {'title': 'Graphs, data and trends', 'page': 'graphs.html'}
                ]
            }
        }
    }, 
    'learning': 
    {
        'label': 'Learning focus', 
        'categories': 
        {
            'listening': 
            {
                'label': 'Listening', 
                'bricks': 
                [
                    {'title': 'Listening comprehension', 'page': 'listening.html'}
                ]
            }, 
            'voice': 
            {
                'label': 'Voice work', 
                'bricks': 
                [
                    {'title': 'Word stress 1', 'page': 'stress1.html'}, 
                    {'title': 'Word stress 2', 'page': 'stress2.html'}, 
                    {'title': 'Sentence stress', 'page': 'sentence-stress.html'}, 
                    {'title': 'Pronouncing -ed', 'page': 'pron-ed.html'}, 
                    {'title': 'Pronouncing TH', 'page': 'pron-th.html'}, 
                    {'title': 'Pronouncing H', 'page': 'pron-h.html'}, 
                    {'title': 'Tiny differences', 'page': 'tiny-diff.html'}
                ]
            }, 
            'grammar': 
            {
                'label': 'Grammar', 
                'bricks': 
                [
                    {'title': 'Conditional Sentences', 'page': 'conditionals.html'}, 
                    {'title': 'Future tenses 1', 'page': 'future1.html'}, 
                    {'title': 'Future tenses 2', 'page': 'future2.html'}
                ]
            }, 
            'strategies': 
            {
                'label': 'Learning strategies', 
                'bricks': 
                [
                    {'title': 'Thinking in English', 'page': 'thinking.html'}, 
                    {'title': 'Memorizing vocabulary', 'page': 'memorizing.html'}, 
                    {'title': 'Shower conversations', 'page': 'shower.html'}
                ]
            }, 
            'culture': 
            {
                'label': 'Culture', 
                'bricks': 
                [
                    {'title': 'Sport', 'page': 'sport.html'}, 
                    {'title': 'Cinema', 'page': 'cinema.html'}, 
                    {'title': 'Series', 'page': 'series.html'}
                ]
            }
        }
    }
};



// Menu contextuel à l'intérieur d'une brique (exemple pour 'Numbers')
const contextMenus = {
  numbers: [
    { label: "Introduction", link: "numbers/intro.html" },
    { label: "I start", link: "numbers/start.html" },
    
  ],
  tellingtime: [
    { label: "Introduction", link: "numbers/intro.html" },
    { label: "I start", link: "numbers/start.html" },
    
  ],
  greetings: [
    { label: "Introduction", link: "numbers/intro.html" },
    { label: "I start", link: "numbers/start.html" },
    
  ]
}