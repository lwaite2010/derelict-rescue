// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Characters, Skills } from '../../api/characters/characters.js';
import { Tiles, DiscoveredTiles } from '../../api/tiles/tiles.js';

Meteor.startup(() => {

  if (Skills.find().count() === 0) {
    const data = [
      {
        name : "Language",
        type : "shared",
        description : "More likely to decode and understand alien languages"
      },
      {
        name : "Technology",
        type : "shared",
        description : "Able to use computer terminals scattered around the ship"
      },
      {
        name : "Weapons",
        type : "shared",
        description : "Able to use various weapon technology found on the ship"
      },
      {
        name : "First-Aid",
        type : "shared",
        description: "",
      },
      {
        name : "",
        type : "private",
        description : "",
      }
    ];

    data.forEach(skill => Skills.insert(skill));
  }

  if (Characters.find().count() === 0) {
    const data = [
      {
        name : "John Tiberious",
        role : "Security",
        shared_skill_one : Skills.findOne({name:"Weapons"}),
        shared_skill_two : Skills.findOne({name:"First-Aid"})
      },
      {
        name : "Luna Stellar",
        role : "Pilot",
        shared_skill_one : Skills.findOne({name:"Technology"}),
        shared_skill_two : Skills.findOne({name:"Weapons"})
      },
      {
        name : "Billy Bones",
        role : "Doctor",
        shared_skill_one : Skills.findOne({name:"Language"}),
        shared_skill_two : Skills.findOne({name:"First-Aid"})
      },
      {
        name : "Jeremy Creen",
        role : "Linguist",
        shared_skill_one : Skills.findOne({name:"Language"}),
        shared_skill_two : Skills.findOne({name:"Technology"})
      },
      {
        name : "Susanna Tryst",
        role : "First Officer",
        shared_skill_one : Skills.findOne({name:"Weapons"}),
        shared_skill_two : Skills.findOne({name:"Language"})
      },
      {
        name : "Trinity",
        role : "Engineer",
        shared_skill_one : Skills.findOne({name:"Technology"}),
        shared_skill_two : Skills.findOne({name:"First-Aid"})
      }
    ];

    data.forEach(character => Characters.insert(character));
  }

  if (Tiles.find().count() === 0) {
    const data = [
      {
        tile_id : 0,
        name : "Airlock",
        size : {x:1, y:1},
        background_image : false,
        doors: 3
      },
      {
        tile_id : 1,
        name : "Hallway",
        size : {x:1, y:2},
        background_image : false,
        doors : 4
      },
      {
        tile_id : 2,
        name : "Engine Room",
        size : {x:2, y:1},
        background_image : false,
        doors : 4
      },
      {
        tile_id : 3,
        name : "Cargo Hold",
        size : {x:3, y:3},
        background_image : false,
        doors : 6
      },
      {
        tile_id : 4,
        name : "Observation Deck",
        size : {x:1, y:1},
        background_image : false,
        doors : 1
      }
    ]

    data.forEach(tile => Tiles.insert(tile))
  }

  if(DiscoveredTiles.find().count() === 0) {
    // The only tile that should be in the database at the beginning is the starting airlock tile.
    DiscoveredTiles.insert({
      tile : Tiles.findOne({name:"Airlock"}),
      position : {x:0, y:0},
      doors: [
        {x:1, d:false},
        {x:-1, d:false},
        {y:1, d:false}
      ]
    })

    // these will be for testing
    // const data = [
    //   {
    //     tile : Tiles.findOne({name:"Observation Deck"}),
    //     position : {x:-1, y:0},
    //     doors: [
    //       {x:1, d:true}
    //     ]
    //   },
      // {
      //   tile : Tiles.findOne({name:"Cargo Hold"}),
      //   position : {x:1, y:0}
      // },
      // {
      //   tile : Tiles.findOne({name:"Hallway"}),
      //   position : {x:0, y:1}
      // }
    // ]
    // data.forEach(tile => DiscoveredTiles.insert(tile));
  }
});
