var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
   { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number",
      "required": "true"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "Swerve": "Swerve<br>",
        "Tank": "West Coast/Tank<br>",
        "Butterfly/Grasshopper": "Butterfly/Grasshopper<br>",
        "Mechanum": "Mechanum<br>",
        "Other": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "L1": "L1 (8.14:1)<br>",
        "L2": "L2 (6.75:1)<br>",
        "L3": "L3 (6.12:1)<br>",
        "L4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "Neo": "Neo<br>",
        "Falcon": "Falcon<br>",
        "Kraken": "Kraken<br>",
        "CIM": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Robot Batteries (Ex: 2604 has 8)",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel (Square box in our that has balls in it at start of the match)",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel (Human Player Station)",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Ball Capacity",
      "code": "aut",
      "type": "number",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Shooter Type",
      "code": "str",
      "type": "radio",
      "choices": {
        "Turret": "Turret<br>",
        "Fixed": "Fixed<br>",
        "Other": "Other"
      },
      "defaultValue": "Other"
    },
    { "name": "Other Shooter",
      "code": "osr",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
      { "name": "Auton Description",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
