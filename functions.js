module.exports = {
    name: 'Absolutely fucking not',
    url: '/absolutely/:company/:from',
    fields: [
      { name: 'Company', field: 'company' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/absolutely/:company/:from', function (req, res) {
        const message = `Absolutely fucking Not, ${req.params.company}, No Fucking Way!`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  module.exports = {
  name: 'Who the fuck are you anyway',
  url: '/anyway/:company/:from',
  fields: [
    { name: 'Company', field: 'company' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/anyway/:company/:from', function (req, res) {
      const message = `Who the fuck are you anyway, ${req.params.company}, why are you stirring up so much trouble, and, who pays you?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Asshole',
  url: '/asshole/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/asshole/:from', function (req, res) {
      const message = 'Fuck you, asshole.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Awesome',
  url: '/awesome/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/awesome/:from', function (req, res) {
      const message = 'This is Fucking Awesome.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Back the fuck off',
  url: '/back/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/back/:name/:from', function (req, res) {
      const message = `${req.params.name}, back the fuck off.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Bag',
  url: '/bag/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bag/:from', function (req, res) {
      const message = 'Eat a bag of fucking dicks.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Ballmer',
  url: '/ballmer/:name/:company/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'Company', field: 'company' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ballmer/:name/:company/:from', function (req, res) {
      const message = `Fucking ${req.params.name} is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill ${req.params.company}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Bday',
  url: '/bday/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bday/:name/:from', function (req, res) {
      const message = `Happy Fucking Birthday, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Because',
  url: '/because/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/because/:from', function (req, res) {
      const message = "Why? Because fuck you, that's why."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Blackadder',
  url: '/blackadder/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/blackadder/:name/:from', function (req, res) {
      const message = `${req.params.name}, your head is as empty as a eunuch’s underpants. Fuck off!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Bravo Mike',
  url: '/bm/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bm/:name/:from', function (req, res) {
      const message = `Bravo mike, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Bucket',
  url: '/bucket/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bucket/:from', function (req, res) {
      const message = 'Please choke on a bucket of cocks.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Bus',
  url: '/bus/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bus/:name/:from', function (req, res) {
      const message = `Christ on a bendy-bus, ${req.params.name}, don't be such a fucking faff-arse.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Bye',
  url: '/bye/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bye/:from', function (req, res) {
      const message = 'Fuckity bye!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Can I Use',
  url: '/caniuse/:tool/:from',
  fields: [
    { name: 'Tool', field: 'tool' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/caniuse/:tool/:from', function (req, res) {
      const message = `Can you use ${req.params.tool}? Fuck no!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Chainsaw',
  url: '/chainsaw/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/chainsaw/:name/:from', function (req, res) {
      const message = `Fuck me gently with a chainsaw, ${req.params.name}. Do I look like Mother Teresa?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Cocksplat',
  url: '/cocksplat/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cocksplat/:name/:from', function (req, res) {
      const message = `Fuck off ${req.params.name}, you worthless cocksplat`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Cool Story',
  url: '/cool/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cool/:from', function (req, res) {
      const message = 'Cool story, bro.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Cup',
  url: '/cup/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cup/:from', function (req, res) {
      const message = 'How about a nice cup of shut the fuck up?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Dalton',
  url: '/dalton/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dalton/:name/:from', function (req, res) {
      const message = `${req.params.name}: A fucking problem solving super-hero.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Dense',
  url: '/dense/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dense/:from', function (req, res) {
      const message = 'You disingenuous dense motherfucker!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: "{name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore.",
  url: '/deraadt/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/deraadt/:name/:from', function (req, res) {
      const message = `${req.params.name} you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people will see that you don't anymore.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Diabetes',
  url: '/diabetes/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/diabetes/:from', function (req, res) {
      const message = "I'd love to stop and chat to you but I'd rather have type 2 diabetes."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Donut',
  url: '/donut/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/donut/:name/:from', function (req, res) {
      const message = `${req.params.name}, go and take a flying fuck at a rolling donut.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Do Something',
  url: '/dosomething/:do/:something/:from',
  fields: [
    { name: 'Do', field: 'do' },
    { name: 'Something', field: 'something' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dosomething/:do/:something/:from', function (req, res) {
      const message = `${req.params.do} the fucking ${req.params.something}!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Dumbledore',
  url: '/dumbledore/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dumbledore/:from', function (req, res) {
      const message = 'Happiness can be found, even in the darkest of times, if one only remembers to fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Equity',
  url: '/equity/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/equity/:name/:from', function (req, res) {
      const message = `Equity only? Long hours? Zero Pay? Well ${req.params.name}, just sign me right the fuck up.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Even',
  url: '/even/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/even/:from', function (req, res) {
      const message = "I can't fuckin' even."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Everyone',
  url: '/everyone/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/everyone/:from', function (req, res) {
      const message = 'Everyone can go and fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Everything',
  url: '/everything/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/everything/:from', function (req, res) {
      const message = 'Fuck everything.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Family',
  url: '/family/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/family/:from', function (req, res) {
      const message = 'Fuck you, your whole family, your pets, and your feces.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fascinating',
  url: '/fascinating/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fascinating/:from', function (req, res) {
      const message = 'Fascinating story, in what chapter do you shut the fuck up?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Disappoint Fewer People',
  url: '/fewer/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fewer/:name/:from', function (req, res) {
      const message = `Go fuck yourself ${req.params.name}, you'll disappoint fewer people.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Field of Fucks',
  url: '/field/:name/:from/:reference',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' },
    { name: 'Reference', field: 'reference' }
  ],

  register (app, output) {
    return app.get('/field/:name/:from/:reference', function (req, res) {
      const message = `And ${req.params.name} said unto ${req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and ${req.params.from} gave witness unto the field, and saw that it was barren.`
      const subtitle = `- ${req.params.reference}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Flying',
  url: '/flying/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/flying/:from', function (req, res) {
      const message = "I don't give a flying fuck."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck That, Fuck You',
  url: '/ftfy/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ftfy/:from', function (req, res) {
      const message = 'Fuck That, Fuck You'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck That Shit',
  url: '/fts/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fts/:name/:from', function (req, res) {
      const message = `Fuck that shit, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'FYYFF',
  url: '/fyyff/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fyyff/:from', function (req, res) {
      const message = 'Fuck you, you fucking fuck.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Golf Foxtrot Yankee',
  url: '/gfy/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/gfy/:name/:from', function (req, res) {
      const message = `Golf foxtrot yankee, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Give',
  url: '/give/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/give/:from', function (req, res) {
      const message = 'I give zero fucks.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Greed',
  url: '/greed/:noun/:from',
  fields: [
    { name: 'Noun', field: 'noun' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/greed/:noun/:from', function (req, res) {
      const message = `The point is, ladies and gentleman, that ${req.params.noun.toLowerCase()} -- for lack of a better word -- is good. ${req.params.noun} is right. ${req.params.noun} works. ${req.params.noun} clarifies, cuts through, and captures the essence of the evolutionary spirit. ${req.params.noun}, in all of its forms -- ${req.params.noun} for life, for money, for love, knowledge -- has marked the upward surge of mankind.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Holygrail',
  url: '/holygrail/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/holygrail/:from', function (req, res) {
      const message = 'I don\'t want to talk to you, no more, you empty-headed animal, food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries. Now go away or I shall taunt you a second time.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck you and the horse you rode in on',
  url: '/horse/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/horse/:from', function (req, res) {
      const message = 'Fuck you and the horse you rode in on.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Idea',
  url: '/idea/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/idea/:from', function (req, res) {
      const message = 'That sounds like a fucking great idea!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Immensity',
  url: '/immensity/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/immensity/:from', function (req, res) {
      const message = 'You can not imagine the immensity of the FUCK I do not give.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fucking',
  url: '/ing/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ing/:name/:from', function (req, res) {
      const message = `Fucking fuck off, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Jingle Bells',
  url: '/jinglebells/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/jinglebells/:from', function (req, res) {
      const message = 'Fuck you, fuck me, fuck your family. Fuck your father, fuck your mother, fuck you and me.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Keep',
  url: '/keep/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/keep/:name/:from', function (req, res) {
      const message = `${req.params.name}: Fuck off. And when you get there, fuck off from there too. Then fuck off some more. Keep fucking off until you get back here. Then fuck off again.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Keep Calm',
  url: '/keepcalm/:reaction/:from',
  fields: [
    { name: 'Reaction', field: 'reaction' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/keepcalm/:reaction/:from', function (req, res) {
      const message = `Keep the fuck calm and ${req.params.reaction}!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'King',
  url: '/king/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/king/:name/:from', function (req, res) {
      const message = `Oh fuck off, just really fuck off you total dickface. Christ, ${req.params.name}, you are fucking thick.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}

module.exports = {
  name: 'Legend',
  url: '/legend/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/legend/:name/:from', function (req, res) {
      const message = `${req.params.name}, you're a fucking legend.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Life',
  url: '/life/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/life/:from', function (req, res) {
      const message = 'Fuck my life.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Linus',
  url: '/linus/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/linus/:name/:from', function (req, res) {
      const message = `${req.params.name}, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Check your fucking logs!',
  url: '/logs/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/logs/:from', function (req, res) {
      const message = 'Check your fucking logs!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Look',
  url: '/look/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/look/:name/:from', function (req, res) {
      const message = `${req.params.name}, do I look like I give a fuck?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Looking',
  url: '/looking/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/looking/:from', function (req, res) {
      const message = 'Looking for a fuck to give.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'LowPoly',
  url: '/lowpoly/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/lowpoly/:from', function (req, res) {
      const message = 'You low polygon motherfucker!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Madison',
  url: '/madison/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/madison/:name/:from', function (req, res) {
      const message = `What you've just said is one of the most insanely idiotic things I have ever heard, ${req.params.name}. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points ${req.params.name}, and may God have mercy on your soul.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Maybe',
  url: '/maybe/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/maybe/:from', function (req, res) {
      const message = 'Maybe. Maybe not. Maybe fuck yourself.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck Me',
  url: '/me/:from',
  fields: [{ name: 'From', field: 'from' }],

  register (app, output) {
    return app.get('/me/:from', function (req, res) {
      const message = 'Fuck me.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'mornin',
  url: '/mornin/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/mornin/:from', function (req, res) {
      const message = "Happy fuckin' mornin'!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'No',
  url: '/no/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/no/:from', function (req, res) {
      const message = 'No fucks given.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Nugget',
  url: '/nugget/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/nugget/:name/:from', function (req, res) {
      const message = `Well ${req.params.name}, aren't you a shining example of a rancid fuck-nugget.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
const URL = '/off-with/:behavior/:from'
module.exports = {
  name: 'Fuck Off With',
  url: URL,
  fields: [
    { name: 'Behavior', field: 'behavior' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get(URL, function (req, res) {
      const message = `Fuck off with ${req.params.behavior}`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck Off',
  url: '/off/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/off/:name/:from', function (req, res) {
      const message = `Fuck off, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Outside',
  url: '/outside/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/outside/:name/:from', function (req, res) {
      const message = `${req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'This Thing In Particular',
  url: '/particular/:thing/:from',
  fields: [
    { name: 'Thing', field: 'thing' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/particular/:thing/:from', function (req, res) {
      const message = `Fuck this ${req.params.thing} in particular.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Pink',
  url: '/pink/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/pink/:from', function (req, res) {
      const message = 'Well, fuck me pink.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Problem',
  url: '/problem/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/problem/:name/:from', function (req, res) {
      const message = `What the fuck is your problem ${req.params.name}?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Programmer',
  url: '/programmer/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/programmer/:from', function (req, res) {
      const message = "Fuck you, I'm a programmer, bitch!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Pulp',
  url: '/pulp/:language/:from',
  fields: [
    { name: 'Language', field: 'language' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/pulp/:language/:from', function (req, res) {
      const message = `${req.params.language}, motherfucker, do you speak it?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Question',
  url: '/question/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/question/:from', function (req, res) {
      const message = 'To fuck off, or to fuck off (that is not a question)'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: "Rat's Arse",
  url: '/ratsarse/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ratsarse/:from', function (req, res) {
      const message = "I don't give a rat's arse."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Retard',
  url: '/retard/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/retard/:from', function (req, res) {
      const message = 'You Fucktard!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: "That's fucking ridiculous",
  url: '/ridiculous/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ridiculous/:from', function (req, res) {
      const message = "That's fucking ridiculous"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}

module.exports = {
  name: 'Rockstar',
  url: '/rockstar/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/rockstar/:name/:from', function (req, res) {
      const message = `${req.params.name}, you're a fucking Rock Star!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'RTFM',
  url: '/rtfm/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/rtfm/:from', function (req, res) {
      const message = 'Read the fucking manual!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'sake',
  url: '/sake/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/sake/:from', function (req, res) {
      const message = "For Fuck's sake!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Shakespeare',
  url: '/shakespeare/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shakespeare/:name/:from', function (req, res) {
      const message = `${req.params.name}, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck This Shit',
  url: '/shit/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shit/:from', function (req, res) {
      const message = 'Fuck this shit!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Shut Up',
  url: '/shutup/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shutup/:name/:from', function (req, res) {
      const message = `${req.params.name}, shut the fuck up.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Single',
  url: '/single/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/single/:from', function (req, res) {
      const message = 'Not a single fuck was given.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Thanks',
  url: '/thanks/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/thanks/:from', function (req, res) {
      const message = 'Fuck you very much.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck That',
  url: '/that/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/that/:from', function (req, res) {
      const message = 'Fuck that.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'You Think',
  url: '/think/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/think/:name/:from', function (req, res) {
      const message = `${req.params.name}, you think I give a fuck?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Thinking',
  url: '/thinking/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/thinking/:name/:from', function (req, res) {
      const message = `${req.params.name}, what the fuck were you actually thinking?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck This',
  url: '/this/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/this/:from', function (req, res) {
      const message = 'Fuck this.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'This Guy',
  url: '/thumbs/:name/:from',
  fields: [
    { name: 'From', field: 'from' },
    { name: 'Name', field: 'name' }
  ],

  register (app, output) {
    return app.get('/thumbs/:name/:from', function (req, res) {
      const message = `Who has two thumbs and doesn't give a fuck? ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Too',
  url: '/too/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/too/:from', function (req, res) {
      const message = 'Thanks, fuck you too.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Tucker',
  url: '/tucker/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/tucker/:from', function (req, res) {
      const message = 'Come the fuck in or fuck the fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'understand',
  url: '/understand/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/understand/:name/:from', function (req, res) {
      const message = `Listen here ${req.params.name}!  What part of 'Fuck Off' don't you understand?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Version',
  url: '/version',
  fields: [],

  register (app, output, version) {
    return app.get('/version', function (req, res) {
      const message = `Version ${version}`
      const subtitle = 'FOAAS'
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Waste',
  url: '/waste/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { from: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/waste/:name/:from', function (req, res) {
      const message = `I don't waste my fucking time with your bullshit ${req.params.name}!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'What',
  url: '/what/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/what/:from', function (req, res) {
      const message = 'What the fuck‽'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Xmas',
  url: '/xmas/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/xmas/:name/:from', function (req, res) {
      const message = `Merry Fucking Christmas, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Yeah',
  url: '/yeah/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/yeah/:from', function (req, res) {
      const message = 'Fuck YEAH!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Yoda',
  url: '/yoda/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/yoda/:name/:from', function (req, res) {
      const message = `Fuck off, you must, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Fuck You',
  url: '/you/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/you/:name/:from', function (req, res) {
      const message = `Fuck you, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Zayn',
  url: '/zayn/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/zayn/:from', function (req, res) {
      const message = 'Ask me if I give a motherfuck ?!!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
module.exports = {
  name: 'Zero',
  url: '/zero/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/zero/:from', function (req, res) {
      const message = "Zero, that's the number of fucks I give."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
